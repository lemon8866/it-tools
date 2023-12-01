import { PasswordRound } from '@vicons/material';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Basic 认证生成',
  path: '/basic-auth-generator',
  description: '根据用户名和密码生成base64基本身份验证标头。',
  keywords: [
    'basic',
    '认证',
    '生成',
    '用户名',
    '密码',
    'base64',
    '身份验证',
    'header',
    '授权',
  ],
  component: () => import('./basic-auth-generator.vue'),
  icon: PasswordRound,
});
