import React, { useEffect } from 'react';
import '../components/Detail/Detail.scss';
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
import TitlePage from 'constants/TitlePage';

function TourDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const tour = useSelector((state) => state.fetchData.tour);
  const auth = useSelector((state) => state.auth);
  const { loggedIn } = auth;

  const errors = useSelector((state) => state.errors);
  const { tourLoading, tourErrMsg } = errors;

  useEffect(() => {
    dispatch(fetchTour(id));
  }, [id, dispatch]);

  useEffect(() => {
    document.title = tour ? 'Natours | ' + tour.name : TitlePage.Detail;
  }, [tour]);

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
