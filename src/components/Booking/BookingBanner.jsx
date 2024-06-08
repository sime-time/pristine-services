import BookingBannerPart from "./BookingBannerPart.jsx";
import { getLocalTimeZone } from '@internationalized/date';
import { useDateFormatter } from 'react-aria';

function BookingBanner({ data }) {

  let formatter = useDateFormatter({
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  function formatDate() {
    let formattedDate = formatter.format(data.date.toDate(getLocalTimeZone()));
    return formattedDate;
  }

  return (
    <div className="d-flex border border-light bg-light">
      <div id="logo" className="d-none d-md-block border border-light bg-body-secondary flex-shrink px-2">
        <a href="/">
          <img src="logo.svg" height="100" alt="Company logo" />
        </a>
      </div>
      <BookingBannerPart mainText={data.cleanType} subText="Clean Type" />
      <BookingBannerPart mainText={data.bedrooms} subText="Bedroom" />
      <BookingBannerPart mainText={data.bathrooms} subText="Bathroom" />
      <BookingBannerPart mainText={data.frequency} subText="Frequency" />
      <BookingBannerPart mainText={formatDate()} subText="8:00 am" />
      <BookingBannerPart mainText="3602 North Keeler Avenue" subText="address" />
      <BookingBannerPart mainText="354" subText="subtotal" />
    </div>
  );
}

export default BookingBanner; 