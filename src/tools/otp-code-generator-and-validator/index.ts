import { DeviceMobile } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'OTP 验证生成',
  path: '/otp-generator',
  description: '为多因素身份验证生成并验证基于时间的OTP（一次性密码）。',
  keywords: [
    'otp',
    'code',
    'generator',
    'validator',
    'one',
    'time',
    'password',
    'authentication',
    'MFA',
    'mobile',
    'device',
    'security',
    'TOTP',
    'Time',
    'HMAC',
  ],
  component: () => import('./otp-code-generator-and-validator.vue'),
  icon: DeviceMobile,
});
