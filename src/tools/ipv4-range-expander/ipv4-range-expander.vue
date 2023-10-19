<script setup lang="ts">
import { Exchange } from '@vicons/tabler';
import { isValidIpv4 } from '../ipv4-address-converter/ipv4-address-converter.service';
import type { Ipv4RangeExpanderResult } from './ipv4-range-expander.types';
import { calculateCidr } from './ipv4-range-expander.service';
import ResultRow from './result-row.vue';
import { useValidation } from '@/composable/validation';

const rawStartAddress = useStorage('ipv4-range-expander:startAddress', '192.168.1.1');
const rawEndAddress = useStorage('ipv4-range-expander:endAddress', '192.168.6.255');

const result = computed(() => calculateCidr({ startIp: rawStartAddress.value, endIp: rawEndAddress.value }));

const calculatedValues: {
  label: string
  getOldValue: (result: Ipv4RangeExpanderResult | undefined) => string | undefined
  getNewValue: (result: Ipv4RangeExpanderResult | undefined) => string | undefined
}[] = [
  {
    label: '开始地址',
    getOldValue: () => rawStartAddress.value,
    getNewValue: result => result?.newStart,
  },
  {
    label: '结束地址',
    getOldValue: () => rawEndAddress.value,
    getNewValue: result => result?.newEnd,
  },
  {
    label: '范围内的地址',
    getOldValue: result => result?.oldSize?.toLocaleString(),
    getNewValue: result => result?.newSize?.toLocaleString(),
  },
  {
    label: 'CIDR',
    getOldValue: () => '',
    getNewValue: result => result?.newCidr,
  },
];

const startIpValidation = useValidation({
  source: rawStartAddress,
  rules: [{ message: '无效的ipv4地址', validator: ip => isValidIpv4({ ip }) }],
});
const endIpValidation = useValidation({
  source: rawEndAddress,
  rules: [{ message: '无效的ipv4地址', validator: ip => isValidIpv4({ ip }) }],
});

const showResult = computed(() => endIpValidation.isValid && startIpValidation.isValid && result.value !== undefined);

function onSwitchStartEndClicked() {
  const tmpStart = rawStartAddress.value;
  rawStartAddress.value = rawEndAddress.value;
  rawEndAddress.value = tmpStart;
}
</script>

<template>
  <div>
    <div mb-4 flex gap-4>
      <c-input-text
        v-model:value="rawStartAddress"
        label="开始地址"
        placeholder="开始地址"
        :validation="startIpValidation"
        clearable
      />

      <c-input-text
        v-model:value="rawEndAddress"
        label="结束地址"
        placeholder="结束地址"
        :validation="endIpValidation"
        clearable
      />
    </div>

    <n-table v-if="showResult" data-test-id="result">
      <thead>
        <tr>
          <th scope="col">
&nbsp;
          </th>
          <th scope="col">
            旧值
          </th>
          <th scope="col">
            新值
          </th>
        </tr>
      </thead>
      <tbody>
        <ResultRow
          v-for="{ label, getOldValue, getNewValue } in calculatedValues"
          :key="label"
          :label="label"
          :old-value="getOldValue(result)"
          :new-value="getNewValue(result)"
        />
      </tbody>
    </n-table>
    <n-alert
      v-else-if="startIpValidation.isValid && endIpValidation.isValid"
      title="起始IPv4地址和结束IPv4地址的组合无效"
      type="error"
    >
      <div my-3 op-70>
        结束IPv4地址低于开始IPv4地址。这是无效的，无法计算任何结果。在大多数情况下，解决此问题的方法是更改起始地址和结束地址。
      </div>

      <c-button @click="onSwitchStartEndClicked">
        <n-icon mr-2 :component="Exchange" depth="3" size="22" />
        交换机起始和结束IPv4地址
      </c-button>
    </n-alert>
  </div>
</template>
