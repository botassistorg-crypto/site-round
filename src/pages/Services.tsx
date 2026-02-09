import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Palette, 
  ShoppingCart, 
  Layout, 
  Settings,
  Check
} from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { webDesignServices, aiServices } from '@/content';

const iconMap: Record<string, React.ElementType> = {
  Palette,
  ShoppingCart,
  Layout,
  Settings,
};

export function Services() {
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
              Our Services
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Digital Solutions That
              <span className="text-indigo-300"> Work for You</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
              From beautiful websites to smart automation, we provide thoughtful solutions tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Web Design Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium mb-3">
              Web Design
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Websites That Make an Impression
            </h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
              Clean, modern, and built to convert visitors into customers.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {webDesignServices.map((service, index) => {
              const Icon = iconMap[service.icon] || Palette;
              return (
                <AnimatedSection key={service.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="h-full p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 border border-transparent hover:border-slate-100"
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-indigo-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature) => (
                            <span
                              key={feature}
                              className="inline-flex items-center gap-1 px-2 py-1 bg-white rounded-lg text-xs text-slate-600 border border-slate-100"
                            >
                              <Check className="w-3 h-3 text-green-500" />
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI & Automation Services */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-3">
              AI & Automation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Smart Tools for Your Business
            </h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
              Save time and improve customer experience with intelligent automation.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {aiServices.map((service, index) => (
              <AnimatedSection
                key={service.title}
                animation={index % 2 === 0 ? 'slideRight' : 'slideLeft'}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-6 bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100`}
                >
                  {/* Image */}
                  <div className="w-full md:w-2/5 flex-shrink-0">
                    <div className="relative overflow-hidden rounded-xl aspect-video md:aspect-[4/3]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center py-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 rounded-lg text-sm text-slate-600"
                        >
                          <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-indigo-500 hover:text-indigo-600 font-medium transition-colors self-start"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Get Found Online
              </h2>
              <p className="text-indigo-100 text-base sm:text-lg max-w-xl mx-auto mb-6">
                Our SEO services help local businesses appear when customers search for their services.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {['Keyword Research', 'On-Page SEO', 'Local SEO', 'Technical SEO'].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg text-sm"
                  >
                    <Check className="w-4 h-4 text-green-300" />
                    {item}
                  </span>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-slate-50 transition-colors"
              >
                Improve My Rankings
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-xl mx-auto">
              Let's build something great together. Reach out for a free consultation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-indigo-500 text-white rounded-full font-semibold hover:bg-indigo-600 transition-colors"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
