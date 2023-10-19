<script setup lang="ts">
import { stringify as stringifyToml } from 'iarna-toml-esm';
import { parse as parseYaml } from 'yaml';
import { withDefaultOnError } from '../../utils/defaults';
import type { UseValidationRule } from '@/composable/validation';

const convertYamlToToml = (value: string) => [stringifyToml(parseYaml(value))].flat().join('\n').trim();

const transformer = (value: string) => value.trim() === '' ? '' : withDefaultOnError(() => convertYamlToToml(value), '');

const rules: UseValidationRule<string>[] = [
  {
    validator: (v: string) => v === '' || parseYaml(v),
    message: '提供的JSON无效。',
  },
];
</script>

<template>
  <format-transformer
    input-label="您的YAML"
    input-placeholder="将您的YAML粘贴到此处..."
    output-label="TOML来自您的YAML"
    output-language="toml"
    :input-validation-rules="rules"
    :transformer="transformer"
  />
</template>
