import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Form, Input } from 'antd';
import "../Styles/Land.css"
import Forgot from './Forgot';
import { LoginOutlined } from '@ant-design/icons';

const Land = () => {
    const history = useHistory();
    const Register = () => {
    history.push("/register");
  }
    const Appointment = () => {
    history.push("/appointment");
  }
    const onFinish = (values) => {
    console.log('Success:', values);
  };
  
  return (
    <div class="body1">
        <div>
            <img src='/image/img2.png' class="img2"/>
        </div>
        <h1 class="good">Good morning!</h1>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{remember: true}}
                onFinish={onFinish}
                autoComplete="off"
                >
                <p><strong>Log in into your account</strong></p>
                <label>Email</label>
                <Form.Item
                  name= "email"
                  rules={[{required: true, message: 'Please input your name!'}]}
                  >
                  <Input />
                </Form.Item>
                <label>Password</label>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!'}]}
                  >
                  <Input.Password />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button" onClick={Appointment} icon={<LoginOutlined />}>
                    Log in
                  </Button>
                </Form.Item>
                <Form.Item> 
                  <Forgot/>
                  <div className="register-link">
                  Or <a href="" onClick={Register}>Don't have an account? Register here.</a>
                  </div>
                </Form.Item>
            </Form>
    </div>
  )
}

export default Land