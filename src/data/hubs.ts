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
    description: '从计算机基础到工程实践，从传统架构到 AI 应用，按不同画像定制化学习路径。',
    href: '/cs',
    color: 'var(--pink)',
    items: ['4 条画像路径：考研 / 校招 / 转行 / 进阶', '4 大知识域：基础 → 工程 → AI → 前沿', '真实项目驱动，边学边做'],
  },
  {
    id: 'finance',
    title: '金融 Hub',
    subtitle: '交易体系与投研方法论',
    description: '从短线交易到长线配置，系统化构建个人投资框架，涵盖技术分析、基本面研究与风控体系。',
    href: '/finance',
    color: 'var(--gold)',
    items: ['4 种交易风格：短线 / 波段 / 中线 / 长线', '4 大知识域：市场 → 技术 → 基本面 → 风控', '实盘思维，体系化学习'],
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
