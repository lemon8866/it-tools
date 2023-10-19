import { AlignJustified } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'YAML至TOML',
  path: '/yaml-to-toml',
  description: '解析并将YAML转换为TOML。',
  keywords: ['yaml', 'to', 'toml', 'convert', 'transform'],
  component: () => import('./yaml-to-toml.vue'),
  icon: AlignJustified,
  createdAt: new Date('2023-06-23'),
});
