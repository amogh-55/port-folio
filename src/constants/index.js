import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,

  threejs,
} from "../assets";
import sihIcon from '../assets/company/sih.png';
import freelancericon from '../assets/company/freelancer.png';
import kavach from '../assets/company/kavach.png';
import ngit from '../assets/company/ngit.png';
import cr from '../assets/company/c.png';
import java from '../assets/company/java.png';
import ss from '../assets/company/sql.png';
import python from '../assets/company/python.png';
import teli from '../assets/company/tel.png';
import threep from '../assets/company/three.png';
import { t } from "maath/dist/misc-7d870b3c.esm";
import nextjs from '../assets/tech/nextjs.png';
import postgres from '../assets/tech/postgres.png';

import aws from '../assets/tech/aws.png';
import fundPitch from '../assets/tech/fund.png';






export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  
  {
    id: "contact",
    title: "Contact",
  },

];

const services = [
  {
    title: "Full stack Web Developer",
    icon: web,
  },
  {
    title: "AI/ML Engineer",
    icon: mobile,
  },
  {
    title: "Problem Solver",
    icon: backend,
  },
  {
    title: "Visionary Planner",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Next Js",
    icon: nextjs,
  },

  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "Java",
    icon: java,
  },
  

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "SQL",
    icon: ss,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
 
  {
    name: "MongoDB",
    icon: mongodb,
  },

  
  
 
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
 
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "ThreePointoLabs",
    icon: threep,
    iconBg: "#000000",
    date: "Mar 2025 - present",
    points: [
      "Led the development of Blue Cross admin web app using Next.js, PostgreSQL, and Tailwind CSS, building 10+ modules for vehicle and team management, improving coordination for 150+ monthly rescue missions and streamlining tasks for 8+ field teams",
      "Built mobile interfaces for Blue Cross using React Native to streamline rescue operations, enabling 60+ monthly capture and release reports driving workflow automation and further reducing operational costs by 50%",
      "Translated Figma prototypes into scalable, pixel-perfect user interfaces with Next.js and Tailwind CSS, enhancing UI/UX and platform responsiveness for the AI-powered recruitment tool RecruitGPT",
      "Developed and maintained RecruitGPT, an AI-powered recruitment platform used by 2,000+ students, consolidating resume uploads, interviews, and onboarding—eliminating the need for third-party tools like Zoom",
    ],
  },
  {
    title: "Teleparadigm Networks",
    icon: teli,
    company_name:"SDE Developer Intern",
    iconBg: "#000000",
    date: "Oct 2024 - Jan 2025",
    points: [
      "Engineered a user-friendly application that delivers essential ingredients and step-by-step instructions, guiding 1,200+ users through the cooking process for over 65+ diverse recipes",
      "Proposed easy-to-follow culinary guides focusing on essential techniques and straightforward steps; this initiative amplified the overall cooking experience for users while increasing positive ratings by an impressive 70%",
      "Enlisted over 100 user-friendly recipes that emphasized clear cooking techniques, enhancing the culinary experience for users and leading to a noticeable increase in app users by 1,000 within three months",
    ],
  },
  {
    title: "Machine Learning Engineer",
    icon: ngit,
    iconBg: "#000000",
    date: "Jan 2024 - Apr 2024",
    points: [
      "Engineered advanced deep learning models for text-to-image generation using Python and Machine Learning, delivering real-time results for creative tools",
      "Conducted in-depth analysis of over 100,000 diverse images to improve model accuracy and performance, enabling complex input scenario handling.",
      "Implemented innovative solutions that positively impacted over 30 active users by integrating Advanced machine learning techniques into practical applications.",
    ],
  },
  {
    title: "Smart India Hackathon",
    icon: sihIcon,
    iconBg: "#000000",
    date: "Nov 2023 - Dec 2023",
    points: [
      "Collaborated with a team to deliver results under tight deadlines, demonstrating strong communication and teamwork skills.",
      "Adapted quickly to changing requirements, iterating on solutions to achieve impactful outcomes efficiently.",
      "Leveraged advanced technologies to solve real-world challenges, showcasing critical thinking and creativity.",
      "Proactively stayed ahead of emerging technologies, deepening my technical expertise through hackathon participation.",
    ],
  },
  {
    title: "Freelancer",
    icon: freelancericon,
    iconBg: "#000000",
    points: [
      "Collaborated closely with clients to understand their needs, translating business requirements into efficient and user experience and visually appealing digital products",
      "Managed end-to-end project lifecycles, ensuring timely delivery, quality assurance, and client satisfaction through continuous feedback and iteration.",
      "Contributed to technical projects by creating clear and concise documentation and content to enhance project communication",
    ],
  },
  {
    title: "Kavach",
    icon: kavach,
    iconBg: "#000000",
    date: "Apr 2023- July 2023",
    points: [
      "Developed an innovative solution the KVH-013 tool, to remotely track police officers using NFC technology, ensuring real-time monitoring of ground personnel",
      "Utilized LoRa for geofencing, enabling long-range, low-power tracking with efficient data transmission for personnel and asset management.",
      "Delivered a cost-effective solution with long battery life and minimal hardware requirements, improving the monitoring process",
    ],
  },
  
  
  
  
  
  
  
  
 

];

const testimonials = [
  {
    testimonial:
      "I couldn’t imagine a website capturing the essence of our product so perfectly, but Amogh made it happen. The website not only looks great but also provides an intuitive, user-friendly experience that perfectly reflects our vision.",
    name: "ishu",
    designation: "FreeLancer",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Amogh consistently demonstrates his technical expertise in full-stack development, successfully integrating various technologies to solve complex problems. His ability to streamline processes and enhance efficiency makes him an asset to any project.",
    name: "Susheel",
    designation: "Software Engineer",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "His creativity and attention to user experience have made a significant impact on projects involving application development. His innovative approach to building user-friendly interfaces has led to increased user engagement and positive feedback",
    name: "Prabhakar Rao",
    designation: "Manager",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "FundPitch",
    description:
    "FundPitch is a collaborative platform that empowers early-stage startups to connect with investors, advisors, and service providers in real-time. It streamlines pitch sharing, secure document exchange, and interest-based expressions to accelerate funding and partnership opportunities",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Amazon SES",
        color: "pink-text-gradient",
      },
    ],
    image: fundPitch,
    source_code_link: "https://github.com/amogh-55/FundPitch",
  },
  {
    
    name: "Corescue",
    description:
    "A web application built to revolutionize disaster response and rescue coordination. It enables real-time tracking of rescue agencies, a seamless one-click emergency alert system, and efficient management between relief and collection centers. Designed to save lives , it’s a game-changer for handling crisis with precision and speed",
     tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Rest Api",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/amogh-55/Disaster-Managemet",
  },
  
   
  {
    name: "ChefNest Food App",
    description:
      "An innovative web application designed to make cooking effortless and enjoyable. ChefNest offers a vast collection of recipes, detailed step-by-step instructions, and innovative flavor combinations. With a user-friendly interface and intuitive guidance, it transforms everyday cooking into an exceptional culinary experience.",
    tags: [
      {
        name: "Node Js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      
    ],
    image: jobit,
    source_code_link: "https://github.com/amogh-55/internship",
  },
  
  
 
];

export { services, technologies, experiences, testimonials, projects };
