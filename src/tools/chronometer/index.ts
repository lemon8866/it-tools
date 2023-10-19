import { TimerOutlined } from '@vicons/material';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: '计时器',
  path: '/chronometer',
  description: '监控一件事的持续时间。基本上是一个具有简单计时功能的计时器。',
  keywords: ['chronometer', 'time', 'lap', 'duration', 'measure', 'pause', 'resume', 'stopwatch'],
  component: () => import('./chronometer.vue'),
  icon: TimerOutlined,
});
