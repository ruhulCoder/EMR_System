import React from 'react'
import Navbar from './Navbar'
import "../Styles/Questionnaire.css"
import { Input, Form, Select, Radio, Checkbox, Button } from 'antd';
import { SaveOutlined, PlusOutlined, DeleteFilled } from '@ant-design/icons'
// import AboveNavbar from "./AboveNavbar";

const Questionnaire = () => {
  return (
    <div>
        {/* <AboveNavbar /> */}
        <Navbar />
        <div class="lowerbarq">
            <div class="questionnaire">
                <label>New Questionnaire</label>
            </div>
            <Form>
                <div className='mainbox'>
                    <div className='box1'>
                        <label className='title-status'>Title:</label>
                        <Form.Item>
                        <Input />
                        </Form.Item>
                    </div>
                    <div className='box2'>
                        <label className='title-status'>Status:</label>
                        <Form.Item>
                        <Select style={{width: 150}}>
                            <Select.Option value="active">Active</Select.Option>
                            <Select.Option value="deactive">Deactive</Select.Option>
                        </Select>
                        </Form.Item>
                    </div>
                </div>
            </Form>
        </div>
        <div className='twobar'>
            <div className='middlebar'>
                <Button type="button" icon={<PlusOutlined />} className='imggroup'>New Group</Button>
                <Button type="primary" icon={<PlusOutlined />} className='imgelement'>New Element</Button>
                <p className='drag'>Drag element to the form</p>
            </div>
            <div className='sidebar'>
                <Form>
                    <div className='lesson'>
                        <h3>Element settings</h3>
                        <Button type="button" icon={<DeleteFilled />} className='imgdelete'></Button>
                    </div>
                    <label>Last Name</label>
                    <Form.Item>
                        <Input />
                    </Form.Item>
                    <label>Field Title</label>
                    <Form.Item>
                        <Input />
                    </Form.Item>
                    <label>Field Type</label>
                    <Form.Item>
                        <Radio.Group>
                            <Radio.Button value="decimal">Decimal</Radio.Button>
                            <Radio.Button value="text">Text</Radio.Button>
                            <Radio.Button value="choice">Choice</Radio.Button>
                            <Radio.Button value="date">Date</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item>
                        <Checkbox>Repetitive</Checkbox>
                    </Form.Item>
                </Form>
            </div>
        </div>
        <div className='lowermiddlebar'>
            <div className='lowermiddlebarform'>
                <Form className='formbox'> 
                    <h2 style={{fontSize: 20}}>General Information</h2> 
                    <label>First Name</label>
                    <Form.Item>
                    <Input />
                    </Form.Item>
                    <label>Middle Name</label>
                    <Form.Item>
                    <Input />
                    </Form.Item>
                    <label>Last Name</label>
                    <Form.Item>
                    <Input />
                    </Form.Item>
                    <h2>Habits</h2>               
                </Form>
            </div>
        </div>
        {/* <div className='sidebar'>
            <Form className='sideboxform'>
                <div className='lesson'>
                    <h3>Element settings</h3>
                    <Button type="primary" icon={<DeleteFilled />} className='imgdelete'></Button>
                </div>
                <div>Last Name</div>
                <Form.Item>
                    <Input />
                </Form.Item>
                <div>Field Title</div>
                <Form.Item>
                    <Input />
                </Form.Item>
                <div>Field Type</div>
                <Form.Item>
                    <Radio.Group>
                        <Radio.Button value="decimal">Decimal</Radio.Button>
                        <Radio.Button value="text">Text</Radio.Button>
                        <Radio.Button value="choice">Choice</Radio.Button>
                        <Radio.Button name="date">Date</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item>
                    <Checkbox>Repetitive</Checkbox>
                </Form.Item>
            </Form>
        </div> */}
        <div className='lowestbar'>
           <Button type="primary" icon={<SaveOutlined />} className='imgsave'>Save</Button>
        </div>
    </div>
  )
}

export default Questionnaire