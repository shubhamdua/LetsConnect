import React, { Fragment, useState } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {setAlert} from '../../actions/alert'
import PropTypes from 'prop-types'


export const Register = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const { name, email, password, cpassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      setAlert("Passwords don't match!!!","danger");
    } else {
      console.log('SUCCESS!!');
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
          <small className='form-text'>
            This site uses Gravatar, so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
            minLength='8'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='cpassword'
            value={cpassword}
            onChange={(e) => onChange(e)}
            minLength='8'
          />
        </div>
        <input type='submit' value='Register' className='btn btn-primary' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(Register);
