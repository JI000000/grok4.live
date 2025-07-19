# 内容团队操作手册 - Grok4.Live

## 📋 概述

本手册为内容团队提供完整的MDX内容创作、提交、发布流程指导。通过MDX文档驱动，实现内容与代码解耦，提升内容生产效率。

## 🎯 目标

- 非开发人员可独立产出高质量内容
- 内容风格统一，SEO友好
- 支持快速发布和迭代
- 自动化目录、标签、推荐功能

## 📝 内容创作流程

### 1. 准备工作

1. **安装编辑器**：推荐使用VS Code + Markdown插件
2. **克隆项目**：`git clone [repository-url]`
3. **创建分支**：`git checkout -b content/[article-name]`

### 2. 创建新文章

1. **复制模板**：
   ```bash
   cp docs/templates/article-template.mdx docs/your-article-name.mdx
   ```

2. **编辑frontmatter**：
   ```yaml
   ---
   title: "Your Article Title"
   description: "SEO友好的描述，150-160字符"
   publishedAt: "2025-07-19"
   author: "Your Name"
   category: "ANALYSIS" # BREAKING, ANALYSIS, DEVELOPER, INVESTIGATION
   tags: ["Grok 4", "AI", "Technology"]
   featured: false
   readingTime: 8
   ---
   ```

3. **编写内容**：使用Markdown语法，支持：
   - 标题层级（#, ##, ###）
   - 列表（-, 1.）
   - 代码块（```）
   - 表格
   - 链接和图片
   - React组件（如需要）

### 3. 内容规范

#### 标题规范
- 主标题：使用#，简洁有力
- 副标题：使用##，描述章节内容
- 小标题：使用###，细分内容

#### 内容结构
1. **引言**：吸引读者，说明文章价值
2. **主体**：分章节展开，逻辑清晰
3. **总结**：关键要点，行动建议

#### SEO优化
- 标题包含关键词
- 描述150-160字符
- 自然使用关键词
- 添加相关标签

### 4. 提交和发布

1. **本地预览**：
   ```bash
   npm run dev
   # 访问 http://localhost:3000/events/your-article-name
   ```

2. **提交代码**：
   ```bash
   git add docs/your-article-name.mdx
   git commit -m "feat: 新增文章 - [文章标题]"
   git push origin content/your-article-name
   ```

3. **创建PR**：在GitHub上创建Pull Request

4. **审核发布**：通过审核后合并到main分支

## 🏷️ 分类和标签

### 分类（Category）
- **BREAKING**：突发新闻，时效性强
- **ANALYSIS**：深度分析，技术解读
- **DEVELOPER**：开发者指南，技术教程
- **INVESTIGATION**：调查报道，深度挖掘

### 标签（Tags）
- 使用相关技术关键词
- 包含产品名称（Grok 4, ChatGPT等）
- 添加主题标签（AI, Technology等）
- 最多5个标签

## 📊 内容质量检查

### 发布前检查清单
- [ ] 标题简洁有力
- [ ] 描述SEO友好
- [ ] 内容结构清晰
- [ ] 关键词自然使用
- [ ] 代码示例正确
- [ ] 图片链接有效
- [ ] 标签分类准确
- [ ] 阅读时间合理

### 内容质量标准
- **准确性**：信息准确，来源可靠
- **完整性**：内容完整，逻辑清晰
- **可读性**：语言简洁，结构合理
- **价值性**：提供实际价值，解决问题

## 🔧 技术支持

### 常用Markdown语法
```markdown
# 主标题
## 副标题
### 小标题

**粗体文本**
*斜体文本*
`代码片段`

- 无序列表
1. 有序列表

[链接文本](URL)
![图片描述](图片URL)

| 表头1 | 表头2 |
|-------|-------|
| 内容1 | 内容2 |

```python
# 代码块
def example():
    return "Hello World"
```
```

### 特殊组件
```jsx
<div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg p-6 mb-8">
**重要提示** - 使用这种方式突出重要信息
</div>
```

## 📈 内容效果追踪

### 关键指标
- 页面浏览量
- 阅读完成率
- 停留时间
- 分享次数
- 搜索排名

### 优化建议
- 根据数据调整内容策略
- 关注热门话题和关键词
- 定期更新和优化旧内容
- 收集用户反馈

## 🆘 常见问题

### Q: 如何添加图片？
A: 将图片放在`public/images/`目录，使用相对路径引用。

### Q: 如何设置特色文章？
A: 在frontmatter中设置`featured: true`。

### Q: 如何添加代码高亮？
A: 在代码块中指定语言，如```python。

### Q: 如何更新已发布文章？
A: 修改MDX文件，提交PR，审核后发布。

## 📞 联系方式

- **技术问题**：联系开发团队
- **内容审核**：联系内容负责人
- **紧急发布**：联系项目负责人

---

*最后更新：2025年7月19日*
*版本：1.0* 