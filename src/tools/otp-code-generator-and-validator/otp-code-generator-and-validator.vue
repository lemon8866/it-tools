<script setup lang="ts">
import { useTimestamp } from '@vueuse/core';
import { useThemeVars } from 'naive-ui';
import { useQRCode } from '../qr-code-generator/useQRCode';
import { base32toHex, buildKeyUri, generateSecret, generateTOTP, getCounterFromTime } from './otp.service';
import TokenDisplay from './token-display.vue';
import { useStyleStore } from '@/stores/style.store';
import InputCopyable from '@/components/InputCopyable.vue';
import { computedRefreshable } from '@/composable/computedRefreshable';

const now = useTimestamp();
const interval = computed(() => (now.value / 1000) % 30);
const theme = useThemeVars();
const styleStore = useStyleStore();

const secret = ref(generateSecret());

function refreshSecret() {
  secret.value = generateSecret();
}

const [tokens] = computedRefreshable(
  () => ({
    previous: generateTOTP({ key: secret.value, now: now.value - 30000 }),
    current: generateTOTP({ key: secret.value, now: now.value }),
    next: generateTOTP({ key: secret.value, now: now.value + 30000 }),
  }),
  { throttle: 500 },
);

const keyUri = computed(() => buildKeyUri({ secret: secret.value }));

const { qrcode } = useQRCode({
  text: keyUri,
  color: {
    background: computed(() => (styleStore.isDarkTheme ? '#ffffff' : '#00000000')),
    foreground: '#000000',
  },
  options: { width: 210 },
});

const secretValidationRules = [
  {
    message: 'Secret应为base32字符串',
    validator: (value: string) => value.toUpperCase().match(/^[A-Z234567]+$/),
  },
  {
    message: '请设置一个 secret',
    validator: (value: string) => value !== '',
  },
];
</script>

<template>
  <div style="max-width: 350px">
    <c-input-text
      v-model:value="secret"
      label="Secret"
      placeholder="粘贴您的TOTP secret..."
      mb-5
      :validation-rules="secretValidationRules"
    >
      <template #suffix>
        <c-tooltip tooltip="生成一个新的 random secret">
          <c-button circle variant="text" size="small" @click="refreshSecret">
            <icon-mdi-refresh />
          </c-button>
        </c-tooltip>
      </template>
    </c-input-text>

    <div>
      <TokenDisplay :tokens="tokens" />

      <n-progress :percentage="(100 * interval) / 30" :color="theme.primaryColor" :show-indicator="false" />
      <div style="text-align: center">
        下一个 {{ String(Math.floor(30 - interval)).padStart(2, '0') }}s
      </div>
    </div>
    <div mt-4 flex flex-col items-center justify-center gap-3>
      <n-image :src="qrcode" />
      <c-button :href="keyUri" target="_blank">
        打开 Key URI 在新选项卡
      </c-button>
    </div>
  </div>
  <div style="max-width: 350px">
    <InputCopyable
      label="Secret 以十六进制表示"
      :value="base32toHex(secret)"
      readonly
      placeholder="Secret in hex will be displayed here"
      mb-5
    />

    <InputCopyable
      label="Epoch"
      :value="Math.floor(now / 1000).toString()"
      readonly
      mb-5
      placeholder="此处将显示以秒为单位的Epoch"
    />

    <p>迭代</p>

    <InputCopyable
      :value="String(getCounterFromTime({ now, timeStep: 30 }))"
      readonly
      label="Count:"
      label-position="left"
      label-width="90px"
      label-align="right"
      placeholder="Iteration count will be displayed here"
    />

    <InputCopyable
      :value="getCounterFromTime({ now, timeStep: 30 }).toString(16).padStart(16, '0')"
      readonly
      placeholder="Iteration count in hex will be displayed here"
      label-position="left"
      label-width="90px"
      label-align="right"
      label="Padded hex:"
    />
  </div>
</template>

<style lang="less" scoped>
.n-progress {
  margin-top: 10px;
  ::v-deep(.n-progress-graph-line-fill) {
    transition-duration: 0.05s !important;
  }
}

.token {
  text-align: center;
  &.token-current {
    font-size: 20px;
  }
}
</style>
