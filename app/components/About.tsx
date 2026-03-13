const stats = [
  { value: "100+", label: "Episodes" },
  { value: "10K+", label: "Subscribers" },
  { value: "2+", label: "Years Running" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-[#0d0d0d] overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{
          background:
            "radial-gradient(ellipse at right, #DD183B 0%, transparent 70%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DD183B]/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#DD183B]" />
            <span className="text-[#DD183B] text-xs font-semibold uppercase tracking-[0.3em]">
              About the Show
            </span>
          </div>

          <h2
            className="text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tighter text-white mb-6"
            style={{ fontFamily: "Lexend, sans-serif" }}
          >
            Pull Up a <span className="text-[#DD183B]">Chair.</span>
          </h2>

          <p className="text-white/60 text-lg leading-relaxed mb-6">
            SpadezTable is a bold, unapologetic media platform built for real conversations.
            No filter. No fluff. Just the raw, uncut dialogue that matters — from culture and
            community to faith and current events.
          </p>

          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Every episode, we bring guests to the table to talk about the topics that move us,
            challenge us, and define who we are. Because some conversations are too important
            to have anywhere else.
          </p>

          <a
            href="https://www.instagram.com/theofficialspadeztable"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#DD183B] font-semibold text-sm uppercase tracking-widest hover:gap-4 transition-all duration-200"
          >
            Follow @theofficialspadeztable
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Right: Stats + Visual */}
        <div className="space-y-6">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-6 text-center hover:border-[#DD183B]/30 transition-colors duration-300"
              >
                <div
                  className="text-4xl font-black text-[#DD183B] mb-1"
                  style={{ fontFamily: "Lexend, sans-serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Feature card */}
          <div
            className="relative rounded-2xl overflow-hidden p-8 border border-[#DD183B]/20"
            style={{
              background: "linear-gradient(135deg, #1a0008 0%, #0d0d0d 100%)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-20"
              style={{ background: "#DD183B" }}
            />
            <div className="relative">
              <div className="text-[#DD183B] mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <blockquote className="text-white text-xl font-bold leading-snug mb-4" style={{ fontFamily: "Lexend, sans-serif" }}>
                &ldquo;When GOD has plans, no man can put asunder.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-[#DD183B]" />
                <span className="text-white/40 text-sm uppercase tracking-widest">
                  @trac
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
