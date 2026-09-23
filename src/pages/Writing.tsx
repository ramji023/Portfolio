import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Search } from "lucide-react";
import { articles } from "../data/WritingData";
import ThreeDotsDivider from "../components/ThreeDotsDivider";
import NewsletterFooter from "../components/NewsletterFooter";

export default function Writing() {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const allTags = ["All", ...Array.from(new Set(articles.flatMap((a) => a.tags)))];

  const filteredArticles = articles.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(search.toLowerCase()) ||
      art.summary.toLowerCase().includes(search.toLowerCase());
    const matchesTag = selectedTag === "All" || art.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <main className="max-w-2xl mx-auto">
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
          Writing
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
          Essays and technical notes on product design, real-time distributed architecture, AI workflows, and software craftsmanship.
        </p>
      </div>

      {/* Search & Tag Filter */}
      <div className="space-y-3 mb-8">
        <div className="relative">
          <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-hidden focus:border-[var(--text-primary)] transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-1.5">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`text-xs font-mono px-3 py-1 rounded-md border transition-colors cursor-pointer ${
                selectedTag === tag
                  ? "bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)]"
                  : "bg-[var(--bg-card)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Articles List */}
      <div className="space-y-4">
        {filteredArticles.length === 0 ? (
          <p className="text-sm text-[var(--text-muted)] py-6 text-center font-mono">
            No articles found matching "{search}".
          </p>
        ) : (
          filteredArticles.map((art) => (
            <Link
              key={art.slug}
              to={`/writing/${art.slug}`}
              className="group block p-4 -mx-4 rounded-2xl hover:bg-[var(--bg-card)] border border-transparent hover:border-[var(--border-subtle)] transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                <h2 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] group-hover:underline underline-offset-4 decoration-1 decoration-[var(--text-muted)]">
                  {art.title}
                </h2>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    {art.date}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>

              <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-2 leading-relaxed">
                {art.summary}
              </p>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  {art.readTime}
                </span>
                <span className="text-xs text-[var(--text-muted)]">·</span>
                <div className="flex gap-1.5">
                  {art.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono text-[var(--text-muted)] bg-[var(--bg-secondary)] px-2 py-0.5 rounded"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      <ThreeDotsDivider />
      <NewsletterFooter />
    </main>
  );
}
