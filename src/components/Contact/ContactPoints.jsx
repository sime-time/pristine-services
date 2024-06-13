import { FaPhoneAlt, FaEnvelope, FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function ContactPoints() {
  return (
    <div className="contact-points d-flex flex-column gap-3 w-100 fs-5 mb-5 align-items-center">
      <h3 className="display-6 text-center">Reach us directly</h3>
      <a href="tel:3175378111" className="d-flex gap-2 align-items-center" ><span className="fs-4"><FaPhoneAlt /></span>(317) 537-8111</a>
      <a href="mailto:sales@pristineclean-indy.com" className="d-flex gap-2 align-items-center"><span className="fs-4"><FaEnvelope /></span>sales@pristineclean-indy.com</a>
      <a href="https://www.instagram.com/pristinecleanindy/" className="d-flex gap-2 align-items-center"><span className="fs-2"><AiFillInstagram /></span>@pristinecleanindy</a>
    </div>
  );
}

export default ContactPoints;