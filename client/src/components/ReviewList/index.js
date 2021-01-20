import React from 'react';

const ReviewList = ({ reviews }) => {

  return (
    <div className="card2">
      <div className="card-header reviewtitle">
        <span className="text-light">Reviews</span>
      </div>
      <div className="card-body reviewbody">
        {reviews &&
          reviews.map(review => (
            <p className="pill mb-3 reviewtext" key={review._id}>
              {review.firstName} : {review.reviewBody} 
            </p>
          ))}
      </div>
    </div>
  );
};

export default ReviewList;
