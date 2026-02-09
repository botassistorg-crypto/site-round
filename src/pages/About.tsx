import { motion } from "framer-motion";
import { CheckCircle, Users, Trophy, Target } from "lucide-react";
import { PageTransition } from "../components/PageTransition";

export function About() {
  return (
    <PageTransition className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white pt-32 pb-24">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            About SiteRound
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            We are a team of passionate developers, designers, and AI specialists dedicated to your success.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At SiteRound, our mission is to democratize access to high-end web technology and artificial intelligence for businesses of all sizes. We believe that every company deserves a digital presence that not only looks great but also works hard to generate leads and streamline operations.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We started as a small web design studio and have evolved into a full-service digital transformation agency. Our focus on "Site Verification" and SEO ensures that what we build gets seen by the right people.
            </p>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="lg:w-1/2 grid grid-cols-2 gap-6"
          >
             <div className="bg-indigo-50 p-6 rounded-2xl text-center">
               <Users className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
               <h3 className="font-bold text-slate-900">Expert Team</h3>
               <p className="text-sm text-slate-500">Dedicated specialists</p>
             </div>
             <div className="bg-indigo-50 p-6 rounded-2xl text-center">
               <Trophy className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
               <h3 className="font-bold text-slate-900">Award Winning</h3>
               <p className="text-sm text-slate-500">Recognized quality</p>
             </div>
             <div className="bg-indigo-50 p-6 rounded-2xl text-center">
               <Target className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
               <h3 className="font-bold text-slate-900">Results Driven</h3>
               <p className="text-sm text-slate-500">ROI focused</p>
             </div>
             <div className="bg-indigo-50 p-6 rounded-2xl text-center">
               <CheckCircle className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
               <h3 className="font-bold text-slate-900">Verified</h3>
               <p className="text-sm text-slate-500">Trusted partner</p>
             </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
