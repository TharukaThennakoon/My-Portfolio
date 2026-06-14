const skills = [
  {
    title: "LANGUAGES",
    items: [
      { name: "Java",       icon: "java",       sub: "Spring · Maven" },
      { name: "Python",     icon: "python",     sub: "FastAPI · NumPy" },
      { name: "TypeScript", icon: "typescript", sub: "React · Next.js" },
      { name: "C / C++",    icon: "cplusplus",  sub: "Systems · DSA" },
      { name: "Go",         icon: "go",         sub: "CLI · gRPC" },
      { name: "SQL",        icon: "postgresql", sub: "Postgres · MySQL" },
    ],
  },
  {
    title: "FRAMEWORKS",
    items: [
      { name: "Spring Boot", icon: "spring",    sub: "REST · JPA" },
      { name: "React",       icon: "react",     sub: "Hooks · Zustand" },
      { name: "Next.js",     icon: "nextjs",    sub: "SSR · App Router" },
      { name: "FastAPI",     icon: "fastapi",   sub: "Async · Pydantic" },
      { name: "Node.js",     icon: "nodejs",    sub: "Express · WS" },
      { name: "Tailwind",    icon: "tailwind",  sub: "CSS · Animate" },
    ],
  },
  {
    title: "TOOLS & INFRA",
    items: [
      { name: "Git & CI",     icon: "git",        sub: "GitHub Actions" },
      { name: "Docker",       icon: "docker",     sub: "Compose · Hub" },
      { name: "AWS",          icon: "aws",        sub: "EC2 · S3 · λ" },
      { name: "PostgreSQL",   icon: "postgresql", sub: "Indexes · RLS" },
      { name: "Redis",        icon: "redis",      sub: "Cache · Pub/Sub" },
      { name: "Kubernetes",   icon: "kubernetes", sub: "Orchestration" },
    ],
  },
];

export const stats = [
  { label: "REPOS",        value: "47" },
  { label: "COMMITS / YR", value: "1,284" },
  { label: "PRS MERGED",   value: "112" },
  { label: "CUPS OF ☕",    value: "∞" },
];

export default skills;
