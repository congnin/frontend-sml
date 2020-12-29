import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTour } from 'app/actions';
import Loader from 'components/Loader';
import SectionDescription from '../components/Detail/SectionDescription';
import SectionHeader from 'components/Detail/SectionHeader';
import SectionPictures from 'components/Detail/SectionPicture';
import GoogleMap from 'components/map/GoogleMap';
import Review from 'components/Review';
import Cta from 'components/Detail/Cta';

function TourDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const tour = useSelector((state) => state.fetchData.tour);
  const user = useSelector((state) => state.user);
  const { loggedIn } = user;

  const errors = useSelector((state) => state.errors);
  const { tourLoading, tourErrMsg } = errors;

  useEffect(() => {
    dispatch(fetchTour(id));
  }, [id, dispatch]);

  return (
    <>
      {tourErrMsg && <h1>{tourErrMsg}</h1>}
      {tourLoading || !tour ? (
        <div className="main">
          <Loader />
        </div>
      ) : (
        <>
          <SectionHeader tour={tour} />
          <SectionDescription tour={tour} />
          <SectionPictures images={tour.images} />
          <GoogleMap locations={tour.locations} />
          <Review reviews={tour.reviews} />
          <Cta loggedIn={loggedIn} tour={tour} />
        </>
      )}
    </>
  );
}

export default TourDetailPage;
