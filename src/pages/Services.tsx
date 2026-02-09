import { motion } from "framer-motion";
import { ServiceCard } from "../components/ServiceCard";
import { services } from "../content";
import { Link } from "react-router-dom";
import { PageTransition } from "../components/PageTransition";

export function Services() {
  return (
    <PageTransition className="pt-24 min-h-screen bg-slate-50">
      <div className="bg-slate-900 text-white py-24 mb-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Our Expertise
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Comprehensive digital solutions tailored to elevate your business in the modern landscape.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

        <div className="mt-24 bg-indigo-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-indigo-200 mb-8 text-lg">
              We understand every business is unique. Tell us about your specific challenges, and we'll engineer a solution just for you.
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-indigo-900 rounded-full font-bold hover:bg-indigo-50 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
