import { motion } from "framer-motion";

interface AiServiceCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

export function AiServiceCard({ title, description, image, index }: AiServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, delay: index * 0.1, type: "spring", stiffness: 100 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden group h-full flex flex-col"
    >
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-indigo-900/0 transition-colors duration-500 z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="p-8 flex-grow flex flex-col relative z-20 bg-white">
        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed text-lg flex-grow">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
