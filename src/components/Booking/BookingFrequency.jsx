import BookingNextButton from "./BookingNextButton.jsx";
import BookingRadio from "./BookingRadio.jsx";

function BookingFrequency() {
  return (
    <div className="form-container my-4">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-5">Cleaning Frequency</h1>
        <h2 className="h4 text-secondary">Save money and live cleaner with our recurring appointments.</h2>
      </div>
      <form className="mx-4 d-flex flex-column gap-5 mt-5">
        <div>
          <label className="form-label h6">FREQUENCY</label>
          <div className="row border border-primary">
            <BookingRadio name="frequency" id="one-time" label="Once" />
            <BookingRadio name="frequency" id="weekly" label="Weekly" />
            <BookingRadio name="frequency" id="biweekly" label="Biweekly" />
            <BookingRadio name="frequency" id="monthly" label="Monthly" />
          </div>
        </div>
        <BookingNextButton />
      </form>
    </div>
  );
}

export default BookingFrequency;