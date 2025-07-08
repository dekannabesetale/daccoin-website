
export default function App() {
  return (
    <div className="min-h-screen p-10 bg-black text-white">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">
        QDAC: Quantum-Proof Digital Assetrium Chain
      </h1>
      <p className="text-lg mb-10 max-w-3xl">
        Redefining blockchain security with post-quantum protection, real-world assets,
        and mobile-native staking. Explore the DACVerse City, DAO governance, and decentralized finance.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "DACex CEX", desc: "Mirrored liquidity. Fast. Reliable." },
          { title: "DAC DEX", desc: "On-chain trading with full asset control." },
          { title: "Mobile Mining", desc: "Stake to mine DAC with your phone." }
        ].map(({ title, desc }) => (
          <div key={title} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-yellow-300 mb-2">{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
