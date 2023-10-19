import { List } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'JSON to CSV',
  path: '/json-to-csv',
  description: '通过自动标头检测将JSON转换为CSV。',
  keywords: ['json', 'to', 'csv', 'convert'],
  component: () => import('./json-to-csv.vue'),
  icon: List,
  createdAt: new Date('2023-06-18'),
});
