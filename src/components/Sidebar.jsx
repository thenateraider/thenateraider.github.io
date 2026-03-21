import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Calendar, Facebook, Github, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function Sidebar() {
    const { t, content } = useLanguage();
    const { personalInfo } = content;
    const [isSticky, setIsSticky] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [sidebarHeight, setSidebarHeight] = useState('auto');
    const fullSidebarRef = useRef(null);

    // 1. เช็คหน้าจอ Mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // 2. ล็อคความสูง: อ่านค่าแค่ตอนที่ Component โหลดขึ้นมาสมบูรณ์และยังไม่ Sticky
    useEffect(() => {
        if (isMobile && fullSidebarRef.current && !isSticky && sidebarHeight === 'auto') {
            setSidebarHeight(fullSidebarRef.current.offsetHeight);
        }
    }, [isMobile, isSticky, sidebarHeight]);

    // 3. จัดการ Scroll พร้อมระบบหน่วง (Hysteresis) กันกระพริบ
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth < 1024) {
                // ระยะที่ให้ Sidebar เดิมหายไป (ลบออก 100px เผื่อระยะขอบ)
                const triggerPoint = typeof sidebarHeight === 'number' ? sidebarHeight - 100 : 350;

                // ใช้ Hysteresis แบบเจาะจง ป้องกัน Layout Shift เวลา scroll ช้าๆ
                if (!isSticky && window.scrollY > triggerPoint + 60) {
                    setIsSticky(true);
                } else if (isSticky && window.scrollY < triggerPoint - 60) {
                    setIsSticky(false);
                }
            } else {
                if (isSticky) setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // รันหนึ่งครั้งตอนโหลดเพื่อเช็คตำแหน่งเริ่มต้น
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sidebarHeight, isSticky]);

    // ปรับ Transition ให้เด้งนิดๆ แบบพองาม และมีความต่อเนื่อง
    const morphTransition = { type: "spring", stiffness: 600, damping: 35, mass: 0.4 };

    return (
        <div
            className="relative w-full lg:w-80 lg:self-stretch"
            // ล็อคความสูงเฉพาะตอนเลื่อนหน้าจอเป็น sticky เพื่อป้องกันหน้าเว็บ Layout Shift (ยุบพุ่งขึ้นไป)
            style={{ minHeight: (isMobile && isSticky && sidebarHeight !== 'auto') ? sidebarHeight : 'auto' }}
        >
            <AnimatePresence>
                {isMobile && isSticky ? (
                    /* 📱 Mobile Mini Sidebar (Floating) */
                    <motion.aside
                        key="mini-sidebar"
                        // ลบ opacity หรือ y animation ออกจาก container หลักเด็ดขาด!
                        // เพื่อที่ layoutId items (รูป, ชื่อ) จะได้ไม่ถูกบังคับให้โปร่งใส (กระพริบช้า) ระหว่างพุ่งตัว
                        className="fixed top-4 inset-x-4 z-[100] lg:hidden flex items-center gap-4 p-3 overflow-hidden"
                    >
                        {/* 🔥 ส่วนนี้คือกล่องพื้นหลังที่แยกการ fade/slide ออกมาต่างหาก เพื่อไม่ให้ดึงรูปภาพให้ช้าตาม */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 bg-eerie-black/85 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl -z-10"
                        />

                        <motion.div
                            layoutId="sidebar-avatar" // ให้รูปบินมา
                            transition={morphTransition}
                            className="w-12 h-12 rounded-[12px] overflow-hidden border border-white/10 shrink-0 relative z-10"
                        >
                            <img src={personalInfo.avatar} alt="Nate" className="w-full h-full object-cover" />
                        </motion.div>

                        <div className="flex-1 min-w-0 flex flex-col justify-center relative z-10">
                            <motion.h3
                                layoutId="sidebar-name" // ให้ชื่อบินมา
                                transition={morphTransition}
                                className="text-white font-bold text-sm truncate"
                            >
                                {personalInfo.name}
                            </motion.h3>
                            <motion.p
                                layoutId="sidebar-title" // ให้ตำแหน่งบินมา
                                transition={morphTransition}
                                className="text-green-nate text-[10px] font-bold uppercase tracking-wider overflow-hidden text-ellipsis whitespace-nowrap"
                            >
                                {personalInfo.title}
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.1, duration: 0.2 }}
                            className="flex gap-2 shrink-0 relative z-10"
                        >
                            <a href={`mailto:${personalInfo.email}`} className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-green-nate transition-colors">
                                <Mail size={16} />
                            </a>
                            <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-green-nate transition-colors">
                                <Phone size={16} />
                            </a>
                        </motion.div>
                    </motion.aside>

                ) : (
                    /* 🖥️ Full Sidebar - Original Object */
                    <motion.aside
                        key="full-sidebar"
                        ref={fullSidebarRef}
                        // ลบ opacity ออกเช่นกัน เพื่อรักษาความทึบของรูปและชื่อตอนพุ่งตัว
                        className="w-full lg:w-80 p-6 text-white lg:sticky lg:top-12 z-20 relative overflow-hidden group"
                    >
                        {/* 🔥 พื้นหลังของ Full Sidebar */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 bg-gradient-to-b from-[#1e1e1e] to-eerie-black border border-white/5 rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.6)] -z-10"
                        />

                        {/* ✨ Subtle Top Glow */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-green-nate/10 blur-[60px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100"
                        />

                        {/* ส่วนหัว: รูปและชื่อ */}
                        <div className="relative z-10 mx-auto w-[90%] md:w-full group/avatar cursor-pointer mb-2">
                            <motion.div
                                layoutId="sidebar-avatar" // จุดเชื่อมโยงรูป
                                transition={morphTransition}
                                className="relative aspect-square rounded-[32px] overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 group-hover/avatar:scale-[1.02] group-hover/avatar:shadow-green-nate/10"
                            >
                                <img
                                    src={personalInfo.avatar}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover/avatar:scale-110"
                                    alt="Nate"
                                />

                                {/* 🖤 Gradient Overlay */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#121212] via-[#121212]/70 to-transparent z-10"
                                />

                                {/* 📄 Name & Title Overlay */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                                    <div className="transform group-hover/avatar:-translate-y-1 transition-transform duration-500">
                                        <motion.h1
                                            layoutId="sidebar-name" // จุดเชื่อมโยงชื่อ
                                            transition={morphTransition}
                                            className="text-white font-extrabold text-xl leading-tight wrap-break-word drop-shadow-2xl"
                                        >
                                            {personalInfo.name}
                                        </motion.h1>
                                        <motion.p
                                            layoutId="sidebar-title" // จุดเชื่อมโยงตำแหน่ง
                                            transition={morphTransition}
                                            className="text-green-nate text-[9px] font-bold uppercase tracking-[0.2em] mt-1.5 opacity-90 overflow-hidden text-ellipsis whitespace-nowrap"
                                        >
                                            {personalInfo.title}
                                        </motion.p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* ✨ Subtle Glow behind the card */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="absolute -inset-2 bg-green-nate/5 rounded-[40px] blur-xl -z-10 opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-700"
                            />
                        </div>

                        {/* เนื้อหาส่วนล่าง (Contact & Social) */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-6" />

                            {/* ส่วนข้อมูลติดต่อ */}
                            <div className="grid grid-cols-1 gap-4 text-sm relative z-10 mx-1">
                                <ContactItem icon={<Mail size={16} />} title={t('sidebar', 'email')} value={personalInfo.email} href={`mailto:${personalInfo.email}`} />
                                <ContactItem icon={<Phone size={16} />} title={t('sidebar', 'phone')} value={personalInfo.phone} href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} />
                                <ContactItem icon={<Calendar size={16} />} title={t('sidebar', 'birthday')} value={personalInfo.birthday} />
                                <ContactItem icon={<MapPin size={16} />} title={t('sidebar', 'location')} value={personalInfo.location} />
                            </div>

                            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-6" />

                            {/* Social Links */}
                            <div className="flex justify-center gap-4 text-gray-400 relative z-10 w-full px-2">
                                <SocialLink href={personalInfo.socials.github} icon={<Github size={20} />} />
                                <SocialLink href={personalInfo.socials.facebook} icon={<Facebook size={20} />} />
                                <SocialLink href={personalInfo.socials.instagram} icon={<Instagram size={20} />} />
                            </div>
                        </motion.div>
                    </motion.aside>
                )}
            </AnimatePresence>
        </div>
    );
}

// Component ย่อยสำหรับแต่ละรายการติดต่อ (เหมือนเดิมเป๊ะ)
function ContactItem({ icon, title, value, href }) {
    const content = (
        <div className="flex items-center gap-4 group/item cursor-pointer">
            <div className="p-2.5 bg-gradient-to-br from-jet to-eerie-black rounded-xl border border-white/5 text-green-nate shadow-inner transition-all duration-300 group-hover/item:border-green-nate/30 group-hover/item:shadow-[0_0_15px_rgba(103,247,0,0.2)] group-hover/item:scale-110">
                {icon}
            </div>
            <div className="overflow-hidden">
                <p className="text-[10px] text-gray-500 font-bold tracking-widest mb-0.5 group-hover/item:text-gray-400 transition-colors uppercase">{title}</p>
                <p className="text-gray-200 truncate font-medium text-[13px] tracking-wide group-hover/item:text-white transition-colors">{value}</p>
            </div>
        </div>
    );

    if (href) {
        return (
            <a href={href} className="block no-underline">
                {content}
            </a>
        );
    }

    return content;
}

function SocialLink({ href, icon }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-jet/50 rounded-full hover:bg-green-nate/20 hover:text-green-nate border border-transparent hover:border-green-nate/30 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(103,247,0,0.2)]"
        >
            {icon}
        </a>
    );
}