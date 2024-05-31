import BookingRadio from "./BookingRadio.jsx";
import BookingNextButton from "./BookingNextButton.jsx";

function BookingType() {

  return (
    <div className="form-container my-4">
      <h1 className="d-flex justify-content-center align-items-center display-5">Book your cleaning now</h1>
      <form className="mx-4 d-flex flex-column gap-5 mt-5">
        <div>
          <label className="form-label h6">CLEAN TYPE</label>
          <div className="row border border-primary">
            <BookingRadio name="clean-type" id="standard" label="Standard Clean" />
            <BookingRadio name="clean-type" id="deep" label="Deep Clean" />
            <BookingRadio name="clean-type" id="move-in-out" label="Move in/out Clean" />
            <BookingRadio name="clean-type" id="airbnb-turnover" label="Airbnb Turnover" />
            <BookingRadio name="clean-type" id="airbnb-deluxe" label="Airbnb Deluxe Clean" />
          </div>
        </div>
        <div>
          <label className="form-label h6">NUMBER OF BEDROOMS</label>
          <div className="row border border-primary">
            <BookingRadio name="number-bedrooms" id="studio" label="Studio" />
            <BookingRadio name="number-bedrooms" id="1-bedroom" label="1" />
            <BookingRadio name="number-bedrooms" id="2-bedroom" label="2" />
            <BookingRadio name="number-bedrooms" id="3-bedroom" label="3" />
            <BookingRadio name="number-bedrooms" id="4-bedroom" label="4" />
            <BookingRadio name="number-bedrooms" id="5-bedroom" label="5" />
          </div>
        </div>
        <div>
          <label className="form-label h6">NUMBER OF BATHROOMS</label>
          <div className="row border border-primary">
            <BookingRadio name="number-bathrooms" id="1-bathroom" label="1" />
            <BookingRadio name="number-bathrooms" id="2-bathroom" label="2" />
            <BookingRadio name="number-bathrooms" id="3-bathroom" label="3" />
            <BookingRadio name="number-bathrooms" id="4-bathroom" label="4" />
            <BookingRadio name="number-bathrooms" id="5-bathroom" label="5" />
          </div>
        </div>

        <BookingNextButton />
      </form>
    </div>
  );
}
export default BookingType; 