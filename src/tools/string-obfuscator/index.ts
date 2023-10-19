import { EyeOff } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'String 混淆工具(掩码)',
  path: '/string-obfuscator',
  description: '混淆字符串（如机密、IBAN或令牌），使其可共享和可识别，而不会泄露其内容。',
  keywords: ['string', 'obfuscator', 'secret', 'token', 'hide', 'obscure', 'mask', 'masking'],
  component: () => import('./string-obfuscator.vue'),
  icon: EyeOff,
  createdAt: new Date('2023-08-16'),
});
