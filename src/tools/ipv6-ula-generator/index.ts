import { BuildingFactory } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'IPv6 ULA生成器',
  path: '/ipv6-ula-generator',
  description: '根据RFC4193在网络上生成您自己的本地、不可路由的IP地址。',
  keywords: ['ipv6', 'ula', 'generator', 'rfc4193', 'network', 'private'],
  component: () => import('./ipv6-ula-generator.vue'),
  icon: BuildingFactory,
  createdAt: new Date('2023-04-09'),
});
