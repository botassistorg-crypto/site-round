import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Mail, 
  Phone, 
  Clock, 
  Send,
  MessageCircle
} from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { siteConfig } from '@/content';

interface FormData {
  name: string;
  email: string;
  phone: string;
  niche: string;
  automationNeeds: string;
  preferredTime: string;
}

export function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent(`Inquiry from ${data.name} - ${data.niche}`);
    const body = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Website Niche/Details:
${data.niche}

Automation Needs:
${data.automationNeeds || 'Not specified'}

Preferred Contact Time:
${data.preferredTime || 'Anytime'}
    `);
    
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Let's Start a
              <span className="text-indigo-300"> Conversation</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info */}
            <AnimatedSection className="lg:col-span-2" animation="slideRight">
              <div className="bg-slate-800 rounded-2xl p-6 sm:p-8 text-white h-full">
                <h2 className="text-xl font-bold mb-2">Get in Touch</h2>
                <p className="text-slate-400 text-sm mb-8">
                  We'd love to hear from you. Here's how to reach us.
                </p>

                <div className="space-y-4">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors"
                  >
                    <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-400">Email</p>
                      <p className="text-sm font-medium truncate">{siteConfig.email}</p>
                    </div>
                  </a>

                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors"
                  >
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">WhatsApp</p>
                      <p className="text-sm font-medium">+{siteConfig.whatsappNumber}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-xl">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Response Time</p>
                      <p className="text-sm font-medium">Within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full flex items-center justify-center gap-2 px-5 py-3 bg-green-500 rounded-xl font-medium text-sm hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection className="lg:col-span-3" animation="slideLeft">
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8">
                <h2 className="text-xl font-bold text-slate-800 mb-1">
                  Book an Appointment
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  Fill out the form and we'll send you the details via email.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        className={`w-full px-4 py-2.5 rounded-xl bg-white border ${
                          errors.name ? 'border-red-300' : 'border-slate-200'
                        } focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email'
                          }
                        })}
                        className={`w-full px-4 py-2.5 rounded-xl bg-white border ${
                          errors.email ? 'border-red-300' : 'border-slate-200'
                        } focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      {...register('phone', { required: 'Phone is required' })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white border ${
                        errors.phone ? 'border-red-300' : 'border-slate-200'
                      } focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm`}
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Website Niche/Details */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Website Niche / Details *
                    </label>
                    <textarea
                      {...register('niche', { required: 'Please describe your project' })}
                      rows={3}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white border ${
                        errors.niche ? 'border-red-300' : 'border-slate-200'
                      } focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all resize-none text-sm`}
                      placeholder="E.g., Dental clinic website with online booking..."
                    />
                    {errors.niche && (
                      <p className="mt-1 text-xs text-red-500">{errors.niche.message}</p>
                    )}
                  </div>

                  {/* Automation Needs */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Automation Needs (Optional)
                    </label>
                    <textarea
                      {...register('automationNeeds')}
                      rows={2}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all resize-none text-sm"
                      placeholder="E.g., Chatbot, WhatsApp automation..."
                    />
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Preferred Contact Time
                    </label>
                    <select
                      {...register('preferredTime')}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
                    >
                      <option value="">Select a time</option>
                      <option value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</option>
                      <option value="Afternoon (12PM - 5PM)">Afternoon (12PM - 5PM)</option>
                      <option value="Evening (5PM - 9PM)">Evening (5PM - 9PM)</option>
                      <option value="Anytime">Anytime</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-600 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">
              Common Questions
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              {
                q: 'How long does it take to build a website?',
                a: 'Most projects take 2-4 weeks. Larger projects with custom features may take 4-8 weeks.',
              },
              {
                q: 'Do you provide hosting and maintenance?',
                a: 'Yes! We offer hosting and maintenance packages to keep your website running smoothly.',
              },
              {
                q: 'How does the AI chatbot work?',
                a: 'Our chatbots answer customer questions 24/7, qualify leads, and can book appointments automatically.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept credit cards, PayPal, and bank transfers. Milestone-based plans available for larger projects.',
              },
            ].map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 bg-white rounded-xl border border-slate-100"
                >
                  <h3 className="text-base font-semibold text-slate-800 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
