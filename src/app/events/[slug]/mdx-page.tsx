import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Header, Footer } from '@/components/layout';
import { ArticleLayout, TableOfContents, Card } from '@/components/ui';
import { MDXRenderer } from '@/components/mdx/MDXRenderer';
import { getMDXContentBySlug, getAllMDXSlugs } from '@/lib/mdx';
import { getAdvancedRecommendations } from '@/lib/recommendations';


interface PageProps {
  params: {
    slug: string;
  };
}

// 生成静态路径
export async function generateStaticParams() {
  const slugs = getAllMDXSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// 生成元数据
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const content = getMDXContentBySlug(params.slug);
  
  if (!content) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: content.title,
    description: content.description,
    keywords: content.tags.join(', '),
    authors: [{ name: content.author }],
    openGraph: {
      title: content.title,
      description: content.description,
      type: 'article',
      publishedTime: content.publishedAt,
      authors: [content.author],
      tags: content.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
    },
  };
}

export default function MDXEventPage({ params }: PageProps) {
  const content = getMDXContentBySlug(params.slug);

  if (!content) {
    notFound();
  }

  // 获取相关文章
  const relatedArticles = getAdvancedRecommendations(params.slug, undefined, 3);
  
  // 生成目录
  const tocItems = generateTOC(content.content);

  // 转换MDX内容为Event格式
  const event = {
    id: content.slug,
    title: content.title,
    description: content.description,
    slug: content.slug,
    timestamp: content.publishedAt,
    tag: content.category,
    tagColor: (content.category === 'BREAKING' ? 'red' : 
              content.category === 'ANALYSIS' ? 'blue' : 
              content.category === 'DEVELOPER' ? 'green' : 'purple') as 'red' | 'blue' | 'green' | 'purple' | 'yellow',
    featured: content.featured,
    readingTime: content.readingTime,
    views: 0,
    author: content.author,
    content: content.content
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* 主要内容 */}
            <div className="lg:col-span-3">
              <ArticleLayout event={event}>
                {/* MDX内容渲染 */}
                <MDXRenderer content={content.content} />
              </ArticleLayout>
            </div>

            {/* 侧边栏 */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* 目录 */}
                <TableOfContents items={tocItems} />
                
                {/* 相关文章 */}
                <Card>
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <h3 className="font-semibold">RELATED ARTICLES</h3>
                  </div>
                  <div className="space-y-3">
                    {relatedArticles.map((article) => (
                      <div key={article.content.slug} className="text-sm">
                        <a 
                          href={`/events/${article.content.slug}`} 
                          className="text-blue-400 hover:text-blue-300 line-clamp-2"
                        >
                          {article.content.title}
                        </a>
                        <div className="text-gray-400 mt-1">{article.content.readingTime} min read</div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* 分享 */}
                <Card>
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    <h3 className="font-semibold">SHARE THIS ARTICLE</h3>
                  </div>
                  <div className="space-y-2">
                    <button className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300">
                      <span>X</span> Share on Twitter
                    </button>
                    <button className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300">
                      <span>f</span> Share on Facebook
                    </button>
                    <button className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      Copy Link
                    </button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// 生成目录
function generateTOC(content: string) {
  const lines = content.split('\n');
  const tocItems: { id: string; title: string; level: number }[] = [];
  let sectionIndex = 0;
  
  for (const line of lines) {
    if (line.startsWith('## ')) {
      const title = line.replace('## ', '').trim();
      const id = `section-${sectionIndex}`;
      tocItems.push({
        id,
        title,
        level: 2,
      });
      sectionIndex++;
    } else if (line.startsWith('### ')) {
      const title = line.replace('### ', '').trim();
      const id = `section-${sectionIndex}`;
      tocItems.push({
        id,
        title,
        level: 3,
      });
      sectionIndex++;
    }
  }
  
  return tocItems;
} 