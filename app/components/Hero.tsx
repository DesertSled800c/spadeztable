export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(221,24,59,0.18) 0%, transparent 70%)",
          }}
        />
        {/* Top gradient */}
        <div
          className="absolute top-0 left-0 right-0 h-32"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Decorative lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#DD183B]/30 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#DD183B]/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="h-px w-12 bg-[#DD183B]" />
          <span className="text-[#DD183B] text-xs font-semibold uppercase tracking-[0.3em]">
            Media Platform
          </span>
          <div className="h-px w-12 bg-[#DD183B]" />
        </div>

        {/* Main heading */}
        <h1
          className="text-6xl sm:text-8xl lg:text-[110px] font-black uppercase leading-none tracking-tighter mb-6"
          style={{ fontFamily: "var(--font-lexend), sans-serif" }}
        >
          <span className="block text-white">The Table</span>
          <span
            className="block"
            style={{
              background: "linear-gradient(135deg, #DD183B 0%, #ff4d6d 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Where Real Talk
          </span>
          <span className="block text-white">Lives.</span>
        </h1>

        {/* Quote */}
        <p className="text-white/50 text-sm sm:text-base font-medium uppercase tracking-[0.3em] mt-4 mb-10">
          &ldquo;When GOD has plans, no man can put asunder&rdquo;
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.youtube.com/@theofficialspadeztable"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[#DD183B] hover:bg-[#b01230] text-white font-bold px-8 py-4 rounded-full text-base uppercase tracking-wide transition-all duration-200 hover:scale-105"
            style={{ boxShadow: "0 0 30px rgba(221,24,59,0.4)" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Watch Episodes
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold px-8 py-4 rounded-full border border-white/20 hover:border-white/40 text-base uppercase tracking-wide transition-all duration-200"
          >
            Learn More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
