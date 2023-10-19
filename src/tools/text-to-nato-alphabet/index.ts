import { Speakerphone } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: '文本到北约字母表',
  path: '/text-to-nato-alphabet',
  description: '将文本转换为北约语音字母表进行口头传输。',
  keywords: ['string', 'nato', 'alphabet', 'phonetic', 'oral', 'transmission'],
  component: () => import('./text-to-nato-alphabet.vue'),
  icon: Speakerphone,
});
