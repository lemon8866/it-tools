import { FileText } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: '文本统计',
  path: '/text-statistics',
  description: '获取有关文本、字符数量、单词数量、大小的信息。。。',
  keywords: ['text', 'statistics', 'length', 'characters', 'count', 'size', 'bytes'],
  component: () => import('./text-statistics.vue'),
  icon: FileText,
  redirectFrom: ['/text-stats'],
});
