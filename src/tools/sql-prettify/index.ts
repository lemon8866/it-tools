import { Database } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'SQL 美化和格式化',
  path: '/sql-prettify',
  description: '在线格式化和美化SQL查询（它支持各种SQL方言）。',
  keywords: [
    'sql',
    'prettify',
    'beautify',
    'GCP BigQuery',
    'IBM DB2',
    'Apache Hive',
    'MariaDB',
    'MySQL',
    'Couchbase N1QL',
    'Oracle PL/SQL',
    'PostgreSQL',
    'Amazon Redshift',
    'Spark',
    'SQL Server Transact-SQL',
  ],
  component: () => import('./sql-prettify.vue'),
  icon: Database,
});
