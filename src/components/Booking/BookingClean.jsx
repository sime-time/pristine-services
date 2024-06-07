import BookingRadio from "./BookingRadio.jsx";
import BookingNextButton from "./BookingNextButton.jsx";

function BookingClean({ setData }) {
  return (
    <div className="form-container my-5">
      <h1 className="d-flex justify-content-center align-items-center display-5">Book your cleaning now</h1>
      <form className="mx-4 d-flex flex-column gap-5 mt-5">
        <div>
          <label className="form-label h6">CLEAN TYPE</label>
          <div className="row border border-primary">
            <BookingRadio name="cleanType" id="standard" label="Standard Clean" setter={setData} />
            <BookingRadio name="cleanType" id="deep" label="Deep Clean" setter={setData} />
            <BookingRadio name="cleanType" id="move-in-out" label="Move in/out Clean" setter={setData} />
            <BookingRadio name="cleanType" id="airbnb-turnover" label="Airbnb Turnover" setter={setData} />
            <BookingRadio name="cleanType" id="airbnb-deluxe" label="Airbnb Deluxe Clean" setter={setData} />
          </div>
        </div>
        <div>
          <label className="form-label h6">NUMBER OF BEDROOMS</label>
          <div className="row border border-primary">
            <BookingRadio name="bedrooms" id="studio" label="Studio" setter={setData} />
            <BookingRadio name="bedrooms" id="1-bedroom" label="1" setter={setData} />
            <BookingRadio name="bedrooms" id="2-bedroom" label="2" setter={setData} />
            <BookingRadio name="bedrooms" id="3-bedroom" label="3" setter={setData} />
            <BookingRadio name="bedrooms" id="4-bedroom" label="4" setter={setData} />
            <BookingRadio name="bedrooms" id="5-bedroom" label="5" setter={setData} />
          </div>
        </div>
        <div>
          <label className="form-label h6">NUMBER OF BATHROOMS</label>
          <div className="row border border-primary">
            <BookingRadio name="bathrooms" id="1-bathroom" label="1" setter={setData} />
            <BookingRadio name="bathrooms" id="2-bathroom" label="2" setter={setData} />
            <BookingRadio name="bathrooms" id="3-bathroom" label="3" setter={setData} />
            <BookingRadio name="bathrooms" id="4-bathroom" label="4" setter={setData} />
            <BookingRadio name="bathrooms" id="5-bathroom" label="5" setter={setData} />
          </div>
        </div>

        <BookingNextButton />
      </form>
    </div>
  );
}
export default BookingClean; 