import { Qrcode } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'QR Code(二维码) 生成',
  path: '/qrcode-generator',
  description:
    '生成并下载url或仅文本的二维码，并自定义背景和前景颜色。',
  keywords: ['qr', 'code', 'generator', 'square', 'color', 'link', 'low', 'medium', 'quartile', 'high', 'transparent'],
  component: () => import('./qr-code-generator.vue'),
  icon: Qrcode,
});
