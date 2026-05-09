# anjing-site 设计与进度

> 个人 IP 知识导航站 · anjing.cc · 更新于 2026-05-09

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
- **知识域 ×4** — 三栏舞台布局（标题列表 | 图片轮播 | 配文面板）

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
| 知识域详情页 | 三栏舞台布局，居中对齐，虚线框视觉语言 |
| 内容卡片 | 3:4 竖版比例（小红书风格），固定 340px 宽度 |
| Favicon | 蝴蝶 SVG |

## 知识域详情页设计（KnowledgePage）

### 三栏舞台布局

```
┌──────────┐  ┌─ ─ ─ ─ ─ ─ ─┐  ┌ ─ ─ ─ ─ ─ ─┐
│ 01 标题A  │  │              │  │图文 · 01/06 │
│ 02 标题B  │  │   3:4 卡片    │  │             │
│ 03 标题C  │  │   图片轮播    │  │  摘要配文    │
│ 04 标题D  │  │              │  │             │
│ 05 标题E  │  │              │  │             │
│ 06 标题F  │  │              │  │             │
└──────────┘  └─ ─ ─ ─ ─ ─ ─┘  └ ─ ─ ─ ─ ─ ─┘
  标题列表         虚线框卡片         虚线框配文
```

### 内容展示优先级
1. **有 slides** → 图片轮播（封面 + 3~5 张内容图，左右切换）
2. **有 Markdown** → prose 渲染（兼容已有的交易学 6 篇 md）
3. **都没有** → 占位卡片（"制作中"）

### 轮播交互
- 左右箭头（hover 出现）
- 底部指示点（当前页拉长高亮）
- 右上角计数器（1/5）
- 键盘方向键
- 触摸滑动（移动端）

### 图片数据结构
```typescript
{
  cover: '/assets/knowledge/cs/cs-1/cover.png',
  slides: [
    { url: '/assets/knowledge/cs/cs-1/slide-1.png', alt: '内容页1' },
    { url: '/assets/knowledge/cs/cs-1/slide-2.png', alt: '内容页2' },
  ],
}
```

## 内容生产流程

```
大纲定稿 → AIGC 工具制作图文 → 图片放入 public/assets/ → knowledge.ts 填充 cover + slides → 构建部署
```

- 每个条目 = 1 张封面图 + 3~5 张内容图
- 图片存储路径：`public/assets/knowledge/{hub}/{domain}/{item-id}/`
- AIGC 工具（anjing-aigc）负责批量生产图文内容

## 技术实现关键点

| 技术点 | 实现方式 |
|---|---|
| 动态路由 | `[hub]/index.astro` + `[hub]/paths/[slug].astro` + `[hub]/knowledge/[slug].astro` |
| Hub 路由过滤 | `getStaticPaths` 中使用 `!!path.hub` / `!!domain.hub`，自动纳入新 Hub |
| Markdown 管线 | `import.meta.glob('/src/content/knowledge/**/*.md', { eager: true })` → `compiledContent()` |
| 图片轮播 | cover + slides → allSlides 数组 → carousel 组件（淡入切换） |
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
3. **知识域详情页重构** — 三栏舞台布局 + 图片轮播系统
4. **内容管线** — Markdown + 图片轮播双模式，自动切换
5. **Footer 引流** — 安静 AIGC + 安静 RichFree
6. **首批内容** — 金融交易学 6 篇完整文章
7. **Favicon** — 蝴蝶 SVG 替换
8. **部署** — Cloudflare Pages + anjing.cc 域名

## 当前阶段：内容大纲定稿

下一步核心任务是逐赛道敲定内容大纲，然后用 AIGC 工具批量制作图文。

| 赛道 | 大纲状态 | 说明 |
|---|---|---|
| 计算机 | 进行中 | 4 知识域 × 6 条目 = 24 篇，已列出初版，用户确认中 |
| 金融 | 待开始 | 结构已有，待逐条确认 |
| 身体 | 待开始 | 结构已有，待逐条确认 |
| 摄影 | 待开始 | 结构已有，待逐条确认 |
| 美食 | 待开始 | 结构已有，待逐条确认 |

## 待完成

| 优先级 | 模块 | 说明 |
|---|---|---|
| P0 | 大纲定稿 | 5 赛道 × 4 知识域，条目标题/数量逐一敲定 |
| P0 | 图文内容制作 | AIGC 工具批量制作 cover + slides 图片 |
| P1 | 知识域内容填充 | 将制作好的图片填入 knowledge.ts |
| P2 | 微信二维码 | 当前占位框 |
| P3 | Header 导航栏 | 组件已有，未启用 |
| P3 | 视频嵌入 | 数据结构已支持 embedUrl |
| P3 | CDN 加速 | public/assets/hubs/ 目录已预留 |
| P4 | 旧路由清理 | /paths/* /knowledge/* 旧路由待确认后删除 |

## 变更日志

### 2026-05-08 ~ 05-09
- KnowledgePage 重构：三栏舞台布局（左标题列表 | 中 3:4 卡片 | 右配文面板）
- 新增图片轮播系统：cover + slides 数据结构，支持箭头/指示点/键盘/触摸
- 内容展示三级优先级：slides → Markdown → 占位卡片
- 虚线框视觉语言：中间卡片 + 右侧配文框统一 dashed border
- 知识域数据扁平化展示：去掉分组标题层，直接编号列表
- 移动端适配：标题横向滚动 → 卡片 → 配文，上下排列
- Footer 引流卡片更新

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
