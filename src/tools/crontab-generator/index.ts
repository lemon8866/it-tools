import { Alarm } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Crontab 表达式生成',
  path: '/crontab-generator',
  description: '验证并生成crontab，并获得cron计划的可读描述。',
  keywords: [
    'crontab',
    'generator',
    'cronjob',
    'cron',
    'schedule',
    'parse',
    'expression',
    'year',
    'month',
    'week',
    'day',
    'minute',
    'second',
  ],
  component: () => import('./crontab-generator.vue'),
  icon: Alarm,
});
