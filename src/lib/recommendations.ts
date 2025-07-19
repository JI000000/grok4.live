import { getAllMDXContents, getMDXContentBySlug } from './mdx';
import type { MDXContent } from './mdx';

export interface RecommendationScore {
  content: MDXContent;
  score: number;
  reasons: string[];
}

export interface UserPreferences {
  categories?: string[];
  tags?: string[];
  readingTime?: {
    min?: number;
    max?: number;
  };
  featured?: boolean;
}

// 高级推荐算法
export function getAdvancedRecommendations(
  currentSlug: string,
  userPreferences?: UserPreferences,
  limit: number = 6
): RecommendationScore[] {
  const currentContent = getMDXContentBySlug(currentSlug);
  if (!currentContent) return [];

  const allContents = getAllMDXContents();
  
  // 过滤掉当前内容
  const candidates = allContents.filter(content => content.slug !== currentSlug);
  
  // 计算推荐分数
  const scoredRecommendations = candidates.map(content => {
    let score = 0;
    const reasons: string[] = [];

    // 1. 分类匹配 (权重: 30%)
    if (content.category === currentContent.category) {
      score += 30;
      reasons.push('Same category');
    }

    // 2. 标签匹配 (权重: 25%)
    const commonTags = content.tags.filter(tag => 
      currentContent.tags.includes(tag)
    );
    if (commonTags.length > 0) {
      score += Math.min(25, commonTags.length * 8);
      reasons.push(`${commonTags.length} common tags: ${commonTags.join(', ')}`);
    }

    // 3. 用户偏好匹配 (权重: 20%)
    if (userPreferences) {
      // 分类偏好
      if (userPreferences.categories && userPreferences.categories.includes(content.category)) {
        score += 10;
        reasons.push('Matches your category preference');
      }

      // 标签偏好
      if (userPreferences.tags) {
        const preferenceMatches = content.tags.filter(tag => 
          userPreferences.tags!.includes(tag)
        );
        if (preferenceMatches.length > 0) {
          score += Math.min(10, preferenceMatches.length * 3);
          reasons.push(`Matches your interests: ${preferenceMatches.join(', ')}`);
        }
      }

      // 阅读时间偏好
      if (userPreferences.readingTime) {
        const { min = 0, max = Infinity } = userPreferences.readingTime;
        if (content.readingTime >= min && content.readingTime <= max) {
          score += 5;
          reasons.push('Matches your reading time preference');
        }
      }

      // 特色文章偏好
      if (userPreferences.featured && content.featured) {
        score += 5;
        reasons.push('Featured article');
      }
    }

    // 4. 时间相关性 (权重: 15%)
    const currentDate = new Date();
    const contentDate = new Date(content.publishedAt);
    const daysDiff = Math.abs(currentDate.getTime() - contentDate.getTime()) / (1000 * 60 * 60 * 24);
    
    if (daysDiff <= 7) {
      score += 15;
      reasons.push('Recently published');
    } else if (daysDiff <= 30) {
      score += 10;
      reasons.push('Published this month');
    } else if (daysDiff <= 90) {
      score += 5;
      reasons.push('Published recently');
    }

    // 5. 内容质量指标 (权重: 10%)
    if (content.featured) {
      score += 5;
      reasons.push('Featured content');
    }
    
    if (content.readingTime >= 10) {
      score += 3;
      reasons.push('In-depth analysis');
    }

    // 6. 多样性调整
    // 避免推荐太多相同类型的文章
    const diversityPenalty = Math.random() * 5;
    score -= diversityPenalty;

    return {
      content,
      score: Math.max(0, score),
      reasons
    };
  });

  // 排序并返回结果
  return scoredRecommendations
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

// 基于阅读历史的推荐
export function getReadingHistoryRecommendations(
  readingHistory: string[],
  limit: number = 6
): RecommendationScore[] {
  if (readingHistory.length === 0) {
    return getTrendingRecommendations(limit);
  }

  const allContents = getAllMDXContents();
  const readSlugs = new Set(readingHistory);
  
  // 过滤掉已读内容
  const unreadContents = allContents.filter(content => !readSlugs.has(content.slug));
  
  // 分析阅读偏好
  const preferences = analyzeReadingPreferences(readingHistory);
  
  // 基于偏好推荐
  return getAdvancedRecommendations(
    readingHistory[readingHistory.length - 1], // 最近阅读的文章
    preferences,
    limit
  );
}

// 分析阅读偏好
function analyzeReadingPreferences(readingHistory: string[]): UserPreferences {
  const allContents = getAllMDXContents();
  const readContents = readingHistory
    .map(slug => getMDXContentBySlug(slug))
    .filter(Boolean) as MDXContent[];

  if (readContents.length === 0) {
    return {};
  }

  // 统计分类偏好
  const categoryCounts: Record<string, number> = {};
  readContents.forEach(content => {
    categoryCounts[content.category] = (categoryCounts[content.category] || 0) + 1;
  });

  // 统计标签偏好
  const tagCounts: Record<string, number> = {};
  readContents.forEach(content => {
    content.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  // 计算平均阅读时间
  const avgReadingTime = readContents.reduce((sum, content) => 
    sum + content.readingTime, 0
  ) / readContents.length;

  // 特色文章偏好
  const featuredRatio = readContents.filter(content => content.featured).length / readContents.length;

  return {
    categories: Object.keys(categoryCounts).filter(cat => 
      categoryCounts[cat] >= Math.max(2, readContents.length * 0.3)
    ),
    tags: Object.keys(tagCounts).filter(tag => 
      tagCounts[tag] >= Math.max(2, readContents.length * 0.2)
    ),
    readingTime: {
      min: Math.max(1, avgReadingTime * 0.7),
      max: avgReadingTime * 1.3
    },
    featured: featuredRatio > 0.3
  };
}

// 热门推荐
export function getTrendingRecommendations(limit: number = 6): RecommendationScore[] {
  const allContents = getAllMDXContents();
  
  return allContents
    .map(content => {
      let score = 0;
      const reasons: string[] = [];

      // 特色文章加分
      if (content.featured) {
        score += 20;
        reasons.push('Featured content');
      }

      // 最近发布加分
      const daysSincePublished = (Date.now() - new Date(content.publishedAt).getTime()) / (1000 * 60 * 60 * 24);
      if (daysSincePublished <= 7) {
        score += 15;
        reasons.push('Recently published');
      } else if (daysSincePublished <= 30) {
        score += 10;
        reasons.push('Published this month');
      }

      // 阅读时间适中加分
      if (content.readingTime >= 8 && content.readingTime <= 15) {
        score += 10;
        reasons.push('Optimal reading length');
      }

      // 热门分类加分
      const popularCategories = ['BREAKING', 'ANALYSIS'];
      if (popularCategories.includes(content.category)) {
        score += 8;
        reasons.push('Popular category');
      }

      return {
        content,
        score,
        reasons
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

// 个性化推荐
export function getPersonalizedRecommendations(
  userProfile: {
    interests: string[];
    readingLevel: 'beginner' | 'intermediate' | 'advanced';
    preferredCategories: string[];
    timeAvailability: 'short' | 'medium' | 'long';
  },
  limit: number = 6
): RecommendationScore[] {
  const allContents = getAllMDXContents();
  
  return allContents
    .map(content => {
      let score = 0;
      const reasons: string[] = [];

      // 兴趣匹配
      const interestMatches = content.tags.filter(tag => 
        userProfile.interests.includes(tag)
      );
      if (interestMatches.length > 0) {
        score += interestMatches.length * 15;
        reasons.push(`Matches your interests: ${interestMatches.join(', ')}`);
      }

      // 阅读水平匹配
      const readingTimeMap = {
        beginner: { min: 1, max: 8 },
        intermediate: { min: 5, max: 15 },
        advanced: { min: 10, max: 25 }
      };
      
      const { min, max } = readingTimeMap[userProfile.readingLevel];
      if (content.readingTime >= min && content.readingTime <= max) {
        score += 12;
        reasons.push('Matches your reading level');
      }

      // 分类偏好
      if (userProfile.preferredCategories.includes(content.category)) {
        score += 10;
        reasons.push('Your preferred category');
      }

      // 时间可用性匹配
      const timeMap = {
        short: { max: 8 },
        medium: { max: 15 },
        long: { max: 25 }
      };
      
      const { max: maxTime } = timeMap[userProfile.timeAvailability];
      if (content.readingTime <= maxTime) {
        score += 8;
        reasons.push('Fits your available time');
      }

      return {
        content,
        score,
        reasons
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

// 相关内容推荐（基于内容相似性）
export function getSimilarContentRecommendations(
  currentSlug: string,
  limit: number = 6
): RecommendationScore[] {
  const currentContent = getMDXContentBySlug(currentSlug);
  if (!currentContent) return [];

  const allContents = getAllMDXContents();
  const candidates = allContents.filter(content => content.slug !== currentSlug);
  
  return candidates
    .map(content => {
      let score = 0;
      const reasons: string[] = [];

      // 标签相似性
      const commonTags = content.tags.filter(tag => 
        currentContent.tags.includes(tag)
      );
      const tagSimilarity = commonTags.length / Math.max(content.tags.length, currentContent.tags.length);
      score += tagSimilarity * 40;
      if (commonTags.length > 0) {
        reasons.push(`Similar topics: ${commonTags.join(', ')}`);
      }

      // 分类相似性
      if (content.category === currentContent.category) {
        score += 30;
        reasons.push('Same category');
      }

      // 内容长度相似性
      const lengthDiff = Math.abs(content.readingTime - currentContent.readingTime);
      if (lengthDiff <= 3) {
        score += 15;
        reasons.push('Similar reading length');
      } else if (lengthDiff <= 7) {
        score += 8;
        reasons.push('Moderately similar length');
      }

      // 发布时间相似性
      const currentDate = new Date(currentContent.publishedAt);
      const contentDate = new Date(content.publishedAt);
      const daysDiff = Math.abs(currentDate.getTime() - contentDate.getTime()) / (1000 * 60 * 60 * 24);
      
      if (daysDiff <= 7) {
        score += 10;
        reasons.push('Published around the same time');
      } else if (daysDiff <= 30) {
        score += 5;
        reasons.push('Published in the same period');
      }

      return {
        content,
        score,
        reasons
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
} 