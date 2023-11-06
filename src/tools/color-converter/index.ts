import { Palette } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: '颜色选择器',
  path: '/color-converter',
  description: translate('tools.color-converter.description'),
  keywords: [translate('common.noun.color'), translate('common.noun.converter')],
  component: () => import('./color-converter.vue'),
  icon: Palette,
  redirectFrom: ['/color-picker-converter'],
});
