import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { bindActionCreators } from 'redux';
import { userActionCreators } from '../../store';

const Logout: React.FC = () => {

    const dispatch = useDispatch();
    const { removeCurrentUser } = bindActionCreators(userActionCreators, dispatch)
    let navigate = useNavigate();
    
    useEffect(() => {
        removeCurrentUser();
        localStorage.removeItem("authentication");
        navigate('/')

    }, [])
    return (
      <div>
        <h2>Loout View</h2>
        <p>Without login we can't visit about and home page.</p>
      </div>
    );
  }

  export default Logout;