import FormUserData from 'components/Form/FormUserData';
import RouteEnum from 'constants/RouteEnum';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PrivatePage } from './PrivatePage';
import { updateMe, updateMyPassword } from 'app/actions';
import FormChangePassword from 'components/Form/FormChangePassword';
import { ToastContainer, toast } from 'react-toastify';

function AccountPage(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const errors = useSelector((state) => state.errors);
  const {
    updateMeLoading,
    updateMeErrMsg,
    updateMyPassLoading,
    updateMyPassErrMsg,
  } = errors;
  const { isAdmin } = user;
  const initialValues = {
    name: user.info.name,
    email: user.info.email,
  };

  const passwordInitialValues = {
    currentPass: '',
    newPass: '',
    confirmPass: '',
  };

  useEffect(() => {
    if (updateMyPassErrMsg) {
      toast.error(updateMyPassErrMsg);
    } else if (updateMeErrMsg) {
      toast.error(updateMeErrMsg);
    }
  });

  const handleSubmitUserData = (values) => {
    dispatch(updateMe(values.name, values.email));
  };

  const handleSubmitNewPasswordData = (values) => {
    dispatch(
      updateMyPassword(values.currentPass, values.newPass, values.confirmPass)
    );
  };

  return (
    <>
      <ToastContainer />
      <PrivatePage isAdmin={isAdmin} activeNav={RouteEnum.Settings}>
        <div className="user-view__form-container">
          <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
          <FormUserData
            initialValues={initialValues}
            isSubmit={updateMeLoading}
            error={updateMeErrMsg}
            onSubmit={handleSubmitUserData}
          />
        </div>
        <div className="line">&nbsp;</div>
        <div className="user-view__form-container">
          <h2 className="heading-secondary ma-bt-md">Password change</h2>
          <FormChangePassword
            initialValues={passwordInitialValues}
            isSubmit={updateMyPassLoading}
            error={updateMyPassErrMsg}
            onSubmit={handleSubmitNewPasswordData}
          />
        </div>
      </PrivatePage>
    </>
  );
}

export default AccountPage;
