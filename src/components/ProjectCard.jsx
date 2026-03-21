import { motion } from "framer-motion";
import { useLanguage } from '../context/LanguageContext';

export default function ProjectCard({ project, onClick }) {
    const { t } = useLanguage();

    return (
        <motion.div
            layoutId={`card-${project.id}`}
            onClick={onClick}
            whileHover={{ y: -10, scale: 1.02 }} // เอฟเฟกต์ลอยตัว Anti-gravity
            className="relative bg-eerie-black border border-jet rounded-[32px] overflow-hidden cursor-pointer shadow-2xl group border-white/5 isolate h-[420px]"
            style={{ transform: "translateZ(0)" }}
        >
            {/* 🖼 Background Image Layer */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-80 transition-opacity"
                />
            </div>

            {/* 🖤 Gradient Overlay (Seamless & Deep) */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-eerie-black via-eerie-black/95 to-transparent z-10" />

            {/* 📄 Content Layer (Positioned at bottom) */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <div className="mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                    <span className="inline-flex items-center px-4 py-1.5 bg-black/40 backdrop-blur-xl border border-white/10 text-green-nate rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-2xl">
                        {project.category}
                    </span>
                </div>

                <h3 className="text-white font-extrabold text-2xl md:text-3xl leading-tight group-hover:text-green-nate transition-colors drop-shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500 delay-75">
                    {project.title}
                </h3>

                {/* 👆 View Details hint that appears on hover */}
                <div className="mt-6 flex items-center text-green-nate text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span>{t('resume', 'viewCaseStudy')}</span>
                    <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                </div>
            </div>
        </motion.div>
    );
}