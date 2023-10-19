import { Binary } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Ipv4 地址转换',
  path: '/ipv4-address-converter',
  description: '在ipv6中将ip地址转换为十进制、二进制、十六进制或事件',
  keywords: ['ipv4', 'address', 'converter', 'decimal', 'hexadecimal', 'binary', 'ipv6'],
  component: () => import('./ipv4-address-converter.vue'),
  icon: Binary,
  createdAt: new Date('2023-04-08'),
});
