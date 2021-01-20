import React from 'react';
// import { Link } from 'react-router-dom';


const ReviewList = ({ reviews }) => {


  return (
    <div className="card mb-3">
      <div className="card-header">
        <span className="text-light">Reviews</span>
      </div>
      <div className="card-body">
        {reviews &&
          reviews.map(review => (
            <p className="pill mb-3" key={review._id}>
              {review.reviewBody} by {review.firstName} 
            </p>
          ))}
      </div>
    </div>
  );
};

export default ReviewList;
