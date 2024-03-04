import { Artboard } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'ASCII艺术文本生成器',
  path: '/ascii-text-drawer',
  description: '创建具有多种字体和样式的ASCII艺术文本。',
  keywords: ['ascii', 'asciiart', '文本', 'drawer'],
  component: () => import('./ascii-text-drawer.vue'),
  icon: Artboard,
  createdAt: new Date('2024-03-03'),
});
