import { CompareArrowsRound } from '@vicons/material';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'JSON 比较',
  path: '/json-diff',
  description: '比较两个JSON对象并获得它们之间的差异。',
  keywords: ['json', 'diff', 'compare', 'difference', 'object', 'data'],
  component: () => import('./json-diff.vue'),
  icon: CompareArrowsRound,
  createdAt: new Date('2023-04-20'),
});
