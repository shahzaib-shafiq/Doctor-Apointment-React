import React from 'react';
import { Form, Input } from "antd";
import '../Styles/RegisterStyle.css';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { showLoading,hideLoading } from '../redux/features/aleartSlice';
import axios from 'axios';
function Register() {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const onFinishHandler = async(values: any) => {
    // console.log('Success:', values);
   
    try {
      dispatch(showLoading())

      const res=await axios.post('http://localhost:3000/api/v1/user/login', values);
      dispatch(hideLoading())
      if (res?.data?.success) {
        console.log('Success:', res);
        localStorage.setItem('token', res.data.token); // Store token in localStorage
        navigate('/'); // Redirect to dashboard or home page after login
      
      }
    } catch (error) {
      dispatch(hideLoading())
      console.log(error)
    }
  };

  return (
    <>
      <div className='form-container'>
        <h1>Login Form</h1>
        <Form layout='vertical' onFinish={onFinishHandler}>

          <Form.Item label="Email" name="email">
            <Input type='text' required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type='password' required />
          </Form.Item>
          <Form.Item>
            <button className='btn btn-primary' type='submit'>Login</button>
          </Form.Item>
        <Link to="/register" className='m-2'>Not registered? Click Here</Link>
        </Form>
      </div>
    </>
  );
}

export default Register;
