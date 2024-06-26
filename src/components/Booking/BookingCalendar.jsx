import { Button, Calendar, CalendarCell, CalendarGrid, Heading } from 'react-aria-components';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import BookingNextButton from '../Booking/BookingNextButton';
import { today } from '@internationalized/date';
import '../../styles/calendar.css';

function BookingCalendar({ data, setData }) {
  const currentDate = today();

  function handleDateChange(newDate) {
    setData(prevData => ({ ...prevData, date: newDate }));
  }

  return (
    <form className="d-flex flex-column justify-content-center align-items-center form-container gap-5">
      <h1 className="display-5 text-center">What day should we clean?</h1>

      <Calendar aria-label="Appointment date" minValue={currentDate} onChange={handleDateChange} className="w-100 d-flex flex-column align-items-center container">
        <header className="d-flex align-items-center mb-3 justify-content-evenly w-100">
          <Button slot="previous" className="border-0 bg-transparent fs-4"><FaArrowLeftLong /></Button>
          <Heading className="fst-italic flex-1 m-0 text-align-center" />
          <Button slot="next" className="border-0 bg-transparent fs-4"><FaArrowRightLong /></Button>
        </header>
        <CalendarGrid className="w-75">
          {(date) => <CalendarCell date={date} />}
        </CalendarGrid>
      </Calendar>

      <BookingNextButton />
    </form >

  );
}

export default BookingCalendar; 