import React from 'react';
import { Link } from 'react-router-dom';

const ReviewList = ({ reviews, title }) => {
  if (!reviews) {
    return <h3>No reviews Yet</h3>;
  }

  return (
    <div>
      <h3>Previous Reviews</h3>
      // iterate through the reviews and place - use map
      // when passing reviews - pass the product 
    </div>
  );
};

export default ReviewList;
