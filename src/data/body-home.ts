import type { HomeCard, HomeLinkCard } from './finance-home';

export const bodyTrioCards: HomeCard[] = [
  {
    title: '我是谁',
    color: 'var(--green)',
    items: [
      { dot: 'var(--green)', label: '身体管理实践者', desc: '训练、饮食、恢复的系统化方法' },
      { dot: 'var(--cyan)', label: '数据驱动', desc: '用体测和记录替代感觉' },
      { dot: 'var(--orange)', label: '可持续的健康观', desc: '不追求极端，追求长期稳定' },
    ],
  },
  {
    title: '我能帮你什么',
    color: 'var(--accent)',
    items: [
      { dot: 'var(--green)', label: '训练体系', desc: '增肌、减脂、体态矫正' },
      { dot: 'var(--accent)', label: '饮食框架', desc: '营养学基础、饮食结构设计' },
      { dot: 'var(--orange)', label: '恢复与习惯', desc: '睡眠、压力管理、习惯养成' },
    ],
  },
  {
    title: '你会收获什么',
    color: 'var(--purple)',
    items: [
      { dot: 'var(--green)', label: '训练计划模板', desc: '按目标定制的周计划' },
      { dot: 'var(--accent)', label: '饮食参考方案', desc: '热量和营养素的实操指南' },
      { dot: 'var(--orange)', label: '身体数据追踪', desc: '体重、体脂、围度的记录方法' },
    ],
  },
];

export const bodyPathCards: HomeLinkCard[] = [
  {
    title: '增肌塑形',
    hook: '力量决定基础',
    color: 'var(--green)',
    href: '/body/paths/muscle',
    items: ['力量训练基础', '分化训练计划', '渐进超负荷'],
  },
  {
    title: '减脂瘦身',
    hook: '热量决定方向',
    color: 'var(--accent)',
    href: '/body/paths/fat-loss',
    items: ['热量缺口原理', '有氧与力量搭配', '饮食控制策略'],
  },
  {
    title: '体态改善',
    hook: '姿态决定气质',
    color: 'var(--orange)',
    href: '/body/paths/posture',
    items: ['圆肩驼背矫正', '骨盆前倾修复', '日常姿态习惯'],
  },
  {
    title: '长期维护',
    hook: '习惯决定结果',
    color: 'var(--purple)',
    href: '/body/paths/maintain',
    items: ['体重管理', '运动习惯养成', '睡眠与恢复'],
  },
];

export const bodyKnowledgeCards: HomeLinkCard[] = [
  {
    title: '训练科学',
    hook: '理解身体如何变强',
    color: 'var(--green)',
    href: '/body/knowledge/training',
    items: ['运动生理学 · 肌肉如何生长和适应', '训练编排 · 组数、次数与周期化', '常见动作 · 深蹲、硬拉、推拉的要点'],
  },
  {
    title: '营养学',
    hook: '吃对比练对更重要',
    color: 'var(--accent)',
    href: '/body/knowledge/nutrition',
    items: ['三大营养素 · 碳水、蛋白质、脂肪的作用', '热量计算 · 基础代谢和活动消耗', '补剂常识 · 蛋白粉、肌酸、维生素'],
  },
  {
    title: '饮食管理',
    hook: '把营养变成一日三餐',
    color: 'var(--orange)',
    href: '/body/knowledge/diet',
    items: ['饮食结构 · 如何搭配每一餐', '备餐方法 · 省时省力的实操方案', '饮食误区 · 那些听起来对但其实错的观点'],
  },
  {
    title: '恢复与心理',
    hook: '休息也是训练的一部分',
    color: 'var(--purple)',
    href: '/body/knowledge/recovery',
    items: ['睡眠科学 · 睡眠质量如何影响身体', '压力管理 · 皮质醇与体重的关系', '运动心理 · 坚持的底层逻辑'],
  },
];
