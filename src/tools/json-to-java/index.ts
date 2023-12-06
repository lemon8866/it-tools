import { Braces } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Json to java',
  path: '/json-to-java',
  description: '',
  keywords: ['json', 'to', 'java'],
  component: () => import('./json-to-java.vue'),
  icon: Braces,
  createdAt: new Date('2023-12-06'),
});
