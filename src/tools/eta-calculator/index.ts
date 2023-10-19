import { Hourglass } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'ETA计算器',
  path: '/eta-calculator',
  description:
    'ETA（预计到达时间）计算器，用于了解任务的大致结束时间，例如下载结束的时刻。',
  keywords: ['eta', 'calculator', 'estimated', 'time', 'arrival', 'average'],
  component: () => import('./eta-calculator.vue'),
  icon: Hourglass,
});
