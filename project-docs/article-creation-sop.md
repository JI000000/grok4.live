# 文章创建标准操作程序 (SOP)

## 📋 概述

本文档定义了Grok4.Live网站文章创建的标准流程和质量要求，确保所有文章达到A+级别SEO标准。

## 🎯 标准模板

### Frontmatter 格式
```yaml
---
title: "文章标题"
description: "SEO描述，包含关键词和价值主张"
publishedAt: "YYYY-MM-DD"
author: "Grok4.Live [团队名称]"
category: "BREAKING|ANALYSIS|DEVELOPER"
tags: ["关键词1", "关键词2", "关键词3"]
featured: true
readingTime: [数字]
---
```

### 内容结构
```markdown
<!-- 摘要卡片 -->
<div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-lg p-6 mb-8">
**BREAKING** - 核心价值主张
</div>

## Overview
文章概述

## Key Takeaways
- **要点1**: 关键信息
- **要点2**: 关键信息

## [主要章节]
### [子章节]

## Frequently Asked Questions
### [问题1]
[答案1]

---

*Last updated: [日期]*
*Data sources: [数据来源]*
```

## ✅ 检查清单

### 基础要求
- [ ] 完整的frontmatter
- [ ] 无重复H1标题（只在frontmatter中）
- [ ] BREAKING/TL;DR摘要卡片
- [ ] Overview和Key Takeaways部分
- [ ] FAQ部分（至少5个问题）
- [ ] 统一的数据来源格式

### 技术标准
- [ ] 使用HTML表格（不使用Markdown表格）
- [ ] 清晰的H2/H3/H4层级
- [ ] 适当的代码块语言标识
- [ ] 移动端友好的格式

### SEO优化
- [ ] 描述性title和description
- [ ] 相关tags和category
- [ ] 准确的readingTime
- [ ] 内部链接（如适用）
- [ ] 图片alt文本（如适用）

### 内容质量
- [ ] 逻辑结构清晰
- [ ] 包含具体数据和事实
- [ ] 提供实用价值
- [ ] 解决用户问题

## 🎨 视觉标准

### 摘要卡片样式
```jsx
<div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-lg p-6 mb-8">
**BREAKING** - 内容
</div>
```

### 表格格式
```html
<table>
  <thead>
    <tr>
      <th>列标题</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>数据</td>
    </tr>
  </tbody>
</table>
```

## 📊 评分标准

### A+ (100/100) - 优秀
- 所有检查清单项目完成
- 内容质量高
- SEO优化完善
- 用户价值明确

### A (90-99) - 良好
- 大部分检查清单项目完成
- 内容质量良好
- 需要小幅优化

### B (80-89) - 一般
- 部分检查清单项目完成
- 需要重要优化
- 内容质量待提升

## 🔄 发布流程

1. **内容创建** - 按照SOP创建文章
2. **自我检查** - 使用检查清单验证
3. **技术测试** - 确保页面正常加载
4. **SEO验证** - 检查元数据和结构
5. **发布上线** - 部署到生产环境

## 📈 维护要求

### 定期更新
- 每月检查内容准确性
- 更新过时信息
- 优化SEO表现

### 性能监控
- 跟踪页面加载速度
- 监控SEO排名
- 分析用户行为

## 🚀 快速参考

### 常用标签
- `BREAKING` - 重大新闻
- `ANALYSIS` - 深度分析
- `DEVELOPER` - 开发者指南

### 常用团队
- `Grok4.Live Analysis Team`
- `Grok4.Live Technical Team`
- `Grok4.Live Editorial Team`

### 数据来源格式
- `xAI official reports`
- `industry analysis`
- `academic research papers`

---

**最后更新**: 2025-07-19
**版本**: 1.0
**负责人**: 内容团队 