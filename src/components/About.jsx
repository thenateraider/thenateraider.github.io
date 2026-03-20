import { motion } from 'framer-motion';
import { services, personalInfo } from '../data/projects';

export default function About() {
    return (
        <div className="space-y-10 text-white">
            {/* ส่วนเนื้อหาแนะนำตัว */}

            <section className="relative bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 p-10 md:p-14 lg:p-16 rounded-[40px] text-center shadow-2xl overflow-hidden group">
                {/* 💫 Ambient Glow Background */}
                <div className="absolute inset-x-0 -top-40 h-80 bg-green-nate/20 blur-[120px] rounded-full opacity-50 group-hover:opacity-80 group-hover:bg-green-nate/30 transition-all duration-700 pointer-events-none"></div>

                {/* ✍️ Main Headline */}
                <h1 className="relative text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-8 drop-shadow-xl">
                    Highly motivated <span className="text-green-nate drop-shadow-[0_0_25px_rgba(103,247,0,0.5)]">Electronics and IoT Developer</span> with expertise in
                    IoT prototyping, embedded systems and IT support.
                </h1>

                {/* 📖 Subtext / Description */}
                <p className="relative text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light">
                    Proven strong problem-solving skills and success in cost-reducing and efficiency-enhancing projects.
                    Winner of several national and international innovation awards.

                    <strong className="block mt-8 text-white font-semibold text-2xl md:text-3xl drop-shadow-lg tracking-wide">
                        "I am looking for a position to contribute my technical knowledge and my talent for solving problems."
                    </strong>
                </p>
            </section>


            {/* ส่วน What I'm doing */}
            <section>
                <h3 className="text-3xl font-bold mb-8">What I'm doing</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10, scale: 1.02 }} // Effect ลอยตัว (Anti-gravity)
                            className="bg-eerie-black border border-jet p-6 rounded-[24px] shadow-xl flex gap-5 items-start relative overflow-hidden group"
                        >
                            {/* ตกแต่งพื้นหลังการ์ดเล็กน้อย */}
                            <div className="absolute -right-4 -bottom-4 text-white/5 opacity-0 group-hover:opacity-10 text-6xl transition-opacity">
                                {service.icon}
                            </div>

                            <div className="text-4xl p-3 bg-jet rounded-2xl shadow-inner">
                                {service.icon}
                            </div>

                            <div>
                                <h4 className="text-xl font-bold mb-2 text-white group-hover:text-green-nate transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-base text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}