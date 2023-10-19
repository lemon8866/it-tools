<script setup lang="ts">
import { convertAsciiBinaryToText, convertTextToAsciiBinary } from './text-to-binary.models';
import { withDefaultOnError } from '@/utils/defaults';
import { useCopy } from '@/composable/copy';
import { isNotThrowing } from '@/utils/boolean';

const inputText = ref('');
const binaryFromText = computed(() => convertTextToAsciiBinary(inputText.value));
const { copy: copyBinary } = useCopy({ source: binaryFromText, text: '复制成功' });

const inputBinary = ref('');
const textFromBinary = computed(() => withDefaultOnError(() => convertAsciiBinaryToText(inputBinary.value), ''));
const inputBinaryValidationRules = [
  {
    validator: (value: string) => isNotThrowing(() => convertAsciiBinaryToText(value)),
    message: '二进制应为8位倍数的有效ASCII二进制字符串',
  },
];
const { copy: copyText } = useCopy({ source: textFromBinary, text: '复制成功' });
</script>

<template>
  <c-card title="文本到ASCII二进制">
    <c-input-text v-model:value="inputText" multiline placeholder="e.g. 'Hello world'" label="输入要转换为二进制的文本" autosize autofocus raw-text test-id="text-to-binary-input" />
    <c-input-text v-model:value="binaryFromText" label="来自文本的二进制" multiline raw-text readonly mt-2 placeholder="文本的二进制表示将在此处" test-id="text-to-binary-output" />
    <div mt-2 flex justify-center>
      <c-button :disabled="!binaryFromText" @click="copyBinary()">
        将二进制文件复制到剪贴板
      </c-button>
    </div>
  </c-card>

  <c-card title="ASCII二进制到文本">
    <c-input-text v-model:value="inputBinary" multiline placeholder="e.g. '01001000 01100101 01101100 01101100 01101111'" label="输入二进制文件以转换为文本" autosize raw-text :validation-rules="inputBinaryValidationRules" test-id="binary-to-text-input" />
    <c-input-text v-model:value="textFromBinary" label="二进制文件中的文本" multiline raw-text readonly mt-2 placeholder="二进制文件的文本表示将在此处" test-id="binary-to-text-output" />
    <div mt-2 flex justify-center>
      <c-button :disabled="!textFromBinary" @click="copyText()">
        将文本复制到剪贴板
      </c-button>
    </div>
  </c-card>
</template>
