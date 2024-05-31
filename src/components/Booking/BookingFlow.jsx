import BookingType from "./BookingType.jsx";
import BookingFrequency from "./BookingFrequency.jsx";
import BookingCalendar from "./BookingCalendar.jsx";
import BookingTime from "./BookingTime.jsx";
import BookingBanner from "./BookingBanner.jsx";

function BookingFlow() {
  return (
    <>
      <header>
        <BookingBanner />
      </header>
      <main>
        <BookingType />
        <BookingFrequency />
        <BookingCalendar />
        <BookingTime />
      </main>
    </>
  );
}
export default BookingFlow;