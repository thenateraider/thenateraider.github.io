export const personalInfo = {
    name: "Ekkaluck (Nate) Doungmusik",
    title: "Electronics and IoT Developer",
    avatar: new URL('../assets/images/my-avatar.png', import.meta.url).href,
    email: "Thenateraider@gmail.com",
    phone: "+66 (0) 92-538-8313",
    location: "Lampang, Thailand 52220",
    birthday: "June 17, 1998", // เพิ่มจาก CV
    socials: {
        facebook: "https://facebook.com/thenateraider",
        github: "https://github.com/thenateraider",
        instagram: "https://instagram.com/thenateraider"
    }
};
// src/data/projects.js

export const experience = [
    {
        company: "Fastwork",
        role: "Online Technician (Freelancer) / IoT Developer",
        period: "2022 — 2025",
        logo: new URL('../assets/images/logo-fastwork.png', import.meta.url).href, //
        details: [
            "Built IoT prototypes with Raspberry Pi, ESP32 and microcontrollers.",
            "Soldering PCB boards to speed up product testing.",
            "Programming of mobile and web applications for monitoring IoT systems via cloud."
        ]
    },
    {
        company: "AIA Surawong HQ",
        role: "IT Technician - One Stop Service",
        period: "2020 — 2021",
        logo: new URL('../assets/images/logo-aia.png', import.meta.url).href, //
        details: [
            "Established access controls and security protocols for printed documents.",
            "Maintained printers and RFID systems, reducing downtime by 30%.",
            "Programmed chatbots as alternatives to the ticket system to improve user requests."
        ]
    },
    {
        company: "Kantana Organization & Event Management",
        role: "Technical Support Staff / Event Presenter",
        period: "2019",
        logo: new URL('../assets/images/logo-kantana.png', import.meta.url).href, //
        details: [
            "Responsible for technical support in the museum and external events.",
            "Maintained multimedia exhibition (light/sound) and IT systems.",
            "Served as a museum guide, leading groups and imparting environmental knowledge."
        ]
    },
    {
        company: "Chulalongkorn University Museum",
        role: "Technical Support Staff / Tour Presenter",
        period: "2019",
        logo: new URL('../assets/images/logo-chula.png', import.meta.url).href, //
        details: [
            "Maintained multimedia and IT systems, ensuring 98% uptime.",
            "Prepared tours and guided visitors to improve feedback scores."
        ]
    },
    {
        company: "EGAT Maemoh",
        role: "Internship - Electrical Maintenance and Gas Control",
        period: "Feb — Apr 2018",
        logo: new URL('../assets/images/logo-egat.png', import.meta.url).href, //
        details: [
            "Controlled SO2 and gas sensors to reduce errors in measurements by 15%.",
            "Assisted in maintenance and repair of electrical equipment and sensors in the power plant."
        ]
    },
    {
        company: "EGAT Maemoh",
        role: "Junior Tour Guide (Part-time)",
        period: "2013 — 2020",
        logo: new URL('../assets/images/logo-egat.png', import.meta.url).href, //
        details: [
            "Guided visitors through the power plant for more than 5,000 hours.",
            "Explained electricity generation and environmental protection projects."
        ]
    }
];

export const education = [
    {
        degree: "Diploma Vocational Certificate in Industrial Electronics",
        school: "Lampang Technical College",
        year: "2017 — 2019",
        logo: new URL('../assets/images/logo-lampang-tech.png', import.meta.url).href, //
    },
    {
        degree: "Vocational Certificate in Electronics",
        school: "Lampang Technical College",
        year: "2015 — 2017",
        logo: new URL('../assets/images/logo-lampang-tech.png', import.meta.url).href, //
    }
];

export const awards = [
    {
        title: "3rd Place, ThaiSFTT IoT Programming Competition, ToT Public Company Limited",
        year: "2020",
        image: new URL('../assets/images/award-thaifstt.png', import.meta.url).href,
        extraImages: [
            new URL('../assets/images/award-thaifstt-2.png', import.meta.url).href,
            new URL('../assets/images/award-thaifstt-3.png', import.meta.url).href
        ],
        details: [
            "Programming and building a Smart NodeMCU IoT system.",
            "Recognized for innovative design and setup of the MikroTik IoT environment."
        ]
    },
    {
        title: "2nd Place Royal Award, KidsAlarm (Gen2 with AI Integration) Junior Inventor VEC Thailand",
        year: "2018",
        image: new URL('../assets/images/award-royal.png', import.meta.url).href,
        extraImages: [
            new URL('../assets/images/award-royal-2.png', import.meta.url).href,
            new URL('../assets/images/award-royal-3.png', import.meta.url).href
        ],
        details: [
            "Runner-up for KidsAlarm (Gen 2 with AI Integration) (Junior Inventor VEC Thailand).",
            "Award received personally by Her Royal Highness Princess Maha Chakri Sirindhorn."
        ]
    },
    {
        title: "Thailand-Korea Kooperations-Workshop, Lampang Technical College",
        year: "2018",
        image: new URL('../assets/images/award-korea.png', import.meta.url).href,
        details: [
            "Working with Korean researchers on joint IoT solutions.",
            "Included training in Korean language and electronics (PCB design)."
        ]
    },
    {
        title: "1st Place, KidsAlarm RRR Award National Award of ThailandBangkok ",
        year: "2016",
        image: new URL('../assets/images/award-rrr.png', import.meta.url).href,
        extraImages: [
            new URL('../assets/images/award-rrr-2.png', import.meta.url).href,
            new URL('../assets/images/award-rrr-3.png', import.meta.url).href
        ],
        details: [
            "Development of KidsAlarm, an AI-controlled child safety system in the vehicle.",
            "Features: Automatic ventilation control, SOS alarm and mobile push notifications.",
            "The project was presented at ITE College Central, Singapore."
        ]
    },
    {
        title: "Thailand's top 10 student representatives, SEAMEO Exchange Program @ Wuxi, China",
        year: "2016",
        image: new URL('../assets/images/award-seameo.png', import.meta.url).href,
        extraImages: [
            new URL('../assets/images/award-seameo-2.png', import.meta.url).href
        ],
        details: [
            "Selection for the SEAMEO student exchange program in China to present the KidsAlarm innovation."
        ]
    }
];

export const projectsData = [
    {
        id: "ecg-ai",
        title: "Myocardial Infarction AI Prediction",
        category: "IoT & AI Embedded System",
        image: new URL('../assets/images/project/ecg/applogo.jpg', import.meta.url).href,
        extraImages: [
            new URL('../assets/images/project/ecg/app0.jpg', import.meta.url).href,
            new URL('../assets/images/project/ecg/app1.jpg', import.meta.url).href,
            new URL('../assets/images/project/ecg/app2.jpg', import.meta.url).href,
            new URL('../assets/images/project/ecg/circuitdraft1.jpg', import.meta.url).href,
            new URL('../assets/images/project/ecg/circuitdraft2.jpg', import.meta.url).href,
            new URL('../assets/images/project/ecg/circuitdraft3.jpg', import.meta.url).href,
            new URL('../assets/images/project/ecg/finishecg.jpg', import.meta.url).href,
            new URL('../assets/images/project/ecg/preparepcb.jpg', import.meta.url).href,
            new URL('../assets/images/project/ecg/testgraph.jpg', import.meta.url).href,
            new URL('../assets/images/project/ecg/testlog.jpg', import.meta.url).href
        ],
        description: "Developed an AI-based embedded system to detect Myocardial Infarction (MI) using single-lead ECG with ≥90% accuracy.",
        richContent: [
            { type: "h3", text: "Objective" },
            { type: "p", text: "Developed an AI-based embedded system to detect Myocardial Infarction (MI) using single-lead ECG with ≥90% accuracy." },
            { type: "h3", text: "System Design" },
            {
                type: "ul", items: [
                    "PCB & Circuit: Custom PCB with ADS1293 ECG front-end, Arduino Pro Mini, and Bluetooth (HC-05/HC-10).",
                    "Edge Device: Raspberry Pi CM5 (4GB RAM, 32GB eMMC) for offline & real-time ECG signal processing.",
                    "Mobile App: iOS (Swift) app for real-time ECG visualization and MI alerts."
                ]
            },
            { type: "h3", text: "AI Model Training" },
            {
                type: "ul", items: [
                    "Dataset: PTB Diagnostic ECG Database (549 records, 294 patients).",
                    "Preprocessing: Noise removal using Fourier Decomposition Method (FDM).",
                    "Feature Extraction: Entropy, Kurtosis, Energy, statistical and wavelet features.",
                    "Classification: Machine Learning (kNN, SVM) → MI vs Non-MI (Healthy + Other diseases).",
                    "Accuracy: Achieved ≥90% in MI detection."
                ]
            },
            { type: "h3", text: "Workflow" },
            {
                type: "ol", items: [
                    "ECG acquisition (Lead II) → PCB (ADS1293 + Arduino).",
                    "Wireless transfer to Raspberry Pi CM5.",
                    "Preprocessing + Feature Extraction.",
                    "AI classification (MI / Non-MI).",
                    "Real-time alert & data visualization on Swift app."
                ]
            },
            { type: "h3", text: "Key Results" },
            {
                type: "ul", items: [
                    "High-accuracy MI detection (>90%).",
                    "Portable embedded hardware (PCB).",
                    "Real-time ECG monitoring with iOS integration."
                ]
            }
        ]
    },
    {
        id: "kidsalarm",
        title: "KidsAlarm (Child-In-Van Alarm)",
        category: "IoT & Image Processing",
        image: new URL('../assets/images/project-kidsalarm.jpg', import.meta.url).href,
        extraImages: [
            new URL('../assets/images/project-kidsalarm-2.jpg', import.meta.url).href,
            new URL('../assets/images/project-kidsalarm-3.jpg', import.meta.url).href,
            new URL('../assets/images/project-kidsalarm-4.jpg', import.meta.url).href
        ],
        description: "A system to prevent child fatalities in vehicles using Image Processing, automatic safety actions, and instant GPS notifications.",
        richContent: [
            { type: "p", text: "The project's objective is to prevent child fatalities in vehicles caused by being trapped and running out of oxygen, a preventable accident often resulting from driver oversight or unforeseen circumstances." },
            { type: "h3", text: "How It Works" },
            {
                type: "ul", items: [
                    "Activation: The system is powered up and begins surveillance immediately after the driver removes the car key and went out.",
                    "Detection: It uses a camera and Image Processing techniques on a Raspberry Pi board to detect movement inside the car.",
                    "Automatic Safety Action: Upon detecting a child, the device instantly activates and automatically lowers the car windows to ensure the child has an air supply and reduce the risk of suffocation.",
                    "Instant Notification and GPS Alert: The system immediately sends an alert notification, including the GPS location, to a dedicated mobile application for the driver, parents, or other guardians.",
                    "Logging and Confirmation: To aid in assistance, the system takes a picture (latching the shutter) to accompany the alert. It then stores a log and sends a final confirmation notification to the application once the child has been rescued."
                ]
            },
            { type: "h3", text: "Achievements" },
            {
                type: "ul", items: [
                    "Winner of the National RRR AWARD Thailand 2016 in the Outstanding Innovation and Marketing Plan category.",
                    "2nd Place National Level in the Junior Inventor VEC Thailand competition, where the team was honored to receive the award from H.R.H. Princess Bajrakitiyabha Narendira Debyavati."
                ]
            }
        ]
    },
    {
        id: "student-checker",
        title: "Student Checker System with RFID + WebApp",
        category: "Cloud IoT & RFID System",
        image: new URL('../assets/images/project-studentchecker.jpg', import.meta.url).href,
        extraImages: [
            new URL('../assets/images/project-studentchecker-2.jpg', import.meta.url).href,
            new URL('../assets/images/project-studentchecker-3.jpg', import.meta.url).href
        ],
        description: "A smart, real-time student attendance and tracking system replacing manual processes using RFID and Firebase Cloud integrations.",
        richContent: [
            { type: "p", text: "This project develops a smart, real-time student attendance and tracking system to replace manual paper-based processes. The system integrates RFID technology, embedded systems, and cloud-based web applications to improve accuracy, efficiency, and student safety. It enables automatic attendance recording, real-time status monitoring, and centralized data management through a scalable IoT architecture." },
            { type: "p", text: "The system consists of two main components. The hardware unit, built using Raspberry Pi 4, RFID RC522, and an OLED display, reads student RFID cards and instantly synchronizes attendance data to the cloud via Wi-Fi. The web application, developed using Google Firebase (Realtime Database, Authentication, and Hosting), allows teachers and parents to access attendance information in real time across devices." },
            { type: "h3", text: "Key Highlights" },
            {
                type: "ul", items: [
                    "Real-time RFID-based attendance tracking",
                    "Contactless and paperless system",
                    "Cloud-synchronized database (NoSQL – Firebase)",
                    "Role-based access control (Admin / Parent)",
                    "School transportation check-in/out monitoring based on React WebApp",
                    "Financial data support for daily/monthly payment tracking",
                    "Cross-platform web access (Desktop & Mobile)",
                    "Embedded system programmed in Python on Raspberry Pi"
                ]
            },
            { type: "p", text: "The system was tested for hardware accuracy, web functionality, cross-browser compatibility, and user satisfaction. Results show improved efficiency, reduced administrative errors, enhanced safety transparency, and stronger digital infrastructure for smart-school implementation. This project demonstrates practical integration of Embedded Systems, IoT, and Cloud Computing in educational technology." }
        ]
    },
    {
        id: "smart-guide",
        title: "Smart Guide – Hospital Navigation",
        category: "Embedded BLE & Navigation",
        image: new URL('../assets/images/project-smartguide.jpg', import.meta.url).href,
        extraImages: [
            new URL('../assets/images/project-smartguide-2.jpg', import.meta.url).href,
            new URL('../assets/images/project-smartguide-3.jpg', import.meta.url).href
        ],
        description: "Embedded hospital navigation system guiding patients step-by-step through treatment stations using BLE RSSI, NFC, and LVGL.",
        richContent: [
            { type: "p", text: "Embedded hospital navigation system designed to guide patients step-by-step through treatment stations using proximity detection, secure identification, and real-time workflow control. The system replaces complex indoor positioning with a lightweight BLE RSSI distance estimation model." },
            { type: "p", text: "The system uses BLE RSSI-based proximity detection to estimate distance and trigger navigation when the user is within a defined threshold (~4 meters), providing a low-cost indoor positioning solution without GPS. Workflow control is managed through a finite state machine (FSM), ensuring patients follow a strict sequence (REGISTERED → FILTER → DOCTOR → PAYMENT → PHARMACY → FINISH) with real-time synchronization via HTTP." },
            { type: "p", text: "Patient identity is secured using NFC tags, preventing incorrect step transitions and reducing manual errors. The embedded system integrates a GUI (LVGL) and digital audio feedback (I2S DAC) to provide clear visual and voice guidance. Overall communication combines BLE (proximity), HTTP (state sync), NFC (ID verification), and I2S (audio output) into a unified embedded navigation architecture." },
            { type: "h3", text: "Technical Highlights" },
            {
                type: "ul", items: [
                    "BLE RSSI-based distance estimation",
                    "Finite State Machine workflow design",
                    "Modular embedded architecture",
                    "Real-time event-driven system",
                    "Scalable multi-station structure"
                ]
            },
            { type: "h3", text: "Application Potential" },
            {
                type: "ul", items: [
                    "Smart hospitals",
                    "Healthcare automation",
                    "Indoor IoT navigation systems",
                    "Embedded real-time guidance devices work with HTTP WebApp management"
                ]
            }
        ]
    },
    {
        id: "smartcane",
        title: "SmartCane IoT Assistive Device",
        category: "Assistive IoT System",
        image: new URL('../assets/images/project-smartcane.jpg', import.meta.url).href,
        extraImages: [
            new URL('../assets/images/project-smartcane-2.jpg', import.meta.url).href
        ],
        description: "IoT-based smart assistive system designed to monitor a user’s real-time location, fall detection, and safety status via geofencing.",
        richContent: [
            { type: "p", text: "SmartCane is an IoT-based smart assistive system designed to monitor a user’s real-time location and safety status. The system integrates a smart walking cane device with a web application for live tracking, geofencing, and remote monitoring." },
            { type: "p", text: "SmartCane combines an IoT device and a web-based dashboard to track a user’s live GPS location, monitor device status, and ensure safety within a predefined safe zone. The system uses Firebase for real-time data synchronization and Google Maps API for visualization, allowing caregivers to monitor users remotely and receive alerts if the user moves outside a designated area." },
            { type: "h3", text: "How It Works" },
            {
                type: "ul", items: [
                    "The SmartCane device sends GPS location and status data (Motion/Fall detection data (IMU sensor)) to Firebase Realtime Database.",
                    "The web application retrieves data in real time.",
                    "The system calculates distance between Current location and Home (safe zone) location.",
                    "If the user exits the defined radius: The system displays 'Out of area' warning.",
                    "Google Maps API visualizes: Live position, Home location, and Geofence radius (safe zone circle)."
                ]
            },
            { type: "h3", text: "Key Features" },
            {
                type: "ul", items: [
                    "Real-time GPS tracking, Geofencing with customizable radius and Live device status monitoring (Online/Offline)",
                    "Fall detection using motion sensor (IMU)",
                    "Safe zone visualization with Google Maps",
                    "Address auto-conversion from coordinates (Reverse Geocoding)",
                    "Firebase-based real-time cloud synchronization",
                    "Responsive web interface (Mobile & Desktop)",
                    "Settings page for home location & radius configuration by REACT WebApp"
                ]
            }
        ]
    }
];

// เพิ่มต่อท้ายใน src/data/projects.js
export const services = [
    {
        title: "IoT & Electronics",
        description: "I develop and prototype IoT systems using Raspberry Pi, NodeMCU, and various microcontrollers.",
        icon: "🛰️"
    },
    {
        title: "Programming",
        description: "I am proficient in Python, C, HTML/CSS, and have experience with mobile and web app development.",
        icon: "💻"
    },
    {
        title: "IT Systems",
        description: "I have experience with printers & RFID-based systems, user access control, and event tech setup.",
        icon: "🔌"
    },
    {
        title: "Software Tools",
        description: "I am skilled in using Visual Studio Code, Microsoft Office, Adobe Photoshop, and KiCad.",
        icon: "🛠️"
    }
];

// เพิ่มต่อท้ายใน src/data/projects.js

export const skillsData = [
    {
        category: "Programming",
        items: [
            { name: "Python", icon: new URL('../assets/images/icon-python.png', import.meta.url).href },
            { name: "C++", icon: new URL('../assets/images/icon-c.png', import.meta.url).href },
            { name: "HTML", icon: new URL('../assets/images/icon-html.png', import.meta.url).href },
            { name: "CSS", icon: new URL('../assets/images/icon-css.png', import.meta.url).href },
            { name: "Swift", icon: new URL('../assets/images/icon-swift.png', import.meta.url).href },
            { name: "Kotlin", icon: new URL('../assets/images/icon-kotlin.png', import.meta.url).href }
        ]
    },
    {
        category: "IoT & Electronics",
        items: [
            { name: "Raspberry Pi", icon: new URL('../assets/images/icon-raspberry-pi.png', import.meta.url).href },
            { name: "ESP32", icon: new URL('../assets/images/icon-nodemcu.png', import.meta.url).href },
            { name: "IoT Device", icon: new URL('../assets/images/icon-microcontroller.png', import.meta.url).href },
            { name: "PCB Design", icon: new URL('../assets/images/icon-pcb.png', import.meta.url).href }
        ]
    },
    {
        category: "IT Systems",
        items: [
            { name: "RFID", icon: new URL('../assets/images/icon-rfid.png', import.meta.url).href },
            { name: "Access Control", icon: new URL('../assets/images/icon-user.png', import.meta.url).href },
            { name: "Printers", icon: new URL('../assets/images/icon-printer.png', import.meta.url).href }
        ]
    },
    {
        category: "Software Tools",
        items: [
            { name: "VS Code", icon: new URL('../assets/images/icon-vscode.png', import.meta.url).href },
            { name: "MS Office", icon: new URL('../assets/images/icon-office.png', import.meta.url).href },
            { name: "KiCad", icon: new URL('../assets/images/icon-kicad.png', import.meta.url).href },
            { name: "Photoshop", icon: new URL('../assets/images/icon-photoshop.png', import.meta.url).href },
            { name: "Lightroom", icon: new URL('../assets/images/icon-lightroom.png', import.meta.url).href },
            { name: "Final Cut Pro", icon: new URL('../assets/images/icon-finalcut.png', import.meta.url).href }
        ]
    }
];

export const aboutMe = {
    headlinePre: "Highly motivated",
    headlineHighlight: "Electronics and IoT Developer",
    headlinePost: "with expertise in IoT prototyping, embedded systems and IT support.",
    description: "Proven strong problem-solving skills and success in cost-reducing and efficiency-enhancing projects. Winner of several national and international innovation awards.",
    quote: "\"I am looking for a position to contribute my technical knowledge and my talent for solving problems.\""
};