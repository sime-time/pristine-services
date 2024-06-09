import Select from 'react-select';

function generateTimeArray(startHour, endHour) {
  const times = [];
  for (let hour = startHour; hour <= endHour; hour++) {
    let period = hour < 12 ? 'AM' : 'PM';
    let formattedHour = hour % 12 || 12; // convert to 12 hour format

    let timeHour = `${formattedHour}:00 ${period}`;
    let timeHalfHour = `${formattedHour}:30 ${period}`;

    times.push({ value: timeHour, label: timeHour });
    times.push({ value: timeHalfHour, label: timeHalfHour });
  }
  return times;
}

function BookingTimeList() {

  const availableTimes = generateTimeArray(8, 19);

  function handleCheck() {
    setter(prevData => ({ ...prevData, time: "7:oo pm" }));
  }

  return (
    <div className="d-flex z-3 w-50">
      <div className="shadow flex-fill">
        <Select options={availableTimes} />
      </div>
    </div>
  );
}

export default BookingTimeList;