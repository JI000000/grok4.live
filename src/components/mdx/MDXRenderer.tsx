import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Table, TableHeader, TableBody, TableRow, TableCell } from '@/components/ui';

interface MDXRendererProps {
  content: string;
  className?: string;
}

const components = {
  h1: (props: any) => (
    <h1 className="text-3xl font-bold mb-6 text-white" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-bold mb-4 text-white" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-semibold mb-3 text-white" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="text-lg font-semibold mb-2 text-white" {...props} />
  ),
  p: (props: any) => (
    <p className="mb-4 text-gray-300 leading-relaxed" {...props} />
  ),
  ul: (props: any) => (
    <ul className="mb-4 list-disc list-inside text-gray-300 space-y-1" {...props} />
  ),
  ol: (props: any) => (
    <ol className="mb-4 list-decimal list-inside text-gray-300 space-y-1" {...props} />
  ),
  li: (props: any) => (
    <li className="text-gray-300" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 mb-4 italic text-gray-300" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-800 px-2 py-1 rounded text-sm font-mono text-green-400" {...props} />
  ),
  pre: (props: any) => (
    <pre className="mb-4 overflow-x-auto" {...props} />
  ),
  table: (props: any) => (
    <Table {...props} />
  ),
  thead: (props: any) => (
    <TableHeader {...props} />
  ),
  tbody: (props: any) => (
    <TableBody {...props} />
  ),
  tr: (props: any) => (
    <TableRow {...props} />
  ),
  th: (props: any) => (
    <TableCell isHeader {...props} />
  ),
  td: (props: any) => (
    <TableCell {...props} />
  ),
  a: (props: any) => (
    <a className="text-blue-400 hover:text-blue-300 underline" {...props} />
  ),
  strong: (props: any) => (
    <strong className="font-semibold text-white" {...props} />
  ),
  em: (props: any) => (
    <em className="italic text-gray-200" {...props} />
  ),
  hr: (props: any) => (
    <hr className="border-gray-700 my-8" {...props} />
  ),
  // Custom code block component
  CodeBlock: ({ children, className }: { children: string; className?: string }) => {
    const language = className?.replace('language-', '') || 'text';
    return (
      <div className="mb-4">
        <SyntaxHighlighter
          language={language}
          style={tomorrow}
          customStyle={{
            margin: 0,
            borderRadius: '0.5rem',
            fontSize: '0.875rem',
          }}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    );
  },
};

export function MDXRenderer({ content, className = '' }: MDXRendererProps) {
  return (
    <div className={`prose prose-invert prose-lg max-w-none ${className}`}>
      <MDXRemote source={content} components={components} />
    </div>
  );
} 