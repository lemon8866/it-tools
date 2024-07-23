/**
 * author https://github.com/antegral
 * form https://github.com/CorentinTh/it-tools/pull/1211
 */

import { Id } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: '雪花算法ID解析',
  path: '/snowflake-id-extractor',
  description: '从雪花ID中提取时间戳、机器ID和序列号',
  keywords: ['雪花', '序列', '解析'],
  component: () => import('./snowflake-id-extractor.vue'),
  icon: Id,
  createdAt: new Date('2024-07-22'),
});
