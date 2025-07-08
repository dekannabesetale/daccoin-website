
export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-32 px-6 bg-black bg-opacity-90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 blur-xl bg-gradient-to-r from-yellow-500 to-yellow-300 animate-pulse" />
        <h1 className="relative text-5xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-lg">
          QDAC: Quantum-Proof Digital Assetrium Chain
        </h1>
        <p className="relative text-xl md:text-2xl mt-6 max-w-3xl mx-auto text-white/80">
          Redefining blockchain security with post-quantum protection, real-world assets,
          and mobile-native staking. Explore the DACVerse City, DAO governance, and decentralized finance.
        </p>
        <div className="relative mt-8 flex justify-center gap-6">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            🚀 Read Whitepaper
          </button>
          <button className="border border-yellow-400 px-6 py-3 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
            💰 Join Presale
          </button>
        </div>
      </section>

      {/* Ecosystem Modules */}
      <section className="py-24 px-6">
        <h2 className="text-4xl font-semibold text-center mb-16 text-yellow-300">⚙️ Ecosystem Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "🚀 DACex CEX", desc: "Mirrored liquidity. Fast. Reliable." },
            { title: "🔄 DAC DEX", desc: "On-chain trading with full asset control." },
            { title: "📱 Mobile Mining", desc: "Stake to mine DAC with your phone." },
            { title: "🏙️ DACVerse City", desc: "Smart crypto city powered by DAC." },
            { title: "🗳️ DAO Governance", desc: "Protocol-level decentralized decision making." },
            { title: "🔐 Quantum Security", desc: "Future-proof cryptography & post-quantum safety." }
          ].map(({ title, desc }) => (
            <div key={title} className="bg-white/5 backdrop-blur-md text-white p-6 rounded-2xl shadow-lg border border-yellow-500 hover:scale-105 transition">
              <h3 className="text-xl font-bold text-yellow-300 mb-2">{title}</h3>
              <p className="text-sm text-white/80">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-gray-900 to-black border-t border-yellow-400">
        <h2 className="text-4xl font-bold text-yellow-400 mb-4">Ready to Join the Quantum Revolution?</h2>
        <p className="text-lg mb-8 text-white/80">Get involved with QDAC – whether you're an investor, developer, or pioneer.</p>
        <button className="bg-yellow-400 text-black text-lg px-8 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition">
          Start Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-center py-8 text-sm text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} DACCoin (QDAC). All rights reserved.
      </footer>
    </div>
  );
}
