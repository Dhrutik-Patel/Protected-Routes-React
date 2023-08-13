import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ name: 'John Doe', email: 'john@gmail.com' }));
  };

  return (
    <>
      <h1>Login Page</h1>
      <button type='submit' className='btn' onClick={handleLogin}>
        Login
      </button>
    </>
  );
};

export default Login;
