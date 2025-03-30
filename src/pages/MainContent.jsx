import Hero from "@/pages/Hero";
import Events from "@/pages/Events";
import Location from "@/pages/Location";
import Wishes from "@/pages/Wishes";
import Gifts from "@/pages/Gifts";
import Home from "@/pages/Home";

// Main Invitation Content
export default function MainContent() {
  return (
    <>
      <Home />
      <Hero />
      <Events />
      <Location />
      <Gifts />
      <Wishes />
    </>
  );
}
