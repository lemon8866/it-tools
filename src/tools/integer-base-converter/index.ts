import { ArrowsLeftRight } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Integer base 转换',
  path: '/base-converter',
  description: '在不同的基数之间转换数字（十进制、十六进制、二进制、八进制、base64…）',
  keywords: ['integer', 'number', 'base', 'conversion', 'decimal', 'hexadecimal', 'binary', 'octal', 'base64'],
  component: () => import('./integer-base-converter.vue'),
  icon: ArrowsLeftRight,
});
