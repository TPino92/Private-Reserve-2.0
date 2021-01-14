const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const mongoose = require('mongoose');

const reviewSchema = new Schema(
  {
    reviewBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    firstName: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);


module.exports = reviewSchema;

// const Review = mongoose.model('Review', reviewchema);

// module.exports = Review;
