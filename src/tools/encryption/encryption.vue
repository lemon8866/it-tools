<script setup lang="ts">
import { AES, RC4, Rabbit, TripleDES, enc } from 'crypto-js';

const algos = { AES, TripleDES, Rabbit, RC4 };
const { t } = useI18n();
const cypherInput = ref('Lorem ipsum dolor sit amet');
const cypherAlgo = ref<keyof typeof algos>('AES');
const cypherSecret = ref('my secret key');
const cypherOutput = computed(() => algos[cypherAlgo.value].encrypt(cypherInput.value, cypherSecret.value).toString());

const decryptInput = ref('U2FsdGVkX1/EC3+6P5dbbkZ3e1kQ5o2yzuU0NHTjmrKnLBEwreV489Kr0DIB+uBs');
const decryptAlgo = ref<keyof typeof algos>('AES');
const decryptSecret = ref('my secret key');
const decryptOutput = computed(() =>
  algos[decryptAlgo.value].decrypt(decryptInput.value, decryptSecret.value).toString(enc.Utf8),
);
</script>

<template>
  <c-card :title="t('common.noun.encrypt')">
    <div flex gap-3>
      <c-input-text
        v-model:value="cypherInput"
        :label="t('tools.encryption.youtext')"
        :placeholder="t('tools.encryption.strcypher')"
        rows="4"
        multiline raw-text monospace autosize flex-1
      />
      <div flex flex-1 flex-col gap-2>
        <c-input-text v-model:value="cypherSecret" :label="t('tools.encryption.secretkey')" clearable raw-text />

        <c-select
          v-model:value="cypherAlgo"
          :label="t('common.noun.encryptionalgorithm')"
          :options="Object.keys(algos).map((label) => ({ label, value: label }))"
        />
      </div>
    </div>
    <c-input-text
      :label="t('tools.encryption.textencrypted')"
      :value="cypherOutput"
      rows="3"
      placeholder="您的字符串哈希"
      multiline monospace readonly autosize mt-5
    />
  </c-card>
  <c-card :title="t('common.noun.decrypt')">
    <div flex gap-3>
      <c-input-text
        v-model:value="decryptInput"
        :label="t('tools.encryption.encryptedtext')"
        placeholder="要加密的字符串"
        rows="4"
        multiline raw-text monospace autosize flex-1
      />
      <div flex flex-1 flex-col gap-2>
        <c-input-text v-model:value="decryptSecret" :label="t('tools.encryption.secretkey')" clearable raw-text />

        <c-select
          v-model:value="decryptAlgo"
          :label="t('common.noun.encryptionalgorithm')"
          :options="Object.keys(algos).map((label) => ({ label, value: label }))"
        />
      </div>
    </div>
    <c-input-text
      :label="t('tools.encryption.decryptedtext')"
      :value="decryptOutput"
      placeholder="解密后的文本"
      rows="3"
      multiline monospace readonly autosize mt-5
    />
  </c-card>
</template>
