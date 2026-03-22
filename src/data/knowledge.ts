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
    hub: 'ai-lab',
    id: 'engineering',
    title: '工程基础',
    subtitle: 'HTTP / 前后端 / 工程化规范',
    description: '写 AI 应用之前，先把工程基本功打扎实。',
    icon: 'code',
    color: 'var(--accent)',
    soft: 'var(--accent-soft)',
    groups: [
      {
        id: 'engineering-foundation',
        title: '基础知识',
        summary: '先把开发和协作的基础打通。',
        items: [
          { id: 'eng-1', title: 'HTTP 与接口', summary: '待补充', type: 'doc', draft: true },
          { id: 'eng-2', title: '前后端协作', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'engineering-system',
        title: '系统运行',
        summary: '理解程序和系统是怎么跑起来的。',
        items: [
          { id: 'eng-3', title: '操作系统基础', summary: '待补充', type: 'doc', draft: true },
          { id: 'eng-4', title: '网络与协议', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'engineering-practice',
        title: '工程实践',
        summary: '把知识落到代码组织和交付方式上。',
        items: [
          { id: 'eng-5', title: '设计模式', summary: '待补充', type: 'doc', draft: true },
          { id: 'eng-6', title: '单元测试', summary: '待补充', type: 'doc', draft: true },
        ],
      },
    ],
  },
  {
    hub: 'ai-lab',
    id: 'llm-basics',
    title: 'LLM 基础',
    subtitle: '大模型原理 / Prompt / RAG',
    description: '理解大模型怎么工作，是做好 AI 应用的前提。',
    icon: 'bot',
    color: 'var(--green)',
    soft: 'var(--green-soft)',
    groups: [
      {
        id: 'llm-basics-principles',
        title: '模型原理',
        summary: '理解模型、上下文和 Token 的基础概念。',
        items: [
          { id: 'llm-1', title: 'Transformer 基础', summary: '待补充', type: 'doc', draft: true },
          { id: 'llm-2', title: '上下文与 Token', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'llm-basics-prompt',
        title: '提示与检索',
        summary: 'Prompt 和 RAG 是最常用的落地手段。',
        items: [
          { id: 'llm-3', title: 'Prompt 设计', summary: '待补充', type: 'doc', draft: true },
          { id: 'llm-4', title: 'RAG 入门', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'llm-basics-eval',
        title: '训练与评估',
        summary: '让模型能力更稳定、更可控。',
        items: [
          { id: 'llm-5', title: 'Embedding 与检索', summary: '待补充', type: 'doc', draft: true },
          { id: 'llm-6', title: '评估方法', summary: '待补充', type: 'doc', draft: true },
        ],
      },
    ],
  },
  {
    hub: 'ai-lab',
    id: 'llm-apps',
    title: 'LLM 应用',
    subtitle: 'Agent / 多模态 / 系统设计',
    description: '从原理到落地，掌握 AI 应用的系统化设计方法。',
    icon: 'layers',
    color: 'var(--purple)',
    soft: 'var(--purple-soft)',
    groups: [
      {
        id: 'llm-apps-agent',
        title: 'Agent 设计',
        summary: '围绕工具调用和推理流程设计应用。',
        items: [
          { id: 'app-1', title: 'Agent 框架', summary: '待补充', type: 'doc', draft: true },
          { id: 'app-2', title: '任务编排', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'llm-apps-multi',
        title: '多模态能力',
        summary: '图像、音频、视频等多模态场景。',
        items: [
          { id: 'app-3', title: '图文理解', summary: '待补充', type: 'doc', draft: true },
          { id: 'app-4', title: '多模态输入输出', summary: '待补充', type: 'video', draft: true },
        ],
      },
      {
        id: 'llm-apps-sys',
        title: '系统工程',
        summary: '从设计到交付，保证应用能落地。',
        items: [
          { id: 'app-5', title: '服务拆分', summary: '待补充', type: 'doc', draft: true },
          { id: 'app-6', title: '监控与成本', summary: '待补充', type: 'doc', draft: true },
        ],
      },
    ],
  },
  {
    hub: 'ai-lab',
    id: 'frontier',
    title: '前沿探索',
    subtitle: 'Agentic / OpenClaw',
    description: '跟踪 AI 领域最前沿的技术方向和开源生态。',
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
    id: 'market-basics',
    title: '市场基础',
    subtitle: '交易规则 / 市场结构 / 常识框架',
    description: '先把金融市场的基本规则和运行方式搞清楚。',
    icon: 'globe',
    color: 'var(--accent)',
    soft: 'var(--accent-soft)',
    groups: [
      {
        id: 'finance-market-structure',
        title: '市场结构',
        summary: '理解市场参与者和交易机制。',
        items: [
          { id: 'fin-1', title: '交易规则', summary: '待补充', type: 'doc', draft: true },
          { id: 'fin-2', title: '市场参与者', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'finance-market-rhythm',
        title: '节奏认知',
        summary: '理解不同市场阶段的节奏变化。',
        items: [
          { id: 'fin-3', title: '开盘与收盘', summary: '待补充', type: 'doc', draft: true },
          { id: 'fin-4', title: '波动与流动性', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'finance-market-notes',
        title: '基础术语',
        summary: '把常见概念先认识一遍。',
        items: [
          { id: 'fin-5', title: '常用术语', summary: '待补充', type: 'doc', draft: true },
          { id: 'fin-6', title: '信息来源', summary: '待补充', type: 'doc', draft: true },
        ],
      },
    ],
  },
  {
    hub: 'finance',
    id: 'technical-analysis',
    title: '技术分析',
    subtitle: 'K 线 / 均线 / 量价关系',
    description: '通过价格和成交量理解市场行为。',
    icon: 'trending-up',
    color: 'var(--green)',
    soft: 'var(--green-soft)',
    groups: [
      {
        id: 'finance-technical-candles',
        title: 'K 线结构',
        summary: '用最基础的图形判断走势。',
        items: [
          { id: 'fin-7', title: 'K 线基础', summary: '待补充', type: 'doc', draft: true },
          { id: 'fin-8', title: '组合形态', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'finance-technical-volume',
        title: '量价关系',
        summary: '价格和成交量要一起看。',
        items: [
          { id: 'fin-9', title: '放量与缩量', summary: '待补充', type: 'doc', draft: true },
          { id: 'fin-10', title: '趋势确认', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'finance-technical-tool',
        title: '工具方法',
        summary: '用工具辅助观察而不是依赖感觉。',
        items: [
          { id: 'fin-11', title: '均线系统', summary: '待补充', type: 'doc', draft: true },
          { id: 'fin-12', title: '指标参考', summary: '待补充', type: 'doc', draft: true },
        ],
      },
    ],
  },
  {
    hub: 'finance',
    id: 'fundamental-analysis',
    title: '基本面研究',
    subtitle: '财报 / 行业 / 估值',
    description: '基本面研究更关注企业本身和行业趋势。',
    icon: 'book-open',
    color: 'var(--orange)',
    soft: 'var(--orange-soft)',
    groups: [
      {
        id: 'finance-fundamental-finance',
        title: '财务理解',
        summary: '先看懂财务数据。',
        items: [
          { id: 'fin-13', title: '利润表', summary: '待补充', type: 'doc', draft: true },
          { id: 'fin-14', title: '资产负债表', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'finance-fundamental-industry',
        title: '行业比较',
        summary: '理解行业格局和竞争位置。',
        items: [
          { id: 'fin-15', title: '行业研究', summary: '待补充', type: 'doc', draft: true },
          { id: 'fin-16', title: '竞品分析', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'finance-fundamental-valuation',
        title: '估值方法',
        summary: '把价格放回估值框架里理解。',
        items: [
          { id: 'fin-17', title: '估值区间', summary: '待补充', type: 'doc', draft: true },
          { id: 'fin-18', title: '安全边际', summary: '待补充', type: 'doc', draft: true },
        ],
      },
    ],
  },
  {
    hub: 'finance',
    id: 'risk-management',
    title: '风控与仓位',
    subtitle: '止损 / 组合 / 回撤',
    description: '先活下来，再谈收益。',
    icon: 'shield',
    color: 'var(--purple)',
    soft: 'var(--purple-soft)',
    groups: [
      {
        id: 'finance-risk-stop',
        title: '止损止盈',
        summary: '明确退出条件。',
        items: [
          { id: 'fin-19', title: '止损规则', summary: '待补充', type: 'doc', draft: true },
          { id: 'fin-20', title: '止盈规则', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'finance-risk-position',
        title: '仓位管理',
        summary: '控制风险暴露。',
        items: [
          { id: 'fin-21', title: '仓位分配', summary: '待补充', type: 'doc', draft: true },
          { id: 'fin-22', title: '分批策略', summary: '待补充', type: 'doc', draft: true },
        ],
      },
      {
        id: 'finance-risk-review',
        title: '复盘机制',
        summary: '把风险管理变成长期习惯。',
        items: [
          { id: 'fin-23', title: '回撤控制', summary: '待补充', type: 'doc', draft: true },
          { id: 'fin-24', title: '复盘清单', summary: '待补充', type: 'doc', draft: true },
        ],
      },
    ],
  },
];
