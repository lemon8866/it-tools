import { RouterOutlined } from '@vicons/material';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'IPv4子网计算器',
  path: '/ipv4-subnet-calculator',
  description: '分析您的IPv4 CIDR块，并获得有关子网络的所有信息。',
  keywords: ['ipv4', 'subnet', 'calculator', 'mask', 'network', 'cidr', 'netmask', 'bitmask', 'broadcast', 'address'],
  component: () => import('./ipv4-subnet-calculator.vue'),
  icon: RouterOutlined,
});
