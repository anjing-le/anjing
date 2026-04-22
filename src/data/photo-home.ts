import type { HomeCard, HomeLinkCard } from './finance-home';

export const photoTrioCards: HomeCard[] = [
  {
    title: '我是谁',
    color: 'var(--cyan)',
    items: [
      { dot: 'var(--cyan)', label: '影像记录者', desc: '用镜头捕捉日常中被忽略的瞬间' },
      { dot: 'var(--purple)', label: '技术 + 审美', desc: '既懂参数也懂构图和色彩' },
      { dot: 'var(--orange)', label: '实拍驱动', desc: '所有技巧都来自真实拍摄经验' },
    ],
  },
  {
    title: '我能帮你什么',
    color: 'var(--purple)',
    items: [
      { dot: 'var(--cyan)', label: '基础原理', desc: '曝光三要素、对焦、白平衡' },
      { dot: 'var(--purple)', label: '进阶技法', desc: '构图、光线运用、色彩控制' },
      { dot: 'var(--orange)', label: '后期处理', desc: 'Lightroom、修图思路和风格' },
    ],
  },
  {
    title: '你会收获什么',
    color: 'var(--green)',
    items: [
      { dot: 'var(--cyan)', label: '拍摄指南', desc: '不同场景的实拍方法' },
      { dot: 'var(--green)', label: '后期预设', desc: '可复用的调色方案' },
      { dot: 'var(--orange)', label: '作品拆解', desc: '从构思到成片的完整过程' },
    ],
  },
];

export const photoPathCards: HomeLinkCard[] = [
  {
    title: '零基础入门',
    hook: '从自动挡到手动挡',
    color: 'var(--cyan)',
    href: '/photo/paths/beginner',
    items: ['认识相机和镜头', '曝光三要素', '第一次手动拍摄'],
  },
  {
    title: '进阶提升',
    hook: '从拍清楚到拍好看',
    color: 'var(--green)',
    href: '/photo/paths/intermediate',
    items: ['构图法则', '光线理解', '色彩表达'],
  },
  {
    title: '专题创作',
    hook: '从记录到表达',
    color: 'var(--purple)',
    href: '/photo/paths/creative',
    items: ['人像摄影', '街拍纪实', '风光与建筑'],
  },
  {
    title: '后期修图',
    hook: '从原片到成片',
    color: 'var(--orange)',
    href: '/photo/paths/editing',
    items: ['RAW 处理基础', 'Lightroom 工作流', '风格化调色'],
  },
];

export const photoKnowledgeCards: HomeLinkCard[] = [
  {
    title: '光学基础',
    hook: '理解相机在做什么',
    color: 'var(--cyan)',
    href: '/photo/knowledge/optics',
    items: ['曝光原理 · 光圈、快门、ISO 的关系', '镜头特性 · 焦距、景深与透视', '传感器 · 画幅、像素与动态范围'],
  },
  {
    title: '构图与视觉',
    hook: '让画面会说话',
    color: 'var(--green)',
    href: '/photo/knowledge/composition',
    items: ['经典构图 · 三分法、引导线、框架', '视觉重量 · 大小、颜色、位置的平衡', '减法思维 · 画面里只留必要的元素'],
  },
  {
    title: '光线与色彩',
    hook: '摄影就是用光写作',
    color: 'var(--purple)',
    href: '/photo/knowledge/lighting',
    items: ['自然光 · 不同时段和天气的光线特征', '人造光 · 闪光灯和持续光的基本用法', '色彩理论 · 色温、互补色与色调统一'],
  },
  {
    title: '后期处理',
    hook: '让照片完成最后一步',
    color: 'var(--orange)',
    href: '/photo/knowledge/post',
    items: ['RAW 处理 · 为什么不应该只拍 JPG', '调色逻辑 · 从校正到风格化的思路', '批量工作流 · 高效处理大量照片'],
  },
];
