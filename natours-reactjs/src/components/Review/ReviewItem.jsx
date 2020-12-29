import Images from 'constants/images';
import React from 'react';

function ReviewItem(props) {
  const { review } = props;

  const ratings = [1, 2, 3, 4, 5].map((n) => {
    return (
      <svg
        className={`reviews__star reviews__star--${
          review.rating >= n ? 'active' : 'inactive'
        }`}
      >
        <use href={Images.STAR}></use>
      </svg>
    );
  });

  return (
    <div className="reviews__card">
      <div className="reviews__avatar">
        <img
          src={Images.USERS_IMG + review.user.photo}
          alt={review.user.name}
          className="reviews__avatar-img"
        />
        <h6 className="reviews__user">{review.user.name}</h6>
      </div>
      <p className="reviews__text">{review.review}</p>
      <div className="reviews__rating">{ratings}</div>
    </div>
  );
}

export default ReviewItem;
