import { PasswordRound } from '@vicons/material';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Basic 认证生成',
  path: '/basic-auth-generator',
  description: '根据用户名和密码生成base64基本身份验证标头。',
  keywords: [
    'basic',
    'auth',
    'generator',
    'username',
    'password',
    'base64',
    'authentication',
    'header',
    'authorization',
  ],
  component: () => import('./basic-auth-generator.vue'),
  icon: PasswordRound,
});
