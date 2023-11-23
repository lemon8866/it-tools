<script setup lang="ts">
import { compareSync, hashSync } from 'bcryptjs';
import { useThemeVars } from 'naive-ui';
import { useCopy } from '@/composable/copy';

const themeVars = useThemeVars();
const { t } = useI18n();
const input = ref('');
const saltCount = ref(10);
const hashed = computed(() => hashSync(input.value, saltCount.value));
const { copy } = useCopy({ source: hashed, text: t('tools.bcrypt.clipboard-copy-success') });
const compareString = ref('');
const compareHash = ref('');
const compareMatch = computed(() => compareSync(compareString.value, compareHash.value));
</script>

<template>
  <c-card title="Hash">
    <c-input-text
      v-model:value="input"
      :placeholder="t('tools.bcrypt.hash-placeholder')"
      raw-text
      :label="t('tools.bcrypt.your-sting')"
      label-position="left"
      label-width="150px"
      mb-2
    />
    <n-form-item :label="t('tools.bcrypt.salt-count')" label-placement="left" label-width="150" style="text-align: left;">
      <n-input-number v-model:value="saltCount" :placeholder="t('tools.bcrypt.salt-count')" :max="10" :min="0" w-full />
    </n-form-item>

    <c-input-text :value="hashed" readonly text-center />

    <div mt-5 flex justify-center>
      <c-button @click="copy()">
        {{ $t('tools.bcrypt.copy-hash') }}
      </c-button>
    </div>
  </c-card>

  <c-card :title="t('tools.bcrypt.compare-string')">
    <n-form label-width="120">
      <n-form-item :label="t('tools.bcrypt.your-sting')" label-placement="left">
        <c-input-text v-model:value="compareString" placeholder="要比较的字符串..." raw-text />
      </n-form-item>
      <n-form-item :label="t('tools.bcrypt.your-hash')" label-placement="left">
        <c-input-text v-model:value="compareHash" placeholder="要比较的HASH..." raw-text />
      </n-form-item>
      <n-form-item :label="t('tools.bcrypt.do-match')" label-placement="left" :show-feedback="false">
        <div class="compare-result" :class="{ positive: compareMatch }">
          {{ compareMatch ? '是' : '否' }}
        </div>
      </n-form-item>
    </n-form>
  </c-card>
</template>

<style lang="less" scoped>
.compare-result {
  color: v-bind('themeVars.errorColor');

  &.positive {
    color: v-bind('themeVars.successColor');
  }
}
</style>
