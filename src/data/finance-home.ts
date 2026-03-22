export interface HomeItem {
  dot: string;
  label: string;
  desc: string;
}

export interface HomeCard {
  title: string;
  color: string;
  items: HomeItem[];
}

export interface HomeLinkCard {
  title: string;
  hook: string;
  color: string;
  href: string;
  items: string[];
}

export const financeTrioCards: HomeCard[] = [
  {
    title: '我是谁',
    color: 'var(--accent)',
    items: [
      { dot: 'var(--accent)', label: '金融研究与表达', desc: '关注市场认知、策略逻辑和复盘体系' },
      { dot: 'var(--cyan)', label: '策略 / 风控 / 配置', desc: '把收益、回撤与仓位放在一起看' },
      { dot: 'var(--pink)', label: '可落地的交易语言', desc: '让复杂概念变成可执行的方法' },
    ],
  },
  {
    title: '能给你什么',
    color: 'var(--purple)',
    items: [
      { dot: 'var(--accent)', label: '短线纪律', desc: '节奏、信号和止损' },
      { dot: 'var(--purple)', label: '中短线体系', desc: '波段、择时和仓位管理' },
      { dot: 'var(--orange)', label: '长线视角', desc: '估值、配置与长期复利' },
    ],
  },
  {
    title: '我们的交付',
    color: 'var(--green)',
    items: [
      { dot: 'var(--accent)', label: '策略框架', desc: '从观察到执行的完整链路' },
      { dot: 'var(--green)', label: '案例拆解', desc: '把盘感变成可复盘的方法' },
      { dot: 'var(--orange)', label: '复盘模板', desc: '把盈亏原因写清楚' },
    ],
  },
];

export const financePathCards: HomeLinkCard[] = [
  {
    title: '短线交易',
    hook: '节奏决定出手',
    color: 'var(--accent)',
    href: '/finance/paths/short-term',
    items: ['盘前计划', '入场 / 止损', '盘中复盘'],
  },
  {
    title: '中短线波段',
    hook: '波动决定收益',
    color: 'var(--green)',
    href: '/finance/paths/swing',
    items: ['趋势判断', '仓位管理', '持有与退出'],
  },
  {
    title: '中线策略',
    hook: '体系决定回撤',
    color: 'var(--orange)',
    href: '/finance/paths/mid-term',
    items: ['基本面框架', '估值区间', '组合搭建'],
  },
  {
    title: '长线配置',
    hook: '认知决定复利',
    color: 'var(--purple)',
    href: '/finance/paths/long-term',
    items: ['资产配置', '长期跟踪', '风险预算'],
  },
];

export const financeKnowledgeCards: HomeLinkCard[] = [
  {
    title: '市场基础',
    hook: '认知决定起点',
    color: 'var(--accent)',
    href: '/finance/knowledge/market-basics',
    items: ['交易规则', '常见术语', '市场结构'],
  },
  {
    title: '技术分析',
    hook: '图表决定节奏',
    color: 'var(--green)',
    href: '/finance/knowledge/technical-analysis',
    items: ['K 线 / 均线', '量价关系', '形态与趋势'],
  },
  {
    title: '基本面研究',
    hook: '数据决定估值',
    color: 'var(--purple)',
    href: '/finance/knowledge/fundamental-analysis',
    items: ['财报阅读', '行业比较', '估值模型'],
  },
  {
    title: '风控与仓位',
    hook: '边界决定生存',
    color: 'var(--orange)',
    href: '/finance/knowledge/risk-management',
    items: ['止损止盈', '仓位分配', '回撤控制'],
  },
];
