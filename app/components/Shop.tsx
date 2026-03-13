const products = [
  {
    name: "SpadezTable Hoodie",
    category: "Hoodie",
    desc: "Premium heavyweight fleece. Represent the table wherever you go.",
  },
  {
    name: "Logo Tee",
    category: "T-Shirt",
    desc: "Crisp, clean, classic. The staple of the collection.",
  },
  {
    name: "Signature Cap",
    category: "Hat",
    desc: "Structured 6-panel with embroidered logo. Statement piece.",
  },
];

export default function Shop() {
  return (
    <section id="shop" className="relative py-28 bg-[#0d0d0d] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DD183B]/40 to-transparent" />

      {/* Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(221,24,59,0.3) 40px, rgba(221,24,59,0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(221,24,59,0.3) 40px, rgba(221,24,59,0.3) 41px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#DD183B]" />
            <span className="text-[#DD183B] text-xs font-semibold uppercase tracking-[0.3em]">
              Merch Store
            </span>
            <div className="h-px w-8 bg-[#DD183B]" />
          </div>
          <h2
            className="text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tighter text-white mb-4"
            style={{ fontFamily: "Lexend, sans-serif" }}
          >
            Wear the <span className="text-[#DD183B]">Table.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Official SpadezTable merch is on the way. Hoodies, tees, hats — drop your email to be the first to know.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {products.map((product, i) => (
            <div
              key={i}
              className="group relative bg-[#1a1a1a] border border-white/5 rounded-2xl overflow-hidden hover:border-[#DD183B]/30 transition-all duration-300"
            >
              {/* Product image area */}
              <div
                className="relative aspect-square flex items-center justify-center overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1a0008 0%, #111 100%)" }}
              >
                {/* Coming soon overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-white/5 text-8xl font-black uppercase rotate-[-20deg]"
                    style={{ fontFamily: "Lexend, sans-serif" }}
                  >
                    TST
                  </span>
                </div>

                {/* Icon */}
                <div className="relative z-10 w-24 h-24 rounded-full border-2 border-[#DD183B]/30 flex items-center justify-center">
                  {i === 0 && (
                    <svg className="w-10 h-10 text-[#DD183B]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h10m-5-5v5m-7 3c0 5 3 8 7 9 4-1 7-4 7-9" />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg className="w-10 h-10 text-[#DD183B]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                    </svg>
                  )}
                  {i === 2 && (
                    <svg className="w-10 h-10 text-[#DD183B]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3h14a2 2 0 010 4H5a2 2 0 010-4zm2 4v14M7 7l-2 14m12-14l2 14M9 21h6" />
                    </svg>
                  )}
                </div>

                {/* Coming soon badge */}
                <div className="absolute top-4 right-4 bg-[#DD183B] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Coming Soon
                </div>
              </div>

              <div className="p-6">
                <div className="text-[#DD183B] text-xs font-semibold uppercase tracking-widest mb-2">
                  {product.category}
                </div>
                <h3
                  className="text-white font-bold text-lg mb-2"
                  style={{ fontFamily: "Lexend, sans-serif" }}
                >
                  {product.name}
                </h3>
                <p className="text-white/50 text-sm">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Email CTA */}
        <div
          className="max-w-2xl mx-auto rounded-2xl border border-[#DD183B]/20 p-8 text-center"
          style={{ background: "linear-gradient(135deg, #1a0008 0%, #0d0d0d 100%)" }}
        >
          <h3
            className="text-white text-2xl font-bold mb-2"
            style={{ fontFamily: "Lexend, sans-serif" }}
          >
            Be First. Get Notified.
          </h3>
          <p className="text-white/50 text-sm mb-6">
            Drop your email below and we&rsquo;ll let you know the moment the shop goes live.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#DD183B]/50 transition-colors"
            />
            <button
              type="button"
              className="bg-[#DD183B] hover:bg-[#b01230] text-white font-bold px-6 py-3 rounded-full text-sm uppercase tracking-wide transition-colors duration-200"
            >
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
