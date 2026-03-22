export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  completion: number;
  techStack: string[];
  highlights: string[];
  teachingMaterials: TeachingMaterial[];
  github?: string;
  status: 'active' | 'coming';
}

export interface TeachingMaterial {
  title: string;
  type: 'doc' | 'html' | 'ppt' | 'diagram';
  description: string;
  path?: string;
}

export const projects: Project[] = [
  {
    id: 'knowledge',
    name: '智能知识库 RAG 系统',
    subtitle: '对标 RAGFlow / Dify',
    description:
      '基于 RAG（检索增强生成）技术的智能知识库系统，实现文档上传、智能分块、向量化存储、语义检索、LLM 精准回答的完整链路。',
    completion: 85,
    techStack: ['Vue 3', 'Spring Boot 3', 'JPA', 'OpenAI API', 'Embedding', '向量检索'],
    highlights: [
      '完整 RAG 链路：解析 → 分块 → 向量化 → 检索 → LLM 回答',
      '29 个 API 接口，前后端完整对接',
      '支持 Embedding 向量化 + 余弦相似度检索',
      '配套 9 章 RAG 体系精讲课程（2189 行互动课件）',
    ],
    teachingMaterials: [
      { title: '00-环境准备与运行', type: 'doc', description: '开发环境搭建、依赖安装、项目启动' },
      { title: '01-项目演示与介绍', type: 'doc', description: '功能演示、架构总览、核心概念' },
      { title: '02-项目架构设计', type: 'doc', description: '系统架构、模块划分、数据流设计' },
      { title: '03-核心设计详解', type: 'doc', description: 'RAG 链路实现细节、关键代码走读' },
      { title: 'RAG 技术体系精讲', type: 'html', description: '9 章完整 RAG 体系，通俗 + 专业双讲解，含代码示例和 SVG 架构图' },
      { title: '复试模拟面试', type: 'html', description: '6 轮 23 题研究生复试模拟，含参考答案、踩雷回答、救场技巧' },
      { title: '面试叙事导航图', type: 'html', description: '面试叙事导航（研究生 / 求职双版本）' },
      { title: '项目介绍 PPT', type: 'ppt', description: '项目介绍演示文稿' },
      { title: '总体架构图', type: 'diagram', description: 'RAG 系统整体架构（Excalidraw）' },
      { title: '核心链路图', type: 'diagram', description: 'RAG 核心处理链路（Excalidraw）' },
    ],
    github: 'https://github.com/anjing-le/agent-knowledge',
    status: 'active',
  },
  {
    id: 'aigc',
    name: 'AIGC 多模态创作平台',
    subtitle: '全模态 AI 创作',
    description:
      '全模态 AI 创作平台，集成 Google Gemini / Veo 等前沿模型，支持文生图、文生视频、图生图、图生视频、TTS 等多模态能力。',
    completion: 92,
    techStack: ['Vue 3', 'Spring Boot 3', 'Google Gemini', 'Google Veo', 'TTS', 'Agent'],
    highlights: [
      '智能生成 Agent：意图分析 + 自动路由到最佳模型',
      '多模态覆盖：文生图/视频/音频 + 图生图/视频',
      '创作工作台 + 灵感广场 + 资产管理三位一体',
      '对接 Google 最新 Gemini & Veo 模型',
    ],
    teachingMaterials: [
      { title: '00-环境准备与运行', type: 'doc', description: '开发环境搭建、API Key 配置' },
      { title: '01-项目演示与介绍', type: 'doc', description: '功能演示、创作流程、核心概念' },
      { title: '02-项目架构设计', type: 'doc', description: '系统架构、Agent 设计、模型路由' },
      { title: '03-核心设计详解', type: 'doc', description: 'Agent 意图分析、多模态调度实现' },
      { title: '面试叙事导航图', type: 'html', description: '面试叙事导航（研究生 / 求职双版本）' },
    ],
    github: 'https://github.com/anjing-le/agent-aigc',
    status: 'active',
  },
  {
    id: 'customer-service',
    name: '智能电商客服系统',
    subtitle: '生产级客服方案',
    description:
      '生产级电商客服系统，支持意图识别、知识库检索、多轮对话、场景配置，完整前后端 + 54 个业务接口。',
    completion: 95,
    techStack: ['Vue 3', 'Spring Boot 3', 'JPA', 'MySQL', 'LLM', '意图识别'],
    highlights: [
      '54 个业务接口：Chat 8 + Knowledge 28 + Scene 18',
      '10 个 JPA 实体，完整数据建模',
      'iPhone 风格对话界面 + 四栏管理布局',
      '场景化配置：意图、提示词、规则三维管理',
    ],
    teachingMaterials: [
      { title: '00-环境准备与运行', type: 'doc', description: '开发环境搭建、数据库配置' },
      { title: '01-项目演示与介绍', type: 'doc', description: '功能演示、对话流程、核心概念' },
      { title: '02-项目架构设计', type: 'doc', description: '系统架构、对话引擎、知识管理' },
      { title: '03-核心设计详解', type: 'doc', description: '对话链路、意图识别、知识检索实现' },
      { title: '面试叙事导航图', type: 'html', description: '面试叙事导航（研究生 / 求职双版本）' },
    ],
    github: 'https://github.com/anjing-le/agent-customer-service',
    status: 'active',
  },
  {
    id: 'scaffolding',
    name: 'AI 开发脚手架',
    subtitle: '所有项目的基石',
    description:
      '所有 Agent 项目的基础工程脚手架，涵盖 AI 协作开发流程、Cursor Rules 最佳实践、前后端工程化规范。',
    completion: 55,
    techStack: ['Vue 3.5', 'Vite 7', 'Spring Boot 3.4', 'Cursor Rules', 'Prompts'],
    highlights: [
      'Cursor Rules 12 条 + Prompts 4 个（前端）',
      'AI 时代工程化协作最佳实践',
      '游客模式：无需后端可体验完整 UI',
      '20+ 页面模板，可快速生长新项目',
    ],
    teachingMaterials: [
      { title: '课程大纲', type: 'doc', description: '脚手架课程完整大纲' },
      { title: '讲解提纲', type: 'doc', description: '核心知识点和演示步骤' },
      { title: '关键概念', type: 'doc', description: '工程化核心概念讲解' },
      { title: '演示步骤', type: 'doc', description: '实操演示 step-by-step' },
    ],
    github: 'https://github.com/anjing-le/agent-dev-scaffolding',
    status: 'active',
  },
];
