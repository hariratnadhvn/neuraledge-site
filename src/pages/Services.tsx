import React from 'react';
import { Brain, Zap, TrendingUp, Smartphone, Database, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Pharma Analytics Solutions",
      description: "Comprehensive pharmaceutical analytics platform combining domain expertise with advanced AI.",
      features: [
        "Drug Discovery Acceleration",
        "Clinical Trial Optimization",
        "Market Analysis & Forecasting",
        "Regulatory Compliance Analytics",
        "Patient Journey Mapping",
        "Real-World Evidence Analysis"
      ],
      gradient: "from-green-600 to-blue-600"
    },
    {
      icon: Zap,
      title: "AI Agents & Automation",
      description: "Intelligent automation systems that transform complex workflows into streamlined processes.",
      features: [
        "Intelligent Process Automation",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "Decision Support Systems",
        "Conversational AI Interfaces"
      ],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: TrendingUp,
      title: "Algorithmic Trading Platforms",
      description: "Advanced trading systems with real-time market analysis and automated execution capabilities.",
      features: [
        "Real-time Market Data Processing",
        "Risk Management Systems",
        "Portfolio Optimization",
        "High-Frequency Trading",
        "Backtesting & Simulation",
        "Regulatory Compliance"
      ],
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications with native performance and exceptional user experience.",
      features: [
        "iOS & Android Development",
        "Cross-platform Solutions",
        "UI/UX Design Excellence",
        "Performance Optimization",
        "Integration & APIs",
        "App Store Optimization"
      ],
      gradient: "from-orange-600 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive technology solutions designed to transform your business operations 
              and drive measurable results across multiple domains.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-xl flex items-center justify-center mr-4`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <ArrowRight className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <div className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-8 h-80 flex items-center justify-center`}>
                    <service.icon className="h-32 w-32 text-white opacity-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Engineering Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center">
                <Database className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Data Engineering Excellence</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Robust data infrastructure and engineering solutions that power all our AI and analytics capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/60 rounded-xl p-6 hover:bg-gray-800/80 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-4">Data Pipeline Architecture</h3>
              <p className="text-gray-300">
                Scalable, fault-tolerant data pipelines that handle massive volumes of structured 
                and unstructured data with real-time processing capabilities.
              </p>
            </div>
            <div className="bg-gray-800/60 rounded-xl p-6 hover:bg-gray-800/80 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-300">
                Modern cloud-native architectures leveraging AWS, Azure, and GCP for 
                maximum scalability, reliability, and cost-effectiveness.
              </p>
            </div>
            <div className="bg-gray-800/60 rounded-xl p-6 hover:bg-gray-800/80 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-4">Data Governance</h3>
              <p className="text-gray-300">
                Comprehensive data governance frameworks ensuring data quality, security, 
                and compliance across all your data assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Placeholder 
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world examples of how our solutions have transformed businesses and 
              delivered measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-800/60 rounded-xl p-6 hover:bg-gray-800/80 transition-colors">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-full h-32 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-semibold">Case Study {i}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Project Title {i}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Detailed case study showcasing the challenge, solution, and results 
                  achieved for our client.
                </p>
                <span className="inline-block bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can address your specific challenges and 
            help you achieve your business objectives.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center group"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;