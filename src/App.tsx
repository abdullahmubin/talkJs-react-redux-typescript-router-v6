import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams, Navigate, useNavigate } from 'react-router-dom';

import './assets/css/App.css';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from './reducers';

import Navibar from './components/Navbar';

import { ICProps } from "./types/index"
import Login from './components/LoginRegistration';
import Home from './components/Home';
import Contact from './components/Contact'
import About from './components/About'
import Logout from './components/Logout/index';


function App() {

  const stateOfUser = useSelector((state: RootState) => state.userCredential)

  let { activeUserObj } = stateOfUser;
  let navigate = useNavigate();

  let authVal = localStorage.getItem('authentication');

  if (authVal) {
    activeUserObj = activeUserObj || JSON.parse(authVal)
  }

  useEffect(() => {

    if (activeUserObj && !authVal) {
      localStorage.setItem('authentication', JSON.stringify(activeUserObj));
      if (activeUserObj) {
        navigate('/')
      }
    }

  }, [activeUserObj])


  const PrivateRoute = ({ children }: ICProps): React.ReactNode | any => {
    return activeUserObj ? children : <Navigate to="/login" />;
  };


  return (
    <div className="container">

      <Navibar activeUserObj={activeUserObj} />

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/about' element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        } />
        <Route path='/logout' element={
          <PrivateRoute>
            <Logout />
          </PrivateRoute>
        } />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home activeUserObj={activeUserObj} />
            </PrivateRoute>
          }
        />

      </Routes>


    </div>
  );
}


export default App;