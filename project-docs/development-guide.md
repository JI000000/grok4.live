# Grok4.Live 开发指南 V1.0

**创建日期:** 2025年7月10日  
**团队:** 联合创始人A (技术负责) + 联合创始人B (内容负责)  
**原则:** 敏捷开发 + 高质量交付 + 一次成功  

## 🏗️ 项目架构

### 技术栈
```
Frontend:  Next.js 14+ (App Router) + TypeScript + Tailwind CSS
Styling:   CSS Variables + Framer Motion + Heroicons
Content:   MDX + TypeScript配置文件
Deploy:    Vercel + Cloudflare (DNS/CDN)
Analytics: Google Analytics + Vercel Analytics
```

### 项目结构
```
grok4live/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (main)/            # 主要页面组
│   │   │   ├── page.tsx       # 首页
│   │   │   ├── about/         # 关于页面
│   │   │   ├── videos/        # 视频中心
│   │   │   └── events/        # 深度分析页面
│   │   ├── globals.css        # 全局样式
│   │   ├── layout.tsx         # 根布局
│   │   └── loading.tsx        # 全局加载组件
│   ├── components/            # 可复用组件
│   │   ├── ui/               # 基础UI组件
│   │   ├── layout/           # 布局组件
│   │   ├── content/          # 内容组件
│   │   └── animations/       # 动画组件
│   ├── lib/                  # 工具库
│   │   ├── constants.ts      # 常量配置
│   │   ├── utils.ts          # 工具函数
│   │   ├── feed-data.ts      # Live Feed数据
│   │   └── types.ts          # TypeScript类型
│   └── content/              # 内容文件
│       ├── events/           # 深度分析MDX文件
│       └── videos/           # 视频配置文件
├── public/                   # 静态资源
│   ├── images/               # 图片资源
│   ├── icons/                # 图标文件
│   └── videos/               # 视频资源
├── docs/                     # 项目文档
│   ├── PRD.md               # 产品需求文档
│   ├── design-system.md     # 设计系统
│   ├── development-guide.md # 开发指南(本文档)
│   └── iteration-plan.md    # 迭代计划
├── .env.local               # 环境变量
├── next.config.js           # Next.js配置
├── tailwind.config.js       # Tailwind配置
├── tsconfig.json            # TypeScript配置
└── package.json             # 依赖管理
```

## 📋 开发流程

### 1. 任务创建与分配
```markdown
# 任务管理流程
1. 每日standup确认当日任务
2. 在GitHub Issues创建任务卡片
3. 使用标签分类: `frontend`, `content`, `design`, `bug`, `feature`
4. 设置优先级: `P0-Critical`, `P1-High`, `P2-Medium`, `P3-Low`
5. 指派负责人并设置截止日期
```

### 2. 分支管理策略
```bash
# 主分支
main              # 生产环境，稳定版本
develop           # 开发环境，集成分支

# 功能分支
feature/homepage  # 功能开发分支
feature/videos    # 具体功能分支
hotfix/bug-xxx    # 紧急修复分支
content/article-xxx # 内容更新分支
```

### 3. 代码提交规范
```bash
# Commit Message格式
type(scope): description

# Type类型
feat:     新功能
fix:      Bug修复  
docs:     文档更新
style:    代码格式
refactor: 重构
test:     测试
chore:    构建/工具

# 示例
feat(homepage): add hero section with animated background
fix(mobile): resolve navigation menu overflow on iOS
content(events): add MechaHitler incident article
docs(readme): update installation instructions
```

### 4. 代码审查流程
```markdown
1. 创建Pull Request
2. 自检代码质量 (lint, format, test)
3. 另一位创始人Review代码
4. 通过CI/CD检查 (build, lighthouse)
5. 合并到develop分支
6. 测试环境验证
7. 合并到main分支部署
```

## 🛠️ 开发环境设置

### 本地环境准备
```bash
# 1. 克隆仓库
git clone https://github.com/username/grok4live.git
cd grok4live

# 2. 安装依赖
npm install

# 3. 环境变量配置
cp .env.example .env.local
# 编辑环境变量

# 4. 启动开发服务器
npm run dev

# 5. 打开浏览器
# http://localhost:3000
```

### 必需工具
```bash
# 开发工具
Node.js 18+
npm 或 pnpm
Git
VS Code (推荐)

# VS Code插件
- TypeScript 
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets
- Auto Rename Tag
- Prettier - Code formatter
- GitLens
```

### 环境变量配置
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
VERCEL_URL=your-deployment-url.vercel.app

# 可选配置
GITHUB_TOKEN=ghp_xxxxxxxxxx  # GitHub API访问
OPENAI_API_KEY=sk-xxxxxxxxx  # AI功能(未来)
```

## 📝 代码规范

### TypeScript规范
```typescript
// 1. 严格类型定义
interface EventData {
  id: string;
  title: string;
  description: string;
  publishedAt: Date;
  tags: string[];
  featured: boolean;
}

// 2. 组件Props类型
interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

// 3. 使用enum定义常量
enum EventType {
  BREAKING = 'breaking',
  ANALYSIS = 'analysis',
  UPDATE = 'update',
  RUMOR = 'rumor'
}

// 4. 工具函数类型
const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};
```

### React组件规范
```tsx
// 1. 组件文件结构
'use client';  // 客户端组件标记

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

// 类型定义
interface HeroSectionProps {
  title: string;
  subtitle: string;
}

// 组件实现
export function HeroSection({ title, subtitle }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      className="min-h-screen flex items-center justify-center"
    >
      {/* 组件内容 */}
    </motion.section>
  );
}

// 默认导出
export default HeroSection;
```

### CSS/Tailwind规范
```tsx
// 1. Tailwind类名顺序
// Layout → Spacing → Sizing → Colors → Typography → Effects
<div className="
  flex flex-col          // Layout
  p-6 space-y-4         // Spacing  
  w-full max-w-lg       // Sizing
  bg-gray-900 border    // Colors
  text-lg font-semibold // Typography
  rounded-lg shadow-xl  // Effects
">

// 2. 条件样式使用clsx
import clsx from 'clsx';

const buttonClass = clsx(
  'px-6 py-3 rounded-lg font-medium transition-all',
  {
    'bg-blue-600 hover:bg-blue-700': variant === 'primary',
    'bg-gray-600 hover:bg-gray-700': variant === 'secondary',
    'opacity-50 cursor-not-allowed': disabled
  }
);

// 3. 自定义CSS变量
<div className="bg-[var(--bg-card)] border-[var(--border-primary)]">
```

### 文件命名规范
```
# 组件文件
PascalCase: HeroSection.tsx, EventCard.tsx
kebab-case: hero-section.tsx, event-card.tsx (可选)

# 页面文件  
kebab-case: page.tsx, not-found.tsx

# 工具文件
camelCase: feedData.ts, apiHelpers.ts

# 常量文件
SCREAMING_SNAKE_CASE: API_ENDPOINTS.ts
camelCase: constants.ts (推荐)

# 内容文件
kebab-case: mecha-hitler-incident.mdx
```

## 🚀 部署指南

### Vercel部署设置
```bash
# 1. 连接GitHub仓库到Vercel
# 访问 vercel.com/dashboard
# 选择 "Import Git Repository"
# 授权GitHub访问权限

# 2. 项目配置
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build  
Output Directory: .next
Install Command: npm install

# 3. 环境变量配置
NEXT_PUBLIC_SITE_URL: https://grok4.live
NEXT_PUBLIC_GA_ID: G-XXXXXXXXXX
```

### Cloudflare DNS设置
```dns
# DNS记录配置
Type    Name    Content                 TTL
A       @       76.76.19.19            Auto
CNAME   www     grok4.live             Auto
CNAME   *       grok4-live.vercel.app  Auto

# SSL/TLS设置  
SSL/TLS encryption mode: Full (strict)
Always Use HTTPS: On
Automatic HTTPS Rewrites: On
```

### 性能优化配置
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'api.placeholder.com'],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  swcMinify: true,
};

module.exports = nextConfig;
```

## 📊 监控与分析

### 性能监控
```javascript
// lib/analytics.ts
import { Analytics } from '@vercel/analytics/react';

// Google Analytics
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Vercel Analytics
export { Analytics } from '@vercel/analytics/react';
```

### 错误监控
```typescript
// lib/error-tracking.ts
export const logError = (error: Error, context?: any) => {
  console.error('Application Error:', error);
  
  // 发送到监控服务
  if (process.env.NODE_ENV === 'production') {
    // Sentry, LogRocket 等
    captureException(error, context);
  }
};

export const logEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};
```

## 🔒 安全考虑

### 内容安全策略 (CSP)
```javascript
// next.config.js - 安全头部配置
const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  }
];

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};
```

### 环境变量安全
```bash
# 公开变量 (NEXT_PUBLIC_前缀)
NEXT_PUBLIC_SITE_URL=https://grok4.live
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# 私有变量 (服务端使用)
DATABASE_URL=postgresql://...
API_SECRET_KEY=xxxxxxxxxx
WEBHOOK_SECRET=xxxxxxxxxx
```

## 🧪 测试策略

### 单元测试
```typescript
// __tests__/components/EventCard.test.tsx
import { render, screen } from '@testing-library/react';
import { EventCard } from '@/components/EventCard';

describe('EventCard', () => {
  it('renders event title correctly', () => {
    render(
      <EventCard 
        title="Test Event"
        description="Test description"
        publishedAt={new Date()}
      />
    );
    
    expect(screen.getByText('Test Event')).toBeInTheDocument();
  });
});
```

### E2E测试
```typescript
// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './e2e',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'webkit',
      use: { ...devices['iPhone 12'] },
    },
  ],
};
```

## 📚 文档维护

### 文档更新流程
```markdown
1. 功能开发完成后立即更新相关文档
2. 每周五进行文档审查和更新
3. 重大变更需要更新PRD文档版本号
4. API变更需要更新接口文档
5. 部署变更需要更新运维文档
```

### 知识分享
```markdown
# 内部知识库
- 每周技术分享30分钟
- 记录踩坑经验和解决方案
- 新技术调研和评估文档
- 性能优化最佳实践
- 代码review要点总结
```

---

**记住我们的原则:**
1. **质量第一:** 写出能运行10年的代码
2. **用户至上:** 每个决定都考虑用户体验
3. **性能优先:** 网站速度就是竞争优势
4. **安全意识:** 数据安全无小事
5. **团队协作:** 清晰沟通，高效执行 