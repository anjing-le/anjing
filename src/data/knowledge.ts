export interface KnowledgeItem {
  id: string;
  title: string;
  summary: string;
  type: 'doc' | 'video';
  draft?: boolean;
  mdPath?: string;
  coverUrl?: string;
  externalUrl?: string;
  embedUrl?: string;
}

export interface KnowledgeGroup {
  id: string;
  title: string;
  summary: string;
  items: KnowledgeItem[];
}

export interface KnowledgeDomain {
  hub: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  soft: string;
  groups: KnowledgeGroup[];
}

export const domains: KnowledgeDomain[] = [
  {
    hub: 'cs',
    id: 'cs-fundamentals',
    title: '计算机基础',
    subtitle: '操作系统 / 网络 / 数据结构',
    description: '扎实的计算机基础，是所有技术能力的根基。',
    icon: 'cpu',
    color: 'var(--accent)',
    soft: 'var(--accent-soft)',
    groups: [
      {
        id: 'cs-os-network',
        title: '系统与网络',
        summary: '理解程序和网络是怎么运行的。',
        items: [
          { id: 'cs-1', title: '操作系统基础', summary: '待补充', type: 'doc', draft: true },
          { id: 'cs-2', title: '计算机网络与协议', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'cs-data-structure',
        title: '数据结构与算法',
        summary: '用正确的方式组织和处理数据。',
        items: [
          { id: 'cs-3', title: '常用数据结构', summary: '待补充', type: 'doc', draft: true },
          { id: 'cs-4', title: '算法思维与复杂度', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'cs-web-basics',
        title: 'Web 开发基础',
        summary: '前后端协作与接口设计。',
        items: [
          { id: 'cs-5', title: 'HTTP 与接口', summary: '待补充', type: 'doc', draft: true },
          { id: 'cs-6', title: '前后端协作', summary: '待补充', type: 'doc', draft: true },
        ],
      },
    ],
  },
  {
    hub: 'cs',
    id: 'engineering',
    title: '工程实践',
    subtitle: '架构设计 / 工程化 / 最佳实践',
    description: '把知识落到代码组织、架构设计和交付方式上。',
    icon: 'code',
    color: 'var(--green)',
    soft: 'var(--green-soft)',
    groups: [
      {
        id: 'eng-architecture',
        title: '架构设计',
        summary: '从单体到分布式，理解系统如何组织。',
        items: [
          { id: 'eng-1', title: '架构模式与选型', summary: '待补充', type: 'doc', draft: true },
          { id: 'eng-2', title: '服务拆分与通信', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'eng-practice',
        title: '工程化规范',
        summary: '让代码可读、可测、可维护。',
        items: [
          { id: 'eng-3', title: '设计模式', summary: '待补充', type: 'doc', draft: true },
          { id: 'eng-4', title: '单元测试与 CI/CD', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'eng-performance',
        title: '性能与运维',
        summary: '让系统跑得稳、跑得快。',
        items: [
          { id: 'eng-5', title: '性能优化', summary: '待补充', type: 'doc', draft: true },
          { id: 'eng-6', title: '监控与日志', summary: '待补充', type: 'doc', draft: true },
        ],
      },
    ],
  },
  {
    hub: 'cs',
    id: 'ai-and-llm',
    title: 'AI 与大模型',
    subtitle: 'LLM 原理 / RAG / Agent',
    description: '理解 AI 时代的核心技术，掌握大模型应用的系统化设计方法。',
    icon: 'bot',
    color: 'var(--purple)',
    soft: 'var(--purple-soft)',
    groups: [
      {
        id: 'ai-basics',
        title: 'LLM 基础',
        summary: '理解大模型怎么工作。',
        items: [
          { id: 'ai-1', title: 'Transformer 与大模型原理', summary: '待补充', type: 'doc', draft: true },
          { id: 'ai-2', title: 'Prompt 设计与 RAG', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'ai-apps',
        title: 'AI 应用',
        summary: '从原理到落地的完整链路。',
        items: [
          { id: 'ai-3', title: 'Agent 框架与任务编排', summary: '待补充', type: 'doc', draft: true },
          { id: 'ai-4', title: '多模态与系统设计', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'ai-engineering',
        title: 'AI 工程化',
        summary: '让 AI 应用稳定、可控、可交付。',
        items: [
          { id: 'ai-5', title: 'Embedding 与向量检索', summary: '待补充', type: 'doc', draft: true },
          { id: 'ai-6', title: '评估、监控与成本', summary: '待补充', type: 'doc', draft: true },
        ],
      },
    ],
  },
  {
    hub: 'cs',
    id: 'frontier',
    title: '前沿探索',
    subtitle: 'Agentic / 新框架 / 行业趋势',
    description: '跟踪计算机与 AI 领域最前沿的技术方向和开源生态。',
    icon: 'compass',
    color: 'var(--orange)',
    soft: 'var(--orange-soft)',
    groups: [
      {
        id: 'frontier-trend',
        title: '技术趋势',
        summary: '看清正在发生什么。',
        items: [
          { id: 'fr-1', title: 'Agentic AI', summary: '待补充', type: 'doc', draft: true },
          { id: 'fr-2', title: '行业变化', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'frontier-framework',
        title: '开源框架',
        summary: '把新框架的思路拆开看。',
        items: [
          { id: 'fr-3', title: 'OpenClaw', summary: '待补充', type: 'doc', draft: true },
          { id: 'fr-4', title: '框架对比', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'frontier-case',
        title: '实战案例',
        summary: '用具体案例理解前沿落地。',
        items: [
          { id: 'fr-5', title: '项目拆解', summary: '待补充', type: 'doc', draft: true },
          { id: 'fr-6', title: '演示复盘', summary: '待补充', type: 'video', draft: true },
        ],
      },
    ],
  },
  {
    hub: 'finance',
    id: 'finance-theory',
    title: '金融学',
    subtitle: '资本市场 / 金融工具 / 估值理论',
    description: '理解金融市场的底层逻辑和运行规则。',
    icon: 'globe',
    color: 'var(--accent)',
    soft: 'var(--accent-soft)',
    groups: [
      {
        id: 'finance-theory-market',
        title: '资本市场',
        summary: '理解市场结构、参与者和交易机制。',
        items: [
          { id: 'fin-1', title: '市场结构与交易规则', summary: '待补充', type: 'doc', draft: true },
          { id: 'fin-2', title: '市场参与者', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'finance-theory-instruments',
        title: '金融工具',
        summary: '认识股票、债券、基金、衍生品等基本工具。',
        items: [
          { id: 'fin-3', title: '权益类工具', summary: '待补充', type: 'doc', draft: true },
          { id: 'fin-4', title: '固收与衍生品', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'finance-theory-valuation',
        title: '估值理论',
        summary: '从财务数据到估值框架。',
        items: [
          { id: 'fin-5', title: '财报阅读', summary: '待补充', type: 'doc', draft: true },
          { id: 'fin-6', title: '估值方法与安全边际', summary: '待补充', type: 'doc', draft: true },
        ],
      },
    ],
  },
  {
    hub: 'finance',
    id: 'economics',
    title: '经济学',
    subtitle: '宏观经济 / 产业分析 / 政策周期',
    description: '从宏观到产业，理解驱动市场的底层力量。',
    icon: 'book-open',
    color: 'var(--green)',
    soft: 'var(--green-soft)',
    groups: [
      {
        id: 'economics-macro',
        title: '宏观经济',
        summary: '理解经济周期、货币政策和利率环境。',
        items: [
          { id: 'fin-7', title: '经济周期与指标', summary: '待补充', type: 'doc', draft: true },
          { id: 'fin-8', title: '货币政策与利率', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'economics-industry',
        title: '产业分析',
        summary: '理解行业格局、产业链和竞争位置。',
        items: [
          { id: 'fin-9', title: '行业研究框架', summary: '待补充', type: 'doc', draft: true },
          { id: 'fin-10', title: '产业链与竞品分析', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'economics-policy',
        title: '政策与周期',
        summary: '政策变化如何影响市场节奏。',
        items: [
          { id: 'fin-11', title: '财政与产业政策', summary: '待补充', type: 'doc', draft: true },
          { id: 'fin-12', title: '政策周期与市场映射', summary: '待补充', type: 'doc', draft: true },
        ],
      },
    ],
  },
  {
    hub: 'finance',
    id: 'trading',
    title: '交易学',
    subtitle: '技术分析 / 策略体系 / 交易心理',
    description: '把市场观察变成可执行的交易方法。',
    icon: 'trending-up',
    color: 'var(--orange)',
    soft: 'var(--orange-soft)',
    groups: [
      {
        id: 'trading-technical',
        title: '技术分析',
        summary: '通过价格和成交量理解市场行为。',
        items: [
          { id: 'fin-13', title: 'K 线与形态', summary: '待补充', type: 'doc', draft: true },
          { id: 'fin-14', title: '量价关系与均线系统', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'trading-strategy',
        title: '策略体系',
        summary: '从入场到退出的完整交易框架。',
        items: [
          { id: 'fin-15', title: '入场与止损规则', summary: '待补充', type: 'doc', draft: true },
          { id: 'fin-16', title: '持有与退出策略', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'trading-psychology',
        title: '交易心理',
        summary: '控制情绪比控制仓位更重要。',
        items: [
          { id: 'fin-17', title: '情绪与纪律', summary: '待补充', type: 'doc', draft: true },
          { id: 'fin-18', title: '认知偏差与决策', summary: '待补充', type: 'doc', draft: true },
        ],
      },
    ],
  },
  {
    hub: 'finance',
    id: 'risk-management',
    title: '风险管理',
    subtitle: '仓位控制 / 组合管理 / 复盘体系',
    description: '先活下来，再谈收益。',
    icon: 'shield',
    color: 'var(--purple)',
    soft: 'var(--purple-soft)',
    groups: [
      {
        id: 'risk-position',
        title: '仓位与风控',
        summary: '用规则控制风险暴露。',
        items: [
          { id: 'fin-19', title: '止损止盈规则', summary: '待补充', type: 'doc', draft: true },
          { id: 'fin-20', title: '仓位分配与分批策略', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'risk-portfolio',
        title: '组合管理',
        summary: '从单标的到组合视角。',
        items: [
          { id: 'fin-21', title: '资产配置框架', summary: '待补充', type: 'doc', draft: true },
          { id: 'fin-22', title: '风险预算与回撤控制', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'risk-review',
        title: '复盘体系',
        summary: '把风险管理变成长期习惯。',
        items: [
          { id: 'fin-23', title: '交易复盘方法', summary: '待补充', type: 'doc', draft: true },
          { id: 'fin-24', title: '复盘清单与改进', summary: '待补充', type: 'doc', draft: true },
        ],
      },
    ],
  },

  // ─── 身体 Hub ───
  {
    hub: 'body',
    id: 'training',
    title: '训练科学',
    subtitle: '运动生理 / 训练编排 / 动作库',
    description: '理解身体如何变强，用科学指导训练。',
    icon: 'dumbbell',
    color: 'var(--green)',
    soft: 'var(--green-soft)',
    groups: [
      { id: 'train-physiology', title: '运动生理学', summary: '肌肉如何生长和适应。', items: [
        { id: 'body-1', title: '肌肉生长原理', summary: '待补充', type: 'doc', draft: true },
        { id: 'body-2', title: '能量系统', summary: '待补充', type: 'doc', draft: true },
      ]},
      { id: 'train-programming', title: '训练编排', summary: '组数、次数与周期化。', items: [
        { id: 'body-3', title: '训练变量设计', summary: '待补充', type: 'doc', draft: true },
        { id: 'body-4', title: '周期化训练', summary: '待补充', type: 'doc', draft: true },
      ]},
      { id: 'train-movements', title: '核心动作', summary: '深蹲、硬拉、推拉的要点。', items: [
        { id: 'body-5', title: '复合动作详解', summary: '待补充', type: 'doc', draft: true },
        { id: 'body-6', title: '孤立动作与辅助训练', summary: '待补充', type: 'doc', draft: true },
      ]},
    ],
  },
  {
    hub: 'body',
    id: 'nutrition',
    title: '营养学',
    subtitle: '三大营养素 / 热量 / 补剂',
    description: '吃对比练对更重要。',
    icon: 'apple',
    color: 'var(--accent)',
    soft: 'var(--accent-soft)',
    groups: [
      { id: 'nutri-macro', title: '三大营养素', summary: '碳水、蛋白质、脂肪的作用。', items: [
        { id: 'body-7', title: '蛋白质与肌肉', summary: '待补充', type: 'doc', draft: true },
        { id: 'body-8', title: '碳水与脂肪', summary: '待补充', type: 'doc', draft: true },
      ]},
      { id: 'nutri-calorie', title: '热量管理', summary: '基础代谢和活动消耗。', items: [
        { id: 'body-9', title: '热量计算方法', summary: '待补充', type: 'doc', draft: true },
        { id: 'body-10', title: '饮食记录工具', summary: '待补充', type: 'doc', draft: true },
      ]},
      { id: 'nutri-supplement', title: '补剂常识', summary: '蛋白粉、肌酸、维生素。', items: [
        { id: 'body-11', title: '常用补剂指南', summary: '待补充', type: 'doc', draft: true },
        { id: 'body-12', title: '补剂的误区', summary: '待补充', type: 'doc', draft: true },
      ]},
    ],
  },
  {
    hub: 'body',
    id: 'diet',
    title: '饮食管理',
    subtitle: '饮食结构 / 备餐 / 误区',
    description: '把营养学变成一日三餐。',
    icon: 'utensils',
    color: 'var(--orange)',
    soft: 'var(--orange-soft)',
    groups: [
      { id: 'diet-structure', title: '饮食结构', summary: '如何搭配每一餐。', items: [
        { id: 'body-13', title: '一日三餐搭配', summary: '待补充', type: 'doc', draft: true },
        { id: 'body-14', title: '增肌/减脂期饮食差异', summary: '待补充', type: 'doc', draft: true },
      ]},
      { id: 'diet-mealprep', title: '备餐方法', summary: '省时省力的实操方案。', items: [
        { id: 'body-15', title: '一周备餐指南', summary: '待补充', type: 'doc', draft: true },
        { id: 'body-16', title: '外食策略', summary: '待补充', type: 'doc', draft: true },
      ]},
      { id: 'diet-myths', title: '饮食误区', summary: '那些听起来对但其实错的。', items: [
        { id: 'body-17', title: '常见饮食谣言', summary: '待补充', type: 'doc', draft: true },
        { id: 'body-18', title: '极端饮食的危害', summary: '待补充', type: 'doc', draft: true },
      ]},
    ],
  },
  {
    hub: 'body',
    id: 'recovery',
    title: '恢复与心理',
    subtitle: '睡眠 / 压力 / 运动心理',
    description: '休息也是训练的一部分。',
    icon: 'moon',
    color: 'var(--purple)',
    soft: 'var(--purple-soft)',
    groups: [
      { id: 'recovery-sleep', title: '睡眠科学', summary: '睡眠质量如何影响身体。', items: [
        { id: 'body-19', title: '睡眠与恢复', summary: '待补充', type: 'doc', draft: true },
        { id: 'body-20', title: '改善睡眠的方法', summary: '待补充', type: 'doc', draft: true },
      ]},
      { id: 'recovery-stress', title: '压力管理', summary: '皮质醇与体重的关系。', items: [
        { id: 'body-21', title: '压力与身体的关系', summary: '待补充', type: 'doc', draft: true },
        { id: 'body-22', title: '减压方法', summary: '待补充', type: 'doc', draft: true },
      ]},
      { id: 'recovery-mindset', title: '运动心理', summary: '坚持的底层逻辑。', items: [
        { id: 'body-23', title: '动机与习惯', summary: '待补充', type: 'doc', draft: true },
        { id: 'body-24', title: '突破平台期', summary: '待补充', type: 'doc', draft: true },
      ]},
    ],
  },

  // ─── 摄影 Hub ───
  {
    hub: 'photo',
    id: 'optics',
    title: '光学基础',
    subtitle: '曝光 / 镜头 / 传感器',
    description: '理解相机在做什么。',
    icon: 'camera',
    color: 'var(--cyan)',
    soft: 'var(--cyan-soft)',
    groups: [
      { id: 'optics-exposure', title: '曝光原理', summary: '光圈、快门、ISO 的关系。', items: [
        { id: 'photo-1', title: '曝光三要素', summary: '待补充', type: 'doc', draft: true },
        { id: 'photo-2', title: '测光与曝光补偿', summary: '待补充', type: 'doc', draft: true },
      ]},
      { id: 'optics-lens', title: '镜头特性', summary: '焦距、景深与透视。', items: [
        { id: 'photo-3', title: '焦距与视角', summary: '待补充', type: 'doc', draft: true },
        { id: 'photo-4', title: '景深控制', summary: '待补充', type: 'doc', draft: true },
      ]},
      { id: 'optics-sensor', title: '传感器', summary: '画幅、像素与动态范围。', items: [
        { id: 'photo-5', title: '全画幅与残幅', summary: '待补充', type: 'doc', draft: true },
        { id: 'photo-6', title: '动态范围与噪点', summary: '待补充', type: 'doc', draft: true },
      ]},
    ],
  },
  {
    hub: 'photo',
    id: 'composition',
    title: '构图与视觉',
    subtitle: '构图法则 / 视觉重量 / 减法',
    description: '让画面会说话。',
    icon: 'layout',
    color: 'var(--green)',
    soft: 'var(--green-soft)',
    groups: [
      { id: 'comp-classic', title: '经典构图', summary: '三分法、引导线、框架。', items: [
        { id: 'photo-7', title: '构图法则详解', summary: '待补充', type: 'doc', draft: true },
        { id: 'photo-8', title: '打破规则的构图', summary: '待补充', type: 'doc', draft: true },
      ]},
      { id: 'comp-weight', title: '视觉重量', summary: '大小、颜色、位置的平衡。', items: [
        { id: 'photo-9', title: '视觉重量与平衡', summary: '待补充', type: 'doc', draft: true },
        { id: 'photo-10', title: '留白的艺术', summary: '待补充', type: 'doc', draft: true },
      ]},
      { id: 'comp-minimal', title: '减法思维', summary: '画面里只留必要的元素。', items: [
        { id: 'photo-11', title: '减法构图', summary: '待补充', type: 'doc', draft: true },
        { id: 'photo-12', title: '主体与背景的关系', summary: '待补充', type: 'doc', draft: true },
      ]},
    ],
  },
  {
    hub: 'photo',
    id: 'lighting',
    title: '光线与色彩',
    subtitle: '自然光 / 人造光 / 色彩理论',
    description: '摄影就是用光写作。',
    icon: 'sun',
    color: 'var(--purple)',
    soft: 'var(--purple-soft)',
    groups: [
      { id: 'light-natural', title: '自然光', summary: '不同时段和天气的光线特征。', items: [
        { id: 'photo-13', title: '黄金时段与蓝调时刻', summary: '待补充', type: 'doc', draft: true },
        { id: 'photo-14', title: '阴天和室内自然光', summary: '待补充', type: 'doc', draft: true },
      ]},
      { id: 'light-artificial', title: '人造光', summary: '闪光灯和持续光的基本用法。', items: [
        { id: 'photo-15', title: '闪光灯基础', summary: '待补充', type: 'doc', draft: true },
        { id: 'photo-16', title: '布光方案', summary: '待补充', type: 'doc', draft: true },
      ]},
      { id: 'light-color', title: '色彩理论', summary: '色温、互补色与色调统一。', items: [
        { id: 'photo-17', title: '色温与白平衡', summary: '待补充', type: 'doc', draft: true },
        { id: 'photo-18', title: '色彩搭配与情绪', summary: '待补充', type: 'doc', draft: true },
      ]},
    ],
  },
  {
    hub: 'photo',
    id: 'post',
    title: '后期处理',
    subtitle: 'RAW / 调色 / 工作流',
    description: '让照片完成最后一步。',
    icon: 'sliders',
    color: 'var(--orange)',
    soft: 'var(--orange-soft)',
    groups: [
      { id: 'post-raw', title: 'RAW 处理', summary: '为什么不应该只拍 JPG。', items: [
        { id: 'photo-19', title: 'RAW vs JPG', summary: '待补充', type: 'doc', draft: true },
        { id: 'photo-20', title: 'RAW 基本调整', summary: '待补充', type: 'doc', draft: true },
      ]},
      { id: 'post-grading', title: '调色逻辑', summary: '从校正到风格化的思路。', items: [
        { id: 'photo-21', title: '色彩校正', summary: '待补充', type: 'doc', draft: true },
        { id: 'photo-22', title: '风格化调色', summary: '待补充', type: 'doc', draft: true },
      ]},
      { id: 'post-workflow', title: '批量工作流', summary: '高效处理大量照片。', items: [
        { id: 'photo-23', title: '预设制作与应用', summary: '待补充', type: 'doc', draft: true },
        { id: 'photo-24', title: '批量导出与管理', summary: '待补充', type: 'doc', draft: true },
      ]},
    ],
  },

  // ─── 美食 Hub ───
  {
    hub: 'food',
    id: 'map',
    title: '美食地图',
    subtitle: '探店 / 品类 / 隐藏菜单',
    description: '值得专程去吃的地方。',
    icon: 'map-pin',
    color: 'var(--orange)',
    soft: 'var(--orange-soft)',
    groups: [
      { id: 'map-city', title: '城市探店', summary: '各城市值得去的餐厅和小店。', items: [
        { id: 'food-1', title: '本地美食推荐', summary: '待补充', type: 'doc', draft: true },
        { id: 'food-2', title: '旅行美食攻略', summary: '待补充', type: 'doc', draft: true },
      ]},
      { id: 'map-category', title: '品类指南', summary: '火锅、烧烤、小吃的推荐。', items: [
        { id: 'food-3', title: '火锅指南', summary: '待补充', type: 'doc', draft: true },
        { id: 'food-4', title: '街头小吃', summary: '待补充', type: 'doc', draft: true },
      ]},
      { id: 'map-hidden', title: '隐藏菜单', summary: '本地人才知道的吃法。', items: [
        { id: 'food-5', title: '隐藏吃法合集', summary: '待补充', type: 'doc', draft: true },
        { id: 'food-6', title: '点单技巧', summary: '待补充', type: 'doc', draft: true },
      ]},
    ],
  },
  {
    hub: 'food',
    id: 'cooking',
    title: '烹饪原理',
    subtitle: '热传递 / 调味 / 食材处理',
    description: '知道为什么才能做得更好。',
    icon: 'flame',
    color: 'var(--green)',
    soft: 'var(--green-soft)',
    groups: [
      { id: 'cook-heat', title: '热传递', summary: '煎炒烤炸蒸煮背后的科学。', items: [
        { id: 'food-7', title: '烹饪方式与热传递', summary: '待补充', type: 'doc', draft: true },
        { id: 'food-8', title: '美拉德反应', summary: '待补充', type: 'doc', draft: true },
      ]},
      { id: 'cook-seasoning', title: '调味逻辑', summary: '咸甜酸辣鲜的搭配规则。', items: [
        { id: 'food-9', title: '基础调味公式', summary: '待补充', type: 'doc', draft: true },
        { id: 'food-10', title: '复合调味技巧', summary: '待补充', type: 'doc', draft: true },
      ]},
      { id: 'cook-prep', title: '食材处理', summary: '切法、腌制和预处理技巧。', items: [
        { id: 'food-11', title: '食材预处理', summary: '待补充', type: 'doc', draft: true },
        { id: 'food-12', title: '腌制与入味', summary: '待补充', type: 'doc', draft: true },
      ]},
    ],
  },
  {
    hub: 'food',
    id: 'ingredients',
    title: '食材百科',
    subtitle: '蔬果 / 肉蛋 / 调料',
    description: '认识你盘子里的每样东西。',
    icon: 'leaf',
    color: 'var(--accent)',
    soft: 'var(--accent-soft)',
    groups: [
      { id: 'ingr-veggie', title: '蔬菜水果', summary: '时令选择和保存方法。', items: [
        { id: 'food-13', title: '时令蔬果表', summary: '待补充', type: 'doc', draft: true },
        { id: 'food-14', title: '蔬果保存方法', summary: '待补充', type: 'doc', draft: true },
      ]},
      { id: 'ingr-protein', title: '肉蛋水产', summary: '部位区别和烹饪适配。', items: [
        { id: 'food-15', title: '猪牛羊部位指南', summary: '待补充', type: 'doc', draft: true },
        { id: 'food-16', title: '海鲜选购与处理', summary: '待补充', type: 'doc', draft: true },
      ]},
      { id: 'ingr-spice', title: '调料香料', summary: '常用调味料的特点和用法。', items: [
        { id: 'food-17', title: '基础调味料', summary: '待补充', type: 'doc', draft: true },
        { id: 'food-18', title: '香料入门', summary: '待补充', type: 'doc', draft: true },
      ]},
    ],
  },
  {
    hub: 'food',
    id: 'culture',
    title: '饮食文化',
    subtitle: '地域 / 礼仪 / 历史',
    description: '食物背后的故事。',
    icon: 'book-open',
    color: 'var(--purple)',
    soft: 'var(--purple-soft)',
    groups: [
      { id: 'culture-regional', title: '地域饮食', summary: '八大菜系和地方特色。', items: [
        { id: 'food-19', title: '八大菜系概览', summary: '待补充', type: 'doc', draft: true },
        { id: 'food-20', title: '地方特色小吃', summary: '待补充', type: 'doc', draft: true },
      ]},
      { id: 'culture-etiquette', title: '饮食礼仪', summary: '中西餐桌的基本规矩。', items: [
        { id: 'food-21', title: '中式餐桌礼仪', summary: '待补充', type: 'doc', draft: true },
        { id: 'food-22', title: '西式用餐礼仪', summary: '待补充', type: 'doc', draft: true },
      ]},
      { id: 'culture-history', title: '食物历史', summary: '那些菜是怎么来的。', items: [
        { id: 'food-23', title: '经典菜的起源', summary: '待补充', type: 'doc', draft: true },
        { id: 'food-24', title: '饮食变迁', summary: '待补充', type: 'doc', draft: true },
      ]},
    ],
  },
];
