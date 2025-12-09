import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import qrcodePix from '../assets/qrcode-pix.png';

const PixDonation = () => {
  const pixKey = "00020126580014BR.GOV.BCB.PIX01364a6f60cf-51d9-4d47-a26a-de91ee8ccdf55204000053039865802BR5901N6001C62070503***6304A262";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="flex flex-col items-center space-y-6 pt-8">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-xl font-semibold text-zinc-300 flex items-center gap-2"
      >
        <span className="text-2xl">☕</span> Buy me a coffee
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
        className="relative p-[3px] rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-2xl"
      >
        <div className="bg-white p-4 rounded-xl">
          <img 
            src={qrcodePix}
            alt="Pix QR Code"
            className="w-48 h-48"
          />
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        onClick={handleCopy}
        className="flex items-center gap-2 px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-full transition-all active:scale-95 border border-zinc-700"
      >
        {copied ? (
          <>
            <Check size={18} className="text-green-400" />
            <span className="text-green-400">Copied!</span>
          </>
        ) : (
          <>
            <Copy size={18} />
            <span>Copy Pix Code</span>
          </>
        )}
      </motion.button>
    </section>
  );
};

export default PixDonation;
