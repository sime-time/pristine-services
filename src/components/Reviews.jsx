import Carousel from 'react-bootstrap/cjs/Carousel.js';
import ReviewItem from './ReviewItem.jsx';

function Reviews() {
  return (
    <div className="container my-5 py-3">
      <div className="d-flex flex-column align-items-center gap-4">
        <h1 className="display-4 text-center">Hear what others say about us</h1>
        <Carousel className="rounded-4 bg-primary-subtle">
          <Carousel.Item className="h-100 p-5 fs-3 text-center">
            <ReviewItem reviewer="Bobby Hensley" review="I called on a tuesday afternoon strapped to find a last minute cleaner for after rehearsal, for my sisters beautfil wedding. THANK you to Pristine Clean team. Katie and her were on time and our studio space turn out spotless!" />
          </Carousel.Item>
          <Carousel.Item className="h-100 p-5 fs-3 text-center">
            <ReviewItem reviewer="Myra Ansley" review="We loved the team this morning! The girls did a wonderful job. Our house looks brand new, and really baseboard are restored. Thank you again!" />
          </Carousel.Item>
          <Carousel.Item className="h-100 p-5 fs-3 text-center">
            <ReviewItem reviewer="Destiny Dossett" review="I just love how detailed oriented my crew was with cleaning. Showed up on time! Very kind with great hospitality. Love the updates from cleaners via their app!! Would highly recommend and will indubitably use there services for the future!" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Reviews;