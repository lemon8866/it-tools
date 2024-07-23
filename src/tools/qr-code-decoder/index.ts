/**
 * author https://github.com/sharevb
 * form https://github.com/CorentinTh/it-tools/pull/914
 */

import { Qrcode } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'QRCode decoder',
  path: '/qr-code-decoder',
  description: '二维码解码',
  keywords: ['二维码', 'qr-code', '解码', 'reader'],
  component: () => import('./qr-code-decoder.vue'),
  icon: Qrcode,
  createdAt: new Date('2024-01-17'),
});
