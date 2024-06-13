import BookingCTA from "./Booking/BookingCTA.jsx";
import { FaCheck } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { LuLeaf } from "react-icons/lu";
import { LuInfo } from "react-icons/lu";

function Hero() {
  return (
    <div className="container d-flex gap-4 flex-column">

      <h1 className="fw-bold display-2 my-4">Save Time.<br />Reset Your Space.</h1>

      <div className="d-none d-md-block w-25 text-nowrap">
        <a href="/cleantypes" className="link-dark opacity-50 d-flex gap-1"><span><LuInfo /></span>Discover which clean type is right for you </a>
      </div>

      <BookingCTA />

      <div className="d-none mt-4 d-md-flex flex-row justify-content-between fw-bold opacity-75">
        <a href="./about" className="d-flex gap-1 link-secondary"><span><FaShieldAlt /></span>Cleaners qualified by our hiring process</a>
        <a href="./checklist" className="d-flex gap-1 link-secondary"><span><FaCheck /></span>Comprehensive cleaning checklist</a>
        <a href="#assurances" className="d-flex gap-1 link-secondary"><span><LuLeaf /></span>Use eco-friendly products</a>
      </div>

    </div>
  );
}

export default Hero;