import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { articles } from "../data/WritingData";

export default function WritingSection() {
  const recentArticles = articles.slice(0, 4);

  return (
    <section className="mt-8 mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase">
          Writing
        </h2>
        <Link
          to="/writing"
          className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-0.5"
        >
          View all ({articles.length}) <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="space-y-3">
        {recentArticles.map((art) => (
          <Link
            key={art.slug}
            to={`/writing/${art.slug}`}
            className="group flex flex-col sm:flex-row sm:items-baseline justify-between p-3.5 -mx-3.5 rounded-xl hover:bg-[var(--bg-card)] border border-transparent hover:border-[var(--border-subtle)] transition-all"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-[var(--text-primary)] group-hover:underline underline-offset-4 decoration-1 decoration-[var(--text-muted)]">
                {art.title}
              </span>
            </div>

            <div className="flex items-center gap-2 mt-1 sm:mt-0 shrink-0">
              <span className="text-xs font-mono text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]">
                {art.date}
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
