import { Mail, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    service_type: 'legal-research',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const serviceOptions = [
    { value: 'legal-research', label: 'Legal Research' },
    { value: 'consultancy', label: 'Consultancy Services' },
    { value: 'litigation-support', label: 'Litigation Support' },
    { value: 'training', label: 'Training and Workshops' },
    { value: 'data-protection', label: 'Data Protection Training' },
    { value: 'ngo-support', label: 'NGO Support Services' },
    { value: 'other', label: 'Other' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError('');

    try {
      const response = await fetch('https://formspree.io/f/xdkzzzrq', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: (() => {
          const formElement = e.target as HTMLFormElement;
          return new FormData(formElement);
        })(),
      });

      if (!response.ok) {
        let errorMessage = 'Failed to submit consultation request. Please try again.';
        try {
          const data = await response.json();
          if (data?.errors && Array.isArray(data.errors) && data.errors.length > 0) {
            errorMessage = data.errors.map((err: { message?: string }) => err.message).join(', ');
          }
        } catch {
          // ignore JSON parse errors and fall back to default message
        }
        throw new Error(errorMessage);
      }

      setFormData({
        full_name: '',
        email: '',
        phone: '',
        service_type: 'legal-research',
        message: '',
      });
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err: any) {
      setSubmitError(err.message || 'Failed to submit consultation request. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Book a Consultation</h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
          <p className="text-xl text-gray-300 mt-6">Submit your consultation request below</p>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Consultation Request Form</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Fill out the form below to request a consultation. Our team will review your request and contact you within 24 hours.
              </p>
            </div>

            {submitSuccess && (
              <div className="mb-8 bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-0.5" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-900">Success!</h3>
                    <p className="text-emerald-800 mt-1">Your consultation request has been submitted. We'll contact you shortly.</p>
                  </div>
                </div>
              </div>
            )}

            {submitError && (
              <div className="mb-8 bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <p className="text-red-800 font-semibold">Error: {submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-slate-50 p-10 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="full_name" className="block text-sm font-semibold text-slate-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition"
                    placeholder="+254 XXX XXX XXX"
                  />
                </div>
                <div>
                  <label htmlFor="service_type" className="block text-sm font-semibold text-slate-900 mb-2">
                    Service Type *
                  </label>
                  <select
                    id="service_type"
                    name="service_type"
                    value={formData.service_type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition"
                  >
                    {serviceOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                  Tell us about your legal needs *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition"
                  placeholder="Describe your legal research or consultancy needs in detail..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}
              </button>
            </form>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-12 rounded-lg shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">24 hours</div>
                  <p className="text-emerald-100">Average response time</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <p className="text-emerald-100">Confidential service</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">Expert</div>
                  <p className="text-emerald-100">Legal team ready</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              What Happens Next?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">You Reach Out</h3>
                <p className="text-gray-600">Contact us via phone or email</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">We Discuss</h3>
                <p className="text-gray-600">Understand your needs and scope</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">We Engage</h3>
                <p className="text-gray-600">Send letter of engagement</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">We Deliver</h3>
                <p className="text-gray-600">Provide excellent service</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
