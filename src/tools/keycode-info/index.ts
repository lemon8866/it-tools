import { Keyboard } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Keycode 信息',
  path: '/keycode-info',
  description: '查找任意按键的javascript键代码、代码、位置和修饰符。',
  keywords: [
    'keycode',
    'info',
    'code',
    'javascript',
    'event',
    'keycodes',
    'which',
    'keyboard',
    'press',
    'modifier',
    'alt',
    'ctrl',
    'meta',
    'shift',
  ],
  component: () => import('./keycode-info.vue'),
  icon: Keyboard,
});
