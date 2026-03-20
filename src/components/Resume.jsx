import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience, education, awards, skillsData } from '../data/projects';
import { Book, Briefcase, Award, Cpu } from 'lucide-react';
import AwardModal from './AwardModal';

export default function Resume() {
    const [selectedAward, setSelectedAward] = useState(null);

    return (
        <div className="space-y-12 pb-20">
            {/* 🎓 Education */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-jet rounded-2xl text-green-nate shadow-lg"><Book size={24} /></div>
                    <h3 className="text-3xl font-bold text-white">Education</h3>
                </div>
                <div className="ml-4 border-l-2 border-jet pl-8 space-y-10">
                    {education.map((edu, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-green-nate shadow-[0_0_10px_#67f700]" />

                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-12 h-12 bg-white rounded-xl p-1.5 flex items-center justify-center shadow-md overflow-hidden">
                                    <img src={edu.logo} alt={edu.school} className="max-w-full max-h-full object-contain" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white leading-tight">{edu.degree}</h4>
                                    <p className="text-green-nate text-base font-bold">{edu.school} [ {edu.year} ]</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* 💼 Experience */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-jet rounded-2xl text-green-nate shadow-lg"><Briefcase size={24} /></div>
                    <h3 className="text-3xl font-bold text-white">Experience</h3>
                </div>
                <div className="ml-4 border-l-2 border-jet pl-8 space-y-10">
                    {experience.map((exp, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-green-nate shadow-[0_0_10px_#67f700]" />

                            {/* เพิ่มส่วนแสดง Logo บริษัท */}
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-10 h-10 bg-white rounded-lg p-1 flex items-center justify-center overflow-hidden shadow-md">
                                    <img src={exp.logo} alt={exp.company} className="max-w-full max-h-full object-contain" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                                    <p className="text-green-nate text-base font-bold">{exp.company} [ {exp.period} ]</p>
                                </div>
                            </div>

                            <ul className="mt-3 space-y-2 text-gray-400 text-base list-disc ml-4">
                                {exp.details.map((detail, i) => <li key={i}>{detail}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
            <section className="mt-16">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-jet rounded-2xl text-green-nate shadow-lg"><Cpu size={24} /></div>
                    <h3 className="text-3xl font-bold text-white">My Skills</h3>
                </div>

                <div className="bg-eerie-black border border-jet rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 space-y-8 sm:space-y-10">
                    {skillsData.map((group, index) => (
                        <div key={index}>
                            <h5 className="text-gray-400 text-xs sm:text-sm font-bold uppercase tracking-[2px] mb-4 sm:mb-6 text-center sm:text-left">{group.category}</h5>
                            <div className="grid grid-cols-3 sm:flex sm:flex-wrap justify-items-center justify-center sm:justify-start gap-y-6 gap-x-2 sm:gap-6">
                                {group.items.map((skill, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -3, scale: 1.05 }}
                                        className="group flex flex-col items-center gap-2.5 w-full sm:w-auto"
                                    >
                                        {/* Icon Container */}
                                        <div className="p-3 sm:p-3.5 bg-jet rounded-2xl border border-white/5 shadow-lg transition-all duration-300 group-hover:border-green-nate/50 group-hover:shadow-[0_0_20px_rgba(103,247,0,0.15)] flex items-center justify-center">
                                            <img src={skill.icon} alt={skill.name} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                                        </div>

                                        {/* ชื่อทักษะ */}
                                        <span className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-wider text-center transition-colors duration-300 group-hover:text-green-nate">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* 🏆 Awards */}

            <section>
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-jet rounded-2xl text-green-nate shadow-lg"><Award size={24} /></div>
                    <h3 className="text-3xl font-bold text-white">Achievements</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {awards.map((award, index) => (
                        <motion.div
                            layoutId={`award-${award.title}`}
                            key={index}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="relative group h-72 sm:h-80 bg-eerie-black border border-jet hover:border-green-nate/40 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(103,247,0,0.15)] transition-colors transition-shadow duration-300"
                            onClick={() => setSelectedAward(award)}
                        >
                            {/* 🖼 Background Image with Hover Scale */}
                            {award.image && (
                                <img
                                    src={award.image}
                                    alt={award.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                            )}

                            {/* 🖤 Gradient Overlay  */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-opacity duration-300 opacity-90 group-hover:opacity-100" />

                            {/* 📄 Content Layer */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                {/* Badge ปี */}
                                <div className="mb-3">
                                    <span className="inline-flex items-center px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-green-nate rounded-full font-bold text-m uppercase tracking-widest shadow-xl">
                                        {award.year}
                                    </span>
                                </div>

                                <h4 className="text-white font-bold text-xl sm:text-2xl leading-snug drop-shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                                    {award.title}
                                </h4>

                                {(award.by || award.desc) && (
                                    <p className="text-gray-300 text-sm mt-2 line-clamp-2 drop-shadow-md transition-transform duration-300 group-hover:-translate-y-1">
                                        {award.by || award.desc}
                                    </p>
                                )}

                                {/* 👆 Call to action: "View Details" */}
                                <div className="mt-4 flex items-center text-green-nate text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0">
                                    <span>View Details</span>
                                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <AnimatePresence>
                {selectedAward && (
                    <AwardModal
                        award={selectedAward}
                        onClose={() => setSelectedAward(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}