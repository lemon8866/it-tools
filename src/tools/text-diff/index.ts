import { FileDiff } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: '文本差异比较',
  path: '/text-diff',
  description: '比较两篇文本，看看它们之间的区别.',
  keywords: ['text', 'diff', 'compare', 'string', 'text diff', 'code'],
  component: () => import('./text-diff.vue'),
  icon: FileDiff,
  createdAt: new Date('2023-08-16'),
});
