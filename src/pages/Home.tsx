import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Users, 
  Zap, 
  Headphones, 
  TrendingUp,
  Globe,
  Search,
  Bot,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { 
  images, 
  heroContent, 
  whyChooseUs, 
  servicesOverview,
  testimonials 
} from '@/content';

const iconMap: Record<string, React.ElementType> = {
  Users,
  Zap,
  Headphones,
  TrendingUp,
  Globe,
  Search,
  Bot,
};

export function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${images.heroBackground})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              {heroContent.title}
              <span className="block text-indigo-300 mt-2">
                {heroContent.subtitle}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed"
            >
              {heroContent.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto group px-6 py-3 sm:px-8 sm:py-4 bg-indigo-500 text-white rounded-full font-medium text-sm sm:text-base shadow-lg shadow-indigo-500/20 hover:bg-indigo-600 hover:shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {heroContent.ctaPrimary}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full font-medium text-sm sm:text-base hover:bg-white/20 transition-all duration-300 text-center"
              >
                {heroContent.ctaSecondary}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-1.5 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              {whyChooseUs.title}
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">{whyChooseUs.subtitle}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.features.map((feature, index) => {
              const Icon = iconMap[feature.icon] || Users;
              return (
                <AnimatedSection key={feature.title} delay={index * 0.1} animation="fadeUp">
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 border border-transparent hover:border-slate-100 h-full"
                  >
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-indigo-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              {servicesOverview.title}
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">{servicesOverview.subtitle}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicesOverview.services.map((service, index) => {
              const Icon = iconMap[service.icon] || Globe;
              return (
                <AnimatedSection key={service.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 md:p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 h-full group"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                    <p className="text-slate-500 leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center text-indigo-500 hover:text-indigo-600 font-medium text-sm transition-colors group/link"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              Client Stories
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              What our clients say about working with us
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn">
            <div className="relative max-w-2xl mx-auto">
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 md:p-10">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  {/* Stars */}
                  <div className="flex items-center justify-center gap-1 mb-5">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                    "{testimonials[currentTestimonial].content}"
                  </p>

                  {/* Author */}
                  <div>
                    <p className="font-semibold text-slate-800">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-sm text-slate-500">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </motion.div>

                {/* Navigation Dots */}
                <div className="flex items-center justify-center gap-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? 'bg-indigo-500 w-6'
                          : 'bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-slate-400 hover:text-slate-600 hover:shadow-lg transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-slate-400 hover:text-slate-600 hover:shadow-lg transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-indigo-500 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg text-indigo-100 mb-8 max-w-xl mx-auto">
              Let's discuss how we can help bring your vision to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white text-indigo-600 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all duration-300"
            >
              Book a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
