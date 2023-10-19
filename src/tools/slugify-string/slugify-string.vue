<script setup lang="ts">
import slugify from '@sindresorhus/slugify';
import { withDefaultOnError } from '@/utils/defaults';
import { useCopy } from '@/composable/copy';

const input = ref('');
const slug = computed(() => withDefaultOnError(() => slugify(input.value), ''));
const { copy } = useCopy({ source: slug, text: 'Slug copied to clipboard' });
</script>

<template>
  <div>
    <c-input-text v-model:value="input" multiline placeholder="将字符串放在此处（例如：我的文件路径）" label="你的字符串" autofocus raw-text mb-5 />

    <c-input-text :value="slug" multiline readonly placeholder="您的slug将在此处生成（例如：我的文件路径）" label="slug" mb-5 />

    <div flex justify-center>
      <c-button :disabled="slug.length === 0" @click="copy()">
        复制
      </c-button>
    </div>
  </div>
</template>
