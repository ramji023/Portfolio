import { useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { favorites } from "../data/FavoritesData";
import ThreeDotsDivider from "../components/ThreeDotsDivider";
import NewsletterFooter from "../components/NewsletterFooter";

export default function Favorites() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Apps",
    "Dev Tools",
    "Design",
    "AI & Craft",
    "Reading",
  ];

  const filteredItems = favorites.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.domain.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="max-w-2xl mx-auto">
      {/* Title Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
          Favorites
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
          A living directory of tools, libraries, design systems, apps, and reading materials that have shaped my craft.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="space-y-3 mb-8">
        <div className="relative">
          <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search links, tools, and reading..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-hidden focus:border-[var(--text-primary)] transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-mono px-3 py-1 rounded-md border transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)]"
                  : "bg-[var(--bg-card)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:text-[var(--text-primary)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Favorites List */}
      <div className="space-y-3">
        {filteredItems.length === 0 ? (
          <p className="text-sm text-[var(--text-muted)] py-6 text-center font-mono">
            No bookmarks found matching "{search}".
          </p>
        ) : (
          filteredItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col sm:flex-row sm:items-baseline justify-between p-3.5 -mx-3.5 rounded-xl hover:bg-[var(--bg-card)] border border-transparent hover:border-[var(--border-subtle)] transition-all"
            >
              <div className="space-y-1">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="font-semibold text-[var(--text-primary)] group-hover:underline underline-offset-4 decoration-1 decoration-[var(--text-muted)]">
                    {item.title}
                  </span>
                  {item.badge && (
                    <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-muted)]">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-2 mt-2 sm:mt-0 shrink-0">
                <span className="text-xs font-mono text-[var(--text-muted)] group-hover:text-[var(--text-primary)]">
                  {item.domain}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </a>
          ))
        )}
      </div>

      <ThreeDotsDivider />
      <NewsletterFooter />
    </main>
  );
}
