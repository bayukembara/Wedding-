import { motion, AnimatePresence } from "framer-motion";
import config from "@/config/config";
import Marquee from "@/components/ui/marquee";
import {
  Clock,
  User,
  MessageCircle,
  Send,
  CheckCircle,
  XCircle,
  HelpCircle,
  Calendar,
  ChevronDown,
  Smile,
} from "lucide-react";
import { useEffect, useState } from "react";
import { formatEventDate } from "@/lib/formatEventDate";
import { db } from "@/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

export default function Wish() {
  // State untuk wishes list
  const [wishes, setWishes] = useState([]);

  // State untuk form data
  const [formData, setFormData] = useState({
    fullname: "",
    newWish: "",
    attend: "",
  });

  // State untuk UI
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Options untuk dropdown kehadiran
  const options = [
    { value: "attending", label: "Ya, saya akan hadir" },
    { value: "not-attending", label: "Tidak, saya tidak bisa hadir" },
    { value: "maybe", label: "Mungkin, saya akan konfirmasi nanti" },
  ];

  // Fetch wishes dari Firestore saat component mount
  useEffect(() => {
    const q = query(collection(db, "wishes"), orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setWishes(list);
      console.log("Wishes loaded:", list);
    });

    return () => unsubscribe();
  }, []); // Empty dependency array

  // Handler untuk perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handler untuk perubahan dropdown kehadiran
  const handleAttendanceChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      attend: value,
    }));
    setIsOpen(false);
  };

  // Function untuk reset form
  const resetForm = () => {
    setFormData({
      fullname: "",
      newWish: "",
      attend: "",
    });
  };

  // Handler untuk submit form
  const handleSubmitWish = async (e) => {
    e.preventDefault();

    // Validasi - pastikan semua field terisi
    if (
      !formData.fullname.trim() ||
      !formData.newWish.trim() ||
      !formData.attend
    ) {
      alert("Harap isi semua field!");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simpan ke Firestore
      await addDoc(collection(db, "wishes"), {
        name: formData.fullname.trim(),
        message: formData.newWish.trim(),
        attend: formData.attend,
        timestamp: new Date().toISOString(),
      });

      console.log("Wish added successfully!");
      alert("Doa berhasil dikirim! 🎉");

      // Reset form setelah berhasil
      resetForm();
    } catch (error) {
      console.error("Error adding document:", error);
      alert("Gagal mengirim doa. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function untuk icon kehadiran
  const getAttendanceIcon = (status) => {
    switch (status) {
      case "attending":
        return <CheckCircle className="w-4 h-4 text-emerald-500" />;
      case "not-attending":
        return <XCircle className="w-4 h-4 text-[#995028]" />;
      case "maybe":
        return <HelpCircle className="w-4 h-4 text-amber-500" />;
      default:
        return null;
    }
  };

  return (
    <>
      <section id="wishes" className="min-h-screen relative overflow-hidden">
        {/* Background Image */}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block font-thin text-[#d1a575]"
            >
              Kirimkan Doa dan Harapan Terbaik Anda
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-mono text-gray-800"
            >
              Pesan dan Doa
            </motion.h2>

            {/* Decorative Divider */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-4 pt-4"
            >
              <div className="h-[1px] w-12 bg-[#d1a575]/30" />
              <MessageCircle className="w-5 h-5 text-[#ffad55]" />
              <div className="h-[1px] w-12 bg-[#d1a575]/30" />
            </motion.div>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-6">
            {/* Wishes List */}
            {wishes.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <p>Belum ada ucapan. Jadilah yang pertama!</p>
              </div>
            ) : (
              <AnimatePresence>
                <Marquee
                  speed={20}
                  gradient={false}
                  className="[--duration:20s] py-2"
                >
                  {wishes.map((wish, index) => (
                    <motion.div
                      key={wish.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative w-[280px]"
                    >
                      {/* Background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-rose-100/50 to-pink-100/50 rounded-xl transform transition-transform group-hover:scale-[1.02] duration-300" />

                      {/* Card content */}
                      <div className="relative backdrop-blur-sm bg-white/80 p-4 rounded-xl border border-rose-100/50 shadow-md h-auto">
                        {/* Header */}
                        <div className="flex items-start space-x-3 mb-2">
                          {/* Avatar */}
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#995028] to-[#a04717] flex items-center justify-center text-white text-sm font-medium">
                              {wish.name[0].toUpperCase()}
                            </div>
                          </div>

                          {/* Name, Time, and Attendance */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <h4 className="font-medium text-gray-800 text-sm truncate">
                                {wish.name}
                              </h4>
                              {getAttendanceIcon(wish.attend)}
                            </div>
                            <div className="flex items-center space-x-1 text-gray-500 text-xs">
                              <Clock className="w-3 h-3" />
                              <time className="truncate">
                                {formatEventDate(wish.timestamp)}
                              </time>
                            </div>
                          </div>
                        </div>

                        {/* Message */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-2">
                          {wish.message}
                        </p>

                        {/* Time indicator for recent messages */}
                        {Date.now() - new Date(wish.timestamp).getTime() <
                          3600000 && (
                          <div className="absolute top-2 right-2">
                            <span className="px-2 py-1 rounded-full bg-rose-100 text-[#995028] text-xs font-medium">
                              New
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </Marquee>
              </AnimatePresence>
            )}

            {/* Form untuk Submit Wishes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <form onSubmit={handleSubmitWish} className="relative">
                <div className="backdrop-blur-sm bg-white/80 p-6 rounded-2xl border border-rose-100/50 shadow-lg">
                  <div className="space-y-4">
                    {/* Input Nama */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <User className="w-4 h-4" />
                        <span>Nama Lengkap</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Masukkan nama lengkap kamu..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-rose-100 focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 transition-all duration-200 text-gray-700 placeholder-gray-400"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Dropdown Kehadiran */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="space-y-2 relative"
                    >
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>Apakah kamu hadir?</span>
                      </div>

                      {/* Custom Select Button */}
                      <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-rose-100 focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 transition-all duration-200 text-left flex items-center justify-between"
                      >
                        <span
                          className={
                            formData.attend ? "text-gray-700" : "text-gray-400"
                          }
                        >
                          {formData.attend
                            ? options.find(
                                (opt) => opt.value === formData.attend
                              )?.label
                            : "Pilih kehadiran..."}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                            isOpen ? "transform rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Options */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute z-10 w-full mt-1 bg-white rounded-xl shadow-lg border border-rose-100 overflow-hidden"
                          >
                            {options.map((option) => (
                              <motion.button
                                key={option.value}
                                type="button"
                                onClick={() =>
                                  handleAttendanceChange(option.value)
                                }
                                whileHover={{
                                  backgroundColor: "rgb(255, 241, 242)",
                                }}
                                className={`w-full px-4 py-2.5 text-left transition-colors ${
                                  formData.attend === option.value
                                    ? "bg-rose-50 text-rose-600"
                                    : "text-gray-700 hover:bg-rose-50"
                                }`}
                              >
                                {option.label}
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Textarea Pesan */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <MessageCircle className="w-4 h-4" />
                        <span>Harapan kamu</span>
                      </div>
                      <textarea
                        placeholder="Kirimkan harapan dan doa untuk kedua mempelai..."
                        className="w-full h-32 p-4 rounded-xl bg-white/50 border border-rose-100 focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 resize-none transition-all duration-200 text-gray-700 placeholder-gray-400"
                        name="newWish"
                        value={formData.newWish}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Smile className="w-5 h-5" />
                      <span className="text-sm">Berikan Doa Anda</span>
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                      className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-white font-medium transition-all duration-200 ${
                        isSubmitting
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-[#d1a575] hover:bg-[#d48e42]"
                      }`}
                    >
                      <Send className="w-4 h-4" />
                      <span>
                        {isSubmitting ? "Sedang Mengirim..." : "Kirimkan Doa"}
                      </span>
                    </motion.button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
