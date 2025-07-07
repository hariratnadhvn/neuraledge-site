import React from 'react';
import { Brain, Database, Cloud, Code, Zap, Shield } from 'lucide-react';

const Technologies = () => {
  const techCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      gradient: "from-blue-600 to-purple-600",
      technologies: [
        { name: "Python", description: "Core language for AI/ML development" },
        { name: "TensorFlow", description: "Deep learning framework" },
        { name: "PyTorch", description: "Research-focused ML library" },
        { name: "scikit-learn", description: "Machine learning toolkit" },
        { name: "Pandas", description: "Data manipulation and analysis" },
        { name: "NumPy", description: "Numerical computing foundation" },
        { name: "Jupyter", description: "Interactive development environment" },
        { name: "OpenAI GPT", description: "Large language models" }
      ]
    },
    {
      title: "Data Engineering",
      icon: Database,
      gradient: "from-green-600 to-blue-600",
      technologies: [
        { name: "Apache Spark", description: "Big data processing engine" },
        { name: "Apache Kafka", description: "Stream processing platform" },
        { name: "PostgreSQL", description: "Advanced relational database" },
        { name: "MongoDB", description: "NoSQL document database" },
        { name: "Redis", description: "In-memory data structure store" },
        { name: "Elasticsearch", description: "Search and analytics engine" },
        { name: "Apache Airflow", description: "Workflow orchestration" },
        { name: "dbt", description: "Data build tool" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      gradient: "from-purple-600 to-indigo-600",
      technologies: [
        { name: "AWS", description: "Amazon Web Services cloud platform" },
        { name: "Azure", description: "Microsoft cloud services" },
        { name: "Google Cloud", description: "Google Cloud Platform" },
        { name: "Docker", description: "Containerization platform" },
        { name: "Kubernetes", description: "Container orchestration" },
        { name: "Terraform", description: "Infrastructure as code" },
        { name: "Jenkins", description: "CI/CD automation server" },
        { name: "GitLab CI", description: "Integrated CI/CD platform" }
      ]
    },
    {
      title: "Web & Mobile Development",
      icon: Code,
      gradient: "from-orange-600 to-red-600",
      technologies: [
        { name: "React", description: "Frontend JavaScript library" },
        { name: "Node.js", description: "JavaScript runtime environment" },
        { name: "TypeScript", description: "Typed JavaScript superset" },
        { name: "React Native", description: "Cross-platform mobile framework" },
        { name: "Flutter", description: "UI toolkit for mobile apps" },
        { name: "Next.js", description: "Full-stack React framework" },
        { name: "FastAPI", description: "Modern Python web framework" },
        { name: "GraphQL", description: "Query language for APIs" }
      ]
    },
    {
      title: "Trading & Financial",
      icon: Zap,
      gradient: "from-indigo-600 to-blue-600",
      technologies: [
        { name: "C++", description: "High-performance computing language" },
        { name: "FIX Protocol", description: "Financial information exchange" },
        { name: "QuantLib", description: "Quantitative finance library" },
        { name: "Bloomberg API", description: "Financial data integration" },
        { name: "MetaTrader", description: "Trading platform development" },
        { name: "Alpha Architect", description: "Algorithmic trading framework" },
        { name: "Backtrader", description: "Python backtesting library" },
        { name: "Zipline", description: "Algorithmic trading library" }
      ]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      gradient: "from-red-600 to-pink-600",
      technologies: [
        { name: "OAuth 2.0", description: "Authorization framework" },
        { name: "JWT", description: "JSON Web Tokens" },
        { name: "HashiCorp Vault", description: "Secrets management" },
        { name: "SSL/TLS", description: "Transport layer security" },
        { name: "GDPR Compliance", description: "Data protection regulation" },
        { name: "HIPAA", description: "Healthcare data security" },
        { name: "SOC 2", description: "Security compliance framework" },
        { name: "AWS IAM", description: "Identity and access management" }
      ]
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
                Our Technology Stack
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Cutting-edge technologies and frameworks that power our innovative solutions 
              across AI, data engineering, mobile development, and algorithmic trading.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {techCategories.map((category, index) => (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-8 lg:p-12">
                <div className="flex items-center mb-8">
                  <div className={`bg-gradient-to-r ${category.gradient} w-16 h-16 rounded-xl flex items-center justify-center mr-6`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {category.title}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="bg-gray-800/60 rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-300 transform hover:scale-105">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {tech.name}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {tech.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Architecture Excellence</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our technology choices are guided by principles of scalability, reliability, 
              and maintainability to ensure long-term success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/60 rounded-xl p-8 text-center hover:bg-gray-800/80 transition-colors">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Cloud-Native</h3>
              <p className="text-gray-300">
                Built for the cloud from the ground up, leveraging containerization, 
                microservices, and serverless architectures.
              </p>
            </div>
            <div className="bg-gray-800/60 rounded-xl p-8 text-center hover:bg-gray-800/80 transition-colors">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">High Performance</h3>
              <p className="text-gray-300">
                Optimized for speed and efficiency with advanced caching, 
                parallel processing, and performance monitoring.
              </p>
            </div>
            <div className="bg-gray-800/60 rounded-xl p-8 text-center hover:bg-gray-800/80 transition-colors">
              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Security First</h3>
              <p className="text-gray-300">
                Enterprise-grade security with encryption, authentication, 
                and compliance built into every layer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Methodology */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Development Excellence</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our development practices ensure code quality, reliability, and maintainability 
              throughout the entire software lifecycle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/60 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Best Practices</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Test-Driven Development (TDD)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Continuous Integration/Deployment</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Code Reviews and Pair Programming</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Agile Development Methodology</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Documentation and Knowledge Sharing</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800/60 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Quality Assurance</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Automated Testing Suites</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Performance Testing and Optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Security Vulnerability Scanning</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Load Testing and Scalability</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Monitoring and Observability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;