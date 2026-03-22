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
];
