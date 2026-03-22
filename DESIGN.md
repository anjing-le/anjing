# 安静 · 知识导航站 — 设计规范与开发指南

> 本文档是整个站点的设计单一真实源，新页面开发、子页面扩展、并行协作均以此为准。

---

## 一、品牌信息

| 项目 | 内容 |
|------|------|
| 品牌名 | 安静 |
| 定位 | 一线全栈&大模型应用工程师 |
| 站点定位 | 个人 IP 知识导航入口 |
| 目标用户 | 考研复试、校招求职、转型跨行、职场进阶 |
| 社交渠道 | GitHub、小红书、X（预留）、B站（预留）、微信（二维码弹窗，待替换） |

---

## 二、设计风格与偏好

### 核心关键词

**可爱、极简、高级**

### 美学原则

| 原则 | 描述 |
|------|------|
| 暖粉调 | 页面底色 `#fdf5f3`，卡片底色 `#faf2ef`，整体暖而不腻 |
| 无边框 | 不使用硬边框，依靠底色差、阴影、模糊区分层级 |
| 无图标 | 首页不使用任何图标，用彩色小圆点代替 |
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

## 三、颜色系统

### CSS 变量（定义在 `src/styles/global.css`）

```
背景层级：
  --bg:       #fdf5f3     页面背景（暖粉）
  --surface:  #ffffff     纯白面板
  --surface2: #faf2ef     卡片底色（暖白，与背景融合）
  --border:   #f2ebe7     极淡分隔线

文字层级：
  --text:     #2d2a28     主文字（深棕）
  --text2:    #8a8078     次要文字
  --text3:    #b8afa8     辅助文字 / 占位符

主题色（柔和粉彩系）：
  --accent:   #7eb8dc     蓝（主色，考研复试）
  --green:    #7ec8a0     绿（校招求职）
  --orange:   #e8b07a     橙（转型跨行）
  --purple:   #b8a0d8     紫（职场进阶，能给你什么）
  --cyan:     #7ac8c0     青
  --pink:     #e0a0b8     粉
  --yellow:   #e8d08a     黄
  --red:      #dc8080     红

每个主题色都有对应的 soft 变量（0.06~0.08 透明度），用于标签背景等。
```

### 颜色使用约定

| 模块 | 颜色 |
|------|------|
| 我是谁 | `--accent`（蓝） |
| 能给你什么 | `--purple`（紫） |
| 我们的交付 | `--green`（绿） |
| 考研复试 | `--accent`（蓝） |
| 校招求职 | `--green`（绿） |
| 转型跨行 | `--orange`（橙） |
| 职场进阶 | `--purple`（紫） |

---

## 四、核心交互效果

### 雾化消融（Mist Dissolve）

**这是全站统一的卡片交互范式，所有卡片都必须使用此效果。**

原理：正面与背面用 CSS Grid `grid-area: 1/1` 重叠，hover 时正面模糊+放大+消散，背面从虚化中凝聚浮现。

```
默认状态：
  正面  → opacity: 1, filter: blur(0), transform: scale(1)
  背面  → opacity: 0, filter: blur(6px), transform: scale(0.97)

Hover 状态：
  正面  → opacity: 0, filter: blur(8px), transform: scale(1.03)
  背面  → opacity: 1, filter: blur(0), transform: scale(1)

容器附加：
  hover 时 → translateY(-3px) + box-shadow: 0 8px 32px rgba(60,40,30,0.06)

过渡曲线：cubic-bezier(0.4, 0, 0.2, 1)，时长 0.5s
```

### HTML 结构模板

```html
<div class="flip-container">
  <div class="flip-inner">
    <div class="flip-front">
      <!-- 正面：标题等简要信息 -->
    </div>
    <div class="flip-back">
      <!-- 背面：详细内容 -->
    </div>
  </div>
</div>
```

### 卡片底色

正面与背面统一使用 `var(--surface2)`，与页面背景自然融合，无边框。

---

## 五、布局系统

### 页面整体结构

```
body (flex column, min-height: 100vh)
  ├── main (flex: 1)
  │   └── .container (max-width: 1200px, 居中, padding: 0 24px)
  │       └── 页面内容
  └── Footer
```

### 首页布局

```
.idx-layout (flex column, gap: 20px, padding: 32px 0 24px)
  ├── .idx-trio-grid (3列等宽网格, gap: 14px)
  │   ├── 我是谁（雾化卡片）
  │   ├── 能给你什么（雾化卡片）
  │   └── 我们的交付（雾化卡片）
  │
  └── .idx-paths-section (margin-top: 28px)
      ├── <p>选一个最像你的画像…</p>
      └── .idx-bottom-layout (flex row, gap: 24px)
          ├── .idx-paths-grid (2列网格, 4个画像卡片)
          │   ├── 考研复试
          │   ├── 校招求职
          │   ├── 转型跨行
          │   └── 职场进阶
          └── .idx-extra-area → .idx-extra-slot (虚线预留区域)
```

### Footer 布局

```
.footer (border-top, background: var(--bg))
  └── .footer-grid (flex row, align-items: stretch)
      ├── .footer-left (品牌名 + 简介 + 社交图标)
      └── .footer-right (flex row, gap: 16px)
          ├── .promo-card（引流区域 1，雾化消融效果）
          ├── .promo-card（引流区域 2，雾化消融效果）
          └── .promo-card（引流区域 3，雾化消融效果）
```

### 响应式断点

| 断点 | 调整 |
|------|------|
| ≤ 1024px | 三列 → 单列，下半区左右 → 上下 |
| ≤ 768px | 路径卡片 2列 → 单列，Footer 左右 → 上下 |

---

## 六、文件结构

```
anjing-site/src/
├── pages/
│   ├── index.astro              # 首页
│   ├── paths/
│   │   └── graduate.astro       # 考研复试路径页（已创建）
│   └── projects/
│       └── knowledge.astro      # 知识库项目页（已创建）
├── layouts/
│   └── BaseLayout.astro         # 全局布局（head + main + Footer）
├── components/
│   ├── Footer.astro             # 页脚（含引流区域）
│   ├── Header.astro             # 导航栏（当前未启用）
│   └── Icon.astro               # SVG 图标组件（Lucide 风格）
├── styles/
│   ├── global.css               # 全局样式 + CSS 变量
│   └── index.css                # 首页专用样式（含雾化消融系统）
└── data/
    ├── paths.ts                 # 4条学习路径数据
    └── projects.ts              # 4个项目数据
```

### 样式组织规则

- **全局样式** → `global.css`（变量、reset、通用类）
- **页面专用样式** → 独立 CSS 文件，通过 `import` 引入（如 `index.css`）
- **组件样式** → 写在组件文件的 `<style>` 标签内（Astro scoped）
- **不要使用** `<style is:global>` 内联在页面中（会导致 scoped 渲染异常）

---

## 七、组件规范

### 新建页面模板

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import '../styles/页面名.css';  // 页面专用样式单独文件

// 页面数据...
---

<BaseLayout title="安静 · 页面标题">
  <div class="container">
    <!-- 页面内容 -->
  </div>
</BaseLayout>
```

### 新建雾化卡片

```html
<div class="flip-container">
  <div class="flip-inner">
    <div class="flip-front">
      <h3 class="flip-front-title" style="color: var(--accent);">标题</h3>
      <p class="flip-front-sub">副标题（可选）</p>
    </div>
    <div class="flip-back">
      <h3 class="flip-back-title" style="color: var(--accent);">标题</h3>
      <!-- 背面详细内容 -->
    </div>
  </div>
</div>
```

如需复用雾化效果，将 `index.css` 中的卡片过渡系统提取到 `global.css` 或独立的 `flip.css`。

### 预留区域（虚线框）

```html
<div class="footer-promo-slot">占位文字</div>
```

样式特征：`border: 2px dashed var(--text3)`, `border-radius: var(--radius-lg)`, 居中文字。

---

## 八、数据结构

### 学习路径 `LearningPath`

```typescript
{
  id: string;           // URL 标识（graduate / campus / career-change / advance）
  title: string;        // 标题
  subtitle: string;     // 副标题
  color: string;        // 主题色 CSS 变量
  audience: string[];   // 受众画像列表
  goal: string;         // 学习目标
  steps: PathStep[];    // 阶段步骤（order, title, description, duration, projects, resources）
}
```

### 项目 `Project`

```typescript
{
  id: string;                    // URL 标识
  name: string;                  // 项目名
  subtitle: string;              // 副标题
  description: string;           // 描述
  completion: number;            // 完成度百分比
  techStack: string[];           // 技术栈标签
  highlights: string[];          // 亮点列表
  teachingMaterials: TeachingMaterial[];  // 配套教学材料
  github?: string;               // GitHub 地址
  status: 'active' | 'coming';   // 项目状态
}
```

---

## 九、当前进度

### 已完成

| 模块 | 状态 | 说明 |
|------|------|------|
| 技术选型 | ✅ | Astro SSG + GitHub Pages |
| 全局样式系统 | ✅ | CSS 变量、暖粉调色板、响应式基础 |
| 首页布局 | ✅ | 三列信息卡 + 2x2 路径卡 + 右侧预留区 |
| 雾化消融效果 | ✅ | 全站统一卡片交互，正反面同底色 |
| Footer | ✅ | 左侧品牌信息 + 右侧 3 个引流区域（雾化效果） |
| Icon 组件 | ✅ | 30+ Lucide 图标 SVG 内联 |
| 数据层 | ✅ | paths.ts + projects.ts 结构化数据 |

### 待完成 / 预留

| 模块 | 状态 | 说明 |
|------|------|------|
| 路径子页面 | ✅ | 4 页全部完成（graduate / campus / career-change / advance） |
| 项目子页面 | ✅ | 4 页全部完成（knowledge / aigc / customer-service / scaffolding） |
| 首页右侧预留区 | 🔲 | `.idx-extra-slot` 内容待规划 |
| Footer 引流内容 | 🔲 | 3 个 promo-card 内容待填充 |
| 微信二维码 | 🔲 | 当前为占位框，待替换真实图片 |
| Logo | 🔲 | 待用户提供 |
| Header 导航栏 | 🔲 | 组件已有，当前未启用 |
| GitHub Pages 部署 | 🔲 | 仓库已有，待配置 CI |

---

## 十、并行开发指南

### 可并行的独立工作流

```
工作流 A：路径子页面（4 页）
  → 基于 paths.ts 数据渲染
  → 新建 src/styles/path.css
  → 复用雾化卡片系统
  → 页面：考研复试 / 校招求职 / 转型跨行 / 职场进阶

工作流 B：项目子页面（4 页）
  → 基于 projects.ts 数据渲染
  → 新建 src/styles/project.css
  → 复用雾化卡片系统
  → 页面：知识库 / AIGC / 电商客服 / 脚手架

工作流 C：首页扩展
  → 右侧预留区内容设计
  → Footer 引流内容填充
  → 可能的新模块添加

工作流 D：新方向页面
  → 独立的新页面（如博客、关于页等）
  → 遵循本文档设计规范
  → 使用 BaseLayout + 独立页面 CSS
```

### 开发新页面的检查清单

1. 使用 `BaseLayout` 包裹
2. 页面 CSS 独立文件，不内联 `<style is:global>`
3. 颜色只使用 CSS 变量，不硬编码色值
4. 卡片交互使用雾化消融效果
5. 无边框、无图标（首页规则，子页面可适当放宽）
6. 圆角统一 `--radius-lg`（24px）
7. 响应式适配 1024px / 768px 两个断点
8. 底色使用 `--surface2`，与页面背景融合
