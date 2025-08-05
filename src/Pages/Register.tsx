import React from 'react';
import { Form, Input } from "antd";
import '../Styles/RegisterStyle.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const navigate = useNavigate();
  const onFinishHandler = async (values: any) => {
    try {
      const res = await axios.post('http://localhost:3000/api/v1/user/register', values)
      if (res?.data?.success) {
        console.log('Success:', res);
        navigate('/login');
      }


    } catch (error) {
      console.log(error);
    }

  };

  return (
    <>
      <div className='form-container'>
        <h1>Register Form</h1>
        <Form layout='vertical' onFinish={onFinishHandler}>
          <Form.Item label="Name" name="name">
            <Input type='text' required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type='text' required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type='password' required />
          </Form.Item>
          <Form.Item>
            <button className='btn btn-primary' type='submit'>Register</button>
          </Form.Item>
          <Link to="/login" className='m-2'>Already registered? Click Here</Link>
        </Form>
      </div>
    </>
  );
}

export default Register;
