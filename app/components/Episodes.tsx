const featuredEpisodes = [
  {
    title: "@theamberrayne Joins the Table",
    description:
      "An in-depth conversation with @theamberrayne about Black women, identity, community, and navigating life at the intersection of faith and culture.",
    tag: "Culture & Identity",
    youtubeUrl: "https://www.youtube.com/@theofficialspadeztable",
  },
  {
    title: "Real Talk: Faith Over Fear",
    description:
      "A raw discussion about trusting the process, leaning into faith when life doesn't go as planned, and staying grounded through the grind.",
    tag: "Faith & Mindset",
    youtubeUrl: "https://www.youtube.com/@theofficialspadeztable",
  },
  {
    title: "What's on Your Pizza? Community Edition",
    description:
      "Lighter vibes, real laughs. The table opens up for community questions, debates, and the kind of talk that keeps you coming back every week.",
    tag: "Community",
    youtubeUrl: "https://www.youtube.com/@theofficialspadeztable",
  },
];

export default function Episodes() {
  return (
    <section id="episodes" className="relative py-28 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DD183B]/40 to-transparent" />

      {/* Background accent */}
      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-10"
        style={{
          background: "radial-gradient(ellipse at left bottom, #DD183B 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#DD183B]" />
              <span className="text-[#DD183B] text-xs font-semibold uppercase tracking-[0.3em]">
                Latest Episodes
              </span>
            </div>
            <h2
              className="text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tighter text-white"
              style={{ fontFamily: "Lexend, sans-serif" }}
            >
              Recent <span className="text-[#DD183B]">Drops.</span>
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@theofficialspadeztable"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 text-white/60 hover:text-white font-semibold text-sm uppercase tracking-widest border border-white/20 hover:border-white/40 px-6 py-3 rounded-full transition-all duration-200"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Episode cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {featuredEpisodes.map((ep, i) => (
            <a
              key={i}
              href={ep.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col bg-[#0d0d0d] border border-white/5 rounded-2xl overflow-hidden hover:border-[#DD183B]/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Thumbnail placeholder */}
              <div
                className="relative aspect-video bg-[#1a1a1a] flex items-center justify-center overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, #1a0008 0%, #1a1a1a 100%)`,
                }}
              >
                {/* Episode number */}
                <span
                  className="absolute top-4 left-4 text-[80px] font-black text-white/5 leading-none select-none"
                  style={{ fontFamily: "Lexend, sans-serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Play button */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#DD183B] flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Red glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "radial-gradient(circle at center, rgba(221,24,59,0.15) 0%, transparent 70%)" }} />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <span className="inline-block text-[#DD183B] text-xs font-semibold uppercase tracking-widest mb-3">
                  {ep.tag}
                </span>
                <h3
                  className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-[#DD183B] transition-colors duration-200"
                  style={{ fontFamily: "Lexend, sans-serif" }}
                >
                  {ep.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed flex-1">{ep.description}</p>

                <div className="flex items-center gap-2 mt-5 text-[#DD183B] text-sm font-semibold">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Watch on YouTube
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
