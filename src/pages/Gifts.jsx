import config from "@/config/config";
import { motion } from "framer-motion";
import { Copy, Gift, CheckCircle, Wallet, Building2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function Gifts() {
  const [copiedAccount, setCopiedAccount] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Set animation to run once on component mount
  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const copyToClipboard = (text, bank) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(bank);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  return (
    <>
      <section id="gifts" className="min-h-screen relative overflow-hidden">
        <motion.div className="absolute inset-0 w-full h-full">
          <img
            src={config.data.background_base}
            alt="home"
            className="w-full h-full object-cover flex items-center justify-center"
          />
        </motion.div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block text-[#d1a575] text-2xl font-medium"
            >
              Hadiah Pernikahan
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-serif text-black"
            >
              Berikan Hadiah
            </motion.h2>

            {/* Decorative Divider */}
            <motion.div
              initial={{ scale: 0 }}
              animate={hasAnimated ? { scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-4 pt-4"
            >
              <div className="h-[1px] w-12 bg-[#d1a575]" />
              <Gift className="w-5 h-5 text-[#a85b08]" />
              <div className="h-[1px] w-12 bg-[#d1a575]" />
            </motion.div>

            {/* Message Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={hasAnimated ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-4 max-w-md mx-auto"
            >
              {/* Arabic InsyaAllah */}
              <p className="font-arabic text-xl text-[#d1a575]">إن شاء الله</p>

              {/* Main Message */}
              <p className="text-[#d1a575]/100 font-medium leading-relaxed">
                Insya Allah, Kehadiran anda adalah sesuatu yang kami tunggu,
                tapi jika ingin memberi hadiah kami menyediakan dompet digital.
              </p>

              {/* Arabic Dua */}
              <div className="space-y-2">
                <p className="font-arabic text-lg text-[#d1a575] font-medium">
                  جزاكم الله خيرا وبارك الله فيكم
                </p>
                <p className="text-[#d1a575] italic text-xl font-light">
                  Jazakumullahu khairan, Barakallah fiikum
                </p>
              </div>
            </motion.div>

            {/* Optional: Additional Decorative Element */}
            <motion.div
              initial={{ scale: 0 }}
              animate={hasAnimated ? { scale: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-3 pt-1"
            >
              <div className="h-px w-8 bg-rose-200/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-rose-300" />
              <div className="h-px w-8 bg-rose-200/50" />
            </motion.div>
          </motion.div>

          {/* Bank Accounts Grid */}
          <div className="max-w-2xl mx-auto grid gap-6">
            {config.data.banks.map((account, index) => (
              <motion.div
                key={account.accountNumber}
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * index + 0.7 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d1a575]/20 to-transparent  rounded-2xl transform transition-transform group-hover:scale-105 duration-300" />
                <div className="relative backdrop-blur-sm bg-orange-100/10 p-6 rounded-2xl border border-[#d1a575] shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-white p-2 shadow-sm">
                        <img
                          src={account.icon}
                          alt={account.bank}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#d1a575]">
                          {account.bank}
                        </h3>
                        <p className="text-sm text-black">
                          {account.accountName}
                        </p>
                      </div>
                    </div>
                    <Wallet className="w-5 h-5 text-[#f7a854]" />
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between bg-gray-50/80 px-4 py-3 rounded-lg">
                      <p className="font-mono text-gray-700">
                        {account.accountNumber}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          copyToClipboard(account.accountNumber, account.bank)
                        }
                        className="flex items-center space-x-1 text-[#f7a854] hover:text-[#ec8d28]"
                      >
                        {copiedAccount === account.bank ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                        <span className="text-sm">
                          {copiedAccount === account.bank ? "Copied!" : "Copy"}
                        </span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
