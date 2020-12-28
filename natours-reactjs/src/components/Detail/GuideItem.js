import Images from 'constants/images';
import React from 'react';

function mapDisplayRole(role) {
  if (role === 'lead-guide') {
    return 'Lead guide';
  } else if (role === 'guide') {
    return 'Tour guide';
  } else {
    return role;
  }
}

function GuideItem(props) {
  const { guide } = props;
  const { role, name, photo } = guide;
  const displayRole = mapDisplayRole(role);

  return (
    <div className="overview-box__detail">
      <img src={Images.RANDOM} alt={name} className="overview-box__img" />
      <span className="overview-box__label">{displayRole}</span>
      <span className="overview-box__text">{name}</span>
    </div>
  );
}

export default GuideItem;
