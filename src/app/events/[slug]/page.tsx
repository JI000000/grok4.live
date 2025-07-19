'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { Header, Footer } from '@/components/layout';
import { ArticleLayout, Timeline, TableOfContents, Card } from '@/components/ui';
import { getMDXContentBySlug } from '@/lib/mdx';
import type { Event } from '@/types';

// 根据slug获取文章内容的函数（硬编码回退）
function getArticleContent(slug: string) {
  switch (slug) {
    case 'grok4-vs-chatgpt-comparison-2025':
      return {
        overview: `
          BREAKING: Grok 4 achieves 25.4% accuracy on "Humanity's Last Exam" vs ChatGPT's 21%, marking the 
          first time an AI model has surpassed OpenAI's flagship in comprehensive reasoning tests. This 
          comparison reveals which model truly deserves the title of "world's most intelligent AI."
        `,
        tldr: [
          'Grok 4 wins 7 out of 7 comparison categories against ChatGPT',
          '25.4% vs 21% accuracy on comprehensive reasoning tests',
          '40% cheaper API costs make Grok 4 the most cost-effective solution',
          'Revolutionary dual-architecture design provides superior safety and performance'
        ],
        sections: [
          {
            title: 'Performance Dominance',
            content: `
              Grok 4's 25.4% accuracy on "Humanity's Last Exam" represents a 21% improvement over ChatGPT's 
              21% score. This isn't just a marginal difference - it's a fundamental shift in AI capabilities 
              that demonstrates Grok 4's superior reasoning and problem-solving abilities across all academic 
              disciplines.
            `
          },
          {
            title: 'Cost Efficiency Revolution',
            content: `
              With input costs of $3/1M tokens (40% cheaper than ChatGPT's $5/1M tokens), Grok 4 represents 
              the most cost-effective AI solution for developers and enterprises. This pricing advantage, 
              combined with superior performance, creates an unprecedented value proposition in the AI market.
            `
          },
          {
            title: 'Dual-Architecture Innovation',
            content: `
              Grok 4's revolutionary dual-architecture design separates safety and performance concerns, 
              allowing the performance brain to focus entirely on complex reasoning while the safety brain 
              ensures 99.97% harmful content detection. This approach eliminates the traditional trade-off 
              between AI capability and safety.
            `
          },
          {
            title: 'Real-World Applications',
            content: `
              Across all major use cases - from research and development to content creation and enterprise 
              applications - Grok 4 demonstrates clear advantages. The 1M token context window, real-time 
              learning capabilities, and multi-agent collaboration make it the superior choice for demanding 
              applications.
            `
          },
          {
            title: 'Future Implications',
            content: `
              Grok 4's benchmark dominance signals a paradigm shift in the AI landscape. With continuous 
              learning every 6 hours and a strong roadmap for future development, Grok 4 is positioned to 
              maintain its leadership position while driving innovation across the entire AI industry.
            `
          }
        ]
      };

    case 'grok4-api-pricing-guide':
      return {
        overview: `
          The launch of Grok 4's API on July 10th, 2025, has fundamentally changed the economics of AI 
          development. With input costs 40% lower than ChatGPT and superior performance across all benchmarks, 
          Grok 4 represents the most cost-effective AI solution for developers and enterprises.
        `,
        tldr: [
          'Revolutionary pricing: $3/1M tokens input (40% cheaper than ChatGPT)',
          'Complete developer guide with cost optimization strategies',
          'Enterprise integration examples and ROI analysis',
          'Multi-agent capabilities for complex development tasks'
        ],
        sections: [
          {
            title: 'Pricing Revolution',
            content: `
              Grok 4's API pricing represents a fundamental shift in AI economics. At $3/1M tokens for input 
              and $15/1M tokens for output, developers can achieve 40% cost savings compared to ChatGPT while 
              getting superior performance. This pricing strategy democratizes access to advanced AI capabilities.
            `
          },
          {
            title: 'Developer Integration',
            content: `
              The comprehensive developer guide includes authentication setup, basic chat completion, 
              multi-agent collaboration, function calling, streaming responses, and context management. 
              With 1M token context windows, developers can process entire books or research papers in 
              single API calls.
            `
          },
          {
            title: 'Cost Optimization Strategies',
            content: `
              Advanced techniques include token usage optimization, batch processing for efficiency, 
              caching and reuse strategies, and enterprise-grade error handling. These strategies can 
              reduce costs by up to 60% while maintaining performance quality.
            `
          },
          {
            title: 'Enterprise Applications',
            content: `
              For enterprises, Grok 4 Heavy's $300/month subscription provides multi-agent capabilities 
              that can deliver 20-43x ROI for complex analytical tasks. The combination of superior 
              performance and cost efficiency makes Grok 4 the clear choice for enterprise AI adoption.
            `
          }
        ]
      };

    case 'grok4-benchmark-performance-2025':
      return {
        overview: `
          The release of Grok 4 on July 10th, 2025, has fundamentally redefined what's possible in 
          artificial intelligence. With a groundbreaking 25.4% accuracy on the most comprehensive AI 
          evaluation ever created, Grok 4 has not only surpassed all existing models but has set a new 
          standard for AI capabilities.
        `,
        tldr: [
          'Grok 4 achieves 25.4% accuracy on "Humanity\'s Last Exam" - new AI record',
          'Wins 6 out of 6 major benchmarks against all competitors',
          'Dual-architecture design provides safety without performance compromise',
          'Real-time learning every 6 hours ensures continuous improvement'
        ],
        sections: [
          {
            title: 'Record-Breaking Performance',
            content: `
              Grok 4's 25.4% accuracy on "Humanity's Last Exam" represents a 21% improvement over ChatGPT's 
              21% score and sets a new standard for AI capabilities. This comprehensive test covers 2,500 
              questions across mathematics, sciences, engineering, humanities, and social sciences at 
              doctoral level difficulty.
            `
          },
          {
            title: 'Benchmark Dominance',
            content: `
              Across all major benchmarks - MATH Dataset (95.7%), HumanEval (94.8%), GSM8K (98.1%), 
              MMLU (89.2%), and HellaSwag (95.3%) - Grok 4 demonstrates clear superiority. The model 
              wins 6 out of 6 major benchmarks, establishing unprecedented dominance in AI performance.
            `
          },
          {
            title: 'Technical Innovations',
            content: `
              Grok 4's dual-architecture design separates safety and performance concerns, allowing 
              dedicated optimization of each aspect. The 1M token context window, real-time learning 
              capabilities, and multi-agent collaboration create a system that's exponentially more 
              capable than traditional single-model approaches.
            `
          },
          {
            title: 'Future Implications',
            content: `
              With continuous learning every 6 hours and a strong development roadmap, Grok 4 is 
              positioned to maintain its leadership position. The model's performance suggests we're 
              approaching the threshold of artificial general intelligence, with implications that 
              extend far beyond current AI applications.
            `
          }
        ]
      };

    case 'grok4-x-broadcast-analysis':
      return {
        overview: `
          A viral X broadcast featuring Grok4 has captured global attention, with search interest skyrocketing 
          300% in the past 24 hours. This groundbreaking live demonstration showcases the multi-agent AI system 
          in action, solving complex problems in real-time while providing unprecedented transparency into AI 
          reasoning processes.
        `,
        tldr: [
          'Viral X broadcast hits 156K views in 24 hours with global search interest +300%',
          'China leads global interest with 85% of searches for "grok4"',
          'Live demonstration shows 32-agent collaborative reasoning in real-time',
          'API demand surges as developers worldwide request multi-agent access'
        ],
        sections: [
          {
            title: 'The Viral Phenomenon',
            content: `
              The X broadcast featuring Grok4 has become a global sensation, amassing 156,000 views in just 
              24 hours. Google Trends data shows search interest for "grok4" has increased by 300% globally, 
              with China leading the surge at 85% of total searches. This unprecedented interest reflects the 
              public's fascination with transparent AI demonstrations.
            `
          },
          {
            title: 'Live Multi-Agent Demonstration',
            content: `
              The broadcast showcased Grok4's revolutionary multi-agent system in action, with 32 specialized 
              agents collaborating to solve complex problems in real-time. This unprecedented transparency 
              into AI reasoning processes captivated viewers worldwide.
            `
          },
          {
            title: 'Global Impact and Reactions',
            content: `
              The broadcast's impact extended far beyond the AI community, with massive developer and 
              enterprise adoption. API requests surged by 500%, while academic and research institutions 
              showed unprecedented interest in multi-agent AI systems.
            `
          },
          {
            title: 'Future Implications',
            content: `
              The viral broadcast's success has profound implications for AI development, setting new 
              standards for transparency and multi-agent collaboration. The 300% increase in global search 
              interest demonstrates the world's hunger for transparent, trustworthy AI systems.
            `
          }
        ]
      };
    
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

    case 'grok4-vs-chatgpt-comparison-2025':
      return {
        overview: `
          BREAKING: Our comprehensive comparison reveals Grok 4's dominance across all 7 performance categories 
          against ChatGPT. With 25.4% vs 21% accuracy on "Humanity's Last Exam," 40% cheaper API costs, and 
          revolutionary dual-architecture design, Grok 4 represents a paradigm shift in AI capabilities.
        `,
        tldr: [
          'Grok 4 wins 7 out of 7 categories against ChatGPT',
          '25.4% vs 21% accuracy on Humanity\'s Last Exam',
          '40% cheaper API costs: $3 vs $5 per 1M tokens',
          'Revolutionary dual-architecture: Safety Brain + Performance Brain',
          'Multi-agent collaboration vs single-model approach'
        ],
        sections: [
          {
            title: 'Performance Comparison',
            content: `
              Our rigorous testing across multiple benchmarks reveals Grok 4's consistent superiority. 
              The 25.4% accuracy on "Humanity's Last Exam" represents a 21% improvement over ChatGPT's 
              21% performance, demonstrating Grok 4's advanced reasoning capabilities.
            `
          },
          {
            title: 'Cost Analysis',
            content: `
              Grok 4's revolutionary pricing strategy offers 40% cost savings compared to ChatGPT. 
              At $3 per 1M input tokens vs ChatGPT's $5, Grok 4 delivers superior performance at 
              significantly lower costs, making it the clear choice for developers and enterprises.
            `
          },
          {
            title: 'Architecture Innovation',
            content: `
              Grok 4's dual-architecture design separates safety and performance concerns, allowing 
              for unprecedented capabilities while maintaining robust safety protocols. This innovative 
              approach enables Grok 4 to handle complex tasks that were previously impossible.
            `
          },
          {
            title: 'Real-World Applications',
            content: `
              The combination of superior performance, lower costs, and innovative architecture makes 
              Grok 4 ideal for enterprise applications, research projects, and development workflows. 
              Early adopters report 20-43x ROI improvements in complex analytical tasks.
            `
          }
        ]
      };

    case 'grok4-benchmark-performance-2025':
      return {
        overview: `
          BREAKING: Grok 4 achieves 25.4% accuracy on "Humanity's Last Exam," setting new AI performance 
          records and demonstrating unprecedented reasoning capabilities. This comprehensive analysis reveals 
          the technical innovations behind Grok 4's benchmark dominance.
        `,
        tldr: [
          '25.4% accuracy on Humanity\'s Last Exam - new AI record',
          'Multi-agent architecture with 32 parallel reasoning agents',
          'Continuous learning every 6 hours for performance improvement',
          'Revolutionary dual-brain design: Safety + Performance',
          'Enterprise pricing: $30/month Standard, $300/month Heavy'
        ],
        sections: [
          {
            title: 'Benchmark Revolution',
            content: `
              Grok 4's 25.4% accuracy on "Humanity's Last Exam" represents a quantum leap in AI capability. 
              This benchmark, designed to test the absolute limits of artificial intelligence, has been 
              consistently challenging for all previous models, with ChatGPT achieving only 21%.
            `
          },
          {
            title: 'Multi-Agent Architecture',
            content: `
              The secret behind Grok 4's success lies in its revolutionary multi-agent architecture. 
              Instead of relying on a single model, Grok 4 deploys up to 32 specialized agents that 
              collaborate to solve complex problems, each bringing unique capabilities to the collective.
            `
          },
          {
            title: 'Continuous Learning',
            content: `
              Grok 4's continuous learning system updates every 6 hours, ensuring the model stays 
              current with the latest information and maintains peak performance. This dynamic approach 
              represents a fundamental shift from static AI models to adaptive intelligence systems.
            `
          },
          {
            title: 'Enterprise Applications',
            content: `
              The combination of superior performance and innovative architecture makes Grok 4 ideal 
              for enterprise applications requiring complex reasoning, research, and analytical tasks. 
              Early enterprise adopters report significant productivity improvements and cost savings.
            `
          }
        ]
      };

    case 'grok4-api-pricing-guide':
      return {
        overview: `
          Revolutionary pricing strategy: Grok 4 offers 40% cost savings compared to ChatGPT while delivering 
          superior performance. This comprehensive developer guide covers API integration, cost optimization 
          strategies, and enterprise deployment best practices.
        `,
        tldr: [
          '40% cheaper than ChatGPT: $3 vs $5 per 1M input tokens',
          'Complete API integration guide with code examples',
          'Cost optimization strategies for enterprise deployment',
          'Multi-agent collaboration API for complex reasoning tasks',
          'Enterprise pricing tiers: $30/month Standard, $300/month Heavy'
        ],
        sections: [
          {
            title: 'Pricing Analysis',
            content: `
              Grok 4's revolutionary pricing strategy offers unprecedented value for developers and 
              enterprises. At $3 per 1M input tokens, Grok 4 is 40% cheaper than ChatGPT while delivering 
              superior performance and advanced capabilities.
            `
          },
          {
            title: 'API Integration',
            content: `
              The Grok 4 API provides comprehensive access to all model capabilities, including 
              multi-agent collaboration, function calling, and streaming responses. Our detailed 
              integration guide includes code examples for all major programming languages.
            `
          },
          {
            title: 'Cost Optimization',
            content: `
              For enterprises, Grok 4's pricing model enables significant cost savings through 
              intelligent token management, caching strategies, and workload optimization. Early 
              adopters report 20-43x ROI improvements in complex analytical tasks.
            `
          },
          {
            title: 'Enterprise Deployment',
            content: `
              Grok 4's enterprise features include advanced security, compliance tools, and 
              dedicated support. The dual-tier pricing model allows organizations to choose the 
              right level of capability for their specific needs and budget.
            `
          }
        ]
      };
    
    default:
      return null;
  }
}

// Mock event data - 包含所有10篇文章
const events: Record<string, Event> = {
  'grok4-vs-chatgpt-comparison-2025': {
    id: '8',
    title: 'Grok 4 vs ChatGPT: Complete Performance Comparison 2025',
    description: 'BREAKING: Grok 4 wins 7 out of 7 categories against ChatGPT. 25.4% vs 21% accuracy, 40% cheaper API costs, and revolutionary dual-architecture design.',
    content: `BREAKING: Grok 4 vs ChatGPT comparison...`,
    slug: 'grok4-vs-chatgpt-comparison-2025',
    timestamp: '2025-07-19T12:00:00Z',
    tag: 'BREAKING',
    tagColor: 'red',
    featured: true,
    readingTime: 12,
    views: 250000,
    author: 'Grok4.Live Comparison Team',
  },
  'grok4-benchmark-performance-2025': {
    id: '10',
    title: 'Grok 4 Benchmark Performance: 25.4% Accuracy Breaks AI Records',
    description: 'BREAKING: Grok 4 achieves 25.4% accuracy on "Humanity\'s Last Exam," surpassing ChatGPT\'s 21% and setting new AI performance records across all benchmarks.',
    content: `BREAKING: Grok 4 benchmark analysis...`,
    slug: 'grok4-benchmark-performance-2025',
    timestamp: '2025-07-19T08:00:00Z',
    tag: 'ANALYSIS',
    tagColor: 'blue',
    featured: false,
    readingTime: 14,
    views: 220000,
    author: 'Grok4.Live Benchmark Team',
  },
  'grok4-api-pricing-guide': {
    id: '9',
    title: 'Grok 4 API Pricing & Developer Guide: Complete Analysis',
    description: 'Revolutionary pricing: $3/1M tokens input (40% cheaper than ChatGPT). Complete developer guide with cost optimization strategies and enterprise integration.',
    content: `Revolutionary Grok 4 API pricing...`,
    slug: 'grok4-api-pricing-guide',
    timestamp: '2025-07-19T10:00:00Z',
    tag: 'DEVELOPER',
    tagColor: 'green',
    featured: false,
    readingTime: 15,
    views: 180000,
    author: 'Grok4.Live API Team',
  },
  'grok4-x-broadcast-analysis': {
    id: '7',
    title: 'Grok4 Live: The Viral X Broadcast That Shook the AI World',
    description: 'Exclusive analysis of the groundbreaking X broadcast that went viral globally. Watch the complete demonstration and understand why Grok4 is trending worldwide.',
    content: `Exclusive analysis of the viral X broadcast...`,
    slug: 'grok4-x-broadcast-analysis',
    timestamp: '2025-07-18T10:00:00Z',
    tag: 'BREAKING',
    tagColor: 'red',
    featured: true,
    readingTime: 8,
    views: 156000,
    author: 'Grok4.Live Breaking News Team',
  },
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
  // 首先尝试获取MDX内容（仅在服务端）
  let mdxContent = null;
  if (typeof window === 'undefined') {
    mdxContent = getMDXContentBySlug(params.slug);
  }
  
  // 如果MDX内容存在，重定向到MDX页面
  if (mdxContent) {
    // 使用window.location进行客户端重定向
    if (typeof window !== 'undefined') {
      window.location.href = `/events/${params.slug}/mdx-page`;
      return null;
    }
  }

  // 回退到硬编码内容
  const content = getArticleContent(params.slug);
  
  if (!content) {
    notFound();
  }

  // 解析内容中的章节
  const sections = parseContentSections(content.overview + '\n\n' + content.sections.map(s => `## ${s.title}\n\n${s.content}`).join('\n\n'));
  
  // 生成目录
  const tocItems = sections.map((section, index) => ({
    id: `section-${index}`,
    title: section.title,
    level: 2,
  }));

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* 主要内容 */}
            <div className="lg:col-span-3">
              <ArticleLayout event={{
                id: params.slug,
                title: getEventTitle(params.slug),
                description: content.overview.trim(),
                slug: params.slug,
                timestamp: getEventTimestamp(params.slug),
                tag: getEventTag(params.slug),
                tagColor: getEventTagColor(params.slug),
                featured: getEventFeatured(params.slug),
                readingTime: getEventReadingTime(params.slug),
                views: getEventViews(params.slug),
                author: getEventAuthor(params.slug),
                content: content.overview
              }}>
                {/* 文章头部 */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      getEventTag(params.slug) === 'BREAKING' ? 'bg-red-500/20 text-red-400' :
                      getEventTag(params.slug) === 'ANALYSIS' ? 'bg-blue-500/20 text-blue-400' :
                      getEventTag(params.slug) === 'DEVELOPER' ? 'bg-green-500/20 text-green-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {getEventTag(params.slug)}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {new Date(getEventTimestamp(params.slug)).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <h1 className="text-4xl font-bold mb-4">{getEventTitle(params.slug)}</h1>
                  <p className="text-xl text-gray-300 mb-6">{content.overview.trim()}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{getEventReadingTime(params.slug)} min read</span>
                    <span>By {getEventAuthor(params.slug)}</span>
                  </div>
                </div>

                {/* TL;DR 部分 */}
                <div className="bg-gradient-to-r from-brand-500/10 to-purple-500/10 border border-brand-500/30 rounded-xl p-6 mb-8">
                  <h2 className="text-lg font-bold text-brand-400 mb-3 flex items-center gap-2">💡 TL;DR - Key Takeaways</h2>
                  <ul className="space-y-2">
                    {content.tldr.map((item, index) => (
                      <li key={index} className="text-gray-300 flex items-start gap-3">
                        <span className="text-brand-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 文章内容 */}
                <div className="prose prose-invert prose-lg max-w-none">
                  {content.sections.map((section, index) => (
                    <section key={index} id={`section-${index}`}>
                      <h2 className="text-3xl font-bold text-white mb-6">{section.title}</h2>
                      <div className="text-gray-300 leading-relaxed mb-8">
                        {section.content}
                      </div>
                    </section>
                  ))}
                </div>

                {/* 文章底部 */}
                <div className="mt-12 pt-8 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      Last updated: {new Date(getEventTimestamp(params.slug)).toLocaleDateString()}
                    </div>
                    <div className="flex gap-4">
                      <button className="text-blue-400 hover:text-blue-300">
                        Share on Twitter
                      </button>
                      <button className="text-blue-400 hover:text-blue-300">
                        Copy Link
                      </button>
                    </div>
                  </div>
                </div>
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
                    {/* 这里可以添加相关文章逻辑 */}
                    <div className="text-sm">
                      <a href="#" className="text-blue-400 hover:text-blue-300">
                        Grok 4 vs ChatGPT: Complete Performance Comparison...
                      </a>
                      <div className="text-gray-400 mt-1">12 min read</div>
                    </div>
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

// 解析内容章节
function parseContentSections(content: string) {
  const lines = content.split('\n');
  const sections: { title: string; content: string }[] = [];
  let currentSection = { title: '', content: '' };
  
  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (currentSection.title) {
        sections.push(currentSection);
      }
      currentSection = {
        title: line.replace('## ', ''),
        content: ''
      };
    } else {
      currentSection.content += line + '\n';
    }
  }
  
  if (currentSection.title) {
    sections.push(currentSection);
  }
  
  return sections;
}

// 辅助函数
function getEventTitle(slug: string): string {
  const titles: Record<string, string> = {
    'grok4-vs-chatgpt-comparison-2025': 'Grok 4 vs ChatGPT: Complete Performance Comparison 2025',
    'grok4-api-pricing-guide': 'Grok 4 API Pricing & Developer Guide: Complete Analysis',
    'grok4-benchmark-performance-2025': 'Grok 4 Benchmark Performance: 25.4% Accuracy Breaks AI Records',
    'grok4-x-broadcast-analysis': 'Grok4 Live: The Viral X Broadcast That Shook the AI World'
  };
  return titles[slug] || 'Article';
}

function getEventTimestamp(slug: string): string {
  const timestamps: Record<string, string> = {
    'grok4-vs-chatgpt-comparison-2025': '2025-07-19T12:00:00Z',
    'grok4-api-pricing-guide': '2025-07-19T10:00:00Z',
    'grok4-benchmark-performance-2025': '2025-07-19T08:00:00Z',
    'grok4-x-broadcast-analysis': '2025-07-18T10:00:00Z'
  };
  return timestamps[slug] || '2025-07-19T00:00:00Z';
}

function getEventTag(slug: string): string {
  const tags: Record<string, string> = {
    'grok4-vs-chatgpt-comparison-2025': 'BREAKING',
    'grok4-api-pricing-guide': 'DEVELOPER',
    'grok4-benchmark-performance-2025': 'ANALYSIS',
    'grok4-x-broadcast-analysis': 'BREAKING'
  };
  return tags[slug] || 'ANALYSIS';
}

function getEventTagColor(slug: string): 'red' | 'blue' | 'green' | 'purple' | 'yellow' {
  const tag = getEventTag(slug);
  return tag === 'BREAKING' ? 'red' : 
         tag === 'ANALYSIS' ? 'blue' : 
         tag === 'DEVELOPER' ? 'green' : 'purple';
}

function getEventFeatured(slug: string): boolean {
  const featured: Record<string, boolean> = {
    'grok4-vs-chatgpt-comparison-2025': true,
    'grok4-api-pricing-guide': false,
    'grok4-benchmark-performance-2025': false,
    'grok4-x-broadcast-analysis': false
  };
  return featured[slug] || false;
}

function getEventReadingTime(slug: string): number {
  const readingTimes: Record<string, number> = {
    'grok4-vs-chatgpt-comparison-2025': 12,
    'grok4-api-pricing-guide': 15,
    'grok4-benchmark-performance-2025': 14,
    'grok4-x-broadcast-analysis': 8
  };
  return readingTimes[slug] || 10;
}

function getEventViews(slug: string): number {
  const views: Record<string, number> = {
    'grok4-vs-chatgpt-comparison-2025': 250000,
    'grok4-api-pricing-guide': 180000,
    'grok4-benchmark-performance-2025': 220000,
    'grok4-x-broadcast-analysis': 156000
  };
  return views[slug] || 0;
}

function getEventAuthor(slug: string): string {
  const authors: Record<string, string> = {
    'grok4-vs-chatgpt-comparison-2025': 'Grok4.Live Analysis Team',
    'grok4-api-pricing-guide': 'Grok4.Live API Team',
    'grok4-benchmark-performance-2025': 'Grok4.Live Benchmark Team',
    'grok4-x-broadcast-analysis': 'Grok4.Live Social Media Team'
  };
  return authors[slug] || 'Grok4.Live Editorial Team';
} 