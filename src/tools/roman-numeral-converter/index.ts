import { LetterX } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Roman numeral(罗马数字) 转换',
  path: '/roman-numeral-converter',
  description: '将罗马数字转换为数字，将数字转换为罗马数字。',
  keywords: ['roman', 'arabic', 'converter', 'X', 'I', 'V', 'L', 'C', 'D', 'M'],
  component: () => import('./roman-numeral-converter.vue'),
  icon: LetterX,
});
