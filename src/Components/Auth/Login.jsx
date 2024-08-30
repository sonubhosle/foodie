import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../State/Authentication/Action';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  React.useEffect(() => {
    console.log('Auth state:', auth);

    if (auth.error) {
      toast.error(auth.error);
    } else if (auth.jwt && auth.user) {
      toast.success('Login successful!');
      console.log('User role:', auth.user.role);

      if (auth.user.role === 'ADMIN') {
        setTimeout(() => {
          window.location.href = 'https://admin-31370.web.app/';
        }, 500);
      } else {
        navigate('/');
      }
    }
  }, [auth, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userData = {
      email: data.get('email'),
      password: data.get('password'),
    };
    dispatch(login(userData));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="email" name="email" id="email" placeholder="Enter Your Email" />
          <input type="password" name="password" id="password" placeholder="Enter Your Password" />
        </div>
        <button type="submit">Login</button>
      </form>

      <div className="bottom">
        <p>
          If you already have an account{' '}
          <button onClick={() => navigate('/signup')}>Signup</button>
        </p>
      </div>
    </>
  );
};

export default Login;
