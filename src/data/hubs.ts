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
    id: 'body',
    title: '身体',
    subtitle: '健身 · 饮食 · 营养',
    description: '系统化管理身体状态，从训练到饮食到恢复。',
    href: '/body',
    color: 'var(--green)',
    items: ['增肌 / 减脂 / 体态 / 恢复', '营养学 · 饮食结构 · 补剂', '用数据管理身体'],
  },
  {
    id: 'photo',
    title: '摄影',
    subtitle: '光影 · 构图 · 后期',
    description: '从按快门到讲故事，用镜头表达你的观察。',
    href: '/photo',
    color: 'var(--cyan)',
    items: ['基础原理 / 进阶技法 / 高级创作', '光线 · 构图 · 色彩 · 后期', '街拍、人像、风光实战'],
  },
  {
    id: 'food',
    title: '美食',
    subtitle: '烹饪 · 食谱 · 探店',
    description: '会吃是天赋，会做是本事。',
    href: '/food',
    color: 'var(--orange)',
    items: ['美食地图 / 烹饪食谱 / 食材百科', '家常 · 烘焙 · 异国料理', '从厨房到餐桌的完整链路'],
  },
];
