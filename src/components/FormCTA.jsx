import Select from 'react-select';
import { MdInfoOutline } from "react-icons/md";

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
    { value: "move-in-out", label: "Move in / out Clean" },
    { value: "airbnb-turnover", label: "Airbnb Turnover" },
    { value: "airbnb-deep", label: "Airbnb Deluxe Deep Clean" },
  ];

  const styles = {
    control: (state) => 'rounded-0 py-2 border-2'
  }

  return (
    <div className="container d-flex gap-4 flex-column">
      <h1 className="fw-bold fs-cta my-4">Save Time.<br />Reset Your Space.</h1>
      <div className="d-none d-md-block">
        <a href="/cleantypes" className="text-secondary text-opacity-50"><span><MdInfoOutline /></span> Discover which clean type is right for you </a>
      </div>
      <div className="d-flex justify-content-start align-items-center flex-wrap">
        <div className="shadow flex-fill w-25 d-none d-md-block"><Select options={cleantypes} defaultValue={cleantypes[0]} classNames={styles} /></div>
        <div className="shadow flex-fill w-25"><Select options={bedrooms} defaultValue={bedrooms[0]} classNames={styles} /></div>
        <div className="shadow flex-fill w-25"><Select options={bathrooms} defaultValue={bathrooms[0]} classNames={styles} /></div>
        <button className="shadow btn btn-primary btn-lg flex-fill rounded-0 w-100 w-md-auto mt-sm py-3 border-0" type="submit">Book Now</button>
      </div>
    </div>
  );
}

export default FormCTA;