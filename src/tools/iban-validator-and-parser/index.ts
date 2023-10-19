import { defineTool } from '../tool';
import Bank from '~icons/mdi/bank';

export const tool = defineTool({
  name: 'IBAN验证器和解析器',
  path: '/iban-validator-and-parser',
  description: '验证和分析IBAN编号。检查IBAN是否有效，如果是QR-IBAN和IBAN友好格式，则获取国家/地区BBAN。',
  keywords: ['iban', 'validator', 'and', 'parser', 'bic', 'bank'],
  component: () => import('./iban-validator-and-parser.vue'),
  icon: Bank,
  createdAt: new Date('2023-08-26'),
});
