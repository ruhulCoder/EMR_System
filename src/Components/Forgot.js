import React from 'react'
import { Button, Modal, Form, Input} from 'antd'
import { useState } from 'react'
import '../Styles/Forgot.css'

function Forgot() {

    const [modalForgot, setModalForgot] = useState(false);
    const handleOk = () => {setModalForgot(false)};
    const handleCancel = () => {setModalForgot(false)};

  return (
    <div>
        <div className='forgotpassword'>
        <Button type="link" onClick={() => setModalForgot(true)} >
        Forgot password?
        </Button>
        </div>
        <Modal 
            title="Change Password"
            centered
            open={modalForgot}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
            <Button key="back" onClick={handleOk}>
            Cancel
            </Button>,
            <Button
            key="submit"
            type="primary"
            onClick={handleCancel}
            >
            Save
            </Button>,
            ]}
            width={400}
            >
            <Form className='line1'
                >
                <div className='first'>Email</div>
                <Form.Item>
                <Input />
                </Form.Item>
                <div className='second'>New Password</div>
                <Form.Item>
                <Input.Password />
                </Form.Item>
                <div className='second'>Confirm Password</div>
                <Form.Item>
                <Input.Password />
                </Form.Item>
            </Form>
        </Modal>
    </div>
  )
}

export default Forgot