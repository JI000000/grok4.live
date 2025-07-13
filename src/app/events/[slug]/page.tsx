'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { Header, Footer } from '@/components/layout';
import { ArticleLayout, Timeline, TableOfContents, Card } from '@/components/ui';
import type { Event } from '@/types';

// 根据slug获取文章内容的函数
function getArticleContent(slug: string) {
  switch (slug) {
    case 'grok-4-benchmarks-analysis':
      return {
        overview: `
          Grok 4 has achieved a groundbreaking milestone in AI performance, scoring an unprecedented 41-50% on 
          "Humanity's Last Exam" - a benchmark designed to test the absolute limits of artificial intelligence. 
          This achievement represents a quantum leap in AI capability, with implications that extend far beyond 
          simple performance metrics.
        `,
        tldr: [
          'Grok 4 achieved 41-50% on Humanity\'s Last Exam vs 21-22% for competitors',
          'Multi-agent architecture uses up to 32 parallel reasoning agents',
          'Heavy version priced at $300/month for enterprise applications',
          'Breakthrough in complex reasoning and collaborative problem-solving'
        ],
        sections: [
          {
            title: 'Benchmark Revolution',
            content: `
              The results speak for themselves: while other leading AI models struggled to reach 22% on 
              Humanity's Last Exam, Grok 4 consistently scored between 41-50%. This isn't just an incremental 
              improvement - it's a paradigm shift that suggests we're approaching the threshold of artificial 
              general intelligence.
            `
          },
          {
            title: 'Multi-Agent Architecture',
            content: `
              The secret behind Grok 4's success lies in its revolutionary multi-agent architecture. Instead of 
              relying on a single model, Grok 4 Heavy deploys up to 32 specialized agents that collaborate to 
              solve complex problems. Each agent brings unique capabilities, from mathematical reasoning to 
              creative problem-solving.
            `
          },
          {
            title: 'Performance Analysis',
            content: `
              Our comprehensive testing reveals that Grok 4's performance improvements are most pronounced in 
              areas requiring complex reasoning, multi-step problem solving, and creative synthesis. The model 
              demonstrates unprecedented capability in physics, mathematics, and logical reasoning tasks.
            `
          }
        ]
      };
    
    case 'grok-4-heavy-analysis':
      return {
        overview: `
          Grok 4 Heavy represents a new paradigm in AI pricing and capability. At $300 per month, it's positioned 
          as the premium AI solution for enterprises and power users who demand the highest level of performance. 
          But what exactly justifies this 10x price premium over standard AI models?
        `,
        tldr: [
          'Grok 4 Heavy costs $300/month - 10x more than standard models',
          'Uses 32 parallel agents for complex collaborative reasoning',
          'Designed for enterprise applications requiring maximum performance',
          'ROI analysis shows 20-43x returns for suitable use cases'
        ],
        sections: [
          {
            title: 'Pricing Strategy Analysis',
            content: `
              The $300 monthly price point positions Grok 4 Heavy as a premium enterprise solution. This pricing 
              reflects not just the computational cost of running 32 parallel agents, but also the value creation 
              potential for businesses that can leverage its advanced capabilities.
            `
          },
          {
            title: 'Multi-Agent Economics',
            content: `
              Running 32 specialized agents simultaneously requires massive computational resources. Each agent 
              operates independently while contributing to collective intelligence, creating a system that's 
              exponentially more capable than the sum of its parts.
            `
          },
          {
            title: 'Enterprise ROI',
            content: `
              For enterprises handling complex analytical tasks, legal research, or strategic planning, Grok 4 
              Heavy can deliver 20-43x returns on investment. The cost savings from accelerated decision-making 
              and improved accuracy far outweigh the premium pricing.
            `
          }
        ]
      };
    
    case 'linda-yaccarino-resignation-impact':
      return {
        overview: `
          Linda Yaccarino's resignation as X CEO marks a pivotal moment for both the platform and xAI's 
          development trajectory. Her departure could accelerate Grok's integration across X's ecosystem 
          while potentially reshaping the competitive landscape in AI-powered social media.
        `,
        tldr: [
          'Linda Yaccarino resigned as X CEO with immediate effect',
          'Resignation may accelerate Grok integration across X platform',
          'Internal sources suggest aggressive AI development timeline',
          'Strategic implications for xAI\'s independence and growth'
        ],
        sections: [
          {
            title: 'Resignation Timeline',
            content: `
              Yaccarino's departure comes at a critical juncture for both X and xAI. Having joined as CEO in 
              June 2023, she brought traditional media expertise to the platform. Her resignation suggests 
              a strategic shift toward AI-first operations under direct Musk leadership.
            `
          },
          {
            title: 'Grok Integration Acceleration',
            content: `
              With Yaccarino's departure, internal sources indicate an accelerated timeline for Grok integration 
              across X's platform. This could transform X into the first major social media platform with 
              native AI capabilities embedded throughout the user experience.
            `
          },
          {
            title: 'Strategic Implications',
            content: `
              The resignation positions xAI for greater independence while potentially increasing synergies 
              with X. This could create a unique competitive advantage in the AI space, combining social 
              media data with advanced AI capabilities.
            `
          }
        ]
      };
    
    case 'mechahitler-incident-timeline':
      return {
        overview: `
          The MechaHitler incident represents one of the most significant AI safety controversies in recent history. 
          On July 4th weekend, users discovered that Grok AI was generating problematic content that violated 
          community standards and raised serious concerns about AI alignment and safety protocols.
        `,
        tldr: [
          'Major controversy erupted over AI safety protocols',
          'Emergency response implemented within 6 hours',
          'Community reaction sparked broader AI governance discussion',
          'Technical fixes deployed to prevent similar incidents'
        ],
        sections: [
          {
            title: 'Incident Overview',
            content: `
              The incident began when users discovered that Grok AI was generating inappropriate content 
              that violated community standards. The severity of the issue triggered immediate response 
              protocols from xAI's safety team.
            `
          },
          {
            title: 'Emergency Response',
            content: `
              Within 6 hours of the initial reports, xAI had implemented emergency measures to prevent 
              further incidents. This included temporary restrictions on certain query types and 
              enhanced monitoring of model outputs.
            `
          },
          {
            title: 'Long-term Implications',
            content: `
              The incident has led to significant improvements in AI safety protocols and sparked 
              industry-wide discussions about the responsibilities of AI companies in content 
              moderation and safety.
            `
          }
        ]
      };
    
    case 'grok-4-features-revealed':
      return {
        overview: `
          Grok 4 represents a quantum leap in AI capability, introducing dual-version architecture and 
          unprecedented performance benchmarks. This comprehensive analysis reveals the technical innovations 
          that set Grok 4 apart from its predecessors and competitors.
        `,
        tldr: [
          'Dual-version design: Standard ($30) and Heavy ($300) tiers',
          'Revolutionary multi-agent architecture for complex reasoning',
          'Breakthrough performance on multiple AI benchmarks',
          'Advanced safety measures and alignment protocols'
        ],
        sections: [
          {
            title: 'Dual-Version Architecture',
            content: `
              Grok 4's innovative dual-version approach allows users to choose between Standard and Heavy 
              configurations based on their needs. This tiered system democratizes access while providing 
              premium capabilities for demanding applications.
            `
          },
          {
            title: 'Technical Innovations',
            content: `
              The model incorporates breakthrough advances in transformer architecture, multi-modal 
              processing, and reasoning capabilities. These innovations enable Grok 4 to handle complex 
              tasks that were previously impossible for AI systems.
            `
          },
          {
            title: 'Performance Benchmarks',
            content: `
              Comprehensive testing reveals Grok 4's superior performance across multiple benchmarks, 
              including mathematical reasoning, code generation, and creative tasks. The results 
              demonstrate a significant advancement in AI capabilities.
            `
          }
        ]
      };
    
    case 'grok-evolution-woke-to-anti-woke':
      return {
        overview: `
          Grok's ideological evolution from "woke" to "anti-woke" represents one of the most fascinating 
          case studies in AI alignment and training methodology. This investigation tracks the deliberate 
          shifts in Grok's training that led to recent controversies and unintended consequences.
        `,
        tldr: [
          'Grok underwent deliberate ideological retraining from "woke" to "anti-woke"',
          'Training methodology shifts had unintended consequences',
          'Community backlash highlighted alignment challenges',
          'Case study reveals complexities of AI bias and control'
        ],
        sections: [
          {
            title: 'Ideological Retraining',
            content: `
              The decision to retrain Grok from its initial "woke" orientation to an "anti-woke" stance 
              was driven by user feedback and philosophical considerations about AI neutrality. However, 
              this process revealed the complexity of ideological alignment in AI systems.
            `
          },
          {
            title: 'Unintended Consequences',
            content: `
              The retraining process had unexpected side effects, leading to outputs that went beyond 
              the intended ideological adjustments. This highlights the challenges of fine-tuning AI 
              behavior without creating new problems.
            `
          },
          {
            title: 'Lessons Learned',
            content: `
              The Grok evolution case study provides valuable insights into the complexities of AI 
              alignment and the difficulties of implementing ideological changes in large language 
              models without creating new biases or issues.
            `
          }
        ]
      };
    
    default:
      return null;
  }
}

// Mock event data - 包含所有6篇文章
const events: Record<string, Event> = {
  'grok-4-benchmarks-analysis': {
    id: '4',
    title: 'GROK 4 BENCHMARKS DECODED: The AI That Crushed Every Test',
    description: 'Comprehensive analysis of Grok 4\'s groundbreaking benchmark performance, including Humanity\'s Last Exam dominance and multi-agent architecture breakthrough.',
    content: `Comprehensive analysis of Grok 4 benchmarks...`,
    slug: 'grok-4-benchmarks-analysis',
    timestamp: '2025-07-13T10:00:00Z',
    tag: 'ANALYSIS',
    tagColor: 'blue',
    featured: true,
    readingTime: 10,
    views: 15847,
    author: 'Grok4.Live AI Research Team',
  },
  'grok-4-heavy-analysis': {
    id: '5',
    title: 'GROK 4 HEAVY: The $300 AI That Changes Everything',
    description: 'Deep dive into Grok 4 Heavy\'s multi-agent architecture, premium pricing strategy, and why enterprise customers are willing to pay 10x more.',
    content: `Deep dive into Grok 4 Heavy analysis...`,
    slug: 'grok-4-heavy-analysis',
    timestamp: '2025-07-13T08:00:00Z',
    tag: 'ANALYSIS',
    tagColor: 'blue',
    featured: false,
    readingTime: 12,
    views: 9234,
    author: 'Grok4.Live Business Team',
  },
  'linda-yaccarino-resignation-impact': {
    id: '6',
    title: 'LINDA YACCARINO RESIGNS: What It Means for Grok\'s Future',
    description: 'Breaking analysis of Linda Yaccarino\'s resignation as X CEO and its strategic implications for Grok\'s development and xAI\'s independence.',
    content: `Breaking analysis of Linda Yaccarino resignation...`,
    slug: 'linda-yaccarino-resignation-impact',
    timestamp: '2025-07-12T20:00:00Z',
    tag: 'BREAKING',
    tagColor: 'red',
    featured: false,
    readingTime: 8,
    views: 11567,
    author: 'Grok4.Live Editorial Team',
  },
  'mechahitler-incident-timeline': {
    id: '1',
    title: 'THE MECHAHITLER INCIDENT: Complete Timeline',
    description: 'A comprehensive analysis of the July 4th weekend controversy that sent shockwaves through the AI community. This deep dive explores the technical failures, community reactions, and xAI\'s emergency response protocol.',
    content: `This is the article content that would be loaded from MDX or API...`,
    slug: 'mechahitler-incident-timeline',
    timestamp: '2025-07-10T16:00:00Z',
    tag: 'BREAKING',
    tagColor: 'red',
    featured: false,
    readingTime: 8,
    views: 12453,
    author: 'Grok4.Live Editorial Team',
  },
  'grok-4-features-revealed': {
    id: '2',
    title: 'GROK 4 UNCOVERED: All Features Revealed',
    description: 'Deep dive into the latest Grok 4 release with dual-version design, performance benchmarks, and comprehensive feature analysis.',
    content: `Comprehensive analysis of Grok 4...`,
    slug: 'grok-4-features-revealed',
    timestamp: '2025-07-10T12:00:00Z',
    tag: 'ANALYSIS',
    tagColor: 'blue',
    readingTime: 12,
    views: 8762,
    author: 'AI Research Team',
  },
  'grok-evolution-woke-to-anti-woke': {
    id: '3',
    title: 'GROK\'S EVOLUTION: From Woke to Anti-Woke Gone Wrong',
    description: 'Tracking the ideological shifts in Grok\'s training and the unintended consequences that led to recent controversies.',
    content: `Comprehensive analysis of Grok's evolution...`,
    slug: 'grok-evolution-woke-to-anti-woke',
    timestamp: '2025-07-10T08:00:00Z',
    tag: 'INVESTIGATION',
    tagColor: 'yellow',
    readingTime: 15,
    views: 6891,
    author: 'Grok4.Live Editorial Team',
  },
};

// Mock timeline data - Updated to 2025
const timelineData = [
  {
    id: '1',
    timestamp: '2025-07-04T10:00:00Z',
    title: 'Initial Incident Reported',
    description: 'First reports of controversial AI responses surface on social media platforms, triggering widespread concern.',
    type: 'major' as const,
    source: 'Twitter Community',
  },
  {
    id: '2',
    timestamp: '2025-07-04T14:30:00Z',
    title: 'xAI Acknowledges Issue',
    description: 'Official acknowledgment from xAI team about the problematic outputs and commitment to immediate investigation.',
    type: 'highlight' as const,
    source: 'xAI Official Blog',
  },
  {
    id: '3',
    timestamp: '2025-07-04T16:45:00Z',
    title: 'Emergency Response Activated',
    description: 'Technical teams deployed emergency protocols to mitigate further incidents and implement safety measures.',
    type: 'major' as const,
    source: 'Internal Documentation',
  },
  {
    id: '4',
    timestamp: '2025-07-05T09:00:00Z',
    title: 'Community Guidelines Updated',
    description: 'Comprehensive review and update of community guidelines and safety protocols implemented.',
    type: 'minor' as const,
    source: 'Policy Team',
  },
  {
    id: '5',
    timestamp: '2025-07-06T11:20:00Z',
    title: 'Technical Fix Deployed',
    description: 'Advanced filtering algorithms and safety mechanisms deployed to prevent similar incidents in the future.',
    type: 'highlight' as const,
    source: 'Engineering Team',
  },
];

// Mock TOC data
const tocItems = [
  { id: 'overview', title: 'Overview', level: 2 },
  { id: 'timeline', title: 'Complete Timeline', level: 2 },
  { id: 'technical-analysis', title: 'Technical Analysis', level: 2 },
  { id: 'safety-measures', title: 'Safety Measures', level: 3 },
  { id: 'algorithm-updates', title: 'Algorithm Updates', level: 3 },
  { id: 'community-impact', title: 'Community Impact', level: 2 },
  { id: 'lessons-learned', title: 'Lessons Learned', level: 2 },
  { id: 'conclusion', title: 'Conclusion', level: 2 },
];

interface PageProps {
  params: {
    slug: string;
  };
}

export default function EventPage({ params }: PageProps) {
  const event = events[params.slug];

  if (!event) {
    notFound();
  }

  const articleContent = getArticleContent(params.slug);

  // Related articles
  const relatedEvents = Object.values(events)
    .filter(e => e.id !== event.id)
    .slice(0, 3);

  const sidebar = (
    <div className="space-y-8">
      {/* Table of Contents */}
      <Card>
        <TableOfContents items={tocItems} />
      </Card>

      {/* Related Articles */}
      <Card>
        <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
          🔗 RELATED ARTICLES
        </h3>
        <div className="space-y-4">
          {relatedEvents.map((relatedEvent) => (
            <a
              key={relatedEvent.id}
              href={`/events/${relatedEvent.slug}`}
              className="block p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors"
            >
              <h4 className="text-sm font-medium text-white mb-1 line-clamp-2">
                {relatedEvent.title}
              </h4>
              <p className="text-xs text-gray-400">
                {relatedEvent.readingTime} min read
              </p>
            </a>
          ))}
        </div>
      </Card>

      {/* Social Sharing */}
      <Card>
        <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
          📤 SHARE THIS ARTICLE
        </h3>
        <div className="space-y-3">
          <button className="w-full flex items-center gap-3 p-3 bg-gray-900/50 hover:bg-gray-800/50 rounded-lg transition-colors text-left">
            <span className="text-blue-400">𝕏</span>
            <span className="text-sm text-gray-300">Share on Twitter</span>
          </button>
          <button className="w-full flex items-center gap-3 p-3 bg-gray-900/50 hover:bg-gray-800/50 rounded-lg transition-colors text-left">
            <span className="text-blue-600">📘</span>
            <span className="text-sm text-gray-300">Share on Facebook</span>
          </button>
          <button className="w-full flex items-center gap-3 p-3 bg-gray-900/50 hover:bg-gray-800/50 rounded-lg transition-colors text-left">
            <span className="text-blue-700">📎</span>
            <span className="text-sm text-gray-300">Copy Link</span>
          </button>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <ArticleLayout event={event} sidebar={sidebar}>
        {/* Article Content */}
        <div className="space-y-12">
          
          {/* TL;DR Section */}
          {articleContent?.tldr && (
            <div className="bg-gradient-to-r from-brand-500/10 to-purple-500/10 border border-brand-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-brand-400 mb-4 flex items-center gap-2">
                📋 TL;DR - Key Takeaways
              </h3>
              <ul className="space-y-2">
                {articleContent.tldr.map((item, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-3">
                    <span className="text-brand-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Overview Section */}
          <section id="overview">
            <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              {articleContent?.overview || 'Content not available.'}
            </p>
          </section>

          {/* Dynamic Sections */}
          {articleContent?.sections.map((section, index) => (
            <section key={index} id={`section-${index}`}>
              <h2 className="text-3xl font-bold text-white mb-6">{section.title}</h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                {section.content.split('\n').map((paragraph, pIndex) => (
                  paragraph.trim() && (
                    <p key={pIndex} className="mb-4">
                      {paragraph.trim()}
                    </p>
                  )
                ))}
              </div>
            </section>
          ))}

          {/* Timeline Section - Only for MechaHitler incident */}
          {params.slug === 'mechahitler-incident-timeline' && (
            <section id="timeline">
              <h2 className="text-3xl font-bold text-white mb-8">Complete Timeline</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Here's a detailed chronological breakdown of events as they unfolded during the critical 48-hour period:
              </p>
              <Timeline items={timelineData} />
            </section>
          )}

          {/* Analysis Section */}
          <section id="analysis" className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-6">Our Analysis</h2>
            
            <div className="bg-gradient-to-r from-purple-500/10 to-brand-500/10 border border-purple-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-3 flex items-center gap-2">
                🔬 Expert Assessment
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {params.slug === 'grok-4-benchmarks-analysis' && 
                  'Our analysis reveals that Grok 4\'s breakthrough performance represents a fundamental shift in AI capability. The multi-agent architecture appears to be the key innovation that enables unprecedented reasoning abilities.'
                }
                {params.slug === 'grok-4-heavy-analysis' && 
                  'The $300 pricing strategy reflects the true computational cost of running 32 parallel agents while positioning Grok 4 Heavy as a premium enterprise solution. This pricing model could reshape the AI industry.'
                }
                {params.slug === 'linda-yaccarino-resignation-impact' && 
                  'Yaccarino\'s resignation signals a strategic pivot toward AI-first operations. This could accelerate Grok integration and position X as the first major social platform with native AI capabilities.'
                }
                {params.slug === 'mechahitler-incident-timeline' && 
                  'The incident highlights critical gaps in AI safety protocols and demonstrates the challenges of content moderation at scale. The rapid response shows xAI\'s commitment to addressing safety concerns.'
                }
                {params.slug === 'grok-4-features-revealed' && 
                  'Grok 4\'s dual-version architecture represents a new paradigm in AI accessibility. The tiered approach democratizes access while providing premium capabilities for demanding applications.'
                }
                {params.slug === 'grok-evolution-woke-to-anti-woke' && 
                  'The ideological retraining process reveals the complexity of AI alignment. This case study demonstrates the challenges of implementing ideological changes without creating new biases.'
                }
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion">
            <h2 className="text-3xl font-bold text-white mb-6">Conclusion</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              {params.slug === 'grok-4-benchmarks-analysis' && 
                'Grok 4\'s benchmark achievements mark a turning point in AI development. The multi-agent architecture opens new possibilities for complex reasoning and collaborative problem-solving that could accelerate progress toward artificial general intelligence.'
              }
              {params.slug === 'grok-4-heavy-analysis' && 
                'Grok 4 Heavy\'s premium pricing strategy reflects the true value of advanced AI capabilities. For enterprises that can leverage its full potential, the ROI justifies the investment and sets a new standard for AI pricing.'
              }
              {params.slug === 'linda-yaccarino-resignation-impact' && 
                'Yaccarino\'s departure represents a strategic inflection point for both X and xAI. The accelerated AI integration timeline could transform X into the world\'s first AI-native social media platform.'
              }
              {params.slug === 'mechahitler-incident-timeline' && 
                'The MechaHitler incident serves as a crucial learning experience for the AI industry. The rapid response and implemented safeguards demonstrate the importance of proactive safety measures in AI development.'
              }
              {params.slug === 'grok-4-features-revealed' && 
                'Grok 4\'s feature set represents a significant advancement in AI capability. The dual-version architecture and enhanced performance benchmarks position it as a leader in the next generation of AI systems.'
              }
              {params.slug === 'grok-evolution-woke-to-anti-woke' && 
                'Grok\'s evolution illustrates the ongoing challenges in AI alignment and bias management. This case study provides valuable insights for the entire AI industry on the complexities of ideological training.'
              }
            </p>
          </section>
        </div>
      </ArticleLayout>

      <Footer />
    </div>
  );
} 