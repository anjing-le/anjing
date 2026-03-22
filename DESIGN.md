# 安静 · 多赛道知识导航站 — 设计规范与开发指南

> 本文档是整个站点的设计单一真实源，所有页面开发、赛道扩展、并行协作均以此为准。
> 最后更新：2026-03-22（第二次迭代）

---

## 一、站点定位

| 项目 | 内容 |
|------|------|
| 品牌名 | 安静 |
| 站点定位 | 个人 IP 多赛道知识导航入口 |
| 线上地址 | **https://anjing.cc** |
| 备用地址 | https://anjing-3ik.pages.dev |
| 域名 | `anjing.cc`（Cloudflare Registrar，$8/年，2026-03-22 购买） |
| 技术栈 | Astro 5.x SSG（纯静态） + Cloudflare Pages |
| GitHub | https://github.com/anjing-le/anjing（SSH: `github-personal`） |
| 部署方式 | `git push` → Cloudflare Pages 自动构建部署（30-60s） |
| 构建命令 | `npm run build` → 输出 `dist/` |
| 提交身份 | `anjing`（不暴露 lvxianghe） |

---

## 二、整体架构（三层结构）

```
/                              ← 总入口："你好，我是安静"
│
├── /cs                        ← 计算机 Hub 首页
│   ├── /cs/paths/:slug        ← 4 个画像路径页
│   │   ├── graduate           考研复试
│   │   ├── campus             校招求职
│   │   ├── career-change      转型跨行
│   │   └── advance            职场进阶
│   ├── /cs/knowledge/:slug    ← 4 个知识域页
│   │   ├── cs-fundamentals    计算机基础
│   │   ├── engineering        工程实践
│   │   ├── ai-and-llm         AI 与大模型
│   │   └── frontier           前沿探索
│   └── /cs/projects/*         ← 项目页（保留旧路由兼容）
│
├── /finance                   ← 金融 Hub 首页（与计算机 Hub 完全同结构）
│   ├── /finance/paths/:slug   ← 4 个画像路径页
│   │   ├── short-term         短线交易
│   │   ├── swing              中短线波段
│   │   ├── mid-term           中线策略
│   │   └── long-term          长线配置
│   └── /finance/knowledge/:slug ← 4 个知识域页
│       ├── finance-theory     金融学
│       ├── economics          经济学
│       ├── trading            交易学
│       └── risk-management    风险管理
│
└── 更多赛道（总入口预留占位，href="#"，置灰不可点）
```

### 路由实现方式

- 总入口 → `src/pages/index.astro`（静态）
- Hub 首页 → `src/pages/[hub]/index.astro`（动态，`getStaticPaths` 列出 `cs` / `finance`）
- 画像路径 → `src/pages/[hub]/paths/[slug].astro`（动态，按 `paths.ts` 中 `hub` 字段过滤）
- 知识域 → `src/pages/[hub]/knowledge/[slug].astro`（动态，按 `knowledge.ts` 中 `hub` 字段过滤）
- 旧兼容路由 → `src/pages/paths/*` / `src/pages/knowledge/*` / `src/pages/projects/*` 保留

---

## 三、设计风格与偏好

### 核心关键词

**可爱、极简、高级**

### 美学原则

| 原则 | 描述 |
|------|------|
| 暖粉调 | 全站统一底色 `#fdf5f3`，卡片底色 `#faf2ef`，整体暖而不腻 |
| 无边框 | 不使用硬边框，依靠底色差、阴影、模糊区分层级 |
| 无图标 | 首页/Hub首页不使用任何图标，用彩色小圆点代替 |
| 大圆角 | 卡片统一使用 `24px` 圆角（`--radius-lg`） |
| 留白充足 | 模块间距舒适，不紧凑不拥挤 |
| 字体克制 | 标题不过大，正文不过小，整体紧凑但可读 |

### 禁止项

- 不使用 emoji
- 不使用硬边框、色条分隔线
- 不使用花哨的渐变背景
- 不使用「教培机构」风格的营销文案
- 不使用固定高度 + 滚动条的卡片

---

## 四、颜色系统

### CSS 变量（定义在 `src/styles/global.css`）

```
背景层级（全站统一）：
  --bg:       #fdf5f3     页面背景（暖粉）
  --surface:  #ffffff     纯白面板
  --surface2: #faf2ef     卡片底色（暖白，与背景融合）
  --border:   #f2ebe7     极淡分隔线

文字层级：
  --text:     #2d2a28     主文字（深棕）
  --text2:    #8a8078     次要文字
  --text3:    #b8afa8     辅助文字 / 占位符

主题色（柔和粉彩系）：
  --accent:   #7eb8dc     蓝
  --green:    #7ec8a0     绿
  --orange:   #e8b07a     橙
  --purple:   #b8a0d8     紫
  --cyan:     #7ac8c0     青
  --pink:     #e0a0b8     粉
  --yellow:   #e8d08a     黄
  --red:      #dc8080     红
  --gold:     #c9a96e     金（金融赛道入口卡片标题色）

每个主题色都有对应的 -soft 变量（0.06~0.08 透明度），用于标签背景等。
```

### 颜色分配

**计算机 Hub（画像路径）**

| 模块 | 颜色 |
|------|------|
| 考研复试 | `--accent`（蓝） |
| 校招求职 | `--green`（绿） |
| 转型跨行 | `--orange`（橙） |
| 职场进阶 | `--purple`（紫） |

**计算机 Hub（知识域）**

| 模块 | 颜色 |
|------|------|
| 计算机基础 | `--accent`（蓝） |
| 工程实践 | `--green`（绿） |
| AI 与大模型 | `--purple`（紫） |
| 前沿探索 | `--orange`（橙） |

**金融 Hub（画像路径）**

| 模块 | 颜色 |
|------|------|
| 短线交易 | `--accent`（蓝） |
| 中短线波段 | `--green`（绿） |
| 中线策略 | `--orange`（橙） |
| 长线配置 | `--purple`（紫） |

**金融 Hub（知识域）**

| 模块 | 颜色 |
|------|------|
| 金融学 | `--accent`（蓝） |
| 经济学 | `--green`（绿） |
| 交易学 | `--orange`（橙） |
| 风险管理 | `--purple`（紫） |

---

## 五、核心交互效果

### 雾化消融（Mist Dissolve）

**全站统一的卡片交互范式，所有翻转卡片都使用此效果。**

```
默认状态：
  正面  → opacity: 1, filter: blur(0), transform: scale(1)
  背面  → opacity: 0, filter: blur(6px), transform: scale(0.97)

Hover 状态：
  正面  → opacity: 0, filter: blur(8px), transform: scale(1.03)
  背面  → opacity: 1, filter: blur(0), transform: scale(1)

容器附加：
  hover 时 → translateY(-3px)

过渡曲线：cubic-bezier(0.4, 0, 0.2, 1)，时长 0.5s
```

### HTML 结构模板

```html
<div class="flip-container">
  <div class="flip-inner">
    <div class="flip-front"><!-- 正面：标题 --></div>
    <div class="flip-back"><!-- 背面：详细内容 --></div>
  </div>
</div>
```

正面与背面统一使用 `var(--surface2)`，与页面背景自然融合，无边框。

---

## 六、文件结构

```
anjing-site/src/
├── pages/
│   ├── index.astro                       # 总入口："你好，我是安静"
│   ├── [hub]/
│   │   ├── index.astro                   # Hub 首页（计算机 / 金融共用模板）
│   │   ├── paths/[slug].astro            # 画像路径页（动态路由）
│   │   └── knowledge/[slug].astro        # 知识域页（动态路由）
│   ├── paths/                            # 旧计算机路径页（兼容保留）
│   │   ├── graduate.astro
│   │   ├── campus.astro
│   │   ├── career-change.astro
│   │   └── advance.astro
│   ├── knowledge/                        # 旧计算机知识页（兼容保留）
│   │   ├── engineering.astro
│   │   ├── llm-basics.astro
│   │   ├── llm-apps.astro
│   │   └── frontier.astro
│   └── projects/                         # 项目页（兼容保留）
│       ├── knowledge.astro
│       ├── aigc.astro
│       ├── customer-service.astro
│       └── scaffolding.astro
├── layouts/
│   └── BaseLayout.astro                  # 全局布局（head + main + Footer）
├── components/
│   ├── HubHome.astro                     # Hub 首页共用组件（翻转卡片 + 画像 + 知识入口）
│   ├── PathTimeline.astro                # 水平时间线 + 资源面板（画像路径页共用）
│   ├── KnowledgePage.astro               # 左目录右内容的知识详情页（共用）
│   ├── Icon.astro                        # SVG 图标组件（Lucide 风格，50+ 图标）
│   ├── Footer.astro                      # 页脚
│   └── Header.astro                      # 导航栏（当前未启用）
├── styles/
│   ├── global.css                        # 全局样式 + CSS 变量
│   └── index.css                         # 总入口 + Hub 首页样式（含雾化消融系统）
└── data/
    ├── hubs.ts                           # 总入口赛道列表
    ├── paths.ts                          # 所有画像路径（计算机 4 + 金融 4，按 hub 字段区分）
    ├── knowledge.ts                      # 所有知识域（计算机 4 + 金融 4，按 hub 字段区分）
    ├── finance-home.ts                   # 金融 Hub 首页翻转卡片数据
    ├── projects.ts                       # 项目数据（目前仅计算机赛道）
    └── site.ts                           # 全局配置（hub / CDN 路径）
```

---

## 七、数据结构

### 赛道入口 `HubEntry`（`hubs.ts`）

```typescript
{ id, title, subtitle, description, href, color, items: string[] }
```

### 学习路径 `LearningPath`（`paths.ts`）

```typescript
{
  hub?: string;          // 'cs' | 'finance'
  id: string;            // URL 标识
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  colorBg: string;
  description: string;
  audience: string[];
  goal: string;
  steps: PathStep[];     // { order, title, description, duration, projects, resources: Resource[] }
}
```

`Resource` 结构：`{ name: string; type: 'doc' | 'video'; url?: string }`

### 知识域 `KnowledgeDomain`（`knowledge.ts`）

```typescript
{
  hub: string;           // 'cs' | 'finance'
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  soft: string;
  groups: KnowledgeGroup[];  // { id, title, summary, items: KnowledgeItem[] }
}
```

`KnowledgeItem`：`{ id, title, summary, type, draft?, mdPath?, coverUrl?, externalUrl?, embedUrl? }`

### 项目 `Project`（`projects.ts`）

```typescript
{ id, name, subtitle, description, completion, techStack, highlights, teachingMaterials, github?, status }
```

---

## 八、组件复用关系

| 组件 | 用途 | 被谁使用 |
|------|------|----------|
| `HubHome` | Hub 首页渲染（可选标题区 + 可选三列翻转卡 + 画像入口 + 知识入口） | `/cs` `/finance` |
| `PathTimeline` | 水平时间线 + 点击切换资源面板 | 所有画像路径页 |
| `KnowledgePage` | 左目录右内容的知识详情 | 所有知识域页 |
| `BaseLayout` | 全局 HTML 壳（head + main + Footer） | 所有页面 |

### 组件参数传递

- `PathTimeline` 接收 `backHref` / `backLabel`，子页面传 `/${hub}` 让返回链接指回对应 Hub 首页
- `KnowledgePage` 同上
- `HubHome` 接收 `backHref` / `backLabel`，默认指向总入口 `/`
- `HubHome` 的 `title` / `subtitle` / `introNote` / `trioCards` 均为可选，不传则不渲染对应区块
- 返回按钮始终显示，不受标题区是否存在影响

---

## 九、新增赛道的步骤

1. **`hubs.ts`** — 加一条新赛道入口
2. **`paths.ts`** — 加 4 条画像路径，`hub` 字段设为新赛道 ID
3. **`knowledge.ts`** — 加 4 个知识域，`hub` 字段设为新赛道 ID
4. **新建 `xxx-home.ts`** — 新赛道首页的翻转卡片数据（我是谁 / 能给你什么 / 交付）
5. **`[hub]/index.astro`** — `getStaticPaths` 数组里加一条，`hubs` 对象里加一个 key
6. **`[hub]/paths/[slug].astro`** — `getStaticPaths` 的 filter 条件加上新 hub
7. **`[hub]/knowledge/[slug].astro`** — 同上

不需要新建任何页面文件或组件，只需要加数据 + 注册路由。

---

## 十、当前进度

### 已完成

| 模块 | 状态 | 说明 |
|------|------|------|
| 多 Hub 架构 | ✅ | 三层路由（总入口 → Hub → 子页），动态路由 + `getStaticPaths` |
| 总入口首页 | ✅ | "你好，我是安静" + 赛道卡片（计算机 / 金融 / 更多预留） |
| 计算机 Hub 首页 | ✅ | 三列翻转卡 + 4 画像 + 4 知识入口（无标题区，仅保留返回按钮） |
| 计算机画像路径 ×4 | ✅ | 考研 / 校招 / 转行 / 进阶，水平时间线 + 资源面板 |
| 计算机知识域 ×4 | ✅ | 计算机基础 / 工程实践 / AI 与大模型 / 前沿探索 |
| 项目页 ×4 | ✅ | knowledge / aigc / customer-service / scaffolding |
| 金融 Hub 首页 | ✅ | 与计算机 Hub 同结构同色调（无标题区，仅保留返回按钮） |
| 金融画像路径 ×4 | ✅ | 短线 / 波段 / 中线 / 长线 |
| 金融知识域 ×4 | ✅ | 金融学 / 经济学 / 交易学 / 风险管理（学科大类维度） |
| 雾化消融效果 | ✅ | 全站统一卡片交互 |
| 样式系统 | ✅ | CSS 变量、全站统一暖粉色调、响应式 |
| Footer 身份描述 | ✅ | 一线全栈&大模型应用工程师 / 独立交易员&金融策略研究者 |
| 构建验证 | ✅ | 31 页全部构建通过 |
| `.gitignore` | ✅ | 已配置 |
| Cloudflare Pages | ✅ | 已部署，`anjing.cc` + `anjing-3ik.pages.dev`，自动部署已开启 |
| 域名购买 & 绑定 | ✅ | `anjing.cc`，Cloudflare Registrar，DNS/SSL 自动配置 |
| Git 仓库 | ✅ | `anjing-le/anjing`，SSH 走 `github-personal` 通道 |

### 待完成 / 可迭代

| 模块 | 状态 | 说明 |
|------|------|------|
| 金融知识域内容 | 🔲 | 所有 KnowledgeItem 都是 `draft: true`，待填充 |
| 计算机知识域内容 | 🔲 | 同上 |
| Hub 首页文案 | 🔲 | "我是谁"等翻转卡片文案待用户确认定稿 |
| Footer 引流内容 | 🔲 | 3 个 promo-card 内容待填充 |
| 微信二维码 | 🔲 | 当前为占位框，待替换真实图片 |
| Logo | 🔲 | 待用户提供 |
| Header 导航栏 | 🔲 | 组件已有，当前未启用 |
| CDN 静态资源加速 | 🔲 | `public/assets/hubs/` 目录已预留 |
| Markdown 正文渲染 | 🔲 | 知识域详情页右侧目前显示"后续展示 Markdown 正文预览" |
| 视频嵌入 | 🔲 | 数据结构已支持 `embedUrl`，渲染逻辑待实现 |
| 更多赛道 | 🔲 | 总入口已预留占位，按上述步骤即可扩展 |
| 旧路由清理 | 🔲 | `/paths/*` `/knowledge/*` 旧路由仍保留，可在确认无外部引用后删除 |

---

## 十一、开发检查清单

1. 使用 `BaseLayout` 包裹所有页面
2. 页面 CSS 独立文件引入，不内联 `<style is:global>`
3. 颜色只使用 CSS 变量，不硬编码色值
4. 卡片交互使用雾化消融效果
5. 无边框、无图标（首页规则，子页面可适当放宽）
6. 圆角统一 `--radius-lg`（24px）
7. 响应式适配 1024px / 768px 两个断点
8. 底色使用 `--surface2`，与页面背景融合
9. 新赛道只加数据 + 注册路由，不新建组件
10. 构建通过后再提交
