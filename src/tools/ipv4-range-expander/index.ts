import { UnfoldMoreOutlined } from '@vicons/material';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'IPv4范围扩展器',
  path: '/ipv4-range-expander',
  description:
    '给定起始和结束IPv4地址，此工具将使用CIDR表示法计算有效的IPv4网络。',
  keywords: ['ipv4', 'range', 'expander', 'subnet', 'creator', 'cidr'],
  component: () => import('./ipv4-range-expander.vue'),
  icon: UnfoldMoreOutlined,
  createdAt: new Date('2023-04-19'),
});
