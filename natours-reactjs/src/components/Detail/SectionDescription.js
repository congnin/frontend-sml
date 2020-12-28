import Images from '../../constants/images';
import React from 'react';
import OverviewBoxDetail from './OverviewBoxDetail';
import GuideItem from './GuideItem';
import DescriptionDetail from './DescriptionDetail';
import { getLocaleDateString } from 'utils';

function SectionDescription(props) {
  const { tour } = props;
  const date =
    tour && tour.startDates[0]
      ? getLocaleDateString(tour.startDates[0])
      : 'undefine';
  const groupSize =
    tour && tour.maxGroupSize ? `${tour.maxGroupSize} people` : 'undefine';

  const guideList =
    tour && tour.guides
      ? tour.guides.map((guide) => {
          return <GuideItem guide={guide} />;
        })
      : null;
  const parapraphs =
    tour && tour.description ? tour.description.split('\n') : [];

  const difficulty = tour && tour.difficulty ? tour.difficulty : 'undefine';
  const rating =
    tour && tour.ratingsAverage ? `${tour.ratingsAverage} /5` : 'undefine';

  return (
    <section className="section-description">
      <div className="overview-box">
        <div>
          <div className="overview-box__group">
            <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
            <OverviewBoxDetail
              label="Next date"
              text={date}
              icon={Images.CALENDAR}
            />
            <OverviewBoxDetail
              label="Difficulty"
              text={difficulty}
              icon={Images.TRENDING_UP}
            />
            <OverviewBoxDetail
              label="Participants"
              text={groupSize}
              icon={Images.USER}
            />

            <OverviewBoxDetail
              label="Rating"
              text={rating}
              icon={Images.STAR}
            />
          </div>

          <div className="overview-box__group">
            <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
            {guideList}
          </div>
        </div>
      </div>
      {parapraphs && parapraphs.length > 0 ? (
        <DescriptionDetail name={tour.name} parapraphs={parapraphs} />
      ) : null}
    </section>
  );
}

export default SectionDescription;
