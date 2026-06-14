import { TbDatabase } from "react-icons/tb";

const ICONS = {
  java:       { slug: "openjdk",       color: "f89820" },
  python:     { slug: "python",        color: "3776ab" },
  typescript: { slug: "typescript",    color: "3178c6" },
  cplusplus:  { slug: "cplusplus",     color: "00599c" },
  go:         { slug: "go",            color: "00add8" },
  postgresql: { slug: "postgresql",    color: "4169e1" },
  spring:     { slug: "spring",        color: "6db33f" },
  react:      { slug: "react",         color: "61dafb" },
  nextjs:     { slug: "nextdotjs",     color: "ffffff" },
  fastapi:    { slug: "fastapi",       color: "009688" },
  nodejs:     { slug: "nodedotjs",     color: "339933" },
  tailwind:   { slug: "tailwindcss",   color: "06b6d4" },
  git:        { slug: "git",           color: "f05032" },
  docker:     { slug: "docker",        color: "2496ed" },
  aws:        { slug: "amazonaws",     color: "ff9900" },
  redis:      { slug: "redis",         color: "dc382d" },
  kubernetes: { slug: "kubernetes",    color: "326ce5" },
};

export default function TechIcon({ icon, size = 20, className = "" }) {
  const entry = ICONS[icon];
  const box = size + 12;

  if (!entry) {
    return (
      <span
        className={`inline-flex items-center justify-center rounded-lg bg-gray-100 ${className}`}
        style={{ width: box, height: box }}
      >
        <TbDatabase size={size} className="text-gray-400" />
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-black/5 ${className}`}
      style={{ width: box, height: box }}
    >
      <img
        src={`https://cdn.simpleicons.org/${entry.slug}/${entry.color}`}
        alt=""
        width={size}
        height={size}
        className="object-contain"
        loading="lazy"
      />
    </span>
  );
}
