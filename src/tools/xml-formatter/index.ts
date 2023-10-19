import { Code } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'XML格式化程序',
  path: '/xml-formatter',
  description: '将XML字符串修饰为便于阅读的格式。',
  keywords: ['xml', 'prettify', 'format'],
  component: () => import('./xml-formatter.vue'),
  icon: Code,
  createdAt: new Date('2023-06-17'),
});
