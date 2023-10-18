import { Fingerprint } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'UUID v4 生成器',
  path: '/uuid-generator',
  description:
    '通用唯一标识符（UUID）是一种用于在计算机系统中标识信息的128位数字。可能的UUID数量为16的32次方，即2的128次方，约为3.4x10^38（这个数目非常大！）。',
  keywords: ['uuid', 'v4', 'random', 'id', 'alphanumeric', 'identity', 'token', 'string', 'identifier', 'unique'],
  component: () => import('./uuid-generator.vue'),
  icon: Fingerprint,
});
