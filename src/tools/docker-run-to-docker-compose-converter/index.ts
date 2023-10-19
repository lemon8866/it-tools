import { BrandDocker } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Docker run to Docker compose 转换',
  path: '/docker-run-to-docker-compose-converter',
  description: '将docker运行命令转换为docker-compose文件！',
  keywords: ['docker', 'run', 'compose', 'yaml', 'yml', 'convert', 'deamon'],
  component: () => import('./docker-run-to-docker-compose-converter.vue'),
  icon: BrandDocker,
});
