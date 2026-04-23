# anjing-site 设计与进度

> 个人 IP 知识导航站 · anjing.cc · 更新于 2026-04-14

## 项目概况

| 项 | 值 |
|---|---|
| 框架 | Astro 5 (SSG) |
| 部署 | Cloudflare Pages，Git 推送自动构建 |
| 域名 | anjing.cc（Cloudflare Registrar） |
| 仓库 | anjing-le/anjing（SSH github-personal） |
| 构建页数 | 58 页 |

## 站点结构（5 Hub）

```
/                  总入口："你好，我是安静"
├── /cs            计算机（4 画像 + 4 知识域）
├── /finance       金融（4 画像 + 4 知识域）
├── /body          身体（4 画像 + 4 知识域）
├── /photo         摄影（4 画像 + 4 知识域）
└── /food          美食（4 画像 + 4 知识域）
```

每个 Hub 结构一致：
- **首页** — 三列翻转卡（"我是谁" / "我能帮你什么" / "你会收获什么"）
- **画像路径 ×4** — 水平时间线 + 资源面板
- **知识域 ×4** — 左目录右内容 + Markdown 正文渲染

## Hub 详细内容

### 计算机 /cs
- 画像：考研复试 / 校招求职 / 转型跨行 / 职场进阶
- 知识域：计算机基础 / 工程实践 / AI 与大模型 / 前沿探索

### 金融 /finance
- 画像：短线交易 / 中短线波段 / 中线策略 / 长线配置
- 知识域：金融学 / 经济学 / 交易学 / 风险管理
- 已填充内容：交易学 6 篇 Markdown（K 线形态、量价均线、入场止损、持有退出、情绪纪律、认知偏差）

### 身体 /body
- 画像：增肌塑形 / 减脂瘦身 / 体态改善 / 长期维护
- 知识域：训练科学 / 营养学 / 饮食管理 / 恢复与心理

### 摄影 /photo
- 画像：零基础入门 / 进阶提升 / 专题创作 / 后期修图
- 知识域：光学基础 / 构图与视觉 / 光线与色彩 / 后期处理

### 美食 /food
- 画像：厨房入门 / 家常进阶 / 烘焙甜点 / 异国料理
- 知识域：美食地图 / 烹饪原理 / 食材百科 / 饮食文化

## 视觉设计要点

| 要素 | 描述 |
|---|---|
| 调色系统 | CSS 变量，每个 Hub 独立色调 |
| 卡片交互 | 雾化消融（Mist Dissolve）翻转效果 |
| Hub 首页三区色块 | 指引区（淡蓝 rgba）、路径区（淡绿 rgba）、知识区（淡紫 rgba），opacity 0.03 |
| 三区布局 | 上方三列 grid + 下方 grid-template-columns: repeat(3,1fr)，路径占 1 列，知识占 2 列 |
| Hub 首页简洁化 | 去除 title/subtitle/pathLead 等引导文字，让卡片自己说话 |
| Favicon | 蝴蝶 SVG |
| 入口卡片 | 紧凑尺寸，内容饱满 |

## 技术实现关键点

| 技术点 | 实现方式 |
|---|---|
| 动态路由 | `[hub]/index.astro` + `[hub]/paths/[slug].astro` + `[hub]/knowledge/[slug].astro` |
| Hub 路由过滤 | `getStaticPaths` 中使用 `!!path.hub` / `!!domain.hub`，自动纳入新 Hub |
| Markdown 管线 | `import.meta.glob('/src/content/knowledge/**/*.md', { eager: true })` → `compiledContent()` |
| 内容集合 | `src/content.config.ts` 定义 schema（hub/domain/title/summary/type），md 文件需 frontmatter |
| 主题映射 | `colorToTheme(path.color)` 自动从 path 配色推导主题名 |
| 新增 Hub | 只需加数据 + 注册路由，不新建组件 |

## 数据文件清单

```
src/data/
├── hubs.ts          # 总入口 5 个卡片
├── paths.ts         # 20 条画像路径（5 Hub × 4）
├── knowledge.ts     # 20 个知识域（5 Hub × 4）
├── finance-home.ts  # 金融 Hub 首页数据
├── body-home.ts     # 身体 Hub 首页数据
├── photo-home.ts    # 摄影 Hub 首页数据
├── food-home.ts     # 美食 Hub 首页数据
├── projects.ts      # 项目数据（计算机赛道）
└── site.ts          # 全局配置
```

## 已完成里程碑

1. **多 Hub 架构** — 三层路由 + 5 Hub 全部就位
2. **视觉系统** — CSS 变量 + 雾化消融 + 三区色块 + 紧凑排版
3. **内容管线** — Markdown → Astro 编译 → KnowledgePage 渲染
4. **首批内容** — 金融交易学 6 篇完整文章
5. **Favicon** — 蝴蝶 SVG 替换
6. **部署** — Cloudflare Pages + anjing.cc 域名

## 待完成

| 优先级 | 模块 | 说明 |
|---|---|---|
| P1 | 知识域内容 | 除交易学外，其余 19 个知识域 KnowledgeItem 全部 draft: true |
| P2 | Footer 引流 | 3 个 promo-card 内容待填充 |
| P2 | 微信二维码 | 当前占位框 |
| P3 | Header 导航栏 | 组件已有，未启用 |
| P3 | 视频嵌入 | 数据结构已支持 embedUrl，渲染逻辑待实现 |
| P3 | CDN 加速 | public/assets/hubs/ 目录已预留 |
| P4 | 旧路由清理 | /paths/* /knowledge/* 旧路由待确认后删除 |

## 变更日志

### 2026-04-14
- 新增 3 个 Hub：身体(body)、摄影(photo)、美食(food)
- 每个新 Hub 包含：首页数据 + 4 画像路径 + 4 知识域
- 总入口从 2+1预留 → 5 个完整入口卡片
- Hub 首页去除 title/subtitle/pathLead 引导文字
- Hub 首页三区色块（0.03 opacity）+ grid 精确对齐
- 知识卡片背面增加 group summary 提升内容密度
- Favicon 更换为蝴蝶 SVG
- Markdown 内容管线打通（import.meta.glob + compiledContent）
- 金融交易学 6 篇 md 内容填充 + frontmatter 适配
- 构建验证：58 页全部通过
