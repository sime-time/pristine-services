function BookingBannerPart({ mainText, subText }) {
  const isSubTotal = (subText.toUpperCase() == "SUBTOTAL");
  const mainTextHtml = isSubTotal ?
    (<span className='display-5'><sup className="fs-4">$</sup>{mainText}</span>)
    : (<span className='h4'>{mainText}</span>);

  return (
    <div className={`d-flex flex-column align-items-center text-nowrap text-center p-3 justify-content-around flex-fill ${isSubTotal ? 'text-primary' : 'bg-body-secondary border border-light'}`}>
      {mainTextHtml}
      <span className="small fw-bold opacity-75 text-secondary">{subText.toUpperCase()}</span>
    </div >
  );
}

export default BookingBannerPart;