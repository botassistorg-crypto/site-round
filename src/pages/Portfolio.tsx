import { motion } from "framer-motion";
import { portfolio } from "../content";
import { Link } from "react-router-dom";
import { PageTransition } from "../components/PageTransition";

export function Portfolio() {
  return (
    <PageTransition className="pt-24 min-h-screen bg-slate-50">
      <div className="bg-slate-900 text-white py-24 mb-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Our Work
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Showcasing our best web design and automation projects.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolio.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/60 z-10 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                   <Link to="/contact" className="px-6 py-3 bg-white text-indigo-900 font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">View Project</Link>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider rounded-full mb-4">{project.category}</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 line-clamp-2">
                   A comprehensive solution designed to boost engagement and drive conversions through intuitive user experience.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
