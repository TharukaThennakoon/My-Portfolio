import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import articles from "../data/articles";

const INITIAL_COUNT = 3;
const HUES = {
  purple: ["#c084fc", "#9333ea", "#6b21a8", "#22d3ee"],
  cyan:   ["#22d3ee", "#06b6d4", "#0891b2", "#a855f7"],
  violet: ["#a78bfa", "#7c3aed", "#5b21b6", "#34d399"],
  emerald:["#34d399", "#10b981", "#059669", "#a855f7"],
  rose:   ["#fb7185", "#f43f5e", "#e11d48", "#c084fc"],
  amber:  ["#fbbf24", "#f59e0b", "#d97706", "#22d3ee"],
};

export default function Writing() {
  const featured = articles.find((a) => a.featured) ?? articles[0];
  const rest = articles.filter((a) => a.id !== featured.id);
  const [visible, setVisible] = useState(INITIAL_COUNT);
  const shown = rest.slice(0, visible);
  const hasMore = visible < rest.length;

  return (
    <section id="writing" className="section-dark relative overflow-hidden">
      <div className="absolute inset-0 mesh-dark pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="section-badge">S04 — WRITING</span>
          <h2 className="section-title mt-8">
            Essays from a
            <br />
            <span className="italic text-purple-300">curious engineer.</span>
          </h2>
          <p className="mt-5 text-gray-500 text-sm">
            {articles.length} articles · systems, shipping, and things I wish I knew earlier
          </p>
        </div>

        <FeaturedArticle article={featured} />

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <AnimatePresence mode="popLayout">
            {shown.map((article, i) => (
              <motion.div
                key={article.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <ArticleCard article={article} compact />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisible((v) => v + 3)}
              className="text-[11px] tracking-[0.2em] border border-gray-700 text-gray-400 hover:text-purple-300 hover:border-purple-500/50 px-8 py-3 rounded-full transition-all duration-200 font-mono"
            >
              LOAD MORE ({rest.length - visible} remaining) →
            </button>
          </div>
        )}

        <div className="mt-10 text-center">
          <a href="/writing" className="text-[11px] tracking-widest text-gray-600 hover:text-purple-400 transition-colors font-mono">
            VIEW ALL ON BLOG →
          </a>
        </div>
      </div>
    </section>
  );
}

function FeaturedArticle({ article }) {
  return (
    <motion.a
      href={article.href}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col lg:flex-row gap-0 overflow-hidden rounded-2xl border border-gray-800/80 bg-[#0f0a18]/80 backdrop-blur-sm group hover:border-purple-800/60 transition-all duration-300 hover:shadow-[0_0_60px_rgba(168,85,247,0.08)]"
    >
      <ArticleThumb article={article} hue={article.hue} large />
      <div className="flex flex-col justify-center p-8 lg:p-12 flex-1">
        <ArticleMeta article={article} />
        <h3 className="font-serif text-2xl xl:text-3xl leading-snug mt-4 group-hover:text-purple-200 transition-colors">
          {article.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-gray-500 max-w-xl">{article.excerpt}</p>
        <span className="mt-6 text-[11px] tracking-widest text-purple-400 font-mono">READ ESSAY →</span>
      </div>
    </motion.a>
  );
}

function ArticleCard({ article, compact = false }) {
  return (
    <a
      href={article.href}
      className="flex flex-col h-full overflow-hidden rounded-2xl border border-gray-800/80 bg-[#0f0a18]/60 backdrop-blur-sm group hover:border-purple-800/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.06)]"
    >
      <ArticleThumb article={article} hue={article.hue} compact={compact} />
      <div className="p-6 flex flex-col flex-1">
        <ArticleMeta article={article} small />
        <h3 className="font-serif text-lg xl:text-xl leading-snug mt-3 group-hover:text-purple-200 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500 line-clamp-2 flex-1">{article.excerpt}</p>
        <span className="mt-4 text-[10px] tracking-widest text-purple-500/70 font-mono">READ →</span>
      </div>
    </a>
  );
}

function ArticleMeta({ article, small = false }) {
  return (
    <div className={`flex items-center gap-3 flex-wrap ${small ? "mb-0" : ""}`}>
      <span className="text-[10px] tracking-widest text-purple-400 font-mono border border-purple-500/30 px-2 py-0.5 rounded">
        {article.tag}
      </span>
      {(article.date || article.readTime) && (
        <span className={`tracking-widest text-gray-600 font-mono ${small ? "text-[9px]" : "text-[10px]"}`}>
          {[article.date, article.readTime].filter(Boolean).join(" · ")}
        </span>
      )}
    </div>
  );
}

function ArticleThumb({ article, hue, large = false, compact = false }) {
  const [a, b, c, d] = HUES[hue] || HUES.purple;
  const height = large ? "min-h-[260px] lg:min-h-[320px] lg:w-[44%]" : compact ? "h-44" : "h-52";

  if (article?.image) {
    return (
      <div className={`relative overflow-hidden flex-shrink-0 ${height}`}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden flex-shrink-0 ${height}`}
      style={{ background: `radial-gradient(ellipse at 40% 50%, ${b}33 0%, #0a0510 70%)` }}
    >
      <div className="absolute inset-0 opacity-25"
           style={{
             backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 18px, ${a}22 18px, ${a}22 19px),
                               repeating-linear-gradient(90deg, transparent, transparent 18px, ${d}15 18px, ${d}15 19px)`,
           }} />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: large ? 140 : 80,
          height: large ? 140 : 80,
          background: `radial-gradient(circle at 35% 30%, ${a} 0%, ${b} 45%, ${c} 85%)`,
          boxShadow: `0 0 50px 15px ${b}33`,
        }}
      />
    </div>
  );
}
