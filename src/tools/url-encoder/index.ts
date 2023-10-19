import { Link } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: '对url格式的字符串进行编码/解码',
  path: '/url-encoder',
  description: '编码为url编码格式（也称为“百分比编码”）或从中解码。',
  keywords: ['url', 'encode', 'decode', 'percent', '%20', 'format'],
  component: () => import('./url-encoder.vue'),
  icon: Link,
});
