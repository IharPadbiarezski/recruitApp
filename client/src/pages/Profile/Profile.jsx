import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import './Profile.css'

const Profile = () => {

  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogoutCLick = async (e) => {
    e.preventDefault();
    try {
      await logout()
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
};

  return (
    <div>
      <div>Profile</div>
      <button onClick={handleLogoutCLick}>Выйти</button>
    </div>
  )
}

export default Profile