export function Footer() {
  return (
    <footer
      className="bg-white py-6 px-10 border-t"
      style={{ borderColor: "var(--border-subtle)" }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-lg font-bold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="text-[var(--navy)]">Agent</span>
          <span className="text-[var(--indigo)]">Land</span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-[var(--text-tertiary)]">
          &copy; 2026 AgentLand &middot; YC Startup School &apos;26
        </p>
      </div>
    </footer>
  );
}
