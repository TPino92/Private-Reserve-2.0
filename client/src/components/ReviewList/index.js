import React from 'react';
// import { Link } from 'react-router-dom';


const ReviewList = ({ reviews }) => {
  // if (!reviews) {
  //   return <h3>No reviews Yet</h3>;
  // }

  // return (
  //   <div>
  //     <h3>Previous Reviews</h3>
  //     // iterate through the reviews and place - use map
  //     // when passing reviews - pass the product 
  //   </div>
  // );
  


  return (
    <div className="card mb-3">
      <div className="card-header">
        <span className="text-light">Reviews</span>
      </div>
      <div className="card-body">
        {reviews &&
          reviews.map(review => (
            <p className="pill mb-3" key={review._id}>
              {review.reviewBody} // {' '}
                {reviews.firstName} on {reviews.createdAt}
            </p>
          ))}
      </div>
    </div>
  );
};

export default ReviewList;
