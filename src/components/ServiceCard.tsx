import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  index: number;
}

export function ServiceCard({ title, description, iconName, index }: ServiceCardProps) {
  // Dynamically get the icon component
  // @ts-ignore
  const Icon = Icons[iconName] as LucideIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, delay: index * 0.1, type: "spring", stiffness: 100 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white p-10 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-indigo-100" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 bg-white shadow-lg shadow-indigo-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 border border-indigo-50">
          {Icon ? (
            <Icon className="w-8 h-8 text-indigo-600 group-hover:text-indigo-500 transition-colors duration-300" />
          ) : (
            <Icons.Zap className="w-8 h-8 text-indigo-600 group-hover:text-indigo-500 transition-colors duration-300" />
          )}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed text-lg">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
