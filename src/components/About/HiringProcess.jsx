import { GrDocumentUser } from "react-icons/gr";
import { FaPhoneVolume } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { MdPersonSearch } from "react-icons/md";
import { FaBroom } from "react-icons/fa6";
import HiringStep from "./HiringStep.jsx";
import "../../styles/hiring.css";

function HiringProcess() {

  return (
    <>
      <div className="text-center">
        <h1 className="display-4 text-center">Our Hiring Process</h1>
        <p className="fs-4">Learn how we provide you with reliable, top-notch cleaners</p>
      </div>
      <div className="timeline container">
        <HiringStep icon={<GrDocumentUser />} title="Online Job Application" isLeft={true} content="The first step is to complete our online job form. If approved, the applicant will move on to phase 2." />

        <HiringStep icon={<FaPhoneVolume />} title="Phone Screening" isLeft={false} content="Next, our recruiter will conduct an in-depth phone interview with the candidate" />

        <HiringStep icon={<HiUsers />} title="In-Person Meeting" isLeft={true} content="Successful candidates will be invited for an in-person meeting to discuss the role and assess their fit for the team." />

        <HiringStep icon={<MdPersonSearch />} title="Background Check" isLeft={false} content="We will conduct a thorough background check to ensure all candidates meet our standards and requirements." />

        <HiringStep icon={<FaBroom />} title="Training" isLeft={true} content="Finally, new hires will undergo comprehensive training to prepare them for their responsibilities and ensure they are ready to deliver high-quality service." />
      </div>
    </>
  );
}

export default HiringProcess;