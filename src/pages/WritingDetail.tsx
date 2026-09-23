import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { articles } from "../data/WritingData";
import ThreeDotsDivider from "../components/ThreeDotsDivider";
import NewsletterFooter from "../components/NewsletterFooter";

export default function WritingDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/writing" replace />;
  }

  // Other suggestions
  const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <main className="max-w-2xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] mb-8">
        <Link
          to="/writing"
          className="hover:text-[var(--text-primary)] inline-flex items-center gap-1 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Writing</span>
        </Link>
        <span>/</span>
        <span className="truncate max-w-[240px] text-[var(--text-secondary)]">
          {article.title}
        </span>
      </nav>

      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-[var(--text-primary)] mb-4 leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-4">
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
          <span>·</span>
          <div className="flex gap-1.5">
            {article.tags.map((t) => (
              <span key={t}>#{t}</span>
            ))}
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="space-y-6 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
        {article.content.map((para, index) => {
          if (index === 0) {
            return (
              <p key={index} className="drop-cap font-normal text-[var(--text-primary)]">
                {para}
              </p>
            );
          }
          return (
            <p key={index} className="font-normal text-[var(--text-secondary)]">
              {para}
            </p>
          );
        })}
      </article>

      {/* Three dots divider */}
      <ThreeDotsDivider />

      {/* Suggested Next Reads */}
      <div className="mt-8 mb-12">
        <h3 className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase mb-4">
          Read Next
        </h3>
        <div className="space-y-3">
          {otherArticles.map((nextArt) => (
            <Link
              key={nextArt.slug}
              to={`/writing/${nextArt.slug}`}
              className="group flex flex-col sm:flex-row sm:items-baseline justify-between p-3.5 -mx-3.5 rounded-xl hover:bg-[var(--bg-card)] border border-transparent hover:border-[var(--border-subtle)] transition-all"
            >
              <span className="font-semibold text-[var(--text-primary)] group-hover:underline underline-offset-4 decoration-1 decoration-[var(--text-muted)]">
                {nextArt.title}
              </span>
              <div className="flex items-center gap-2 mt-1 sm:mt-0 shrink-0">
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  {nextArt.date}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)]" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <NewsletterFooter />
    </main>
  );
}
