<script setup lang="ts">
import JSON5 from 'json5';
import type { UseValidationRule } from '@/composable/validation';
import { withDefaultOnError } from '@/utils/defaults';

const defaultValue = '{\n\t"hello": [\n\t\t"world"\n\t]\n}';
const transformer = (value: string) => withDefaultOnError(() => JSON.stringify(JSON5.parse(value), null, 0), '');

const rules: UseValidationRule<string>[] = [
  {
    validator: (v: string) => v === '' || JSON5.parse(v),
    message: '无效的json格式.',
  },
];
</script>

<template>
  <format-transformer
    input-label="json字符串"
    :input-default="defaultValue"
    input-placeholder="Paste your raw JSON here..."
    output-label="压缩结果"
    output-language="json"
    :input-validation-rules="rules"
    :transformer="transformer"
  />
</template>
