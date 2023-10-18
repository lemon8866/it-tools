<script setup lang="ts">
import { Upload } from '@vicons/tabler';
import { useBase64 } from '@vueuse/core';
import type { UploadFileInfo } from 'naive-ui';
import type { Ref } from 'vue';
import { useCopy } from '@/composable/copy';
import { useDownloadFileFromBase64 } from '@/composable/downloadBase64';
import { useValidation } from '@/composable/validation';
import { isValidBase64 } from '@/utils/base64';

const base64Input = ref('');
const { t } = useI18n();
const { download } = useDownloadFileFromBase64({ source: base64Input });
const base64InputValidation = useValidation({
  source: base64Input,
  rules: [
    {
      message: t('tools.base64-file-converter.invalid-message'),
      validator: value => isValidBase64(value.trim()),
    },
  ],
});

function downloadFile() {
  if (!base64InputValidation.isValid) {
    return;
  }

  try {
    download();
  }
  catch (_) {
    //
  }
}

const fileList = ref();
const fileInput = ref() as Ref<File>;
const { base64: fileBase64 } = useBase64(fileInput);
const { copy: copyFileBase64 } = useCopy({ source: fileBase64, text: t('common.clipboard.success') });

async function onUpload({ file: { file } }: { file: UploadFileInfo }) {
  if (file) {
    fileList.value = [];
    fileInput.value = file;
  }
}
</script>

<template>
  <c-card :title="t('tools.base64-file-converter.base642file')">
    <c-input-text
      v-model:value="base64Input"
      multiline
      :placeholder="t('tools.base64-file-converter.filebase64')"
      rows="5"
      :validation="base64InputValidation"
      mb-2
    />

    <div flex justify-center>
      <c-button :disabled="base64Input === '' || !base64InputValidation.isValid" @click="downloadFile()">
        {{ $t('common.operate.download') }}
      </c-button>
    </div>
  </c-card>

  <c-card :title="t('tools.base64-file-converter.file2base64')">
    <n-upload v-model:file-list="fileList" :show-file-list="true" :on-before-upload="onUpload" list-type="image">
      <n-upload-dragger>
        <div mb-2>
          <n-icon size="35" :depth="3" :component="Upload" />
        </div>
        <div op-60>
          {{ $t('tools.base64-file-converter.filedrag') }}
        </div>
      </n-upload-dragger>
    </n-upload>

    <c-input-text :value="fileBase64" multiline readonly :placeholder="t('tools.base64-file-converter.base64')" rows="5" mb-2 />

    <div flex justify-center>
      <c-button @click="copyFileBase64()">
        {{ $t('common.operate.copy') }}
      </c-button>
    </div>
  </c-card>
</template>

<style lang="less" scoped>
::v-deep(.n-upload-trigger) {
  width: 100%;
}
</style>
