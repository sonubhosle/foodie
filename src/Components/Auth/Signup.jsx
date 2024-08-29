import React from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { register } from '../../State/Authentication/Action';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';

const Admin_Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);


  React.useEffect(() => {
    if (auth.error) {
      toast.error(auth.error);
    } else if (auth.jwt) {
      toast.success('Sign up successful!');
      navigate('/');
    }
  }, [auth, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userData = {
      userName: data.get('userName'),
      name: data.get('name'),
      surname: data.get('surname'),
      mobile: data.get('mobile'),
      password: data.get('password'),
      email: data.get('email'),
      photo: data.get('photo')
    };
    dispatch(register(userData))
  };

  return (
    <>

      <form onSubmit={handleSubmit}>
        <p>Signup</p>
        <div className="input-group">
          <input type="text" name="userName" id="userName" placeholder='Enter User Name' />
          <input type="text" name="name" id="name" placeholder='Enter Your Name' />
        </div>
        <div className="input-group">
          <input type="text" name="surname" id="surname" placeholder='Enter Your Surname' />
          <input type="text" name="mobile" id="mobile" placeholder='Enter Your Mobile Number' />
        </div>
        <div className="input-group">
          <input type="email" name="email" id="email" placeholder='Enter Your Email' />
          <input type="password" name="password" id="password" placeholder='Enter Your Password' />
        </div>
        <input type="url" name="photo" id="photo" placeholder='Enter Your Profile Url' />
        <button type='submit'>Signup</button>
      </form>

      <div className='bottom'>
        <p>If you already have an account <button onClick={() => navigate('/login')}>Login</button></p>
      </div>
    </>
  );
};

export default Admin_Signup;
