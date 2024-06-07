import HowItWorksCard from "./HowItWorksCard.jsx";
import { FaArrowRight } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { BsDoorOpen } from "react-icons/bs";
import { MdOutlineBeachAccess } from "react-icons/md";

function HowItWorks() {

  const firstStep = {
    icon: <IoCalendarOutline />,
    title: "Schedule us",
    content: <><a href="./booking">Book online</a>, or submit a <a href="./contact">contact form</a> for commercial spaces.</>
  }

  const secondStep = {
    icon: <BsDoorOpen />,
    title: "Let us in",
    content: <>Provide entry instructions and we'll execute our <a href="./checklist">cleaning checklist!</a></>,
  };
  const thirdStep = {
    icon: <MdOutlineBeachAccess />,
    title: "Rest and relax",
    content: <>Sit back and enjoy a clean space. Provide feedback by leaving a <a href="https://g.page/r/CTMgCs8XxIH3EB0/review">review</a></>
  };

  return (
    <section className="container d-flex flex-column align-items-center gap-5 my-5">
      <div className="text-center ">
        <h1 className="display-4" >How it works</h1>
        <h2 className="fw-normal">We'll clean your space at a time that works for you.</h2>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 w-75 w-md-100 ">
        <HowItWorksCard card={firstStep} />
        <div className="card-arrow text-secondary fs-3 mx-3"><FaArrowRight /></div>
        <HowItWorksCard card={secondStep} />
        <div className="card-arrow text-secondary fs-3 mx-3"><FaArrowRight /></div>
        <HowItWorksCard card={thirdStep} />
      </div>
      <a href="./cleantypes" className="btn btn-outline-primary btn-lg py-3 px-4 fs-5 border-2 fw-bold">Learn more about our services</a>
    </section>
  );
}

export default HowItWorks;