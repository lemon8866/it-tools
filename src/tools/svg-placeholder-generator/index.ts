import { ImageOutlined } from '@vicons/material';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'SVG占位符生成器',
  path: '/svg-placeholder-generator',
  description: '生成svg图像以用作应用程序中的占位符。',
  keywords: ['svg', 'placeholder', 'generator', 'image', 'size', 'mockup'],
  component: () => import('./svg-placeholder-generator.vue'),
  icon: ImageOutlined,
});
