import Select from 'react-select';
import { FaCheck } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { LuLeaf } from "react-icons/lu";
import { LuInfo } from "react-icons/lu";

function FormCTA() {

  const bathrooms = [
    { value: "1-bathroom", label: "1 bathroom" },
    { value: "2-bathroom", label: "2 bathroom" },
    { value: "3-bathroom", label: "3 bathroom" },
    { value: "4-bathroom", label: "4 bathroom" },
    { value: "5-bathroom", label: "5 bathroom" },
  ];

  const bedrooms = [
    { value: "studio", label: "Studio" },
    { value: "1-bedroom", label: "1 bedroom" },
    { value: "2-bedroom", label: "2 bedroom" },
    { value: "3-bedroom", label: "3 bedroom" },
    { value: "4-bedroom", label: "4 bedroom" },
    { value: "5-bedroom", label: "5 bedroom" },
  ];

  const cleantypes = [
    { value: "standard", label: "Standard Clean" },
    { value: "deep", label: '"The Works" Deep Clean' },
    { value: "move-in-out", label: "Move In / Out Clean" },
    { value: "airbnb-turnover", label: "Airbnb Turnover" },
    { value: "airbnb-deep", label: "Airbnb Deluxe Deep Clean" },
  ];

  const styles = {
    control: (state) => 'rounded-0 py-2 border-2'
  }

  return (
    <div className="container d-flex gap-4 flex-column">
      <h1 className="fw-bold display-2 my-4">Save Time.<br />Reset Your Space.</h1>
      <div className="d-none d-md-block">
        <a href="/cleantypes" className="link-dark opacity-50 d-flex gap-1"><span><LuInfo /></span>Discover which clean type is right for you </a>
      </div>
      <div className="d-flex justify-content-start align-items-center flex-wrap z-3">
        <div className="shadow flex-fill w-25 d-none d-md-block"><Select options={cleantypes} defaultValue={cleantypes[0]} classNames={styles} /></div>
        <div className="shadow flex-fill w-25"><Select options={bedrooms} defaultValue={bedrooms[0]} classNames={styles} /></div>
        <div className="shadow flex-fill w-25"><Select options={bathrooms} defaultValue={bathrooms[0]} classNames={styles} /></div>
        <a href="/booking" className="shadow btn btn-primary btn-lg flex-fill rounded-0 w-100 w-md-auto cta-book-now py-3 border-0" type="submit">Book Now</a>
      </div>
      <div className="d-none mt-4 d-md-flex flex-row justify-content-between fw-bold opacity-75">
        <a href="./about" className="link-dark d-flex gap-1"><span><FaShieldAlt /></span>Cleaners qualified by our hiring process</a>
        <a href="./checklist" className="link-dark d-flex gap-1"><span><FaCheck /></span>Comprehensive cleaning checklist</a>
        <a href="#assurances" className="link-dark d-flex gap-1"><span><LuLeaf /></span>Use eco-friendly products</a>
      </div>
    </div>
  );
}

export default FormCTA;