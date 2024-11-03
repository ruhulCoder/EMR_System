import React from 'react'
import { Button, Modal, Form, Input, Select } from 'antd'
import { useState } from 'react'
import "../Styles/CreateClinician.css"
import { PlusOutlined } from '@ant-design/icons'


function CreateClinician() {

    const [modal2Open, setModal2Open] = useState(false);
    const handleOk = () => {setModal2Open(false)};
    const handleCancel = () => {setModal2Open(false)};

  return (
    <div>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => setModal2Open(true)} className='createclinician'>Create Clinician</Button>
        <Modal 
            title="Create Clinician"
            centered
            open={modal2Open}
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
                <div className='first'>First Name</div>
                <Form.Item>
                <Input />
                </Form.Item>
                <div className='second'>Middle Name</div>
                <Form.Item>
                <Input />
                </Form.Item>
                <div className='second'>Last Name</div>
                <Form.Item>
                <Input />
                </Form.Item>
                <div className='second'>Email</div>
                <Form.Item>
                <Input />
                </Form.Item>
                <div className='second'>Phone Number</div>
                <Form.Item>
                <Input />
                </Form.Item>
                <div className='second'>Speciality</div>
                <Form.Item>
                <Select>
                    <Select.Option value="surgeon">Surgeon</Select.Option>
                </Select>
                </Form.Item>
                <div className='second'>Position</div>
                <Form.Item>
                <Select>
                    <Select.Option value="practitioner">Practitioner</Select.Option>
                </Select>
                </Form.Item> 
            </Form>
        </Modal>
    </div>
  )
}

export default CreateClinician