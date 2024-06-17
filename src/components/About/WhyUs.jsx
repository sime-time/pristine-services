import HowItWorksCard from "../Index/HowItWorksCard.jsx";
import { HiBuildingStorefront } from "react-icons/hi2";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { PiBroomBold } from "react-icons/pi";


function HowItWorks() {

  const locallyOwned = {
    icon: <HiBuildingStorefront />,
    title: "Locally owned and operated",
    content: "As a local business rooted in Fortville, Indiana, we are dedicated to providing exceptional care for both our customers and our community."
  }

  const happyStaff = {
    icon: <FaRegFaceSmileBeam />,
    title: "Happy staff, quality cleans",
    content: "We value and respect our staff. By ensuring all our employees earn a living wage, we guarantee exceptional work and satisfied customers"
  };
  const qualityService = {
    icon: <PiBroomBold />,
    title: "Quality service guaranteed",
    content: "We strive to provide the highest level of quality, service and value to each and every customer. If you are not satisfied, please inform us."
  };

  return (
    <div className="container d-flex flex-column align-items-center gap-5 py-5" id="why-us">
      <div className="text-center ">
        <h1 className="display-4" >Why Pristine Clean?</h1>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 w-75 w-md-100 ">
        <HowItWorksCard card={locallyOwned} />
        <HowItWorksCard card={happyStaff} />
        <HowItWorksCard card={qualityService} />
      </div>
    </div>
  );
}

export default HowItWorks;