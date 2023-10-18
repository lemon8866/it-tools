import { FileInvoice } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Chmod 计算器',
  path: '/chmod-calculator',
  description: '使用此在线chmod计算器计算您的chmod权限和命令',
  keywords: [
    'chmod',
    'calculator',
    'file',
    'permission',
    'files',
    'directory',
    'folder',
    'recursive',
    'generator',
    'octal',
  ],
  component: () => import('./chmod-calculator.vue'),
  icon: FileInvoice,
});
