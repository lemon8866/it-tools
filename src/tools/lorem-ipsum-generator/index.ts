import { AlignJustified } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Lorem ipsum 生成',
  path: '/lorem-ipsum-generator',
  description:
    'Lorem ipsum是一种占位符文本，通常用于演示文档或字体的视觉形式，而不依赖于有意义的内容',
  keywords: ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'placeholder', 'text', 'filler', 'random', 'generator'],
  component: () => import('./lorem-ipsum-generator.vue'),
  icon: AlignJustified,
});
