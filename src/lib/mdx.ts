import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const docsDirectory = path.join(process.cwd(), 'docs');

export interface MDXContent {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  category: string;
  tags: string[];
  featured: boolean;
  readingTime: number;
  content: string;
  frontmatter: any;
}

export function getAllMDXSlugs(): string[] {
  const fileNames = fs.readdirSync(docsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => fileName.replace(/\.mdx$/, ''));
}

export function getMDXContentBySlug(slug: string): MDXContent | null {
  try {
    const fullPath = path.join(docsDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      publishedAt: data.publishedAt || '',
      author: data.author || '',
      category: data.category || '',
      tags: data.tags || [],
      featured: data.featured || false,
      readingTime: data.readingTime || 5,
      content,
      frontmatter: data,
    };
  } catch (error) {
    console.error(`Error reading MDX file for slug ${slug}:`, error);
    return null;
  }
}

export function getAllMDXContents(): MDXContent[] {
  const slugs = getAllMDXSlugs();
  const contents = slugs
    .map(slug => getMDXContentBySlug(slug))
    .filter((content): content is MDXContent => content !== null);
  
  // Sort by publishedAt date (newest first)
  return contents.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedMDXContents(): MDXContent[] {
  return getAllMDXContents().filter(content => content.featured);
}

export function getMDXContentsByCategory(category: string): MDXContent[] {
  return getAllMDXContents().filter(content => 
    content.category.toLowerCase() === category.toLowerCase()
  );
}

export function getMDXContentsByTag(tag: string): MDXContent[] {
  return getAllMDXContents().filter(content => 
    content.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
}

export function getRelatedMDXContents(currentSlug: string, limit: number = 3): MDXContent[] {
  const currentContent = getMDXContentBySlug(currentSlug);
  if (!currentContent) return [];

  const allContents = getAllMDXContents();
  
  // Filter out current content and sort by relevance
  const related = allContents
    .filter(content => content.slug !== currentSlug)
    .map(content => {
      let score = 0;
      
      // Same category gets high score
      if (content.category === currentContent.category) score += 10;
      
      // Same tags get points
      const commonTags = content.tags.filter(tag => 
        currentContent.tags.includes(tag)
      );
      score += commonTags.length * 5;
      
      // Featured content gets bonus
      if (content.featured) score += 3;
      
      return { ...content, relevanceScore: score };
    })
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, limit)
    .map(({ relevanceScore, ...content }) => content);

  return related;
} 