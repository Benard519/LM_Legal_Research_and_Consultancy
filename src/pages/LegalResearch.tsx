import { Link } from 'react-router-dom';
import { BookOpen, Search, FileText, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function LegalResearch() {
  const features = [
    'Comprehensive case law analysis',
    'Statutory interpretation and analysis',
    'Comparative legal research across jurisdictions',
    'Legislative history and intent research',
    'Regulatory compliance research',
    'Legal precedent identification',
    'Detailed legal memoranda preparation',
    'Citation verification and validation',
  ];

  const researchAreas = [
    {
      icon: BookOpen,
      title: 'General Legal Research',
      description: 'Broad legal research covering various areas of law, providing comprehensive insights and analysis for diverse legal matters.',
    },
    {
      icon: Search,
      title: 'Specialized Research',
      description: 'In-depth research within specific legal fields, including corporate law, intellectual property, employment law, and more.',
    },
    {
      icon: FileText,
      title: 'Custom Research Projects',
      description: 'Tailored research services designed to meet your unique needs, whether for litigation, policy development, or academic purposes.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Legal Research</h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          <p className="text-xl text-gray-300 mt-6">In-depth legal analysis for informed decisions</p>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Comprehensive Legal Research Services
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our Legal Research services include both general and specialized research on a wide range of
                legal issues, whether broad or within specific fields. We leverage the best legal research and
                tech tools to provide cutting-edge, accurate, and actionable insights.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {researchAreas.map((area, index) => (
                <AnimatedSection key={index} delay={index * 150}>
                  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-16 h-16 bg-emerald-600 rounded-lg flex items-center justify-center mb-6">
                      <area.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{area.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{area.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              What Our Legal Research Includes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-emerald-50 transition-colors">
                    <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-emerald-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Why Choose Our Legal Research Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-5xl font-bold mb-2">Fast</div>
                  <p className="text-white">Quick turnaround times without compromising quality</p>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">Accurate</div>
                  <p className="text-white">Thorough research using advanced legal tech tools</p>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">Reliable</div>
                  <p className="text-white">Trusted insights you can depend on</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Need Expert Legal Research?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our team provide you with the comprehensive research you need
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all hover:scale-105 shadow-lg"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
