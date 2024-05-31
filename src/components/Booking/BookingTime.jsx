import BookingNextButton from "./BookingNextButton.jsx";
import BookingTimeList from "./BookingTimeList.jsx";
function BookingTime() {

  return (
    <form className="d-flex flex-column justify-content-center align-items-center form-container gap-5">
      <h1 className="display-5">What time on [DATE]?</h1>
      <div className="w-100 container">
        <BookingTimeList />
      </div>

      <BookingNextButton />
    </form >
  );
}

export default BookingTime;