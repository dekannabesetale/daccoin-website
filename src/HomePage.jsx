
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-yellow-400"
        >
          QDAC: Quantum-Proof Digital Assetrium Chain
        </motion.h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
          Redefining blockchain security with post-quantum protection, real-world assets,
          and mobile-native staking. Explore the DACVerse City, DAO governance, and decentralized finance.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button className="bg-yellow-400 text-black">Read Whitepaper</Button>
          <Button variant="outline">Join Presale</Button>
        </div>
      </section>

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
            <Card key={title} className="bg-gray-800 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-yellow-300 mb-2">{title}</h3>
                <p>{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Ready to Join the Quantum Revolution?</h2>
        <p className="text-lg mb-6">Get involved with QDAC – whether you're an investor, developer, or pioneer.</p>
        <Button className="bg-yellow-400 text-black text-lg px-6 py-2">Start Now</Button>
      </section>

      <footer className="bg-gray-950 text-center py-8 text-sm text-gray-400">
        © {new Date().getFullYear()} DACCoin (QDAC). All rights reserved.
      </footer>
    </div>
  );
}
