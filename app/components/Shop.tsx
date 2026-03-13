function HoodieMockup() {
  return (
    <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Body */}
      <path d="M75 120 L60 105 L30 115 L20 200 L100 210 L100 135 Z" fill="#1a1a1a" stroke="#DD183B" strokeWidth="1.5"/>
      <path d="M225 120 L240 105 L270 115 L280 200 L200 210 L200 135 Z" fill="#1a1a1a" stroke="#DD183B" strokeWidth="1.5"/>
      <path d="M100 130 L100 215 L200 215 L200 130 L185 115 L150 125 L115 115 Z" fill="#222" stroke="#DD183B" strokeWidth="1.5"/>
      {/* Hood */}
      <path d="M115 115 Q115 80 150 75 Q185 80 185 115" fill="#1a1a1a" stroke="#DD183B" strokeWidth="1.5"/>
      <ellipse cx="150" cy="112" rx="22" ry="18" fill="#111" stroke="#DD183B" strokeWidth="1"/>
      {/* Pocket */}
      <rect x="120" y="165" width="60" height="35" rx="4" fill="#1a1a1a" stroke="#DD183B" strokeWidth="1"/>
      {/* Logo text on chest */}
      <text x="150" y="150" textAnchor="middle" fill="#DD183B" fontSize="11" fontWeight="bold" fontFamily="sans-serif">SPADEZ</text>
      <text x="150" y="163" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">TABLE</text>
      {/* Cuff lines */}
      <line x1="20" y1="195" x2="45" y2="198" stroke="#DD183B" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="255" y1="195" x2="280" y2="198" stroke="#DD183B" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="100" y1="213" x2="200" y2="213" stroke="#DD183B" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function TshirtMockup() {
  return (
    <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Left sleeve */}
      <path d="M80 105 L30 125 L40 165 L100 145 Z" fill="#1a1a1a" stroke="#DD183B" strokeWidth="1.5"/>
      {/* Right sleeve */}
      <path d="M220 105 L270 125 L260 165 L200 145 Z" fill="#1a1a1a" stroke="#DD183B" strokeWidth="1.5"/>
      {/* Body */}
      <path d="M100 105 L80 105 L100 145 L100 220 L200 220 L200 145 L220 105 L200 105 L185 90 Q150 82 115 90 Z" fill="#222" stroke="#DD183B" strokeWidth="1.5"/>
      {/* Collar */}
      <path d="M115 90 Q150 110 185 90" fill="none" stroke="#DD183B" strokeWidth="1.5"/>
      {/* Chest graphic — spade icon */}
      <path d="M150 120 C150 120 132 135 132 148 C132 157 140 162 150 158 C160 162 168 157 168 148 C168 135 150 120 150 120Z" fill="#DD183B" opacity="0.9"/>
      <path d="M143 158 L140 170 L160 170 L157 158Z" fill="#DD183B" opacity="0.9"/>
      {/* Logo */}
      <text x="150" y="188" textAnchor="middle" fill="#DD183B" fontSize="10" fontWeight="bold" fontFamily="sans-serif">SPADEZTABLE</text>
      {/* Sleeve stripe */}
      <line x1="38" y1="148" x2="55" y2="152" stroke="#DD183B" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="245" y1="148" x2="262" y2="152" stroke="#DD183B" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function HatMockup() {
  return (
    <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Brim */}
      <ellipse cx="150" cy="195" rx="100" ry="14" fill="#111" stroke="#DD183B" strokeWidth="1.5"/>
      {/* Crown left panel */}
      <path d="M65 185 Q60 145 80 115 L150 108 L150 195 L65 195Z" fill="#1a1a1a" stroke="#DD183B" strokeWidth="1"/>
      {/* Crown right panel */}
      <path d="M235 185 Q240 145 220 115 L150 108 L150 195 L235 195Z" fill="#222" stroke="#DD183B" strokeWidth="1"/>
      {/* Crown top */}
      <ellipse cx="150" cy="110" rx="70" ry="12" fill="#1a1a1a" stroke="#DD183B" strokeWidth="1.5"/>
      {/* Button top */}
      <circle cx="150" cy="100" r="6" fill="#DD183B"/>
      {/* Sweatband */}
      <path d="M65 192 Q150 200 235 192" stroke="#DD183B" strokeWidth="1" strokeDasharray="4 2"/>
      {/* Front panel seam */}
      <line x1="150" y1="108" x2="150" y2="195" stroke="#DD183B" strokeWidth="0.75" strokeDasharray="3 2"/>
      {/* Logo patch */}
      <rect x="118" y="135" width="64" height="38" rx="4" fill="#DD183B" opacity="0.15" stroke="#DD183B" strokeWidth="1"/>
      <text x="150" y="152" textAnchor="middle" fill="#DD183B" fontSize="9" fontWeight="bold" fontFamily="sans-serif">SPADEZ</text>
      <text x="150" y="165" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">TABLE</text>
      {/* Brim underside detail */}
      <path d="M60 197 Q150 210 240 197" stroke="#DD183B" strokeWidth="0.75" opacity="0.4"/>
    </svg>
  );
}

const products = [
  {
    name: "SpadezTable Hoodie",
    category: "Hoodie",
    desc: "Premium heavyweight fleece. Represent the table wherever you go.",
    mockup: <HoodieMockup />,
  },
  {
    name: "Logo Tee",
    category: "T-Shirt",
    desc: "Crisp, clean, classic. The staple of the collection.",
    mockup: <TshirtMockup />,
  },
  {
    name: "Signature Cap",
    category: "Hat",
    desc: "Structured 6-panel with embroidered logo. Statement piece.",
    mockup: <HatMockup />,
  },
];

export default function Shop() {
  return (
    <section id="shop" className="relative py-28 bg-[#0d0d0d] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DD183B]/40 to-transparent" />

      {/* Background grid */}
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
            style={{ fontFamily: "var(--font-lexend), sans-serif" }}
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
              className="group relative bg-[#1a1a1a] border border-white/5 rounded-2xl overflow-hidden hover:border-[#DD183B]/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Product mockup area */}
              <div
                className="relative aspect-square flex items-center justify-center overflow-hidden p-8"
                style={{ background: "linear-gradient(135deg, #0d0008 0%, #151515 100%)" }}
              >
                {/* Subtle radial glow */}
                <div className="absolute inset-0" style={{ background: "radial-gradient(circle at center, rgba(221,24,59,0.08) 0%, transparent 70%)" }} />

                {/* SVG Mockup */}
                <div className="relative z-10 w-full h-full">
                  {product.mockup}
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
                  style={{ fontFamily: "var(--font-lexend), sans-serif" }}
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
            style={{ fontFamily: "var(--font-lexend), sans-serif" }}
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
