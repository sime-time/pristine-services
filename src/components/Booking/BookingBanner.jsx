import BookingBannerPart from "./BookingBannerPart.jsx";

function BookingBanner() {
  return (
    <div className="d-flex border border-light bg-light">
      <div id="logo" className="d-none d-md-block border border-light bg-body-secondary flex-shrink px-2">
        <a href="/">
          <img src="logo.svg" height="100" alt="Company logo" />
        </a>
      </div>
      <BookingBannerPart mainText="Standard" subText="Clean Type" />
      <BookingBannerPart mainText="3" subText="Bedroom" />
      <BookingBannerPart mainText="2" subText="Bathroom" />
      <BookingBannerPart mainText="Biweekly" subText="Frequency" />
      <BookingBannerPart mainText="June 14, 2024" subText="8:00 aM" />
      <BookingBannerPart mainText="3602 North Keeler Avenue" subText="address" />
      <BookingBannerPart mainText="354" subText="subtotal" />
    </div>
  );
}

export default BookingBanner; 