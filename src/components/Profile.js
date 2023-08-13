import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';

const Profile = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <h1>Profile Page</h1>
      <button type='submit' className='btn' onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default Profile;
