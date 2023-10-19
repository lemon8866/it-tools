import { AbcRound } from '@vicons/material';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Slugify string(格式化)',
  path: '/slugify-string',
  description: '使字符串url、文件名和id安全。',
  keywords: ['slugify', 'string', 'escape', 'emoji', 'special', 'character', 'space', 'trim'],
  component: () => import('./slugify-string.vue'),
  icon: AbcRound,
});
