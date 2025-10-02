// src/components/bottom-bar/BottomBar.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Quote,
  FileUser,
  BellRing,
  CalendarHeart,
  MapPin,
  Loader2,
  Gift,
  MessageCircleHeart,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Beranda", href: "#home" },
  { icon: Quote, label: "Quote", href: "#quote" },
  { icon: FileUser, label: "Info", href: "#detail_groom" },
  { icon: BellRing, label: "Jadwal", href: "#schedule" },
  { icon: CalendarHeart, label: "Acara", href: "#event" },
  { icon: MapPin, label: "Lokasi", href: "#location" },
  { icon: Loader2, label: "Timeline", href: "#timeline" },
  { icon: Gift, label: "Hadiah", href: "#gifts" },
  { icon: MessageCircleHeart, label: "Harapan", href: "#wishes" },
];

/**
 * BottomBar is a React functional component that renders a fixed bottom navigation bar.
 *
 * This component uses Framer Motion to animate its entrance, providing smooth transitions
 * for opacity and vertical movement. It displays a navigational menu with items that change
 * appearance based on the active state. The component maps through a list of menu items, each
 * containing an icon and a label, and applies interactive animations such as hover and tap
 * effects. The active menu item is highlighted by updating text color and background styles.
 *
 * @component
 * @example
 * // Basic usage:
 * <BottomBar />
 *
 * @returns {JSX.Element} A JSX element containing the animated bottom navigation bar.
 */
const BottomBar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActive(sectionId);
        }
      });
    }, observerOptions);

    menuItems.forEach((item) => {
      const sectionId = item.href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      menuItems.forEach((item) => {
        const sectionId = item.href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed bottom-4 max-sm:left-[2%] max-sm:right-[2%] max-sm:w-[100%] transform -translate-x-1/2 z-50 w-[95%] max-w-[430px]"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="backdrop-blur-md bg-white/90 border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.07)] overflow-x-visible w-[96%] xl:w-[100%]">
        <nav className="flex items-center overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent px-4 py-2">
          <div className="flex justify-between items-center w-full gap-2">
            {menuItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition-all duration-200 min-w-[60px]",
                  "hover:bg-gray-50/80",
                  active === item.href.substring(1)
                    ? "text-primary bg-primary/5"
                    : "text-gray-600"
                )}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(item.href.substring(1))}
              >
                <item.icon
                  className={cn(
                    "h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] mb-0.5 transition-colors duration-200",
                    active === item.href.substring(1)
                      ? "stroke-[#884e0c]"
                      : "stroke-gray-600"
                  )}
                />
                <span
                  className={cn(
                    "text-[9px] sm:text-[10px] font-medium transition-all duration-200 line-clamp-1",
                    active === item.href.substring(1)
                      ? "scale-105 text-[#884e0c]"
                      : "scale-100"
                  )}
                >
                  {item.label}
                </span>
              </motion.a>
            ))}
          </div>
        </nav>
      </div>
    </motion.div>
  );
};

export default BottomBar;
