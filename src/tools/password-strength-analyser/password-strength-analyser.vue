<script setup lang="ts">
import { getPasswordCrackTimeEstimation } from './password-strength-analyser.service';

const password = ref('');
const crackTimeEstimation = computed(() => getPasswordCrackTimeEstimation({ password: password.value }));
const { t } = useI18n();
const details = computed(() => [
  {
    label: t('tools.password-strength-analyser.passlength'),
    value: crackTimeEstimation.value.passwordLength,
  },
  {
    label: t('tools.password-strength-analyser.entropy'),
    value: Math.round(crackTimeEstimation.value.entropy * 100) / 100,
  },
  {
    label: t('tools.password-strength-analyser.character-set-size'),
    value: crackTimeEstimation.value.charsetLength,
  },
  {
    label: t('common.noun.score'),
    value: `${Math.round(crackTimeEstimation.value.score * 100)} / 100`,
  },
]);
</script>

<template>
  <div flex flex-col gap-3>
    <c-input-text
      v-model:value="password"
      type="password"
      placeholder="输入一个密码..."
      clearable
      autofocus
      raw-text
      test-id="password-input"
    />

    <c-card text-center>
      <div op-60>
        {{ $t('tools.password-strength-analyser.force-crack') }}
      </div>
      <div text-2xl data-test-id="crack-duration">
        {{ crackTimeEstimation.crackDurationFormatted }}
      </div>
    </c-card>
    <c-card>
      <div v-for="({ label, value }) of details" :key="label" flex gap-3>
        <div flex-1 text-right op-60>
          {{ label }}
        </div>
        <div flex-1 text-left>
          {{ value }}
        </div>
      </div>
    </c-card>
    <div op-70>
      <span font-bold>{{ $t('common.noun.note') }}: </span>
      {{ $t('tools.password-strength-analyser.note-text') }}
    </div>
  </div>
</template>
