import { useState } from 'react';
import BookingClean from "./BookingClean.jsx";
import BookingFrequency from "./BookingFrequency.jsx";
import BookingCalendar from "./BookingCalendar.jsx";
import BookingTime from "./BookingTime.jsx";
import BookingBanner from "./BookingBanner.jsx";
import { today } from '@internationalized/date';

function BookingFlow() {
  const [bookingData, setBookingData] = useState(
    {
      cleanType: '-',
      bedrooms: '-',
      bathrooms: '-',
      frequency: '-',
      date: today(),
      time: '-',
    }
  );

  return (
    <>
      <header>
        <BookingBanner data={bookingData} />
      </header>
      <main>
        <BookingClean setData={setBookingData} />
        <BookingFrequency setData={setBookingData} />
        <BookingCalendar data={bookingData} setData={setBookingData} />
        <BookingTime day={bookingData.date} setData={setBookingData} />
      </main>
    </>
  );
}
export default BookingFlow;