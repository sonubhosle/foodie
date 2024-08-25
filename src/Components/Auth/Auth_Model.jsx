import React from 'react'
import { Modal, Box } from '@mui/material'
import Signup from './Signup';
import Login from './Login';
import { useLocation } from 'react-router-dom';
import './Auth.css'

const Auth_Modal = ({ handleClose, open }) => {

  const location = useLocation();

  return (

    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className='auth-model'>
        {location.pathname === "/login" ? <Login /> : <Signup />}
      </div>
    </Modal>
  )
}

export default Auth_Modal