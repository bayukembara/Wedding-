import Hero from "@/pages/Hero";
import Home from "@/pages/Home";
import Events from "@/pages/Events";
import Location from "@/pages/Location";
import Wishes from "@/pages/Wishes";
import Gifts from "@/pages/Gifts";
import Quote from "@/pages/Quote";
import TimeLine from "@/pages/TimeLine";
// Main Invitation Content
export default function MainContent() {
  return (
    <>
      <Home />
      <Quote />
      <Hero />
      <Events />
      <Location />
      <TimeLine />
      <Gifts />
      <Wishes />
    </>
  );
}
