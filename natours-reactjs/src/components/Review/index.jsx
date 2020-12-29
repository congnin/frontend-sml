import React from 'react';
import ReviewItem from './ReviewItem';

function Review(props) {
  const { reviews } = props;
  const reviewList = reviews.map((item, idx) => {
    return <ReviewItem key={idx} review={item} />;
  });

  return (
    <section className="section-reviews">
      <div className="reviews">{reviewList}</div>
    </section>
  );
}

export default Review;
