'use client';

import React from 'react';
import { Header, Footer } from '@/components/layout';
import { Card, Button } from '@/components/ui';
import { 
  BoltIcon, 
  EyeIcon, 
  ShieldCheckIcon, 
  RocketLaunchIcon,
  HeartIcon,
  GlobeAltIcon 
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Co-Founder & Technical Lead',
      bio: 'Former AI researcher at Google DeepMind. Specializes in language model architecture and safety protocols.',
      avatar: '🚀',
    },
    {
      name: 'Sarah Kim',
      role: 'Co-Founder & Editorial Director',
      bio: 'Veteran tech journalist with 10+ years covering AI developments. Previously at TechCrunch and The Verge.',
      avatar: '📝',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'AI Safety Analyst',
      bio: 'PhD in AI Ethics from Stanford. Focuses on responsible AI development and governance frameworks.',
      avatar: '🛡️',
    },
    {
      name: 'Emily Zhang',
      role: 'Community Manager',
      bio: 'Building bridges between AI researchers and the global tech community. Expert in developer relations.',
      avatar: '🌍',
    },
  ];

  const values = [
    {
      icon: <EyeIcon className="w-8 h-8" />,
      title: 'Transparency',
      description: 'We believe in open, honest reporting about AI developments, including both breakthroughs and controversies.',
    },
    {
      icon: <BoltIcon className="w-8 h-8" />,
      title: 'Speed',
      description: 'Breaking news within hours, not days. Our community deserves real-time insights into AI evolution.',
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: 'Accuracy',
      description: 'Every story is fact-checked and verified. We prioritize getting it right over getting it first.',
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: 'Community',
      description: 'Built by AI enthusiasts, for AI enthusiasts. Your insights and feedback shape our coverage.',
    },
  ];

  const milestones = [
    {
      date: 'July 2024',
      title: 'Grok4.Live Founded',
      description: 'Launched in response to the MechaHitler incident to provide comprehensive Grok coverage.',
    },
    {
      date: 'August 2024',
      title: '10K Monthly Visitors',
      description: 'Reached our first major traffic milestone within 30 days of launch.',
    },
    {
      date: 'December 2024',
      title: 'Deep Dive Series',
      description: 'Launched our signature long-form analysis series covering major AI developments.',
    },
    {
      date: 'March 2025',
      title: '100K Monthly Visitors',
      description: 'Achieved significant growth milestone with expanded international audience.',
    },
    {
      date: 'July 2025',
      title: 'First Anniversary',
      description: 'Celebrating one year of comprehensive Grok AI coverage and community building.',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-gray-950/50 to-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              <span className="text-gradient bg-gradient-to-r from-brand-500 to-purple-500 bg-clip-text text-transparent">
                ABOUT GROK4.LIVE
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              The definitive source for Grok AI intelligence. We track, analyze, and report on every 
              significant development in xAI's groundbreaking language model ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="flex items-center gap-2">
                <RocketLaunchIcon className="w-5 h-5" />
                JOIN OUR MISSION
              </Button>
              <Button variant="secondary" size="lg">
                READ OUR MANIFESTO
              </Button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    In an era where AI development moves at lightning speed, the world needs reliable, 
                    comprehensive coverage of the most influential models. Grok isn't just another 
                    language model—it's a paradigm shift in AI philosophy and capability.
                  </p>
                  <p>
                    We founded Grok4.Live because traditional tech media couldn't keep pace with 
                    the rapid evolution and unique challenges of tracking xAI's groundbreaking work. 
                    From the MechaHitler incident to breakthrough features in Grok 4, every development 
                    carries implications for the future of artificial intelligence.
                  </p>
                  <p>
                    Our mission is simple: provide the AI community with the fastest, most accurate, 
                    and most insightful coverage of Grok's development, controversies, and capabilities.
                  </p>
                </div>
              </div>

              <Card className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Grok Matters</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-400 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Unfiltered Approach</h4>
                      <p className="text-gray-400 text-sm">Grok's commitment to unfiltered responses challenges traditional AI safety paradigms.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-400 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Real-time Access</h4>
                      <p className="text-gray-400 text-sm">Live web search capabilities make Grok uniquely current and contextually aware.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-brand-400 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Cultural Impact</h4>
                      <p className="text-gray-400 text-sm">From memes to serious analysis, Grok influences how we think about AI personality.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-950/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                The principles that guide our coverage and shape our community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="text-brand-400 mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Passionate AI enthusiasts dedicated to bringing you the most comprehensive Grok coverage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="text-4xl mb-4">{member.avatar}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-brand-400 text-sm mb-3 font-medium">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gray-950/30">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Our Journey</h2>
              <p className="text-gray-400 text-lg">
                From startup to the leading Grok intelligence source.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500 via-purple-500 to-transparent"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 md:-ml-3 w-6 h-6 bg-brand-500 border-4 border-black rounded-full z-10"></div>
                    
                    {/* Content */}
                    <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <Card className="p-6">
                        <div className="text-brand-400 text-sm font-semibold mb-2">{milestone.date}</div>
                        <h3 className="text-lg font-semibold text-white mb-2">{milestone.title}</h3>
                        <p className="text-gray-400 text-sm">{milestone.description}</p>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              Have a tip, question, or collaboration idea? We'd love to hear from you. 
              Join our mission to track AI's most unpredictable model.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-lg font-semibold text-white mb-2">Editorial Team</h3>
                <p className="text-gray-400 text-sm mb-3">Story tips and editorial inquiries</p>
                <a href="mailto:editorial@grok4.live" className="text-brand-400 hover:text-brand-300 transition-colors text-sm">
                  editorial@grok4.live
                </a>
              </Card>

              <Card className="p-6 text-center">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-lg font-semibold text-white mb-2">Partnerships</h3>
                <p className="text-gray-400 text-sm mb-3">Business and collaboration opportunities</p>
                <a href="mailto:partners@grok4.live" className="text-brand-400 hover:text-brand-300 transition-colors text-sm">
                  partners@grok4.live
                </a>
              </Card>

              <Card className="p-6 text-center">
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
                <p className="text-gray-400 text-sm mb-3">Join our Discord and social channels</p>
                <a href="#" className="text-brand-400 hover:text-brand-300 transition-colors text-sm">
                  discord.gg/grok4live
                </a>
              </Card>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-800">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button size="lg" className="flex items-center gap-2">
                  <GlobeAltIcon className="w-5 h-5" />
                  JOIN OUR NEWSLETTER
                </Button>
                
                <div className="flex items-center gap-4 text-gray-400">
                  <a href="#" className="hover:text-white transition-colors">
                    <span className="sr-only">Twitter</span>
                    𝕏
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <span className="sr-only">Discord</span>
                    💬
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <span className="sr-only">GitHub</span>
                    📱
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    💼
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 