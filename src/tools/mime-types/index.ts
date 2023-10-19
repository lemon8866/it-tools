import { World } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Mime types',
  path: '/mime-types',
  description: '将mime类型转换为扩展，反之亦然。',
  keywords: ['mime', 'types', 'extension', 'content', 'type'],
  component: () => import('./mime-types.vue'),
  icon: World,
});
