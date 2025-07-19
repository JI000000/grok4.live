import { redirect } from 'next/navigation';
import { getMDXContentBySlug } from '@/lib/mdx';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function MDXRedirectPage({ params }: PageProps) {
  const content = getMDXContentBySlug(params.slug);
  
  if (!content) {
    // 如果MDX内容不存在，重定向回原页面
    redirect(`/events/${params.slug}`);
  }

  // 如果MDX内容存在，重定向到MDX页面
  redirect(`/events/${params.slug}/mdx-page`);
} 