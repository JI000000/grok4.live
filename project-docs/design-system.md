# Grok4.Live 设计系统文档 V1.0

**创建日期:** 2025年7月10日  
**设计理念:** 极简、专业、科技感的暗色调设计  
**参考灵感:** x.ai官网风格  

## 🎨 设计原则

### 1. 极简主义 (Minimalism)
- 每个元素都有明确用途
- 移除一切不必要的装饰
- 视觉焦点集中，信息层级清晰

### 2. 专业感 (Professionalism)  
- 暗色调为主，体现技术权威性
- 精致的微交互，提升用户体验
- 一致的设计语言，建立品牌信任

### 3. 现代科技感 (Modern Tech)
- 使用前沿设计趋势
- 渐变色和发光效果
- 流畅的动画过渡

## 🌈 色彩系统 (Color System)

### 主色调 (Primary Colors)
```css
:root {
  /* 品牌主色 - 蓝紫渐变 */
  --primary-gradient: linear-gradient(135deg, #1d9bf0, #8b5cf6);
  --primary-blue: #1d9bf0;
  --primary-purple: #8b5cf6;
  
  /* 背景色系 */
  --bg-primary: #000000;        /* 纯黑背景 */
  --bg-secondary: #0a0a0a;      /* 深黑 */
  --bg-tertiary: #1a1a1a;       /* 卡片背景 */
  --bg-card: rgba(20, 20, 20, 0.8);  /* 半透明卡片 */
  
  /* 文字色系 */
  --text-primary: #ffffff;       /* 主要文字 */
  --text-secondary: rgba(255, 255, 255, 0.8);  /* 次要文字 */
  --text-tertiary: rgba(255, 255, 255, 0.6);   /* 辅助文字 */
  --text-muted: #a1a1aa;         /* 弱化文字 */
  
  /* 边框色系 */
  --border-primary: rgba(59, 130, 246, 0.3);   /* 主要边框 */
  --border-secondary: rgba(55, 65, 81, 0.5);   /* 次要边框 */
  --border-muted: rgba(55, 65, 81, 0.3);       /* 弱化边框 */
  
  /* 状态色 */
  --success: #10b981;           /* 成功/绿色 */
  --warning: #f59e0b;           /* 警告/黄色 */
  --error: #ef4444;             /* 错误/红色 */
  --info: #3b82f6;              /* 信息/蓝色 */
  
  /* 特殊效果色 */
  --glow-blue: rgba(29, 155, 240, 0.3);
  --glow-purple: rgba(139, 92, 246, 0.3);
  --live-indicator: #ef4444;    /* 实时指示器红色 */
}
```

### 色彩使用指南
- **品牌色:** 仅用于Logo、CTA按钮、重要链接
- **背景色:** 渐进式深度，营造层次感
- **文字色:** 根据重要性选择透明度
- **边框色:** 悬停状态使用品牌色，静态使用灰色

## 📝 字体系统 (Typography)

### 字体选择
```css
:root {
  /* 主字体 - Inter */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  /* 代码字体 */
  --font-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
}
```

### 字体层级
```css
/* 标题层级 */
.text-hero {
  font-size: 64px;          /* Hero标题 */
  font-weight: 900;         /* Black */
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.text-h1 {
  font-size: 48px;          /* 页面主标题 */
  font-weight: 800;         /* Extra Bold */
  line-height: 1.2;
}

.text-h2 {
  font-size: 32px;          /* 区块标题 */
  font-weight: 700;         /* Bold */
  line-height: 1.3;
}

.text-h3 {
  font-size: 24px;          /* 子标题 */
  font-weight: 600;         /* Semi Bold */
  line-height: 1.4;
}

.text-h4 {
  font-size: 20px;          /* 卡片标题 */
  font-weight: 600;
  line-height: 1.4;
}

/* 正文层级 */
.text-body-lg {
  font-size: 18px;          /* 大号正文 */
  font-weight: 400;         /* Regular */
  line-height: 1.6;
}

.text-body {
  font-size: 16px;          /* 标准正文 */
  font-weight: 400;
  line-height: 1.6;
}

.text-body-sm {
  font-size: 14px;          /* 小号正文 */
  font-weight: 400;
  line-height: 1.5;
}

/* 辅助文字 */
.text-caption {
  font-size: 12px;          /* 标注文字 */
  font-weight: 500;         /* Medium */
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### 移动端字体适配
```css
@media (max-width: 768px) {
  .text-hero { font-size: 40px; }
  .text-h1 { font-size: 32px; }
  .text-h2 { font-size: 24px; }
  .text-h3 { font-size: 20px; }
  .text-h4 { font-size: 18px; }
}
```

## 📏 间距系统 (Spacing System)

### 基础间距单位
```css
:root {
  --space-1: 4px;    /* 0.25rem */
  --space-2: 8px;    /* 0.5rem */
  --space-3: 12px;   /* 0.75rem */
  --space-4: 16px;   /* 1rem */
  --space-5: 20px;   /* 1.25rem */
  --space-6: 24px;   /* 1.5rem */
  --space-8: 32px;   /* 2rem */
  --space-10: 40px;  /* 2.5rem */
  --space-12: 48px;  /* 3rem */
  --space-16: 64px;  /* 4rem */
  --space-20: 80px;  /* 5rem */
  --space-24: 96px;  /* 6rem */
}
```

### 间距使用指南
- **组件内间距:** 使用 4-16px (space-1 到 space-4)
- **组件间间距:** 使用 16-32px (space-4 到 space-8) 
- **区块间间距:** 使用 48-96px (space-12 到 space-24)
- **页面级间距:** 使用 64px以上

## 🔲 布局系统 (Layout System)

### 容器规格
```css
/* 页面容器 */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.container-narrow {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
}

.container-wide {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 24px;
}
```

### 网格系统
```css
/* 弹性网格 */
.grid {
  display: grid;
  gap: var(--space-6);
}

.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }

/* 响应式网格 */
.grid-responsive {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
}
```

### 断点系统
```css
/* 移动端优先的断点 */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

## 🧩 组件库 (Component Library)

### 1. 按钮组件 (Button)

#### 主要按钮 (Primary Button)
```css
.btn-primary {
  background: var(--primary-gradient);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all 200ms ease-out;
  position: relative;
  overflow: hidden;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(29, 155, 240, 0.4);
}

.btn-primary:active {
  transform: translateY(0);
}
```

#### 次要按钮 (Secondary Button)
```css
.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-secondary);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 200ms ease-out;
}

.btn-secondary:hover {
  border-color: var(--primary-blue);
  color: var(--primary-blue);
  box-shadow: 0 0 0 1px var(--primary-blue);
}
```

### 2. 卡片组件 (Card)

#### 标准卡片
```css
.card {
  background: var(--bg-card);
  border: 1px solid var(--border-secondary);
  border-radius: 12px;
  padding: var(--space-6);
  backdrop-filter: blur(20px);
  transition: all 300ms ease-out;
}

.card:hover {
  border-color: var(--border-primary);
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3),
              0 0 0 1px var(--glow-blue);
}
```

#### 特色卡片 (Featured Card)
```css
.card-featured {
  background: var(--bg-card);
  border: 1px solid var(--primary-blue);
  border-radius: 16px;
  padding: var(--space-8);
  position: relative;
  overflow: hidden;
}

.card-featured::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--primary-gradient);
}
```

### 3. 输入组件 (Input)

#### 文本输入框
```css
.input {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-secondary);
  border-radius: 8px;
  padding: 12px 16px;
  color: var(--text-primary);
  font-size: 16px;
  transition: all 200ms ease-out;
  width: 100%;
}

.input:focus {
  outline: none;
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px rgba(29, 155, 240, 0.1);
  background: rgba(255, 255, 255, 0.08);
}

.input::placeholder {
  color: var(--text-tertiary);
}
```

### 4. 导航组件 (Navigation)

#### 主导航链接
```css
.nav-link {
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 200ms ease-out;
  position: relative;
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--primary-gradient);
  transition: all 300ms ease-out;
  transform: translateX(-50%);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}
```

## 🎭 动画系统 (Animation System)

### 基础动画
```css
/* 淡入动画 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 缩放动画 */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* 滑入动画 */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 旋转动画 */
@keyframes rotate360 {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* 呼吸效果 */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* 发光效果 */
@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 5px var(--glow-blue);
  }
  50% {
    box-shadow: 0 0 20px var(--glow-blue),
                0 0 30px var(--glow-blue);
  }
}
```

### 动画应用类
```css
.animate-fade-in { animation: fadeIn 500ms ease-out; }
.animate-fade-in-up { animation: fadeInUp 600ms ease-out; }
.animate-scale-in { animation: scaleIn 400ms ease-out; }
.animate-slide-in-right { animation: slideInRight 500ms ease-out; }
.animate-rotate { animation: rotate360 400ms ease-out; }
.animate-pulse { animation: pulse 2s infinite; }
.animate-glow { animation: glow 2s infinite; }
```

### 交互状态
```css
/* 悬停提升 */
.hover-lift:hover {
  transform: translateY(-4px);
  transition: transform 200ms ease-out;
}

/* 悬停缩放 */
.hover-scale:hover {
  transform: scale(1.05);
  transition: transform 200ms ease-out;
}

/* 悬停发光 */
.hover-glow:hover {
  box-shadow: 0 0 20px var(--glow-blue);
  transition: box-shadow 300ms ease-out;
}
```

## 📱 响应式设计指南

### 移动端适配
```css
/* 触摸目标尺寸 */
.touch-target {
  min-height: 44px;
  min-width: 44px;
}

/* 移动端导航 */
@media (max-width: 768px) {
  .mobile-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: var(--bg-primary);
    transition: right 300ms ease-out;
    z-index: 9999;
  }
  
  .mobile-menu.open {
    right: 0;
  }
}

/* 移动端卡片堆叠 */
@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
}
```

## 🎯 组件状态指南

### 加载状态
```css
.loading {
  opacity: 0.6;
  pointer-events: none;
  position: relative;
}

.loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  border: 2px solid var(--border-secondary);
  border-top: 2px solid var(--primary-blue);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
```

### 错误状态
```css
.error {
  border-color: var(--error);
  background: rgba(239, 68, 68, 0.1);
}

.error-message {
  color: var(--error);
  font-size: 14px;
  margin-top: var(--space-2);
}
```

### 成功状态
```css
.success {
  border-color: var(--success);
  background: rgba(16, 185, 129, 0.1);
}

.success-message {
  color: var(--success);
  font-size: 14px;
  margin-top: var(--space-2);
}
```

---

**使用指南:**
1. 所有颜色使用CSS变量，便于主题切换
2. 间距使用一致的spacing scale
3. 动画时长保持在200-600ms之间
4. 移动端优先的响应式设计
5. 保持组件状态的一致性 