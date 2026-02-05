import { Link } from 'react-router-dom';
import { MessageCircle, FileText, Briefcase, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function Process() {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Initial Contact / Request for Proposal',
      description:
        'Our engagement with you starts once you reach out to us or we make contact in any other way. On this stage, we will get to know your issue and the scope of work for our engagement.',
    },
    {
      icon: FileText,
      title: 'Letter of Engagement',
      description:
        'At this stage, we will send you a letter of engagement outlining our terms of delivery, fees, scope of work and all contractual issues governing our relationship with you.',
    },
    {
      icon: Briefcase,
      title: 'Service Delivery',
      description:
        'Following our outlined scope of work and agreed timelines, we will deliver the service requested and present it to you for any review or corrections.',
    },
    {
      icon: CheckCircle2,
      title: 'Conclusion',
      description:
        'At this stage, we conclude our engagement with you and deliver the service as agreed.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Process</h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          <p className="text-xl text-gray-300 mt-6">A clear, transparent path to success</p>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">How We Work With You</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our streamlined process ensures clarity, efficiency, and exceptional results at every stage of
              our engagement.
            </p>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-200 hidden md:block"></div>

              {steps.map((step, index) => (
                <AnimatedSection key={index} delay={index * 200}>
                  <div className="relative mb-16 last:mb-0">
                    <div className="flex items-start">
                      <div className="hidden md:flex absolute left-0 w-16 h-16 bg-emerald-600 rounded-full items-center justify-center z-10 shadow-lg">
                        <step.icon size={28} className="text-white" />
                      </div>

                      <div className="md:ml-24 w-full">
                        <div className="bg-slate-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-emerald-600">
                          <div className="flex md:hidden w-16 h-16 bg-emerald-600 rounded-full items-center justify-center mb-6">
                            <step.icon size={28} className="text-white" />
                          </div>
                          <div className="flex items-center mb-4">
                            <span className="inline-block px-4 py-1 bg-emerald-600 text-white text-sm font-bold rounded-full mr-4">
                              Step {index + 1}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                          <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-emerald-600 text-white p-12 rounded-lg shadow-xl">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-6">Why Our Process Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div>
                    <div className="text-5xl font-bold mb-3">Clear</div>
                    <p className="text-emerald-100">Transparent steps with no hidden surprises</p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-3">Efficient</div>
                    <p className="text-emerald-100">Streamlined workflow that respects your time</p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-3">Reliable</div>
                    <p className="text-emerald-100">Consistent delivery on agreed timelines</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Begin your journey with us today and experience our proven process
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all hover:scale-105 shadow-lg"
            >
              Contact Us Now
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
