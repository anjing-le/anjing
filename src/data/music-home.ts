import type { HomeCard, HomeLinkCard } from './finance-home';

export const musicTrioCards: HomeCard[] = [
  {
    title: '我与音乐',
    color: 'var(--yellow)',
    items: [
      { dot: 'var(--yellow)', label: '长期听歌的人', desc: '把喜欢的声音留在日常里' },
      { dot: 'var(--cyan)', label: '不设风格边界', desc: '从流行、摇滚到电子与古典' },
      { dot: 'var(--pink)', label: '感受先于结论', desc: '先被打动，再慢慢理解' },
    ],
  },
  {
    title: '我在整理什么',
    color: 'var(--cyan)',
    items: [
      { dot: 'var(--yellow)', label: '听歌记录', desc: '歌单、专辑和现场留下的瞬间' },
      { dot: 'var(--cyan)', label: '音乐理解', desc: '旋律、节奏、和声与音色' },
      { dot: 'var(--purple)', label: '创作实验', desc: '从一个念头到一段声音' },
    ],
  },
  {
    title: '你会在这里看到',
    color: 'var(--pink)',
    items: [
      { dot: 'var(--yellow)', label: '私人歌单', desc: '不同时间和情绪里的声音' },
      { dot: 'var(--pink)', label: '作品拆解', desc: '聊聊一首歌为什么动人' },
      { dot: 'var(--green)', label: '音乐表达', desc: '记录自己的声音与作品' },
    ],
  },
];

export const musicPathCards: HomeLinkCard[] = [
  {
    title: '认真听歌',
    hook: '先听见，再理解',
    color: 'var(--yellow)',
    href: '/music/paths/listen',
    items: ['从喜欢开始', '听见旋律和节奏', '留下自己的感受'],
  },
  {
    title: '建立审美',
    hook: '找到自己喜欢什么',
    color: 'var(--cyan)',
    href: '/music/paths/taste',
    items: ['拓宽风格边界', '听专辑与现场', '形成自己的选择'],
  },
  {
    title: '理解音乐',
    hook: '听懂声音里的结构',
    color: 'var(--purple)',
    href: '/music/paths/theory',
    items: ['节奏与旋律', '和声与段落', '音色与情绪'],
  },
  {
    title: '开始表达',
    hook: '从感受到作品',
    color: 'var(--pink)',
    href: '/music/paths/create',
    items: ['记录灵感', '完成一个片段', '发布自己的声音'],
  },
];

export const musicKnowledgeCards: HomeLinkCard[] = [
  {
    title: '聆听与审美',
    hook: '喜欢也可以被理解',
    color: 'var(--yellow)',
    href: '/music/knowledge/listening',
    items: ['听歌方法 · 从情绪到细节', '专辑与现场 · 完整地进入作品', '私人歌单 · 留下自己的听觉坐标'],
  },
  {
    title: '乐理与结构',
    hook: '听懂一首歌怎么成立',
    color: 'var(--cyan)',
    href: '/music/knowledge/music-theory',
    items: ['节奏与旋律 · 音乐如何向前走', '和声与段落 · 情绪如何被组织', '形式分析 · 一首歌的完整结构'],
  },
  {
    title: '声音与制作',
    hook: '声音也有它的质地',
    color: 'var(--purple)',
    href: '/music/knowledge/sound-production',
    items: ['音色与乐器 · 声音从哪里来', '编曲与录音 · 想法如何被听见', '混音与空间 · 让声音站在一起'],
  },
  {
    title: '音乐与文化',
    hook: '听见声音背后的世界',
    color: 'var(--pink)',
    href: '/music/knowledge/music-culture',
    items: ['流派与场景 · 音乐如何生长', '音乐人与时代 · 作品从何而来', '现场与社群 · 人们为何一起聆听'],
  },
];
