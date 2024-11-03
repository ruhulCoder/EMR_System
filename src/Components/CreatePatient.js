import React from 'react'
import { Button, Modal, Form, Input, DatePicker, Select } from 'antd'
import { useState } from 'react'
import "../Styles/CreatePatient.css"
import { PlusOutlined } from '@ant-design/icons'

function CreatePatient() {

  const [modal1Open, setModal1Open] = useState(false);
  const handleOk = () => {setModal1Open(false)};
  const handleCancel = () => {setModal1Open(false)};

  return (
    <div>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => setModal1Open(true)} className='createpatient'>Create Patient</Button>
        <Modal 
            title="Create Patient"
            centered
            open={modal1Open}
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
            width={770}
            >
            <Form className='border-line'>
                <div className='maincolumn'>
                    <div className='column1'>
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
                        <div className='second'>Date of Birth</div>
                        <Form.Item>
                        <DatePicker style={{width: 350}}/>
                        </Form.Item>
                        <div className='second'>Gender</div>
                        <Form.Item>
                        <Select>
                            <Select.Option value="male">Male</Select.Option>
                            <Select.Option avlue="female">Female</Select.Option>
                        </Select>
                        </Form.Item>
                    </div>
                    <div className='column2'>
                        <div className='first'>Email</div>
                        <Form.Item>
                        <Input />
                        </Form.Item>
                        <div className='second'>Phone Number</div>
                        <Form.Item>
                        <Input />
                        </Form.Item>
                        <div className='second'>Type of Insurance</div>
                        <Form.Item>
                        <Select style={{width: 350}}>
                            <Select.Option value="abc">ABC</Select.Option>
                            <Select.Option value="xyz">XYZ</Select.Option>
                        </Select>
                        </Form.Item>
                        <div className='second'>Insurance Number</div>
                        <Form.Item>
                        <Input />
                        </Form.Item>
                        <div className='second'>NHI Number</div>
                        <Form.Item>
                        <Input />
                        </Form.Item>
                    </div>
                </div>
            </Form>
        </Modal>
    </div>
  )
}

export default CreatePatient