import React from 'react';

function DescriptionDetail(props) {
  const { name, parapraphs } = props;
  const parapraphList = parapraphs.map((pa, idx) => {
    return (
      <p className="description__text" key={idx}>
        {pa}
      </p>
    );
  });

  return (
    <div className="description-box">
      <h2 className="heading-secondary ma-bt-lg">{`About ${name} tour`}</h2>
      {parapraphList}
    </div>
  );
}

export default DescriptionDetail;
