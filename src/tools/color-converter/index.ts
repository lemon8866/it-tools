import { Palette } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: '颜色转换器',
  path: '/color-converter',
  description: '在不同格式（十六进制、rgb、hsl和css名称）之间转换颜色',
  keywords: ['color', 'converter'],
  component: () => import('./color-converter.vue'),
  icon: Palette,
  redirectFrom: ['/color-picker-converter'],
});
