import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTours } from 'app/actions';
import TourList from 'components/TourList';
import Loader from 'components/Loader';

function AllToursPage() {
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.fetchData.tours);
  const errors = useSelector(state => state.errors)
  const { toursLoading, toursErrMsg } = errors;

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  return (
    <main className="main">
      {toursErrMsg && <h1>{toursErrMsg}</h1>}
      {toursLoading ? <Loader /> : <TourList tours={tours} />}
    </main>
  );
}

export default AllToursPage;
