import { Link } from 'react-router-dom';
import { BookOpen, Users, GraduationCap, Scale, Shield, Building } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function Services() {
  const services = [
    {
      icon: BookOpen,
      title: 'Legal Research',
      description:
        'Comprehensive legal research services covering both general and specialized areas of law, providing thorough analysis and insights.',
      link: '/legal-research',
    },
    {
      icon: Users,
      title: 'Consultancy Services',
      description:
        'Expert guidance on compliance, regulatory matters, contract review, and strategic legal advice tailored to your needs.',
      link: '/consultancy',
    },
    {
      icon: GraduationCap,
      title: 'Training and Workshops',
      description:
        'Professional training programs designed to enhance legal knowledge and skills for individuals and organizations.',
      link: '/services',
    },
    {
      icon: Scale,
      title: 'Litigation Support',
      description:
        'Comprehensive support services for legal proceedings, including case preparation, research, and documentation.',
      link: '/services',
    },
    {
      icon: Shield,
      title: 'Data Protection Training',
      description:
        'Specialized training on data protection compliance, GDPR, and best practices for handling sensitive information.',
      link: '/services',
    },
    {
      icon: Building,
      title: 'NGO Support Services',
      description:
        'Tailored legal support for non-governmental organizations, including compliance, governance, and regulatory matters.',
      link: '/services',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Services</h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          <p className="text-xl text-gray-300 mt-6">Comprehensive legal solutions for every need</p>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="bg-slate-50 p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-emerald-500 group h-full flex flex-col">
                    <div className="w-16 h-16 bg-emerald-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-700 transition-colors">
                      <service.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                    {(service.link === '/legal-research' || service.link === '/consultancy') && (
                      <Link
                        to={service.link}
                        className="inline-block text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                      >
                        Learn more →
                      </Link>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Need Expert Legal Support?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you navigate your legal challenges with our specialized services
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all hover:scale-105 shadow-lg"
            >
              Book a Consultation
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
