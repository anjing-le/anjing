# anjing-site 设计与进度

> 个人 IP 知识导航站 · anjing.cc · 更新于 2026-06-01

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
- **知识域 ×4** — 顶部精选目录 + 图文阅读双栏（3:4 图片轮播 | Markdown 正文）

## Hub 详细内容

### 计算机 /cs
- 画像：考研复试 / 校招求职 / 转型跨行 / 职场进阶
- 知识域：计算机基础 / 工程实践 / AI 与大模型 / 前沿探索

### 金融 /finance
- 画像：短线交易 / 中短线波段 / 中线策略 / 长线配置
- 知识域：金融学 / 经济学 / 交易学 / 风险管理
- 已填充内容：交易学 6 篇 Markdown

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
| Hub 首页简洁化 | 去除 title/subtitle/pathLead 等引导文字，让卡片自己说话 |
| 全站外壳 | Header 固定导航 + 移动端菜单；Footer 社交入口 + 3 张引流卡 |
| 知识域详情页 | 顶部精选目录 + 图文阅读双栏，优先展示已有正文/图片的条目 |
| 内容卡片 | 3:4 竖版比例（小红书风格），桌面媒体列约 330px 宽 |
| Favicon | 蝴蝶 SVG |

## 知识域详情页设计（KnowledgePage）

### 精选目录 + 图文阅读双栏

```
┌────────────────────────────────────┐
│ 01 标题A  02 标题B  03 标题C        │
└────────────────────────────────────┘
┌───────────────┐  ┌─────────────────┐
│               │  │ 图文 · 01/03     │
│   3:4 卡片     │  │ Markdown 正文     │
│   图片轮播     │  │ 精简说明/建议      │
│               │  │                 │
└───────────────┘  └─────────────────┘
     媒体区              正文区
```

### 内容展示优先级
1. **可用条目筛选** → 优先展示非草稿或已有 Markdown / cover / slides 的条目
2. **有 slides** → 图片轮播（封面 + 3~5 张内容图，左右切换）
3. **有 Markdown** → prose 渲染（兼容已有的交易学 6 篇 md）
4. **都没有** → 占位卡片（"制作中"）

### 轮播交互
- 左右箭头（hover 出现）
- 底部指示点（当前页拉长高亮）
- 右上角计数器（1/5）
- 键盘方向键
- 触摸滑动（移动端）

### 图片数据结构
```typescript
{
  cover: '/assets/hubs/cs/knowledge/cs-fundamentals/cs-1/cover.png',
  slides: [
    { url: '/assets/hubs/cs/knowledge/cs-fundamentals/cs-1/resource-map.png', alt: '内容页1' },
  ],
}
```

## 内容生产流程

```
大纲定稿 → AIGC 工具制作图文 → 图片放入 public/assets/ → knowledge.ts 填充 cover + slides → 构建部署
```

- 每个条目 = 1 张封面图 + 3~5 张内容图
- 图片存储路径：`public/assets/hubs/{hub}/knowledge/{domain}/{item-id}/`
- AIGC 工具（anjing-aigc）负责批量生产图文内容

## 小红书首页常青内容

当前维护 4 篇常青 Brief，后续交给 anjing-aigc 生成小红书正文与封面：

| 编号 | 主题 | 作用 |
|---|---|---|
| 00 | 安静是谁 / 长期主义生活系统 | 总入口：解释个人 IP、长期主义、多赛道沉淀 |
| 01 | 计算机与大模型应用 | 专业入口：工程背景、AI 应用落地、免费知识分享 |
| 02 | 金融交易与市场认知 | 认知入口：市场观察、交易体系、风险边界 |
| 03 | 音乐与长期审美 | 人格入口：情绪、审美、练习、长期陪伴感 |

详细内容见 `project_document/xiaohongshu-pinned-posts.md`。

## 技术实现关键点

| 技术点 | 实现方式 |
|---|---|
| 动态路由 | `[hub]/index.astro` + `[hub]/paths/[slug].astro` + `[hub]/knowledge/[slug].astro` |
| Hub 路由过滤 | `getStaticPaths` 中使用 `!!path.hub` / `!!domain.hub`，自动纳入新 Hub |
| Markdown 管线 | `import.meta.glob('/src/content/knowledge/**/*.md', { eager: true })` → `compiledContent()` |
| 图片轮播 | cover + slides → allSlides 数组 → carousel 组件（淡入切换） |
| 可用内容筛选 | `readyItems` 优先展示非草稿或已有正文/图片的条目，避免空条目干扰验收 |
| 知识域数据扁平化 | `domain.groups.flatMap(g => g.items)` 在组件层拉平，数据层保留分组 |
| 主题映射 | `colorToTheme(path.color)` 自动从 path 配色推导主题名 |
| 新增 Hub | 只需加数据 + 注册路由，不新建组件 |

## 数据文件清单

```
src/data/
├── hubs.ts          # 总入口 5 个卡片
├── paths.ts         # 20 条画像路径（5 Hub × 4）
├── knowledge.ts     # 20 个知识域（5 Hub × 4），含 KnowledgeSlide 类型
├── finance-home.ts  # 金融 Hub 首页数据
├── body-home.ts     # 身体 Hub 首页数据
├── photo-home.ts    # 摄影 Hub 首页数据
├── food-home.ts     # 美食 Hub 首页数据
├── projects.ts      # 项目数据（计算机赛道）
└── site.ts          # 全局配置
```

## 已完成里程碑

1. **多 Hub 架构** — 三层路由 + 5 Hub 全部就位
2. **视觉系统** — CSS 变量 + 雾化消融 + 三区色块 + 虚线框
3. **知识域详情页重构** — 顶部精选目录 + 图文阅读双栏 + 图片轮播系统
4. **内容管线** — Markdown + 图片轮播双模式，自动切换
5. **Footer 引流** — 安静 AIGC + anjing music + 安静 RichFree + 加微信聊聊
6. **首批内容** — 金融交易学 6 篇完整文章；计算机基础 3 篇精简图文
7. **Favicon** — 蝴蝶 SVG 替换
8. **全站基础体验打磨** — Header / Footer / HubHome / PathTimeline / 全局样式完成一轮移动端和信息密度优化
9. **部署** — Cloudflare Pages + anjing.cc 域名

## 当前阶段：CS 与 LLM 目录定稿

下一步核心任务是先把 `cs` 与 `llm` 两条内容目录敲定，再继续批量制作图文内容。目录工作台见 `project_document/content-index.md`。

| 赛道 | 大纲状态 | 说明 |
|---|---|---|
| CS | 定稿中 | 已拆成计算机基础、Web 工程基础、工程实践、项目表达与面试；首批已上线 3 篇 |
| LLM | 定稿中 | 先作为逻辑独立目录，当前映射到 `/cs/knowledge/ai-and-llm`；已拆成大模型基础、RAG、Agent、AI 工程化 |
| 金融 | 后续 | 结构已有，待 CS/LLM 目录稳定后继续确认 |
| 身体 / 摄影 / 美食 | 后续 | 结构已有，暂不作为本轮内容生产重点 |

## 待完成

| 优先级 | 模块 | 说明 |
|---|---|---|
| P0 | CS/LLM 目录定稿 | 先敲定 `cs` 与 `llm` 两条内容目录、首批图文生产顺序和代码映射 |
| P0 | 图文体验验收 | 检查 `/cs/knowledge/cs-fundamentals` 的切换、图片、移动端和文案密度 |
| P0 | 全站体验验收 | 抽查 Header 移动端菜单、Footer 引流卡、Hub 首页卡片和路径页时间线 |
| P1 | 图文内容制作 | AIGC 工具继续批量制作 cover + slides 图片 |
| P1 | 知识域内容填充 | 将后续制作好的图片填入 knowledge.ts |
| P2 | 微信二维码 | 当前占位框 |
| P3 | Header 导航栏 | 已启用，后续只做真实链接、细节和可访问性精修 |
| P3 | 视频嵌入 | 数据结构已支持 embedUrl |
| P3 | CDN 加速 | public/assets/hubs/ 目录已预留 |
| P4 | 旧路由清理 | /paths/* /knowledge/* 旧路由待确认后删除 |

## 变更日志

### 2026-06-01（小红书常青内容 Brief v1）
- `project_document/xiaohongshu-pinned-posts.md` 已收敛为 4 篇首页常青内容 Brief：安静是谁、计算机与大模型应用、金融交易与市场认知、音乐与长期审美
- 四篇均补齐主题定位、内容主线、标题备选、封面方向和给 anjing-aigc 的内容输入
- 后续方向调整：自我介绍先暂停深挖；CS、金融、音乐优先按“极简正文 + 图像主导轮播”生成
- 生成前仍建议补充个人真实素材：计算机年限/代表项目、金融交易周期/复盘习惯、音乐偏好/练习方向

### 2026-05-21（CS 与 LLM 目录收敛）
- 新增 `project_document/content-index.md`，作为 `cs` 与 `llm` 两条内容目录的工作台
- 将 CS 目录拆成：计算机基础、Web 工程基础、工程实践、项目表达与面试
- 将 LLM 目录拆成：大模型基础、RAG 知识库、Agent 与工作流、AI 工程化与产品化
- 明确当前代码映射：LLM 先作为逻辑独立目录沉淀，当前页面仍映射到 `/cs/knowledge/ai-and-llm`
- 第一批制作顺序建议：`cs-4`、`cs-7`、`cs-8`、`llm-1`、`llm-7`、`llm-13`
- `knowledge.ts` 已将 LLM 扩展为 4 组 24 篇骨架，并新增 `cs-4` 与 `llm-1` 两篇精简正文

### 2026-05-22（小红书置顶文章规划）
- 新增 `project_document/xiaohongshu-pinned-posts.md`，沉淀个人 IP 置顶内容 Brief
- 已升级为 4 篇首页常青内容矩阵：安静是谁、计算机与大模型应用、金融交易与市场认知、音乐与长期审美
- 2026-06-01 已补齐四篇 Brief v1
- 置顶策略明确为“免费公开沉淀知识，深度陪跑购买时间”，后续再结合 anjing-aigc 风格提示词生成小红书正文

### 2026-05-17（全站基础体验打磨复验）
- Header 保持固定导航，移动端使用菜单折叠 Hub 入口
- Footer 更新为社交入口 + 引流卡，并补充移动端布局
- Footer 第三张引流卡从占位改为“加微信聊聊”，背面补充扫码添加与交流方向文案
- HubHome 支持按数据条件展示 Hero / 三卡入口，移动端间距收敛
- PathTimeline 优化 Hero、适合/目标信息卡、资源筛选和横向步骤时间线
- 全局样式与首页样式继续收敛间距、字体、卡片高度、hover 过渡和移动端断点
- 构建验证：2026-05-21 15:48 复验 58 页全部通过；未出现 duplicate id 警告

### 2026-05-16（计算机基础首批内容）
- 新增 3 篇计算机基础精简正文：操作系统基础、计算机网络与协议、常用数据结构
- 新增对应图文素材：每篇 1 张 cover + 1 张内容图
- `knowledge.ts` 接入 `cs-1` / `cs-2` / `cs-3` 的 summary、cover、slides
- `KnowledgePage` 体验迭代：slides 与 Markdown 改为同屏内容栈，桌面收敛为顶部精选目录 + 图文阅读双栏，移动端顺序围绕目录 → 图文正文展开
- `KnowledgePage` 增加 `readyItems` 展示逻辑，优先呈现已有正文/图片的条目
- 构建验证：58 页全部通过；2026-05-17 00:07 复验未再出现 duplicate id 警告

### 2026-05-09（Phase 1 页面优化）
- **Header 启用**：全新 5-Hub 导航栏，固定顶部，彩色圆点标识各赛道，56px 高度
- **旧路由清理**：`/paths/*` 和 `/knowledge/*` 8 个旧静态页面全部改为 301 重定向到新动态路由
- **移动端适配**：首页 5 卡片在小屏下改为 2+2+1 布局，Hero 间距调整
- **Footer 第三卡片**：从占位改为「加微信聊聊」引流入口
- **布局调整**：BaseLayout 加入 Header 组件 + main padding-top 56px
- 构建验证：58 页全部通过

### 2026-05-08 ~ 05-09
- KnowledgePage 重构：三栏舞台布局（左标题列表 | 中 3:4 卡片 | 右配文面板）
- 新增图片轮播系统：cover + slides 数据结构，支持箭头/指示点/键盘/触摸
- 内容展示三级优先级：slides → Markdown → 占位卡片
- 虚线框视觉语言：中间卡片 + 右侧配文框统一 dashed border
- 知识域数据扁平化展示：去掉分组标题层，直接编号列表
- 移动端适配：标题横向滚动 → 卡片 → 配文，上下排列
- Footer 引流卡片更新：新增 anjing music 外链入口（https://music.anjing.cc）

### 2026-04-14
- 新增 3 个 Hub：身体(body)、摄影(photo)、美食(food)
- 每个新 Hub 包含：首页数据 + 4 画像路径 + 4 知识域
- 总入口从 2+1预留 → 5 个完整入口卡片
- Hub 首页去除 title/subtitle/pathLead 引导文字
- Hub 首页三区色块（0.03 opacity）+ grid 精确对齐
- Favicon 更换为蝴蝶 SVG
- Markdown 内容管线打通
- 金融交易学 6 篇 md 内容填充
- 构建验证：58 页全部通过
