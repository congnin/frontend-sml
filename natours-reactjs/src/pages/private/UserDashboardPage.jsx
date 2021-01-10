import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PrivatePage } from './PrivatePage';
import { ToastContainer, toast } from 'react-toastify';
import RouteEnum from 'constants/RouteEnum';
import TitlePage from 'constants/TitlePage';
import { fetchUsers } from 'app/actions';

function UserDashboardPage(props) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const errors = useSelector((state) => state.errors);
  const { isAdmin } = auth;
  const users = useSelector((state) => state.fetchData.users);

  useEffect(() => {
    document.title = TitlePage.ManageUsers;
  }, []);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <PrivatePage isAdmin={isAdmin} activeNav={RouteEnum.ManageUsers}>
        <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
        <div className="container">
          <div className="row">
            <div className="col">
              <table className="table table-striped table__manage">
                <thead className="thead-dark">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>jdoe@gmail.com</td>
                    <td>User</td>
                    <td>
                      <a
                        href="details.html"
                        className="btn btn-secondary table__manage-btn"
                      >
                        <i className="fas fas-sm fa-angle-double-right"></i>{' '}
                        Details
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Harry White</td>
                    <td>harry@yahoo.com</td>
                    <td>User</td>
                    <td>
                      <a
                        href="details.html"
                        class="btn btn-secondary table__manage-btn"
                      >
                        <i class="fas fa-angle-double-right"></i> Details
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Mary Johnson</td>
                    <td>mary@gmail.com</td>
                    <td>User</td>
                    <td>
                      <a
                        href="details.html"
                        class="btn btn-secondary table__manage-btn"
                      >
                        <i class="fas fa-angle-double-right"></i> Details
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </PrivatePage>
    </>
  );
}

export default UserDashboardPage;
