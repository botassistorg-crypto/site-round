import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { portfolioItems } from '@/content';

export function Portfolio() {
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
              Our Work
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Projects We're
              <span className="text-indigo-300"> Proud Of</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
              A selection of websites we've crafted for businesses like yours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <AnimatedSection
                key={item.title}
                delay={index * 0.1}
                animation="fadeUp"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-xl bg-slate-100 cursor-pointer"
                >
                  {/* Image Container - Fixed aspect ratio */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-5">
                      <span className="text-indigo-300 text-xs font-medium mb-1">
                        {item.category}
                      </span>
                      <h3 className="text-white text-lg font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Default Info - Visible on mobile */}
                  <div className="p-4 bg-white sm:hidden">
                    <span className="text-indigo-500 text-xs font-medium">
                      {item.category}
                    </span>
                    <h3 className="text-slate-800 font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              {[
                { value: '50+', label: 'Projects' },
                { value: '40+', label: 'Happy Clients' },
                { value: '100%', label: 'Satisfaction' },
                { value: '24/7', label: 'Support' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="p-4"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-500 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              How We Work
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              A simple, transparent process from start to finish
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discover', desc: 'Understanding your goals and vision' },
              { step: '02', title: 'Design', desc: 'Creating mockups you\'ll love' },
              { step: '03', title: 'Develop', desc: 'Building with clean, efficient code' },
              { step: '04', title: 'Deliver', desc: 'Launching and ongoing support' },
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="relative p-5 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-indigo-100 mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-indigo-500 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Like What You See?
            </h2>
            <p className="text-indigo-100 text-base sm:text-lg mb-8 max-w-xl mx-auto">
              Let's create something beautiful for your business too.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-slate-50 transition-colors"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
