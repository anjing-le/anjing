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
    id: 'ai-lab',
    title: 'AI Hub',
    subtitle: '大模型培训与应用实战',
    description: '你现在看到的这套 AI 内容，会保留为一个完整赛道。',
    href: '/ai',
    color: 'var(--accent)',
    items: ['路径画像', '项目与知识', '后续可扩展'],
  },
  {
    id: 'finance',
    title: '金融 Hub',
    subtitle: '交易、研究与长期配置',
    description: '金融赛道会沿用同样的信息结构和视觉风格。',
    href: '/finance',
    color: 'var(--green)',
    items: ['短线 / 波段 / 中线 / 长线', '知识域分层', '后续内容可持续补充'],
  },
  {
    id: 'more',
    title: '更多赛道',
    subtitle: '预留扩展位',
    description: '后面你要加别的方向，可以直接按 Hub 挂进来。',
    href: '#',
    color: 'var(--purple)',
    items: ['教育', '英语', '其他方向'],
  },
];
