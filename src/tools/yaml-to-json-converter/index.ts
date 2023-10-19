import { AlignJustified } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'YAML到JSON转换器',
  path: '/yaml-to-json-converter',
  description: '使用这个实时在线转换器，只需将YAML转换为JSON。',
  keywords: ['yaml', 'to', 'json'],
  component: () => import('./yaml-to-json.vue'),
  icon: AlignJustified,
  createdAt: new Date('2023-04-10'),
});
