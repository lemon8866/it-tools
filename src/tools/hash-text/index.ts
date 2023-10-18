import { EyeOff } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Hash 文本',
  path: '/hash-text',
  description:
    '使用所需的函数对文本字符串进行散列：MD5、SHA1、SHA256、SHA224、SHA512、SHA384、SHA3或RIPEMD160',
  keywords: [
    'hash',
    'digest',
    'crypto',
    'security',
    'text',
    'MD5',
    'SHA1',
    'SHA256',
    'SHA224',
    'SHA512',
    'SHA384',
    'SHA3',
    'RIPEMD160',
  ],
  component: () => import('./hash-text.vue'),
  icon: EyeOff,
  redirectFrom: ['/hash'],
});
