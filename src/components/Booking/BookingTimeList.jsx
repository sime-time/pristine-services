import BookingRadio from './BookingRadio.jsx';

function generateTimeArray(startHour, endHour) {
  const times = [];
  for (let hour = startHour; hour <= endHour; hour++) {
    let period = hour < 12 ? 'AM' : 'PM';
    let formattedHour = hour % 12 || 12; // convert to 12 hour format
    let timeHour = `${formattedHour}:00 ${period}`;
    let timeHalfHour = `${formattedHour}:30 ${period}`;
    times.push(timeHour);
    times.push(timeHalfHour);
  }
  return times;
}

function BookingTimeList() {
  const times = generateTimeArray(8, 19);

  return (
    <ul className="border border-primary list-group list-group-flush">
      {times.map((time, index) =>
        <li key={index} className="list-group-item list-group-item-action p-3">
          <input className="form-check-input me-2" type="radio" name="apt-times" value={time} id={time} />
          <label className="form-check-label stretched-link" htmlFor={time}>{time}</label>
        </li>
      )}
    </ul>
  );
}

export default BookingTimeList;