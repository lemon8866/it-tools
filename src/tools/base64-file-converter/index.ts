import { FileDigit } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Base64 file converter',
  path: '/base64-file-converter',
  description: 'Convert string, files or images into a it\'s base64 representation.',
  keywords: ['base64', '转换', '上传', '图片', '文件', '变换', 'web', '数据', '格式'],
  component: () => import('./base64-file-converter.vue'),
  icon: FileDigit,
});
