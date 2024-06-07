import AssuranceCard from "./AssuranceCard.jsx";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa6";
import { PiSprayBottleFill, PiSprayBottle } from "react-icons/pi";
import { LuCalendarClock } from "react-icons/lu";
import { ImProfile } from "react-icons/im";
import { BsClipboard2Check, BsClipboard2CheckFill } from "react-icons/bs";
import { FiUserCheck } from "react-icons/fi";
import { RiShieldUserFill } from "react-icons/ri";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { IoCalendar } from "react-icons/io5";

function Assurance() {
  const vettedProfessionals = {
    icon: <RiShieldUserFill />,
    title: "Vetted Professionals",
    content: "some",
  }
  const flexibleScheduling = {
    icon: <IoCalendar />,
    title: "Flexible Scheduling",
    content: "something",
  }
  const qualityControl = {
    icon: <BsClipboard2CheckFill />,
    title: "Quality Control",
    content: "something",
  }
  const ecoFriendly = {
    icon: <PiSprayBottleFill />,
    title: "Eco-Friendly Products",
    content: "something",
  }
  return (
    <section id="assurances" className="container d-flex flex-column flex-md-row align-items-center gap-5 gap-md-3 my-5 py-5 bg-primary-subtle rounded-4 px-5">
      <div className="text-center text-md-start">
        <h1 className="display-4">The Pristine Difference</h1>
        <h2 className="fw-normal">Discover why home and business owners love and trust Pristine Services.</h2>
        <a href="./booking" className="btn btn-primary btn-lg py-3 px-4 mt-4 fs-5 fw-bold">Book Now</a>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <AssuranceCard card={vettedProfessionals} />
        </div>
        <div className="col">
          <AssuranceCard card={ecoFriendly} />
        </div>
        <div className="col">
          <AssuranceCard card={qualityControl} />
        </div>
        <div className="col">
          <AssuranceCard card={flexibleScheduling} />
        </div>
      </div>
    </section>
  );
}
export default Assurance;