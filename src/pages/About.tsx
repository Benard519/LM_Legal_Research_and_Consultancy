import AnimatedSection from '../components/AnimatedSection';

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About Us</h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-emerald-600 mb-6 text-center">
              LM Legal Research and Consultancy
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                We are a high-end Legal Research and Consultancy Firm, offering two primary service lines:{' '}
                <span className="font-semibold text-slate-900">Legal Research</span> and{' '}
                <span className="font-semibold text-slate-900">Consultancy</span>.
              </p>
              <p className="text-lg mb-6">
                Our Legal Research services include both general and specialized research on a wide range of
                legal issues, whether broad or within specific fields.
              </p>
              <p className="text-lg">
                Our Consultancy services provide expert guidance on compliance, regulatory matters, contract
                review, and strategic legal advice tailored to the unique needs of clients across various
                industries, including individuals, NGOs, corporates, and content creators.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-3xl font-bold text-emerald-600 mb-6">Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be the premier source of innovative and insightful legal research and consultancy,
                  empowering clients with the knowledge and strategies needed to navigate complex legal
                  landscapes and drive impactful change.
                </p>
              </div>

              <div className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-3xl font-bold text-emerald-600 mb-6">Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our mission is to provide top-tier legal research and consultancy by leveraging deep
                  expertise and advanced technology. We deliver clear, actionable insights and customized
                  solutions to address each client's unique challenges and ensure their success in a dynamic
                  legal landscape.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with us to navigate your legal challenges with confidence
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all hover:scale-105 shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
