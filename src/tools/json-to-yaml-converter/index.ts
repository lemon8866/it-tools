import { Braces } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'JSON到YAML转换器',
  path: '/json-to-yaml-converter',
  description: '使用这个实时在线转换器，只需将JSON转换为YAML。',
  keywords: ['yaml', 'to', 'json'],
  component: () => import('./json-to-yaml.vue'),
  icon: Braces,
  createdAt: new Date('2023-04-10'),
});
