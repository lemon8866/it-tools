<script setup lang="ts">
import { useCopy } from '@/composable/copy';
import { base64ToText, isValidBase64, textToBase64 } from '@/utils/base64';
import { withDefaultOnError } from '@/utils/defaults';

const encodeUrlSafe = useStorage('base64-string-converter--encode-url-safe', false);
const decodeUrlSafe = useStorage('base64-string-converter--decode-url-safe', false);
const { t } = useI18n();
const textInput = ref('');
const base64Output = computed(() => textToBase64(textInput.value, { makeUrlSafe: encodeUrlSafe.value }));
const { copy: copyTextBase64 } = useCopy({ source: base64Output, text: t('common.clipboard.success') });
const base64Input = ref('');
const textOutput = computed(() =>
  withDefaultOnError(() => base64ToText(base64Input.value.trim(), { makeUrlSafe: decodeUrlSafe.value }), ''),
);
const { copy: copyText } = useCopy({ source: textOutput, text: t('common.clipboard.success') });
const b64ValidationRules = [
  {
    message: t('tools.base64-string-converter.invalid-message'),
    validator: (value: string) => isValidBase64(value.trim(), { makeUrlSafe: decodeUrlSafe.value }),
  },
];
const b64ValidationWatch = [decodeUrlSafe];
</script>

<template>
  <c-card :title="t('tools.base64-string-converter.stringtobase64')">
    <n-form-item :label="t('tools.base64-string-converter.enurlsafe')" label-placement="left">
      <n-switch v-model:value="encodeUrlSafe" />
    </n-form-item>
    <c-input-text
      v-model:value="textInput"
      multiline
      :placeholder="t('common.noun.string')"
      rows="5"
      :label="t('tools.base64-string-converter.stringtobase64')"
      raw-text
      mb-5
    />

    <c-input-text
      :label="t('tools.base64-string-converter.base64')"
      :value="base64Output"
      multiline
      readonly
      :placeholder="t('tools.base64-string-converter.base64')"
      rows="5"
      mb-5
    />

    <div flex justify-center>
      <c-button @click="copyTextBase64()">
        {{ $t('common.operate.copy') }}
      </c-button>
    </div>
  </c-card>

  <c-card :title="t('tools.base64-string-converter.base64tostring')">
    <n-form-item :label="t('tools.base64-string-converter.deurlsafe')" label-placement="left">
      <n-switch v-model:value="decodeUrlSafe" />
    </n-form-item>
    <c-input-text
      v-model:value="base64Input"
      multiline
      :placeholder="t('tools.base64-string-converter.base64')"
      rows="5"
      :validation-rules="b64ValidationRules"
      :validation-watch="b64ValidationWatch"
      :label="t('tools.base64-string-converter.base64decode')"
      mb-5
    />

    <c-input-text
      v-model:value="textOutput"
      :label="t('tools.base64-string-converter.decode')"
      :placeholder="t('tools.base64-string-converter.decoded')"
      multiline
      rows="5"
      readonly
      mb-5
    />

    <div flex justify-center>
      <c-button @click="copyText()">
        {{ $t('common.operate.copy') }}
      </c-button>
    </div>
  </c-card>
</template>
