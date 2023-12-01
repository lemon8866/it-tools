<script setup lang="ts">
import { escape, unescape } from 'lodash';

import { useCopy } from '@/composable/copy';

const escapeInput = ref('<title>IT Tool</title>');
const escapeOutput = computed(() => escape(escapeInput.value));
const { copy: copyEscaped } = useCopy({ source: escapeOutput, text: '复制成功' });

const unescapeInput = ref('&lt;title&gt;IT Tool&lt;/title&gt;');
const unescapeOutput = computed(() => unescape(unescapeInput.value));
const { copy: copyUnescaped } = useCopy({ source: unescapeOutput, text: '复制成功' });
</script>

<template>
  <c-card title="转义html实体">
    <n-form-item label="字符串 :">
      <c-input-text
        v-model:value="escapeInput"
        multiline
        placeholder="要转义的字符串"
        rows="3"
        autosize
        raw-text
      />
    </n-form-item>

    <n-form-item label="字符串转义结果 :">
      <c-input-text
        multiline
        readonly
        placeholder="字符串转义结果"
        :value="escapeOutput"
        rows="3"
        autosize
      />
    </n-form-item>

    <div flex justify-center>
      <c-button @click="copyEscaped()">
        复制
      </c-button>
    </div>
  </c-card>
  <c-card title="Unescape html">
    <n-form-item label="需要反转义的字符:">
      <c-input-text
        v-model:value="unescapeInput"
        multiline
        placeholder="需要反转义的字符"
        rows="3"
        autosize
        raw-text
      />
    </n-form-item>

    <n-form-item label="转义结果 :">
      <c-input-text
        :value="unescapeOutput"
        multiline
        readonly
        placeholder="转义结果"
        rows="3"
        autosize
      />
    </n-form-item>

    <div flex justify-center>
      <c-button @click="copyUnescaped()">
        复制
      </c-button>
    </div>
  </c-card>
</template>
