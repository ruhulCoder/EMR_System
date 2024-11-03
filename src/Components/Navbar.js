import React from 'react'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { Dropdown, Space, Avatar } from 'antd';
import { UserOutlined, SettingOutlined, LockOutlined } from '@ant-design/icons'
import "../Styles/Navbar.css"

const Navbar = () => {
    const history = useHistory();
    const Land = () => {
    history.push("/");
  }

  const items = [
    {
      key: '1',
      label: (
        <a target="" rel="" href=""><UserOutlined style={{marginRight: 10}}/>Profile</a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="" rel="" href=""><SettingOutlined style={{marginRight: 10}}/>Setting</a>
        
      ),
    },
    {
      key: '3',
      label: (
        <a target="" rel="" href="" onClick={Land}><LockOutlined style={{marginRight: 10}}/>Log Out</a>
      ),
    },
  ];

  return (
    <div>
        <div class="navbar">
            <img src='/image/img5.png' class="img5"/>
            <div class="navlist">
                <li><NavLink to = "/appointment">Appointments</NavLink></li>
                <li><NavLink to = "/patient">Patients</NavLink></li>
                <li><NavLink to = "/clinician">Clinicians</NavLink></li>
                <li><NavLink to = "/questionnaire">Questionnaires</NavLink></li>    
            </div>
            <div class="user">
              {/* <Button type="button" className="logoutbtn" onClick={Land}>Logout</Button>
              <div class="user-image">
                 <img src='/image/img6.png' class="img6"/>
              </div> */}
              <Space direction="vertical">
                <Space wrap>
                  <Dropdown
                    menu={{
                      items,
                    }}
                    placement="bottomLeft"
                  >
                    <Avatar size={50} icon={<UserOutlined />} />
                  </Dropdown>
                </Space>
              </Space>
              {/* <h7>Ruhul Ain</h7>
            </div>
            <div class="translate-box">
              <GlobalOutlined className="img7"/> */}
              {/* <img src='/image/img7.png' class="img7"/> */}
              {/* <div class="lang-box">
                <select class="lang-select">
                  <option>EN</option>
                  <option>HN</option>
                </select>
              </div>   */}
            </div>
        </div>
    </div>
  )
}

export default Navbar