import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

export default function Team() {
  const team = [
    {
      name: 'Saada Loo',
      role: 'Consultant',
      image: '/team/saada-loo.png',
    },
    {
      name: 'Shekhuna Abubakar',
      role: 'Consultant',
      image: '/team/shekhuna-abubakar.png',
    },
    {
      name: 'Vivian Chesebe',
      role: 'Consultant',
      image: '/team/vivian-chesebe.png',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center opacity-20" aria-hidden="true"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Meet Our Team</h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          <p className="text-xl text-gray-300 mt-6">Expert consultants dedicated to your success</p>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Expert Consultants</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our team of experienced legal professionals brings deep expertise, innovative thinking, and a
              client-focused approach to every engagement.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {team.map((member, index) => (
                <AnimatedSection key={index} delay={index * 150}>
                  <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={member.image}
                        alt={`${member.name}, ${member.role}`}
                        loading="lazy"
                        width={400}
                        height={533}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-emerald-300 font-semibold text-lg">{member.role}</p>
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
            <div className="bg-white p-12 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                What Sets Our Team Apart
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Deep Expertise</h3>
                    <p className="text-gray-600">
                      Our consultants bring extensive experience across multiple legal domains and industries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Client-Focused</h3>
                    <p className="text-gray-600">
                      We prioritize understanding your unique needs and delivering personalized solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Innovative Approach</h3>
                    <p className="text-gray-600">
                      We leverage cutting-edge legal tech tools to deliver superior research and insights.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">
                      Our team has successfully served clients across various sectors with consistent excellence.
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
            <h2 className="text-4xl font-bold mb-6">Work With Our Expert Team</h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the difference that dedicated, knowledgeable professionals can make
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all hover:scale-105 shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
