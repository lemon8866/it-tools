import { Camera } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: '摄像机记录器',
  path: '/camera-recorder',
  description: '通过网络摄像头或相机拍摄照片或录制视频。',
  keywords: ['camera', 'recoder'],
  component: () => import('./camera-recorder.vue'),
  icon: Camera,
  createdAt: new Date('2023-05-15'),
});
