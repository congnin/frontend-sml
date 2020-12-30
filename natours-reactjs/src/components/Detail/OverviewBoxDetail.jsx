import React from 'react';

function OverviewBoxDetail(props) {
  const { label, text, icon } = props;
  return (
    <div className="overview-box__detail">
      <svg className="overview-box__icon">
        <use href={icon} />
      </svg>
      <span className="overview-box__label">{label}</span>
      <span className="overview-box__text">{text}</span>
    </div>
  );
}

export default OverviewBoxDetail;
