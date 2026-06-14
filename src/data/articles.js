import digitalTwinImg from "../assets/digitaltwin.webp";
import apiStylesImg from "../assets/api.webp";
import semanticWebImg from "../assets/kr.png";
import biometricImg from "../assets/biometric.webp";

const articles = [
  {
    id: 1,
    tag: "SYSTEMS THINKING",
    title: "The Digital Twin: Your World, Mirrored in Real Time",
    excerpt:
      "Explore how digital twins create virtual replicas of real-world systems to monitor, simulate, and optimize performance using live data.",
    href: "#",
    featured: true,
    hue: "purple",
    image: digitalTwinImg,
  },
  {
    id: 2,
    tag: "ENGINEERING",
    title: "Different API Styles in Modern Software Engineering",
    excerpt:
      "A beginner-friendly overview of REST, GraphQL, gRPC, and other API styles used to build modern applications.",
    href: "#",
    hue: "cyan",
    image: apiStylesImg,
  },
  {
    id: 3,
    tag: "KNOWLEDGE",
    title: "7 Mind-Blowing Ways the Semantic Web Is Redefining Knowledge Representation",
    excerpt:
      "Discover how the Semantic Web enables smarter data connections, improved search, and more meaningful knowledge representation.",
    href: "#",
    hue: "violet",
    image: semanticWebImg,
  },
  {
    id: 4,
    tag: "MOBILE",
    title: "Biometric Authentication in Android",
    excerpt:
      "Learn how Android's biometric APIs provide secure and seamless user authentication using fingerprints and facial recognition.",
    href: "#",
    hue: "emerald",
    image: biometricImg,
  },
];

export default articles;
