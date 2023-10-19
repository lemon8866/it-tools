import { MoodSmile } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Emoji 选择',
  path: '/emoji-picker',
  description: '轻松复制和粘贴表情符号，并获得每个表情符号的unicode和代码点值.',
  keywords: ['emoji', 'picker', 'unicode', 'copy', 'paste'],
  component: () => import('./emoji-picker.vue'),
  icon: MoodSmile,
  createdAt: new Date('2023-08-07'),
});
