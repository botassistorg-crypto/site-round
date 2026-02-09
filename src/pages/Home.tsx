import { Hero } from "../components/Hero";
import { ServiceCard } from "../components/ServiceCard";
import { services, testimonials, portfolio } from "../content";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { PageTransition } from "../components/PageTransition";

export function Home() {
  return (
    <PageTransition className="bg-slate-50">
      <Hero />
      
      {/* Services Section */}
      <section className="py-24 px-6 container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-indigo-600 font-semibold tracking-wide uppercase"
          >
            Our Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-slate-900 mt-2 mb-4"
          >
            Digital Solutions for Modern Business
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-slate-600"
          >
            From stunning web design to intelligent automation, we provide the tools you need to grow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              iconName={service.icon}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us / About Teaser */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-32 z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -inset-4 bg-indigo-600 rounded-3xl rotate-6 opacity-20 blur-xl" />
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000" 
                alt="Team working together" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
            </motion.div>
            <div className="lg:w-1/2 space-y-10">
              <div>
                <motion.span 
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }} 
                  className="text-indigo-600 font-bold uppercase tracking-widest text-sm"
                >
                  The SiteRound Difference
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-5xl font-black text-slate-900 mt-4 leading-tight"
                >
                  Why Businesses Trust <span className="text-indigo-600">SiteRound</span>
                </motion.h2>
              </div>
              
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                We don't just build websites; we engineer digital ecosystems. By fusing creative artistry with data-driven AI, we ensure your brand doesn't just exist—it dominates.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Niche-Specific Strategy",
                  "AI-Powered Automation",
                  "Technical SEO Mastery",
                  "24/7 Premium Support"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-indigo-200 transition-colors"
                  >
                    <div className="bg-indigo-100 p-2 rounded-lg">
                       <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                    </div>
                    <span className="text-slate-800 font-bold">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4 }}
              >
                <Link to="/about" className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all hover:px-10 inline-flex items-center gap-2 group">
                  Learn more about us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
               <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
               <p className="text-slate-400">A selection of our recent projects.</p>
            </div>
            <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
              View All Projects <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.slice(0, 4).map((project, index) => (
               <motion.div
                 key={project.id}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: index * 0.1 }}
                 viewport={{ once: true }}
                 className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
               >
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                   <span className="text-indigo-400 text-sm font-medium">{project.category}</span>
                   <h3 className="text-xl font-bold text-white">{project.title}</h3>
                 </div>
               </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-indigo-400 font-medium">
              View All Projects <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Client Success Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-600 mb-6 italic">"{t.content}"</p>
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-indigo-600">
        <div className="container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-indigo-100 mb-10">
              Let's discuss how we can help you achieve your goals with our professional web design and AI automation services.
            </p>
            <Link 
              to="/contact" 
              className="px-10 py-5 bg-white text-indigo-600 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl"
            >
              Book Your Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
