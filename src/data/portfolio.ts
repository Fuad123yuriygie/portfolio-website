import { Github, Linkedin, Code, Mail, Phone } from "lucide-react";

export const portfolioData = {
    personal: {
        name: "Fuad Hassan Faruk",
        title: "Systems & Firmware Engineering | Software Developer",
        email: "farukfuadhassan@gmail.com",
        phone: "+880 1710-635707",
        address: "Sirajganj, Bangladesh",
        bio: "Passionate Software Engineer with a strong foundation in C++ programming, data structures, and algorithms. Experienced in embedded systems development, debugging, and performance optimization.",
        socials: [
            {
                label: "GitHub",
                icon: Github,
                url: "https://github.com/Fuad123yuriygie",
            },
            {
                label: "LinkedIn",
                icon: Linkedin,
                url: "https://www.linkedin.com/in/fuad-haskan-faruk", // Assuming from CV name
            },
            {
                label: "Codeforces",
                icon: Code,
                url: "https://codeforces.com/profile/farukfuadhassan",
            },
        ],
    },
    experience: [
        {
            role: "R&D Engineer Trainee",
            company: "Shanghai BDCOM",
            period: "Oct 2024 - Feb 2025",
            description: [
                "Developed low-level firmware for network devices using C and VxWorks",
                "Debugged and optimized performance-critical code for embedded systems",
                "Gained hands-on experience with version control (Git), documentation, and testing",
                "Gained exposure to network infrastructure and device-level firmware integration",
            ],
        },
    ],
    education: [
        {
            degree: "B.Sc. in Electronics and Communication Engineering (ECE)",
            institution: "Hajee Mohammad Danesh Science and Technology University (HSTU)",
            period: "2019-2024",
        },
    ],
    skills: {
        languages: ["C", "C++", "Python", "Java", "Assembly (x86)", "SQL", "MATLAB"],
        domains: [
            "Embedded Systems",
            "OOP",
            "Data Structures & Algorithms",
            "Debugging",
            "SDLC",
            "Basic Electronics",
        ],
        tools: [
            "Git",
            "GitHub",
            "Make",
            "CI/CD concepts",
            "OpenGL",
            "Linux",
            "VxWorks",
            "Windows",
        ],
        competitive: [
            "Codeforces (Problem Solved: 300+ | Max Rating: Pupil 1360)",
            "Codechef (Problem Solved: 400+ | Max Rating: 3 Star 1743)",
        ],
    },
    projects: [
        {
            title: "SocialFly",
            description: "A social media platform implementation.",
            techStack: ["React", "Node.js", "MongoDB"], // Assumed based on typical stack or need to verify if visible in repo
            link: "https://github.com/Fuad123yuriygie/SocialFly",
            featured: true,
            github: true,
        },
        {
            title: "MotionExtraction",
            description: "Motion extraction and analysis system.",
            techStack: ["Python", "OpenCV"], // Assumed
            link: "https://github.com/Fuad123yuriygie/MotionExtraction",
            featured: true,
            github: true,
        },
        {
            title: "Embedded TFTP Server",
            description: "Built a multiclient-capable TFTP server with timeout tracking and data integrity checks.",
            techStack: ["C", "VxWorks"],
            link: "#",
            featured: true,
            github: false,
        },
        {
            title: "Game Engine",
            description: "Designed a lightweight rendering engine with support for lighting, camera control, and model rendering.",
            techStack: ["C++", "OpenGL"],
            link: "#",
            featured: true,
            github: false,
        },
        {
            title: "MedievalPort",
            description: "Medieval themed project portfolio.",
            techStack: ["HTML", "CSS"],
            link: "https://github.com/Fuad123yuriygie/MedievalPort",
            featured: false,
            github: true,
        },
        {
            title: "HomeAlertSystem",
            description: "IoT based home alert system.",
            techStack: ["IoT", "Arduino"],
            link: "https://github.com/Fuad123yuriygie/HomeAlertSystem",
            featured: false,
            github: true,
        },
    ],
};
