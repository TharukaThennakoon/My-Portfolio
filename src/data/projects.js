import codeflowImg from "../assets/project/codeflow.png";
import waygoImg from "../assets/project/waygo.png";
import myturnImg from "../assets/project/myturn.png";
import bugreviewImg from "../assets/project/bugreview.png";
import quickcertImg from "../assets/project/QuicCert.jpeg";
import filesharingImg from "../assets/project/filesharing.png";
import voxifyImg from "../assets/project/voxify.png";

const projects = [
  {
    id: 1,
    title: "CodeFlow",
    role: "Real-Time Developer Collaboration Platform",
    category: "MAIN PROJECT",
    description:
      "CodeFlow is a collaborative platform that enables developers to communicate, share code snippets, and perform code reviews in real time. The application combines instant messaging with developer-focused collaboration features, creating an experience similar to a combination of GitHub and modern chat applications.",
    tech: [
      "Flutter",
      "ASP.NET Core",
      "SignalR",
      "Entity Framework Core",
      "SQL Server",
      "JWT Authentication",
      "REST API",
    ],
    image: codeflowImg,
    links: {},
  },
  {
    id: 2,
    title: "WayGo",
    role: "Real-Time Bus Tracking Platform",
    category: "TRANSPORTATION",
    description:
      "WayGo is a GPS-powered transportation platform that provides passengers with real-time bus tracking, route information, and estimated arrival times. The system also includes administrative tools for managing buses, drivers, and routes, improving the efficiency and reliability of public transportation.",
    tech: [
      "Flutter",
      "Dart",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST API",
      "Google Maps API",
      "GPS Services",
      "MongoDB Atlas",
    ],
    image: waygoImg,
    links: {},
  },
  {
    id: 3,
    title: "MyTurn",
    role: "Smart Fuel Queue Management Platform",
    category: "PLATFORM",
    description:
      "MyTurn is a digital fuel queue management system that enables users to locate fuel stations, check real-time fuel availability, and join queues remotely. The platform streamlines fuel distribution through secure authentication, role-based access control, and live queue updates, helping reduce congestion and waiting times.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "React.js",
      "REST API",
      "Postman",
      "Git",
      "GitHub",
    ],
    image: myturnImg,
    links: {},
  },
  {
    id: 4,
    title: "AI-Powered Code Review & Bug Prediction System",
    role: "AI-Based Software Quality Analysis Platform",
    category: "AI / DEVTOOLS",
    description:
      "An intelligent code review platform that analyzes source code, predicts potential bugs, identifies code quality issues, and provides actionable recommendations to improve software reliability and maintainability.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Machine Learning",
      "AI Models",
      "REST API",
    ],
    image: bugreviewImg,
    links: {},
  },
  {
    id: 5,
    title: "QuickCert",
    role: "Online Income Statement Requesting System",
    category: "GOVERNMENT",
    description:
      "QuickCert is a web-based platform designed to digitize the process of requesting and issuing official income statements. The system enables citizens to submit requests online while allowing government officers to manage applications efficiently, reducing paperwork and improving service accessibility.",
    tech: [
      "Angular",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize ORM",
      "JWT",
      "AWS",
    ],
    image: quickcertImg,
    links: {},
  },
  {
    id: 6,
    title: "P2P File Sharing System",
    role: "Distributed File Sharing Application",
    category: "DISTRIBUTED SYSTEMS",
    description:
      "A peer-to-peer file sharing system that allows users to transfer files directly without relying on a centralized server. The project demonstrates concepts of distributed systems, socket programming, peer discovery, and real-time communication.",
    tech: ["React.js", "Java", "Socket Programming"],
    image: filesharingImg,
    links: {},
  },
  {
    id: 7,
    title: "Voxify",
    role: "Text-to-Speech and Translation Web Application",
    category: "WEB APP",
    description:
      "Voxify is a lightweight web application that converts text into speech and translates content into multiple languages. The application provides a simple and accessible multilingual experience using browser-based speech capabilities.",
    tech: ["HTML", "CSS", "JavaScript", "Web Speech API", "Translation API"],
    image: voxifyImg,
    links: {},
  },
];

export default projects;
