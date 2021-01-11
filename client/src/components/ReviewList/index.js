import React from 'react';
import { Link } from 'react-router-dom';

const ReviewList = ({ reviews, title }) => {
  if (!reviews.length) {
    return <h3>No reviews Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {reviews &&
        reviews.map(review => (
          <div key={review._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${review.firstName}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {review.firstName}
              </Link>{' '}
              Review on {review.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/review/${review._id}`}>
                <p>{review.reviewText}</p>
                <p className="mb-0">
                  Reviews: {review.reviewCount} || Click to{' '}
                  {review.reviewCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ReviewList;
