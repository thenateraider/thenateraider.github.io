import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { createPortal } from "react-dom";
import { useLanguage } from '../context/LanguageContext';

export default function ProjectModal({ project, onClose }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const { t } = useLanguage();

    return createPortal(
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
                onClick={onClose}
            >
                <motion.div
                    layoutId={`card-${project.id}`}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-eerie-black border border-white/10 w-full max-w-5xl max-h-[85vh] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* ❌ Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-black/40 hover:bg-green-nate/20 text-white hover:text-green-nate transition-all z-20 backdrop-blur-md border border-white/10 shadow-lg"
                    >
                        <X size={24} />
                    </button>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.3 } }}
                        exit={{ opacity: 0, transition: { duration: 0.1 } }}
                        className="overflow-y-auto w-full h-full scrollbar-hide bg-gradient-to-br from-[#1c1c1c] via-[#111111] to-black"
                    >

                        {/* 🖼 Hero Image Header */}
                        <div className="relative w-full h-64 sm:h-80 md:h-[450px]">
                            {project.image ? (
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full bg-jet/50 flex items-center justify-center">
                                    <span className="text-gray-500 font-medium text-lg">{t('modal', 'noImage')}</span>
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

                            <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 md:p-12 pb-2 pointer-events-none">
                                <span className="inline-block px-5 py-2 border border-green-nate/30 bg-green-nate/10 text-green-nate rounded-full font-bold text-sm md:text-base tracking-[0.2em] mb-4 shadow-lg backdrop-blur-md">
                                    {project.category}
                                </span>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-xl max-w-4xl">
                                    {project.title}
                                </h2>
                            </div>
                        </div>

                        <div className="p-6 sm:p-10 md:p-12 space-y-10 md:space-y-12">
                            {/* 📝 Details Box with Dynamic Rich Content parsing */}
                            <div className="bg-white/[0.02] p-6 sm:p-8 md:p-10 rounded-3xl border border-white/5 shadow-inner">

                                {/* Fallback to simple description if no richContent */}
                                {!project.richContent && (
                                    <p className="text-gray-300 font-light text-xl leading-relaxed text-justify">
                                        {project.description}
                                    </p>
                                )}

                                {/* Rich Content Engine */}
                                {project.richContent && (
                                    <div className="space-y-8 text-gray-200">
                                        {project.richContent.map((block, idx) => {
                                            if (block.type === 'p') {
                                                return (
                                                    <p key={idx} className="text-justify leading-relaxed font-light text-lg md:text-xl">
                                                        {block.text}
                                                    </p>
                                                );
                                            }
                                            if (block.type === 'h3') {
                                                return (
                                                    <h3 key={idx} className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-4">
                                                        <span className="w-8 h-1 bg-green-nate rounded-full shadow-[0_0_10px_#67f700]"></span>
                                                        {block.text}
                                                    </h3>
                                                );
                                            }
                                            if (block.type === 'ul') {
                                                return (
                                                    <ul key={idx} className="space-y-4 list-none text-lg md:text-xl font-light">
                                                        {block.items.map((item, i) => (
                                                            <li key={i} className="flex items-start group">
                                                                <span className="flex-shrink-0 mt-2.5 mr-5 w-2 h-2 bg-green-nate rounded-full shadow-[0_0_15px_#67f700] transition-transform group-hover:scale-150"></span>
                                                                <span className="leading-relaxed tracking-wide group-hover:text-white transition-colors">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                );
                                            }
                                            if (block.type === 'ol') {
                                                return (
                                                    <ol key={idx} className="space-y-4 list-decimal list-inside text-lg md:text-xl font-light marker:text-green-nate marker:font-bold">
                                                        {block.items.map((item, i) => (
                                                            <li key={i} className="leading-relaxed pl-2 mb-2 group">
                                                                <span className="tracking-wide group-hover:text-white transition-colors">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ol>
                                                );
                                            }
                                            return null;
                                        })}
                                    </div>
                                )}

                            </div>

                            {/* 📸 Project Gallery */}
                            {project.extraImages && project.extraImages.length > 0 && (
                                <div className="bg-black/30 p-6 sm:p-8 md:p-10 rounded-[32px] border border-white/5 shadow-lg">
                                    <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
                                        <span className="w-10 h-1 bg-green-nate rounded-full shadow-[0_0_10px_#67f700]"></span>
                                        {t('modal', 'projectGallery')}
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                        {[project.image, ...project.extraImages].filter(Boolean).map((imgUrl, i) => (
                                            <div
                                                key={i}
                                                className="relative group overflow-hidden rounded-2xl border border-white/10 shadow-xl cursor-pointer"
                                                onClick={() => setSelectedImage(imgUrl)}
                                            >
                                                <img
                                                    src={imgUrl}
                                                    alt={`${project.title} gallery ${i + 1}`}
                                                    className="w-full h-56 sm:h-72 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                                                    <ZoomIn size={48} className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-110 drop-shadow-lg" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* 🔍 Fullscreen Lightbox Overlay */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-2xl"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-green-nate/20 text-white hover:text-green-nate transition-all z-[210] backdrop-blur-md border border-white/10"
                        >
                            <X size={32} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            src={selectedImage}
                            alt="Enlarged view"
                            className="max-w-full max-h-full object-contain rounded-2xl shadow-[0_0_100px_rgba(0,0,0,1)] border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>,
        document.body
    );
}