import BookRadioButton from "./BookRadioButton";

function BookRoomAmount() {

  return (
    <div className="container">
      <h1 className="d-flex justify-content-center align-items-center">Book your cleaning now</h1>
      <form>
        <label className="form-label">NUMBER OF BEDROOMS</label>
        <div className="form-check d-flex gap-3">
          <BookRadioButton name="number-bedrooms" id="studio" label="Studio" />
          <BookRadioButton name="number-bedrooms" id="1-bedroom" label="1" />
          <BookRadioButton name="number-bedrooms" id="2-bedroom" label="2" />
          <BookRadioButton name="number-bedrooms" id="3-bedroom" label="3" />
          <BookRadioButton name="number-bedrooms" id="4-bedroom" label="4" />
          <BookRadioButton name="number-bedrooms" id="5-bedroom" label="5" />
        </div>
      </form>
    </div>
  );
}
export default BookRoomAmount; 