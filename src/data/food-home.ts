import type { HomeCard, HomeLinkCard } from './finance-home';

export const foodTrioCards: HomeCard[] = [
  {
    title: '我是谁',
    color: 'var(--orange)',
    items: [
      { dot: 'var(--orange)', label: '美食爱好者', desc: '热爱探索各种食物和烹饪方式' },
      { dot: 'var(--green)', label: '家庭厨房实践', desc: '所有食谱都在家里做过验证' },
      { dot: 'var(--pink)', label: '吃得明白', desc: '知道好吃的背后是什么在起作用' },
    ],
  },
  {
    title: '我能帮你什么',
    color: 'var(--green)',
    items: [
      { dot: 'var(--orange)', label: '美食地图', desc: '值得去的店和值得吃的菜' },
      { dot: 'var(--green)', label: '烹饪食谱', desc: '从家常菜到特色料理' },
      { dot: 'var(--accent)', label: '食材百科', desc: '选材、处理和搭配的基础知识' },
    ],
  },
  {
    title: '你会收获什么',
    color: 'var(--accent)',
    items: [
      { dot: 'var(--orange)', label: '实测食谱', desc: '每道菜都有详细步骤和避坑指南' },
      { dot: 'var(--green)', label: '探店记录', desc: '真实体验，不恰饭' },
      { dot: 'var(--accent)', label: '厨房好物', desc: '用过觉得好的工具和食材' },
    ],
  },
];

export const foodPathCards: HomeLinkCard[] = [
  {
    title: '厨房入门',
    hook: '从煮泡面到做一桌菜',
    color: 'var(--orange)',
    href: '/food/paths/beginner',
    items: ['厨房基础设备', '刀工和火候', '第一道家常菜'],
  },
  {
    title: '家常进阶',
    hook: '让家常菜好吃到不想点外卖',
    color: 'var(--green)',
    href: '/food/paths/home-cook',
    items: ['调味逻辑', '中式炒菜', '汤品和炖煮'],
  },
  {
    title: '烘焙甜点',
    hook: '烤箱打开一个新世界',
    color: 'var(--pink)',
    href: '/food/paths/baking',
    items: ['基础面团', '蛋糕和饼干', '面包入门'],
  },
  {
    title: '异国料理',
    hook: '在家复刻世界美食',
    color: 'var(--accent)',
    href: '/food/paths/world',
    items: ['日式料理', '意面和披萨', '东南亚风味'],
  },
];

export const foodKnowledgeCards: HomeLinkCard[] = [
  {
    title: '美食地图',
    hook: '值得专程去吃的地方',
    color: 'var(--orange)',
    href: '/food/knowledge/map',
    items: ['城市探店 · 各城市值得去的餐厅和小店', '品类指南 · 火锅、烧烤、小吃的推荐', '隐藏菜单 · 本地人才知道的吃法'],
  },
  {
    title: '烹饪原理',
    hook: '知道为什么才能做得更好',
    color: 'var(--green)',
    href: '/food/knowledge/cooking',
    items: ['热传递 · 煎炒烤炸蒸煮背后的科学', '调味逻辑 · 咸甜酸辣鲜的搭配规则', '食材处理 · 切法、腌制和预处理技巧'],
  },
  {
    title: '食材百科',
    hook: '认识你盘子里的每样东西',
    color: 'var(--accent)',
    href: '/food/knowledge/ingredients',
    items: ['蔬菜水果 · 时令选择和保存方法', '肉蛋水产 · 部位区别和烹饪适配', '调料香料 · 常用调味料的特点和用法'],
  },
  {
    title: '饮食文化',
    hook: '食物背后的故事',
    color: 'var(--purple)',
    href: '/food/knowledge/culture',
    items: ['地域饮食 · 八大菜系和地方特色', '饮食礼仪 · 中西餐桌的基本规矩', '食物历史 · 那些菜是怎么来的'],
  },
];
