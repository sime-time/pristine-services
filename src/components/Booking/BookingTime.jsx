import BookingNextButton from "./BookingNextButton.jsx";
import BookingTimeList from "./BookingTimeList.jsx";
import { getLocalTimeZone } from '@internationalized/date';
import { useDateFormatter } from 'react-aria';

function BookingTime({ day, setData }) {

  let formatter = useDateFormatter({
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  function formatDate() {
    let formattedDate = formatter.format(day.toDate(getLocalTimeZone()));
    return formattedDate;
  }

  return (
    <form className="d-flex flex-column justify-content-center align-items-center form-container gap-5">
      <h1 className="display-5 text-center">What time on {formatDate()}?</h1>
      <div className="w-100 container justify-content-center d-flex">
        <BookingTimeList setData={setData} />
      </div>

      <BookingNextButton />
    </form >
  );
}

export default BookingTime;