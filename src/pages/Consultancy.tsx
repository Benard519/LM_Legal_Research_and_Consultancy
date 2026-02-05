import { Link } from 'react-router-dom';
import { Shield, FileCheck, TrendingUp, Users, Building, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function Consultancy() {
  const services = [
    {
      icon: Shield,
      title: 'Compliance Advisory',
      description: 'Expert guidance on regulatory compliance across various industries, ensuring your organization meets all legal requirements.',
    },
    {
      icon: FileCheck,
      title: 'Contract Review',
      description: 'Thorough analysis and review of contracts, agreements, and legal documents to protect your interests.',
    },
    {
      icon: TrendingUp,
      title: 'Strategic Legal Advice',
      description: 'Forward-thinking legal strategies aligned with your business objectives and growth plans.',
    },
    {
      icon: Users,
      title: 'Corporate Governance',
      description: 'Guidance on corporate structure, governance frameworks, and best practices for organizational management.',
    },
    {
      icon: Building,
      title: 'Regulatory Matters',
      description: 'Navigate complex regulatory landscapes with expert advice on licensing, permits, and regulatory compliance.',
    },
  ];

  const clientTypes = [
    'Individuals seeking personal legal guidance',
    'Small and medium enterprises (SMEs)',
    'Large corporations and multinationals',
    'Non-governmental organizations (NGOs)',
    'Content creators and digital entrepreneurs',
    'Startups and emerging businesses',
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Consultancy Services</h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          <p className="text-xl text-gray-300 mt-6">Strategic legal guidance for lasting success</p>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Expert Legal Consultancy
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our Consultancy services provide expert guidance on compliance, regulatory matters, contract
                review, and strategic legal advice tailored to the unique needs of clients across various
                industries.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Our Consultancy Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                    <div className="w-16 h-16 bg-emerald-600 rounded-lg flex items-center justify-center mb-6">
                      <service.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Who We Serve
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our consultancy services are designed to meet the diverse needs of clients across multiple
                  sectors. We understand that each client has unique challenges and requirements.
                </p>
                <div className="space-y-4">
                  {clientTypes.map((type, index) => (
                    <AnimatedSection key={index} delay={index * 100}>
                      <div className="flex items-start space-x-4">
                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                        <span className="text-lg text-gray-700">{type}</span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
              <div className="bg-emerald-600 text-white p-10 rounded-lg shadow-xl">
                <h3 className="text-3xl font-bold mb-6">Our Approach</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Client-Centric</h4>
                    <p className="text-white">
                      We ensure that we properly understand your needs through continuous engagement and feedback.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Customized Solutions</h4>
                    <p className="text-white">
                      Every client receives tailored advice and strategies that address their specific challenges.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Practical Insights</h4>
                    <p className="text-white">
                      We deliver clear, actionable insights that you can implement immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Legal Strategy?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with us for expert consultancy services tailored to your needs
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all hover:scale-105 shadow-lg"
            >
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
