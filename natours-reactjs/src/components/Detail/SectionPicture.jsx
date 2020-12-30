import Images from 'constants/images';
import React from 'react';

function SectionPictures(props) {
  const images = props.images;

  const displayImages = images.map((im, idx) => {
    return (
      <div className="picture-box">
        <img
          className={`picture-box__img picture-box__img--${idx}`}
          src={Images.TOURS_IMG + im}
          alt={`The Park Camper Tour ${idx}`}
        />
      </div>
    );
  });

  return <section class="section-pictures">{displayImages}</section>;
}

export default SectionPictures;
