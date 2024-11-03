import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Form, Input } from 'antd';
import "../Styles/Register.css"

const Register = () => {
    const history = useHistory();
    const Land = () => {
    history.push("/");
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
                className="login-form2"
                initialValues={{remember: true}}
                onFinish={onFinish}
                autoComplete="off"
                >
                <p><strong>Register your account</strong></p>
                <label>Full Name</label>
                <Form.Item
                  name= "name"
                  rules={[{required: true, message: 'Please input your name!'}]}
                  >
                  <Input />
                </Form.Item>
                <label>Email</label>
                <Form.Item
                  name= "email"
                  rules={[{required: true, message: 'Please input your email!'}]}
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
                  <Button type="primary" htmlType="submit" className="login-form-button"  onClick={Land}>
                    Register
                  </Button>
                  Or <a href=""  onClick={Land}>Already have an account? Login here.</a>
                </Form.Item>
            </Form>
    </div>
  )
}

export default Register