import React from 'react';
import { Link } from 'react-router-dom';


const ReviewList = ({ review }) => {

  return (
    <div className="card mb-3">
      <div className="card-header">
        <span className="text-light">Reviews</span>
      </div>
      <div className="card-body">
        {review &&
          review.map(review => (
            <p className="pill mb-3" key={review._id}>
              {review.reviewBody} //{' '}
              <Link to={`/product/${review.firstName}`} style={{ fontWeight: 700 }}>
                {review.firstName} on {review.createdAt}
              </Link>
            </p>
          ))}
      </div>
      <div>Hello</div>
    </div>
  );
};
export default ReviewList;
    // <div>
    //   <h3>Previous Reviews</h3>
    //   // iterate through the reviews and place - use map
    //   // when passing reviews - pass the product 
    // </div>