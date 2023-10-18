import { AlignJustified } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'BIP39口令生成器',
  path: '/bip39-generator',
  description: '从现有或随机助记符生成BIP39密码短语，或从密码短语中获取助记符。',
  keywords: ['BIP39', 'passphrase', 'generator', 'mnemonic', 'entropy'],
  component: () => import('./bip39-generator.vue'),
  icon: AlignJustified,
});
