import { defineTool } from '../tool';
import BracketIcon from '~icons/mdi/code-brackets';

export const tool = defineTool({
  name: 'TOML至YAML',
  path: '/toml-to-yaml',
  description: '解析TOML并将其转换为YAML。',
  keywords: ['toml', 'yaml', 'convert', 'online', 'transform', 'parse'],
  component: () => import('./toml-to-yaml.vue'),
  icon: BracketIcon,
  createdAt: new Date('2023-06-23'),
});
