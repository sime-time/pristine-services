function BookingBannerPart({ mainText, subText }) {
  return (
    <div className="d-flex flex-column align-items-center border border-light p-3 justify-content-around bg-body-secondary">
      <span className="h4">{mainText}</span>
      <span className="small fw-bold opacity-75 text-secondary">{subText.toUpperCase()}</span>
    </div>
  );
}

export default BookingBannerPart;