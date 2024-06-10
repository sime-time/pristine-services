import HowItWorksCard from "./HowItWorksCard.jsx";
import { HiBuildingStorefront } from "react-icons/hi2";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { PiBroomBold } from "react-icons/pi";


function HowItWorks() {

  const locallyOwned = {
    icon: <HiBuildingStorefront />,
    title: "Locally owned",
    content: <><a href="./booking">Book online</a>, or submit a <a href="./contact">contact form</a> for commercial spaces.</>
  }

  const secondStep = {
    icon: <FaRegFaceSmileBeam />,
    title: "Let us in",
    content: <>Provide entry instructions and we'll execute our <a href="./checklist">cleaning checklist!</a></>,
  };
  const thirdStep = {
    icon: <PiBroomBold />,
    title: "Rest and relax",
    content: <>Sit back and enjoy a clean space. Provide feedback by leaving a <a href="https://g.page/r/CTMgCs8XxIH3EB0/review">review.</a></>
  };

  return (
    <section className="container d-flex flex-column align-items-center gap-5 my-5">
      <div className="text-center ">
        <h1 className="display-4" >How it works</h1>
        <h2 className="fw-normal">We'll clean your space at a time that works for you.</h2>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 w-75 w-md-100 ">
        <HowItWorksCard card={firstStep} />
        <HowItWorksCard card={secondStep} />
        <HowItWorksCard card={thirdStep} />
      </div>
      <a href="./cleantypes" className="btn btn-outline-primary btn-lg py-3 px-4 fs-5 border-2 fw-bold">Learn more about our services</a>
    </section>
  );
}

export default HowItWorks;