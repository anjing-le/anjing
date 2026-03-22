# 内容新增标准流程

## 目录结构总览

```
anjing-site/
├── astro.config.mjs          # Astro 配置（部署时修改 base）
├── src/
│   ├── data/
│   │   ├── projects.ts       # 📌 项目元数据（新增项目在这里加）
│   │   └── paths.ts          # 📌 学习路径数据（新增路径在这里加）
│   ├── layouts/
│   │   └── BaseLayout.astro  # 全局布局（Header + Footer + SEO）
│   ├── components/
│   │   ├── Header.astro      # 顶部导航
│   │   └── Footer.astro      # 底部（社交链接、项目链接）
│   ├── pages/
│   │   ├── index.astro       # 首页
│   │   ├── paths/            # 画像路径页
│   │   │   └── graduate.astro
│   │   └── projects/         # 项目详情页
│   │       └── knowledge.astro
│   └── styles/
│       └── global.css        # 全局样式 + CSS 变量
├── public/
│   └── teaching/             # 📌 HTML 互动课件放这里
│       ├── knowledge/
│       ├── aigc/
│       ├── customer-service/
│       └── scaffolding/
└── CONTRIBUTING.md            # 本文件
```

---

## 场景一：新增一个项目

### 步骤

1. **更新项目数据** — 编辑 `src/data/projects.ts`，在 `projects` 数组末尾添加新项目：

```typescript
{
  id: 'new-project',           // URL 友好的 ID
  name: '项目名称',
  subtitle: '一句话定位',
  description: '项目描述...',
  completion: 80,
  techStack: ['Vue 3', 'Spring Boot 3', '...'],
  highlights: ['亮点1', '亮点2', '亮点3'],
  teachingMaterials: [
    { title: '00-环境准备', type: 'doc', description: '...' },
    // ...
  ],
  github: 'https://github.com/anjing-le/new-project',
  status: 'active',
}
```

2. **创建项目详情页** — 复制 `src/pages/projects/knowledge.astro` 为模板，修改为新项目内容：

```
cp src/pages/projects/knowledge.astro src/pages/projects/new-project.astro
```

需要修改的部分：
- `projects.find()` 的 ID
- `features` 数组
- 架构图内容
- 页面标题和描述

3. **放入教学材料** — 将 HTML 课件复制到 `public/teaching/new-project/`

4. **更新导航** — 在 `src/components/Footer.astro` 的 `projectLinks` 中添加链接

5. **更新学习路径** — 如果新项目出现在某条学习路径中，编辑 `src/data/paths.ts`

### 验证

```bash
npm run dev    # 启动开发服务器
# 检查首页项目卡片是否出现
# 检查项目详情页是否正常
```

---

## 场景二：新增一条学习路径

### 步骤

1. **更新路径数据** — 编辑 `src/data/paths.ts`，在 `paths` 数组中添加：

```typescript
{
  id: 'new-path',
  title: '路径名称',
  subtitle: '一句话描述',
  icon: '🎯',
  color: 'var(--cyan)',       // 选一个和其他路径不同的颜色
  colorBg: 'var(--cyan-bg)',
  description: '详细描述...',
  audience: ['适合人群1', '适合人群2'],
  goal: '学完之后能达到的目标',
  steps: [
    {
      order: 1,
      title: '步骤名',
      description: '步骤描述...',
      duration: '2-3 天',
      projects: ['knowledge'],  // 引用 projects.ts 中的 ID
      resources: ['资源1', '资源2'],
    },
    // ...
  ],
}
```

2. **创建路径页面** — 复制 `src/pages/paths/graduate.astro` 为模板：

```
cp src/pages/paths/graduate.astro src/pages/paths/new-path.astro
```

修改 `paths.find()` 的 ID 和页面特定内容。

3. **更新导航** — `Footer.astro` 中添加路径链接

---

## 场景三：新增 HTML 互动课件

### 步骤

1. 将 HTML 文件复制到 `public/teaching/{项目名}/`
2. 在对应项目的 `teachingMaterials` 数组中添加条目
3. 如果需要从项目页面直接链接，在项目详情页中添加超链接

### HTML 课件模板规范

所有 HTML 课件应使用统一的 CSS 变量体系（定义在现有课件中）：

```css
:root {
  --bg: #0f1117;
  --surface: #1a1d27;
  --surface2: #232733;
  --border: #333849;
  --text: #e4e6ed;
  --text2: #9ba1b0;
  --accent: #6c8cff;
  --accent2: #818cf8;
  --green: #34d399;
  --orange: #fb923c;
  --purple: #a78bfa;
  --radius: 12px;
}
```

---

## 场景四：更新社交链接

编辑 `src/components/Footer.astro` 中的 `socialLinks` 数组，修改 URL。

编辑 `src/components/Header.astro` 中的 GitHub 链接。

---

## 部署到 GitHub Pages

1. 修改 `astro.config.mjs` 中的 `base` 为仓库名：

```javascript
base: '/your-repo-name/',
```

2. 构建：

```bash
npm run build
```

3. 将 `dist/` 目录部署到 GitHub Pages（推荐使用 GitHub Actions 自动化）

---

## 设计规范速查

| 元素 | 值 |
|------|-----|
| 背景色 | `#0f1117` |
| 卡片色 | `#1a1d27` |
| 边框色 | `#333849` |
| 主文字 | `#e4e6ed` |
| 次文字 | `#9ba1b0` |
| 强调蓝 | `#6c8cff` |
| 成功绿 | `#34d399` |
| 警告橙 | `#fb923c` |
| 紫色 | `#a78bfa` |
| 圆角 | `12px` / `8px` |
| 字体 | 系统字体栈（PingFang SC / Microsoft YaHei）|
