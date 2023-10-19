<script setup lang="ts">
import InputCopyable from '../../components/InputCopyable.vue';
import { isNotThrowing } from '@/utils/boolean';
import { withDefaultOnError } from '@/utils/defaults';

const urlToParse = ref('https://me:pwd@it-tools.tech:3000/url-parser?key1=value&key2=value2#the-hash');

const urlParsed = computed(() => withDefaultOnError(() => new URL(urlToParse.value), undefined));
const urlValidationRules = [
  {
    validator: (value: string) => isNotThrowing(() => new URL(value)),
    message: '无效的URL',
  },
];

const properties: { title: string; key: keyof URL }[] = [
  { title: '协议', key: 'protocol' },
  { title: '用户名', key: 'username' },
  { title: '密码', key: 'password' },
  { title: '主机名', key: 'hostname' },
  { title: '端口', key: 'port' },
  { title: '路径', key: 'pathname' },
  { title: '参数', key: 'search' },
];
</script>

<template>
  <c-card>
    <c-input-text
      v-model:value="urlToParse"
      label="要解析的url:"
      placeholder="要解析的url..."
      raw-text
      :validation-rules="urlValidationRules"
    />

    <n-divider />

    <InputCopyable
      v-for="{ title, key } in properties"
      :key="key"
      :label="title"
      :value="(urlParsed?.[key] as string) ?? ''"
      readonly
      label-position="left"
      label-width="110px"
      mb-2
      placeholder=" "
    />

    <div
      v-for="[k, v] in Object.entries(Object.fromEntries(urlParsed?.searchParams.entries() ?? []))"
      :key="k"
      mb-2
      w-full
      flex
    >
      <div style="flex: 1 0 110px">
        <icon-mdi-arrow-right-bottom />
      </div>

      <InputCopyable :value="k" readonly />
      <InputCopyable :value="v" readonly />
    </div>
  </c-card>
</template>

<style lang="less" scoped>
.n-input-group-label {
  text-align: right;
}
.n-input-group {
  margin: 2px 0;
}
</style>
