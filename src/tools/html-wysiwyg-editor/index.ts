import { Edit } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'HTML WYSIWYG 编辑器(所见即所得)',
  path: '/html-wysiwyg-editor',
  description: '在线HTML编辑器具有功能丰富的所见即所得编辑器，可以立即获得内容的源代码。',
  keywords: ['html', 'wysiwyg', 'editor', 'p', 'ul', 'ol', 'converter', 'live'],
  component: () => import('./html-wysiwyg-editor.vue'),
  icon: Edit,
});
