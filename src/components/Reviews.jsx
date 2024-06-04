import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaStar } from 'react-icons/fa6';

function Reviews() {
  return (
    <div className="container mb-5">
      <div className="d-flex flex-column align-items-center gap-4">
        <h1>See what our customers say about us</h1>
        <Carousel className="w-md-75">
          <Carousel.Item className="rounded-3 bg-primary-subtle h-100 p-5 fs-3 text-center">
            <p className="mb-4">
              I called on a tuesday afternoon strapped to find a last minute cleaner for after rehearsal, for my sisters beautfil wedding. THANK you to Pristine Clean team. Katie and her were on time and our studio space turn out spotless!
            </p>
            <div className="d-flex align-items-center justify-content-center fs-4">
              <div className="rounded-3 bg-body-secondary shadow text-black w-md-50 py-3 px-4">
                <div className="pb-3 ">Bobby Hensley</div>
                <div className="p-3 border-top text-primary d-flex gap-2 align-items-center justify-content-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>

          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );


}

export default Reviews;