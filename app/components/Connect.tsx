const socials = [
  {
    name: "YouTube",
    handle: "@theofficialspadeztable",
    description: "Full episodes, clips, and behind-the-scenes.",
    url: "https://www.youtube.com/@theofficialspadeztable",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    color: "#FF0000",
  },
  {
    name: "Instagram",
    handle: "@theofficialspadeztable",
    description: "Updates, stories, community highlights.",
    url: "https://www.instagram.com/theofficialspadeztable",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
    color: "#E1306C",
  },
  {
    name: "Email",
    handle: "contact@dafemedia.com",
    description: "Sponsorships, press, and business inquiries.",
    url: "mailto:contact@dafemedia.com",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "#DD183B",
  },
];

export default function Connect() {
  return (
    <section id="connect" className="relative py-28 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DD183B]/40 to-transparent" />

      {/* Background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #DD183B 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#DD183B]" />
            <span className="text-[#DD183B] text-xs font-semibold uppercase tracking-[0.3em]">
              Find Us
            </span>
            <div className="h-px w-8 bg-[#DD183B]" />
          </div>
          <h2
            className="text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tighter text-white"
            style={{ fontFamily: "var(--font-lexend), sans-serif" }}
          >
            Join the <span className="text-[#DD183B]">Community.</span>
          </h2>
        </div>

        {/* Social cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target={social.url.startsWith("mailto") ? undefined : "_blank"}
              rel={social.url.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group relative bg-[#0d0d0d] border border-white/5 rounded-2xl p-8 hover:border-[#DD183B]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-200"
                style={{ background: `${social.color}20`, color: social.color }}
              >
                {social.icon}
              </div>

              <div>
                <div className="text-white font-bold text-lg mb-1" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>
                  {social.name}
                </div>
                <div className="text-[#DD183B] text-sm font-medium mb-2">{social.handle}</div>
                <p className="text-white/50 text-sm">{social.description}</p>
              </div>

              <div className="flex items-center gap-2 text-white/40 group-hover:text-white/70 text-sm font-medium transition-colors duration-200 mt-auto">
                {social.url.startsWith("mailto") ? "Get in touch" : `Follow on ${social.name}`}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
