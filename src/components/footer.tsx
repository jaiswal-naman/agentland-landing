export function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-12 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <div
          className="text-lg font-bold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="text-[var(--brand-primary)]">&#9670;</span> AgentLand
        </div>

        <div className="flex items-center justify-center gap-6 text-sm text-[var(--text-tertiary)]">
          <a
            href="#how-it-works"
            className="hover:text-[var(--text-secondary)] transition-colors"
          >
            How It Works
          </a>
          <a
            href="#integrations"
            className="hover:text-[var(--text-secondary)] transition-colors"
          >
            Integrations
          </a>
          <a
            href="#faq"
            className="hover:text-[var(--text-secondary)] transition-colors"
          >
            FAQ
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 text-sm text-[var(--text-tertiary)]">
          <a href="#" className="hover:text-[var(--text-secondary)] transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-[var(--text-secondary)] transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-[var(--text-secondary)] transition-colors">
            GitHub
          </a>
        </div>

        <p className="text-xs text-[var(--text-tertiary)]">
          &copy; 2026 AgentLand. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
