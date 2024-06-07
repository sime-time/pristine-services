import AssuranceCard from "./AssuranceCard.jsx";
import { PiSprayBottleFill, PiSprayBottle } from "react-icons/pi";
import { BsClipboard2CheckFill } from "react-icons/bs";
import { RiShieldUserFill } from "react-icons/ri";
import { IoCalendar } from "react-icons/io5";

function Assurance() {
  const vettedProfessionals = {
    icon: <RiShieldUserFill />,
    title: "Vetted Professionals",
    content: <>Our applicants undergo a <a href="/about">comprehensive hiring process</a> to ensure we provide you with quality cleaners.</>,
  }
  const flexibleScheduling = {
    icon: <IoCalendar />,
    title: "Flexible Scheduling",
    content: <>We work with your schedule to make sure your space is clean on time, everytime. <a href="./booking">Book an appointment online</a>, or submit a <a href="./contact">contact form</a> for commercial spaces</>,
  }
  const qualityControl = {
    icon: <BsClipboard2CheckFill />,
    title: "Quality Control",
    content: <>All of our cleaners reference a <a href="./checklist">checklist</a> to ensure consistently spotless cleans. For commercial spaces, <a href="./contact">contact us directly</a> to customize your scope of work.</>,
  }
  const ecoFriendly = {
    icon: <PiSprayBottleFill />,
    title: "Eco-Friendly Products",
    content: "Our cleaners use enviornmentally friendly cleaning products so you can live in your space worry-free.",
  }
  return (
    <section id="assurances" className="container d-flex flex-column flex-md-row align-items-center gap-5 gap-md-1 my-5 py-5 bg-primary-subtle rounded-4 px-5">
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