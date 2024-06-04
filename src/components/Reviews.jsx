import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Reviews() {
  return (
    <div className="container">
      <h1>See our Reviews</h1>
      <Carousel className="d-flex align-content-center">
        <Carousel.Item>
          <div className="rounded-3 bg-primary-subtle specific-h-600 w-50">
            I called on a tuesday afternoon strapped to find a last minute cleaner for after rehearsal, for my sisters beautfil wedding. THANK you to Pristine Clean team. Katie and her were on time and our studio space turn out spotless!
          </div>

          <Carousel.Caption>
            <div className="rounded-3 bg-body-secondary shadow text-black">
              <div>Bobby Hensley</div>
              <div></div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>

  );


}

export default Reviews;