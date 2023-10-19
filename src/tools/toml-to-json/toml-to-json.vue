<script setup lang="ts">
import { parse as parseToml } from 'iarna-toml-esm';
import { withDefaultOnError } from '../../utils/defaults';
import { isValidToml } from './toml.services';
import type { UseValidationRule } from '@/composable/validation';

const transformer = (value: string) => value === '' ? '' : withDefaultOnError(() => JSON.stringify(parseToml(value), null, 3), '');

const rules: UseValidationRule<string>[] = [
  {
    validator: isValidToml,
    message: '提供的TOML无效。',
  },
];
</script>

<template>
  <format-transformer
    input-label="你的TOML"
    input-placeholder="将您的TOML粘贴到此处..."
    output-label="来自TOML的JSON"
    output-language="json"
    :input-validation-rules="rules"
    :transformer="transformer"
  />
</template>
