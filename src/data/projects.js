const projects = [
  {
    id: 1,
    title: "Cipher — End-to-End Encrypted Messenger",
    role: "Lead Backend Developer · Team of 4",
    description:
      "A real-time chat application with forward secrecy. Implemented AES-256-GCM encryption with X3DH key agreement and Double Ratchet.",
    lesson:
      "Cryptography is 10% math, 90% never trusting your inputs. Side-channel timing attacks matter.",
    metrics: {
      latency: "< 80ms",
      tests: "94% cov",
      stars: "142",
    },
    tech: ["Java", "Spring Boot", "WebSocket", "PostgreSQL", "Docker"],
    links: {
      github: "#",
      live: "#",
      readme: "#",
    },
  },

  {
    id: 2,
    title: "EventBuddy — Smart Event Planning Platform",
    role: "Full Stack Developer",
    description:
      "Marketplace for event vendors with smart recommendations and booking system.",
    lesson:
      "UX matters more than features. Simplicity wins.",
    metrics: {
      latency: "< 120ms",
      tests: "88% cov",
      stars: "56",
    },
    tech: ["React", "Node.js", "MongoDB"],
    links: {
      github: "#",
      live: "#",
      readme: "#",
    },
  },

  {
    id: 3,
    title: "Fuel Queue Management System",
    role: "Backend Developer",
    description:
      "System to manage fuel queues and reduce waiting time using real-time updates.",
    lesson:
      "Real-world systems need reliability over complexity.",
    metrics: {
      latency: "< 150ms",
      tests: "80% cov",
      stars: "30",
    },
    tech: ["Spring Boot", "MySQL"],
    links: {
      github: "#",
      live: "#",
      readme: "#",
    },
  },
];

export default projects;