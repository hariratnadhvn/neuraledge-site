import React from 'react';
import { Brain, Users, Target, Award, TrendingUp, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About NeuralEdge
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We're a forward-thinking technology company that combines deep pharmaceutical 
              domain expertise with cutting-edge AI and software development capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-800/60 rounded-2xl p-8 hover:bg-gray-800/80 transition-colors">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To transform industries through innovative AI solutions that bridge the gap between 
                complex pharmaceutical challenges and cutting-edge technology. We empower organizations 
                to make data-driven decisions, accelerate discovery, and achieve unprecedented efficiency.
              </p>
            </div>
            <div className="bg-gray-800/60 rounded-2xl p-8 hover:bg-gray-800/80 transition-colors">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the leading AI-powered technology partner for pharmaceutical companies and 
                enterprises worldwide, creating solutions that advance human health and drive 
                technological innovation across all industries we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Founded on the belief that the convergence of domain expertise and advanced technology 
              creates transformative solutions.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/60 rounded-2xl p-8 lg:p-12">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                NeuralEdge was born from the recognition that traditional approaches to pharmaceutical 
                analytics and business intelligence were falling short of industry needs. Our founders, 
                with decades of combined experience in both pharmaceutical sciences and cutting-edge 
                AI development, saw an opportunity to create something revolutionary.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                What started as a specialized pharmaceutical analytics company has evolved into a 
                comprehensive technology partner, applying our expertise in AI, machine learning, 
                and data engineering across multiple industries. We've helped organizations transform 
                their operations, from drug discovery acceleration to algorithmic trading systems.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, NeuralEdge stands at the intersection of pharmaceutical domain knowledge and 
                advanced technology, delivering solutions that drive real business value and 
                measurable outcomes for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape how we work with our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Innovation First</h3>
              <p className="text-gray-300">
                We continuously push the boundaries of what's possible, staying ahead of 
                technological trends to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Client Partnership</h3>
              <p className="text-gray-300">
                We believe in building long-term partnerships, working closely with clients 
                to understand their unique challenges and goals.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Excellence</h3>
              <p className="text-gray-300">
                We maintain the highest standards in everything we do, from code quality 
                to client service and project delivery.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Results-Driven</h3>
              <p className="text-gray-300">
                Every solution we create is designed to deliver measurable business value 
                and tangible outcomes for our clients.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Agility</h3>
              <p className="text-gray-300">
                We adapt quickly to changing requirements and market conditions, 
                ensuring our solutions remain relevant and effective.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Transparency</h3>
              <p className="text-gray-300">
                We maintain open communication throughout every project, providing 
                clear insights into our processes and progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Placeholder */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A diverse group of pharmaceutical scientists, AI researchers, and technology 
              experts working together to solve complex challenges.
            </p>
          </div>
          <div className="bg-gray-800/60 rounded-2xl p-8 lg:p-12 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Meet Our Leadership Team
            </h3>
            <p className="text-gray-300 text-lg">
              Our team combines deep pharmaceutical domain expertise with cutting-edge AI and 
              technology skills. Learn more about our leadership and their vision for the future.
            </p>
            <div className="mt-8">
              <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm">
                Team profiles coming soon
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;