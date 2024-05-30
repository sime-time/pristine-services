import { Button, Calendar, CalendarCell, CalendarGrid, Heading } from 'react-aria-components';


function BookingCalendar() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-5">What day should we clean?</h1>
      <Calendar aria-label="Appointment date">
        <header>
          <Button slot="previous">◀</Button>
          <Heading />
          <Button slot="next">▶</Button>
        </header>
        <CalendarGrid>
          {(date) => <CalendarCell date={date} />}
        </CalendarGrid>
      </Calendar>
    </div>

  );
}

export default BookingCalendar; 