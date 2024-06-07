import { useState } from 'react';
import BookingClean from "./BookingClean.jsx";
import BookingFrequency from "./BookingFrequency.jsx";
import BookingCalendar from "./BookingCalendar.jsx";
import BookingTime from "./BookingTime.jsx";
import BookingBanner from "./BookingBanner.jsx";

function BookingFlow() {
  const [bookingData, setBookingData] = useState(
    {
      cleanType: '-',
      bedrooms: '-',
      bathrooms: '-',
    }
  );

  return (
    <>
      <header>
        <BookingBanner data={bookingData} />
      </header>
      <main>
        <BookingClean setData={setBookingData} />
        <BookingFrequency />
        <BookingCalendar />
        <BookingTime />
      </main>
    </>
  );
}
export default BookingFlow;