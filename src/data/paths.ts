export interface Resource {
  name: string;
  type: 'doc' | 'video';
  url?: string;
}

export interface PathStep {
  order: number;
  title: string;
  description: string;
  duration: string;
  projects: string[];
  resources: Resource[];
}

export interface LearningPath {
  hub?: string;
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  colorBg: string;
  description: string;
  audience: string[];
  goal: string;
  steps: PathStep[];
}

export const paths: LearningPath[] = [
  {
    hub: 'ai-lab',
    id: 'graduate',
    title: '考研复试',
    subtitle: '证明你的基础和热情',
    icon: 'graduation-cap',
    color: 'var(--accent)',
    colorBg: 'var(--accent-glow)',
    description: '导师想看到的不只是分数，更是扎实的基础、动手能力、以及对 AI 方向的热情和独立思考。',
    audience: ['考研初试已过，准备复试', '跨考计算机/AI方向', '想在复试中展现项目经验'],
    goal: '面试时能自信地讲出一个完整 AI 项目的设计思路和技术细节',
    steps: [
      {
        order: 1,
        title: '基础认知',
        description: '快速理解 AI 应用开发的全景：HTTP 是什么、前后端怎么配合、LLM 是怎么工作的、Agent 能做什么。不求精通，但求理解全局。',
        duration: '1-2 天',
        projects: [],
        resources: [
          { name: 'L0-学员须知', type: 'doc' },
          { name: 'L2-基础速补（HTTP/前后端/LLM/Agent）', type: 'doc' },
        ],
      },
      {
        order: 2,
        title: '工程入门',
        description: '通过脚手架项目学会：怎么用 Cursor 和 AI 协作写代码、前后端工程是怎么组织的、一个项目从 0 到 1 的流程。',
        duration: '2-3 天',
        projects: ['scaffolding'],
        resources: [
          { name: '脚手架 4 篇教案', type: 'doc' },
          { name: 'Cursor Rules 最佳实践', type: 'doc' },
        ],
      },
      {
        order: 3,
        title: '项目实战',
        description: '深入一个完整的 AI 项目。推荐知识库 RAG 系统——技术含量高、面试问得多、有 9 章配套精讲课程。跑通代码、理解架构、能画出系统图。',
        duration: '5-7 天',
        projects: ['knowledge'],
        resources: [
          { name: '4 篇教案', type: 'doc' },
          { name: 'RAG 技术体系精讲（9章）', type: 'video' },
          { name: '项目架构图', type: 'doc' },
        ],
      },
      {
        order: 4,
        title: '面试冲刺',
        description: '用面试叙事导航理清「怎么讲项目」，用模拟面试练习「怎么应对追问」，用 QA 清单查漏补缺。目标：讲得清、问不倒。',
        duration: '3-5 天',
        projects: ['knowledge'],
        resources: [
          { name: '面试叙事导航图', type: 'doc' },
          { name: '复试模拟面试（6轮23题）', type: 'video' },
          { name: '面试 QA 准备清单', type: 'doc' },
        ],
      },
    ],
  },
  {
    hub: 'ai-lab',
    id: 'campus',
    title: '校招求职',
    subtitle: '证明你能干活',
    icon: 'briefcase',
    color: 'var(--green)',
    colorBg: 'var(--green-bg)',
    description: '面试官要的不是你背了多少八股文，而是你能不能真正做出东西、讲清楚每个技术选择背后的原因。',
    audience: ['应届毕业生找工作', '想转 AI 方向的在校生', '需要项目经验充实简历'],
    goal: '简历上有 2+ 个真实 AI 项目，面试时每个技术点都讲得出 why',
    steps: [
      {
        order: 1,
        title: '基础速补',
        description: '快速补齐 AI 应用开发的基础认知。',
        duration: '1-2 天',
        projects: [],
        resources: [
          { name: 'L0-学员须知', type: 'doc' },
          { name: 'L2-基础速补', type: 'doc' },
        ],
      },
      {
        order: 2,
        title: '工程化能力',
        description: '通过脚手架项目掌握前后端工程化规范，这是面试中展现「工程素养」的基础。',
        duration: '2-3 天',
        projects: ['scaffolding'],
        resources: [
          { name: '脚手架 4 篇教案', type: 'doc' },
        ],
      },
      {
        order: 3,
        title: '双项目实战',
        description: '深入两个项目展现广度和深度：知识库（RAG 技术深度）+ 电商客服（生产级复杂度）。',
        duration: '10-14 天',
        projects: ['knowledge', 'customer-service'],
        resources: [
          { name: '各项目 4 篇教案', type: 'doc' },
          { name: 'RAG 体系精讲', type: 'video' },
        ],
      },
      {
        order: 4,
        title: '面试突击',
        description: '简历包装 + 面试叙事准备 + 模拟练习。',
        duration: '3-5 天',
        projects: [],
        resources: [
          { name: '各项目面试叙事导航', type: 'doc' },
          { name: '面试 QA 清单', type: 'doc' },
          { name: '模拟面试', type: 'video' },
        ],
      },
    ],
  },
  {
    hub: 'ai-lab',
    id: 'career-change',
    title: '转型跨行',
    subtitle: '跨过从 0 到 1 的门槛',
    icon: 'shuffle',
    color: 'var(--orange)',
    colorBg: 'var(--orange-bg)',
    description: '你不需要从零学三年计算机，你需要的是一个能跑通的项目、一套能理解的知识体系、和一个带你入门的人。',
    audience: ['非计算机背景想转 AI', '有编程基础想做 AI 应用', '想快速出活证明自己'],
    goal: '能独立跑通一个 AI 项目，能向别人解释它是怎么工作的',
    steps: [
      {
        order: 1,
        title: '概念理解',
        description: '重点理解 AI 应用层概念，不需要深入算法。',
        duration: '2-3 天',
        projects: [],
        resources: [
          { name: 'L2-基础速补', type: 'doc' },
          { name: 'RAG 技术体系精讲（通俗版讲解）', type: 'video' },
        ],
      },
      {
        order: 2,
        title: '跟着跑通',
        description: '用脚手架 + Cursor AI 协作，跟着教案把知识库项目完整跑起来。',
        duration: '5-7 天',
        projects: ['scaffolding', 'knowledge'],
        resources: [
          { name: '环境准备教案', type: 'doc' },
          { name: '项目演示教案', type: 'doc' },
        ],
      },
      {
        order: 3,
        title: '理解原理',
        description: '回过头来理解 RAG 的原理，能画出架构图，能解释每一步在做什么。',
        duration: '3-5 天',
        projects: ['knowledge'],
        resources: [
          { name: 'RAG 体系精讲', type: 'video' },
          { name: '架构设计教案', type: 'doc' },
          { name: '核心设计教案', type: 'doc' },
        ],
      },
      {
        order: 4,
        title: '建立信心',
        description: '能演示给别人看、能讲清楚原理、能回答基本问题。',
        duration: '2-3 天',
        projects: [],
        resources: [
          { name: '面试叙事导航', type: 'doc' },
          { name: '面试 QA 清单', type: 'doc' },
        ],
      },
    ],
  },
  {
    hub: 'ai-lab',
    id: 'advance',
    title: '职场进阶',
    subtitle: '前沿视野 + 落地经验',
    icon: 'rocket',
    color: 'var(--purple)',
    colorBg: 'var(--purple-bg)',
    description: '你已经有工程经验，需要的是 AI 应用的前沿视野、真实落地经验、和引领团队的系统化知识。',
    audience: ['3+ 年经验的开发者', '技术 Leader / 架构师', '想在团队推动 AI 落地'],
    goal: '掌握 AI 应用架构设计方法论，能带领团队落地 AI 项目',
    steps: [
      {
        order: 1,
        title: '架构速览',
        description: '直接看项目架构设计，理解 RAG / Agent / 多模态的系统设计思路。',
        duration: '2-3 天',
        projects: ['knowledge', 'aigc', 'customer-service'],
        resources: [
          { name: '各项目架构设计教案', type: 'doc' },
          { name: '架构图', type: 'doc' },
        ],
      },
      {
        order: 2,
        title: '深度拆解',
        description: '深入核心设计细节，学习技术选型的 trade-off 和工程化最佳实践。',
        duration: '3-5 天',
        projects: ['knowledge', 'customer-service'],
        resources: [
          { name: '各项目核心设计教案', type: 'doc' },
          { name: 'RAG 体系精讲', type: 'video' },
        ],
      },
      {
        order: 3,
        title: '方案对比',
        description: '对比不同项目的技术选择，理解不同场景下的最优解。',
        duration: '2-3 天',
        projects: ['knowledge', 'aigc', 'customer-service'],
        resources: [
          { name: '各项目面试 QA（技术深度部分）', type: 'doc' },
        ],
      },
      {
        order: 4,
        title: '输出沉淀',
        description: '整理成团队分享材料，形成可落地的 AI 应用方案。',
        duration: '持续',
        projects: [],
        resources: [
          { name: '项目介绍 PPT', type: 'doc' },
          { name: '架构图素材', type: 'doc' },
        ],
      },
    ],
  },
  {
    hub: 'finance',
    id: 'short-term',
    title: '短线交易',
    subtitle: '节奏优先，纪律优先',
    icon: 'trending-up',
    color: 'var(--accent)',
    colorBg: 'var(--accent-glow)',
    description: '短线的重点不是预测，而是控制出手、控制仓位、控制情绪。',
    audience: ['喜欢高频观察行情', '重视入场和止损纪律', '希望快速训练交易节奏'],
    goal: '建立可执行的短线交易框架，做到有计划地交易',
    steps: [
      {
        order: 1,
        title: '盘前准备',
        description: '先做标的筛选、新闻过滤和当日重点观察清单。',
        duration: '1 天',
        projects: [],
        resources: [
          { name: '盘前观察清单', type: 'doc' },
          { name: '开盘前策略检查表', type: 'doc' },
        ],
      },
      {
        order: 2,
        title: '入场规则',
        description: '只在满足条件时进场，避免情绪化追单。',
        duration: '1-2 天',
        projects: [],
        resources: [
          { name: '入场条件模板', type: 'doc' },
          { name: '短线止损原则', type: 'video' },
        ],
      },
      {
        order: 3,
        title: '盘中执行',
        description: '执行时关注节奏、强弱和仓位变化。',
        duration: '持续',
        projects: [],
        resources: [
          { name: '盘中记录模板', type: 'doc' },
          { name: '情绪控制提醒', type: 'doc' },
        ],
      },
      {
        order: 4,
        title: '复盘提升',
        description: '把每一笔交易写成复盘样本，逐步形成自己的模式。',
        duration: '持续',
        projects: [],
        resources: [
          { name: '交易复盘模板', type: 'doc' },
          { name: '典型案例拆解', type: 'video' },
        ],
      },
    ],
  },
  {
    hub: 'finance',
    id: 'swing',
    title: '中短线波段',
    subtitle: '趋势与波动并重',
    icon: 'target',
    color: 'var(--green)',
    colorBg: 'var(--green-bg)',
    description: '中短线更强调结构判断、趋势跟随和仓位控制。',
    audience: ['擅长观察趋势变化', '希望持仓周期稍长', '关注波段收益与回撤平衡'],
    goal: '形成波段级别的交易节奏与仓位管理方法',
    steps: [
      {
        order: 1,
        title: '趋势识别',
        description: '先判断大方向，再决定是否出手。',
        duration: '1-2 天',
        projects: [],
        resources: [
          { name: '趋势判断框架', type: 'doc' },
          { name: '波段视角入门', type: 'doc' },
        ],
      },
      {
        order: 2,
        title: '仓位分层',
        description: '把仓位拆成多层，避免一次性押注。',
        duration: '1-2 天',
        projects: [],
        resources: [
          { name: '仓位管理模板', type: 'doc' },
          { name: '分批买卖示意', type: 'video' },
        ],
      },
      {
        order: 3,
        title: '持有策略',
        description: '根据行情强弱决定加减仓，而不是情绪化操作。',
        duration: '持续',
        projects: [],
        resources: [
          { name: '持有与退出规则', type: 'doc' },
          { name: '波段复盘要点', type: 'doc' },
        ],
      },
      {
        order: 4,
        title: '策略修正',
        description: '通过复盘不断修正自己的节奏与胜率。',
        duration: '持续',
        projects: [],
        resources: [
          { name: '波段复盘模板', type: 'doc' },
          { name: '策略调整记录', type: 'video' },
        ],
      },
    ],
  },
  {
    hub: 'finance',
    id: 'mid-term',
    title: '中线策略',
    subtitle: '基本面 + 估值 + 节奏',
    icon: 'book-open',
    color: 'var(--orange)',
    colorBg: 'var(--orange-bg)',
    description: '中线强调逻辑和耐心，重点是理解基本面与估值区间。',
    audience: ['偏好相对稳健', '重视逻辑和周期', '愿意耐心等待'],
    goal: '建立中线投资的选股与持有框架',
    steps: [
      {
        order: 1,
        title: '研究行业',
        description: '先理解行业驱动和核心变量。',
        duration: '2 天',
        projects: [],
        resources: [
          { name: '行业研究框架', type: 'doc' },
          { name: '产业链梳理表', type: 'doc' },
        ],
      },
      {
        order: 2,
        title: '筛选标的',
        description: '从逻辑、财务和位置三个角度筛选。',
        duration: '2 天',
        projects: [],
        resources: [
          { name: '标的筛选清单', type: 'doc' },
          { name: '估值对比方法', type: 'video' },
        ],
      },
      {
        order: 3,
        title: '持有节奏',
        description: '关注预期兑现与市场反应。',
        duration: '持续',
        projects: [],
        resources: [
          { name: '中线持有原则', type: 'doc' },
          { name: '催化事件记录', type: 'doc' },
        ],
      },
      {
        order: 4,
        title: '动态调整',
        description: '根据基本面变化和估值变化调整仓位。',
        duration: '持续',
        projects: [],
        resources: [
          { name: '动态跟踪表', type: 'doc' },
          { name: '阶段复盘视频', type: 'video' },
        ],
      },
    ],
  },
  {
    hub: 'finance',
    id: 'long-term',
    title: '长线配置',
    subtitle: '复利与组合视角',
    icon: 'rocket',
    color: 'var(--purple)',
    colorBg: 'var(--purple-bg)',
    description: '长线关注的是资产配置、组合稳定性和长期复利。',
    audience: ['更看重长期收益', '注重风险预算', '希望构建稳定组合'],
    goal: '形成长期可持续的配置和跟踪方法',
    steps: [
      {
        order: 1,
        title: '资产配置',
        description: '先决定总仓位如何分配。',
        duration: '1-2 天',
        projects: [],
        resources: [
          { name: '资产配置框架', type: 'doc' },
          { name: '组合入门材料', type: 'doc' },
        ],
      },
      {
        order: 2,
        title: '风险预算',
        description: '给每一类资产设定风险边界。',
        duration: '1-2 天',
        projects: [],
        resources: [
          { name: '风险预算表', type: 'doc' },
          { name: '回撤控制思路', type: 'video' },
        ],
      },
      {
        order: 3,
        title: '长期跟踪',
        description: '用固定周期检查组合变化。',
        duration: '持续',
        projects: [],
        resources: [
          { name: '季度跟踪清单', type: 'doc' },
          { name: '长期复盘模板', type: 'doc' },
        ],
      },
      {
        order: 4,
        title: '持续优化',
        description: '在稳定框架中逐步优化收益与回撤。',
        duration: '持续',
        projects: [],
        resources: [
          { name: '优化记录表', type: 'doc' },
          { name: '长线案例拆解', type: 'video' },
        ],
      },
    ],
  },
];
