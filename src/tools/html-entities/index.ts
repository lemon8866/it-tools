import { Code } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: '转义html实体',
  path: '/html-entities',
  description: '转义或取消转义html实体（将<、>、&、“和\'替换为其html版本）',
  keywords: ['html', 'entities', 'escape', 'unescape', 'special', 'characters', 'tags'],
  component: () => import('./html-entities.vue'),
  icon: Code,
});
