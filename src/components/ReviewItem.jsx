import { FaStar } from 'react-icons/fa6';

function ReviewItem({ reviewer, review }) {
  return (
    <>
      <p className="mb-4">{review}</p>
      <div className="d-flex align-items-center justify-content-center fs-4">
        <div className="rounded-3 bg-body-secondary shadow text-black w-md-50 py-3 px-4">
          <div className="pb-3 ">{reviewer}</div>
          <div className="p-3 border-top text-primary d-flex gap-2 align-items-center justify-content-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewItem;