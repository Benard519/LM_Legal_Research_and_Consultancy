import { Link } from 'react-router-dom';
import { Clock, CheckCircle, Shield, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function Home() {
  const services = [
    {
      title: 'Legal Research',
      description: 'Comprehensive legal research services covering both general and specialized areas of law.',
      link: '/legal-research',
    },
    {
      title: 'Consultancy Services',
      description: 'Expert guidance on compliance, regulatory matters, contract review, and strategic legal advice.',
      link: '/consultancy',
    },
    {
      title: 'Training & Workshops',
      description: 'Professional training programs designed to enhance legal knowledge and skills.',
      link: '/services',
    },
    {
      title: 'Litigation Support',
      description: 'Comprehensive support services for legal proceedings and case preparation.',
      link: '/services',
    },
    {
      title: 'Data Protection Training',
      description: 'Specialized training on data protection compliance and best practices.',
      link: '/services',
    },
    {
      title: 'NGO Support Services',
      description: 'Tailored legal support for non-governmental organizations and civil society.',
      link: '/services',
    },
  ];

  const differentiators = [
    {
      icon: Clock,
      title: 'Efficient',
      description: 'We provide our services in fast-turn around times and always adhere to set deadlines.',
    },
    {
      icon: CheckCircle,
      title: 'Innovative',
      description: 'We use the best legal Research and other Legal Tech Tools to provide cutting-edge services to our clients.',
    },
    {
      icon: Shield,
      title: 'Client-Centric',
      description: 'Offering a service, we ensure that we properly understand the needs of our clients through continuous engagement and feedback.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center opacity-10" role="img" aria-hidden="true"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            LM Legal Research
            <span className="block text-emerald-500 mt-2">and Consultancy</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Premier source of innovative and insightful legal research and consultancy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/contact"
              className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all hover:scale-105 shadow-lg"
            >
              Book a Consultation
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive legal solutions tailored to your unique needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <Link
                    to={service.link}
                    className="block p-6 bg-gray-50 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 group"
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <span className="inline-flex items-center text-emerald-600 font-semibold group-hover:gap-2 transition-all">
                      Learn more
                      <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">What Makes Us Different?</h2>
              <p className="text-xl text-gray-600">Our commitment to excellence sets us apart</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {differentiators.map((item, index) => (
                <AnimatedSection key={index} delay={index * 150}>
                  <div className="bg-emerald-600 text-white p-8 rounded-lg hover:bg-emerald-700 transition-all duration-300 hover:scale-105 shadow-lg">
                    <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-6">
                      <item.icon size={32} className="text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-white/90 leading-relaxed">{item.description}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a consultation with our expert team today
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
