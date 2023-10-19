import { Braces } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'JSON 格式化',
  path: '/json-prettify',
  description: '将JSON字符串修饰为便于阅读的格式。',
  keywords: ['json', 'viewer', 'prettify', 'format'],
  component: () => import('./json-viewer.vue'),
  icon: Braces,
  redirectFrom: ['/json-viewer'],
});
