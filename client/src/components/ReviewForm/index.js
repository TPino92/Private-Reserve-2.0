import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ADD_REVIEW } from '../../utils/mutations';

const ReviewForm = ({ productId }) => {

  const [reviewBody, setBody] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [addReview, { error }] = useMutation(ADD_REVIEW);


  // update state based on form input changes
  const handleChange = event => {
    if (event.target.value.length <= 280) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };


  function refreshPage(){ 
    window.location.reload(); 
  }

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();
    console.log("review body: ", reviewBody)
    console.log("productId: ", productId)
    try {
      await addReview({
        variables: { reviewBody: reviewBody, _id: productId }
      });
      // clear form value
      setBody('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };
  
  return (
    <div>
      <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Leave a review for this product..."
          value={reviewBody}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>

        <button className="btn col-12 col-md-3" type="submit" onClick={refreshPage}>
          Add Review
        </button>
      </form>

    </div>
  );
};

export default ReviewForm;
