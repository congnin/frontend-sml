import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PrivatePage } from './PrivatePage';
import { ToastContainer, toast } from 'react-toastify';
import RouteEnum from 'constants/RouteEnum';
import TitlePage from 'constants/TitlePage';
import { fetchUsers } from 'app/actions';
import Images from 'constants/images';
import Search from 'components/Search';
import { ConfirmDeleteModal } from 'components/Modal/ConfirmDeleteModal';

function UserDashboardPage(props) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const errors = useSelector((state) => state.errors);
  const { isAdmin } = auth;
  const users = useSelector((state) => state.fetchData.users);
  const { usersLoading, usersErrMsg } = errors;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = TitlePage.ManageUsers;
  }, []);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (usersErrMsg) {
      toast.error(usersErrMsg);
    }
  });

  const deleteConfirmation = () => {
    setOpen(true);
  };

  const cancelConfirmation = () => {
    setOpen(false);
  };

  const displayUsers = users
    ? users.map((user, index) => {
        return (
          <tr key={user._id}>
            <td>{index}</td>
            <td>
              <>
                <img
                  src={Images.USERS_IMG + user.photo}
                  className="img-fluid img-thumbnail"
                  width="40"
                  height="40"
                  alt="..."
                />
                {user.name}
              </>
            </td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              <a
                href="details.html"
                className="btn btn-secondary table__manage-btn"
              >
                <i className="fas fa-angle-double-right"></i> Details
              </a>
              <button
                className="btn btn-secondary ml-2 table__manage-btn"
                onClick={deleteConfirmation}
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        );
      })
    : null;

  return (
    <>
      <ToastContainer />
      <PrivatePage isAdmin={isAdmin} activeNav={RouteEnum.ManageUsers}>
        <h2 className="heading-secondary ma-bt-md ml-5">List of users</h2>
        <Search />
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
                <tbody>{displayUsers}</tbody>
              </table>
            </div>
          </div>
        </div>
      </PrivatePage>
      <ConfirmDeleteModal open={open} closeModal={cancelConfirmation} />
    </>
  );
}

export default UserDashboardPage;
