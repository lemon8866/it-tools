import { defineTool } from '../tool';

import BracketIcon from '~icons/mdi/code-brackets';

export const tool = defineTool({
  name: 'TOML到JSON',
  path: '/toml-to-json',
  description: '解析TOML并将其转换为JSON。',
  keywords: ['toml', 'json', 'convert', 'online', 'transform', 'parser'],
  component: () => import('./toml-to-json.vue'),
  icon: BracketIcon,
  createdAt: new Date('2023-06-23'),
});
