<script setup lang="ts">
import cronstrue from 'cronstrue';
import { isValidCron } from 'cron-validator';
import { useStyleStore } from '@/stores/style.store';

function isCronValid(v: string) {
  return isValidCron(v, { allowBlankDay: true, alias: true, seconds: true });
}

const styleStore = useStyleStore();

const cron = ref('40 * * * *');
const cronstrueConfig = reactive({
  verbose: true,
  dayOfWeekStartIndexZero: true,
  use24HourTimeFormat: true,
  throwExceptionOnParseError: true,
});

const helpers = [
  {
    symbol: '*',
    meaning: '任意值',
    example: '* * * *',
    equivalent: '每分钟',
  },
  {
    symbol: '-',
    meaning: '值的范围',
    example: '1-10 * * *',
    equivalent: '第1分钟到第10分钟',
  },
  {
    symbol: ',',
    meaning: '值列表',
    example: '1,10 * * *',
    equivalent: '第 1 分钟和第 10 分钟',
  },
  {
    symbol: '/',
    meaning: '步长值',
    example: '*/10 * * *',
    equivalent: '每10分钟一班',
  },
  {
    symbol: '@yearly',
    meaning: '每年1月1日午夜一次',
    example: '@yearly',
    equivalent: '0 0 1 1 *',
  },
  {
    symbol: '@annually',
    meaning: 'Same as @yearly',
    example: '@annually',
    equivalent: '0 0 1 1 *',
  },
  {
    symbol: '@monthly',
    meaning: 'Once a month at midnight on the first day',
    example: '@monthly',
    equivalent: '0 0 1 * *',
  },
  {
    symbol: '@weekly',
    meaning: 'Once a week at midnight on Sunday morning',
    example: '@weekly',
    equivalent: '0 0 * * 0',
  },
  {
    symbol: '@daily',
    meaning: 'Once a day at midnight',
    example: '@daily',
    equivalent: '0 0 * * *',
  },
  {
    symbol: '@midnight',
    meaning: 'Same as @daily',
    example: '@midnight',
    equivalent: '0 0 * * *',
  },
  {
    symbol: '@hourly',
    meaning: 'Once an hour at the beginning of the hour',
    example: '@hourly',
    equivalent: '0 * * * *',
  },
  {
    symbol: '@reboot',
    meaning: 'Run at startup',
    example: '',
    equivalent: '',
  },
];

const cronString = computed(() => {
  if (isCronValid(cron.value)) {
    return cronstrue.toString(cron.value, cronstrueConfig);
  }
  return ' ';
});

const cronValidationRules = [
  {
    validator: (value: string) => isCronValid(value),
    message: '该 cron 无效',
  },
];
</script>

<template>
  <c-card>
    <div mx-auto max-w-sm>
      <c-input-text
        v-model:value="cron"
        size="large"
        placeholder="* * * * *"
        :validation-rules="cronValidationRules"
        mb-3
      />
    </div>

    <div class="cron-string">
      {{ cronString }}
    </div>

    <n-divider />

    <div flex justify-center>
      <n-form :show-feedback="false" label-width="170" label-placement="left">
        <n-form-item label="冗长">
          <n-switch v-model:value="cronstrueConfig.verbose" />
        </n-form-item>
        <n-form-item label="使用 24 小时时间格式">
          <n-switch v-model:value="cronstrueConfig.use24HourTimeFormat" />
        </n-form-item>
        <n-form-item label="天数从 0 开始">
          <n-switch v-model:value="cronstrueConfig.dayOfWeekStartIndexZero" />
        </n-form-item>
      </n-form>
    </div>
  </c-card>
  <c-card>
    <pre>
┌──────────── [可选] 秒 (0 - 59)
| ┌────────── 分钟 (0 - 59)
| | ┌──────── 小时 (0 - 23)
| | | ┌────── 一个月中的天数 (1 - 31)
| | | | ┌──── 月 (1 - 12) 或一月、二月、三月、四月...
| | | | | ┌── 星期几（0 - 6，星期日=0）或星期日、星期一 ...
| | | | | |
* * * * * * command</pre>

    <div v-if="styleStore.isSmallScreen">
      <c-card v-for="{ symbol, meaning, example, equivalent } in helpers" :key="symbol" mb-3 important:border-none>
        <div>
          Symbol: <strong>{{ symbol }}</strong>
        </div>
        <div>
          Meaning: <strong>{{ meaning }}</strong>
        </div>
        <div>
          Example:
          <strong><code>{{ example }}</code></strong>
        </div>
        <div>
          Equivalent: <strong>{{ equivalent }}</strong>
        </div>
      </c-card>
    </div>

    <c-table v-else :data="helpers" />
  </c-card>
</template>

<style lang="less" scoped>
::v-deep(input) {
  font-size: 30px;
  font-family: monospace;
  padding: 5px;
  text-align: center;
}

.cron-string {
  text-align: center;
  font-size: 22px;
  opacity: 0.8;
  margin: 5px 0 15px;
}

pre {
  overflow: auto;
  padding: 10px 0;
}
</style>
