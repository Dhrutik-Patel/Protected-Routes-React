import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Profile from './components/Profile';
import Orders from './components/Orders';
import Blogs from './components/Blogs';
import { useSelector } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/blogs' element={<Blogs />} />

        {/* PROTECTED ROUTE */}
        {/* <Route
          path='/admin/dashboard'
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          }
        /> */}

        {/* PROTECTED ROUTE */}
        {/* <Route
          path='/profile'
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        /> */}

        {/* PROTECTED ROUTE */}
        {/* <Route
          path='/orders'
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Orders />
            </ProtectedRoute>
          }
        /> */}

        {/* PROTECTED ROUTE (ANOTHER SIMPLE WAY) */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/orders' element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
