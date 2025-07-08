export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen">
      {/* Header Navigation */}
      <header className="flex justify-between items-center px-6 py-4 bg-black border-b border-yellow-500 shadow-lg sticky top-0 z-50">
        <h1 className="text-2xl font-extrabold text-yellow-400">QDAC</h1>
        <nav className="space-x-6 text-sm md:text-base">
          <a href="https://scan.daccoin.one" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition">Explorer</a>
          <a href="https://dacex.one" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition">Exchange</a>
          <a href="#" className="text-white hover:text-yellow-400 transition">Whitepaper</a>
          <a href="#" className="text-white hover:text-yellow-400 transition">Roadmap</a>
        </nav>
      </header>

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

      {/* Quantum Proof Section */}
      <section className="py-24 px-6 bg-gray-950">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-300">🔐 Why QDAC is Quantum-Proof</h2>
        <div className="max-w-5xl mx-auto text-white/80 text-lg space-y-6">
          <p>
            Traditional blockchains like Ethereum and Bitcoin rely on cryptographic signatures (ECDSA) that are vulnerable to quantum attacks.
            With the rise of quantum computing, private keys could be exposed within seconds.
          </p>
          <p>
            QDAC is designed with post-quantum cryptography at its core — using hash-based signatures (XMSS, SPHINCS+), zk-proofs, and lattice-based schemes
            to ensure transactions remain secure even in a quantum era.
          </p>
          <p>
            Unlike retrofits or bolt-on upgrades to legacy chains, QDAC is quantum-secure from the ground up.
            This gives it a 10+ year technology edge.
          </p>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-24 px-6 bg-black border-t border-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-300">🧱 QDAC Architecture Overview</h2>
        <div className="max-w-5xl mx-auto space-y-10 text-white/80 text-lg">
          <div>
            <h3 className="text-2xl font-bold text-yellow-300 mb-2">1️⃣ Core Layer</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Post-Quantum Cryptography (e.g., XMSS, SPHINCS+)</li>
              <li>zkProof Integration (for private & verifiable transactions)</li>
              <li>Consensus Engine (Proof-of-Stake + Quantum Randomness)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-yellow-300 mb-2">2️⃣ Middleware Layer</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cross-chain Bridge (EVM ↔ QDAC ↔ Real World Chains)</li>
              <li>Asset Locking & Verification (RWA Backing Logic)</li>
              <li>Smart Contract Arbitration & Token Governance</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-yellow-300 mb-2">3️⃣ Application Layer</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>DEX & CEX built on QDAC liquidity protocol</li>
              <li>Mobile Staking & Mining App</li>
              <li>DACVerse Smart City, DAO tools, NFT Infra</li>
            </ul>
          </div>
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
      <footer className="bg-black text-center py-10 text-sm text-gray-400 border-t border-gray-800">
        <div className="mb-4">© {new Date().getFullYear()} DACCoin (QDAC). All rights reserved.</div>
        <div className="flex justify-center space-x-6 text-white">
          <a href="https://twitter.com/daccoinofficial" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">Twitter</a>
          <a href="https://t.me/daccoinofficial" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">Telegram</a>
          <a href="https://www.instagram.com/daccoinofficial" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">Instagram</a>
          <a href="mailto:support@daccoin.one" className="hover:text-yellow-400 transition">Email</a>
        </div>
      </footer>
    </div>
  );
}
