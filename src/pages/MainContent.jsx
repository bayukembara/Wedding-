import Hero from "@/pages/Hero";
import Home from "@/pages/Home";
import DetailGroom from "@/pages/DetailGroom";
import Events from "@/pages/Events";
import Location from "@/pages/Location";
import Wish from "@/pages/Wish";
import Gifts from "@/pages/Gifts";
import Quote from "@/pages/Quote";
import TimeLine from "@/pages/TimeLine";
// Main Invitation Content
export default function MainContent() {
  return (
    <>
      <Home />
      <Quote />
      <DetailGroom />
      <Events />
      <Location />
      <Gifts />
      <Wish />
    </>
  );
}
