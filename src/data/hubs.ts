export interface HubEntry {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  color: string;
  items: string[];
}

export const hubs: HubEntry[] = [
  {
    id: 'cs',
    title: '计算机',
    subtitle: '基础 · 工程 · AI',
    description: '从工程基础到 AI 应用，按画像定制学习路径。',
    href: '/cs',
    color: 'var(--pink)',
    items: ['考研 / 校招 / 转行 / 进阶', '基础 → 工程 → AI → 前沿', '真实项目驱动'],
  },
  {
    id: 'finance',
    title: '金融',
    subtitle: '交易体系与投研方法论',
    description: '系统化构建投资框架，覆盖交易、研究与风控。',
    href: '/finance',
    color: 'var(--gold)',
    items: ['短线 / 波段 / 中线 / 长线', '金融 · 经济 · 交易 · 风控', '实盘思维，体系化学习'],
  },
  {
    id: 'more',
    title: '更多赛道',
    subtitle: '持续扩展中',
    description: '新的知识赛道正在规划，敬请期待。',
    href: '#',
    color: 'var(--purple)',
    items: ['教育', '英语', '其他方向'],
  },
];
