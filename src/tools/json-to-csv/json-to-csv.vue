<script setup lang="ts">
import JSON5 from 'json5';
import { convertArrayToCsv } from './json-to-csv.service';
import type { UseValidationRule } from '@/composable/validation';
import { withDefaultOnError } from '@/utils/defaults';

function transformer(value: string) {
  return withDefaultOnError(() => {
    if (value === '') {
      return '';
    }
    return convertArrayToCsv({ array: JSON5.parse(value) });
  }, '');
}

const rules: UseValidationRule<string>[] = [
  {
    validator: (v: string) => v === '' || JSON5.parse(v),
    message: '无效的json字符串',
  },
];
</script>

<template>
  <format-transformer
    input-label="json字符串"
    input-placeholder="将原始JSON粘贴到此处..."
    output-label="JSON的CSV版本"
    :input-validation-rules="rules"
    :transformer="transformer"
  />
</template>
