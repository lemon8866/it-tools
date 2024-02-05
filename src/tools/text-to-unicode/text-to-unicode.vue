<script setup lang="ts">
import { convertTextToUnicode, convertUnicodeToText } from './text-to-unicode.service';
import { useCopy } from '@/composable/copy';

const inputText = ref('');
const unicodeFromText = computed(() => inputText.value.trim() === '' ? '' : convertTextToUnicode(inputText.value));
const { copy: copyUnicode } = useCopy({ source: unicodeFromText, text: '已复制到剪切板' });

const inputUnicode = ref('');
const textFromUnicode = computed(() => inputUnicode.value.trim() === '' ? '' : convertUnicodeToText(inputUnicode.value));
const { copy: copyText } = useCopy({ source: textFromUnicode, text: '已复制到剪切板' });
</script>

<template>
  <c-card title="Text to Unicode">
    <c-input-text v-model:value="inputText" multiline placeholder="e.g. '你好.世界'" label="输入要转换为unicode的文本" autosize autofocus raw-text test-id="text-to-unicode-input" />
    <c-input-text v-model:value="unicodeFromText" label="文本的Unicode" multiline raw-text readonly mt-2 placeholder="文本的unicode表示形式将在此处" test-id="text-to-unicode-output" />
    <div mt-2 flex justify-center>
      <c-button :disabled="!unicodeFromText" @click="copyUnicode()">
        复制unicode到剪切板
      </c-button>
    </div>
  </c-card>

  <c-card title="Unicode to Text">
    <c-input-text v-model:value="inputUnicode" multiline placeholder="输入 Unicode" label="输入unicode以转换为文本" autosize raw-text test-id="unicode-to-text-input" />
    <c-input-text v-model:value="textFromUnicode" label="Unicode的文本" multiline raw-text readonly mt-2 placeholder="unicode的文本表示形式将在此处" test-id="unicode-to-text-output" />
    <div mt-2 flex justify-center>
      <c-button :disabled="!textFromUnicode" @click="copyText()">
        复制文本到剪切板
      </c-button>
    </div>
  </c-card>
</template>
