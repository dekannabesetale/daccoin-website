export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400">
          QDAC: Quantum-Proof Digital Assetrium Chain
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
          Redefining blockchain security with post-quantum protection, real-world assets,
          and mobile-native staking. Explore the DACVerse City, DAO governance, and decentralized finance.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold">Read Whitepaper</button>
          <button className="border border-yellow-400 px-4 py-2 rounded text-yellow-400">Join Presale</button>
        </div>
      </section>

      {/* Ecosystem Modules */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12 text-yellow-300">Ecosystem Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "DACex CEX", desc: "Mirrored liquidity. Fast. Reliable." },
            { title: "DAC DEX", desc: "On-chain trading with full asset control." },
            { title: "Mobile Mining", desc: "Stake to mine DAC with your phone." },
            { title: "DACVerse City", desc: "Smart crypto city powered by DAC." },
            { title: "DAO Governance", desc: "Protocol-level decentralized decision making." },
            { title: "Quantum Security", desc: "Future-proof cryptography & post-quantum safety." }
          ].map(({ title, desc }) => (
            <div key={title} className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-yellow-300 mb-2">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Ready to Join the Quantum Revolution?</h2>
        <p className="text-lg mb-6">Get involved with QDAC – whether you're an investor, developer, or pioneer.</p>
        <button className="bg-yellow-400 text-black text-lg px-6 py-2 rounded font-semibold">Start Now</button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-center py-8 text-sm text-gray-400">
        © {new Date().getFullYear()} DACCoin (QDAC). All rights reserved.
      </footer>
    </div>
  );
}
