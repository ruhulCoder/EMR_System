import React from 'react'
import { GlobalOutlined } from '@ant-design/icons'
import "../Styles/AboveNavbar.css"

const AboveNavbar = () => {
  return (
    <div class='black-strip'>
       <h7>User Name</h7>
            <div class='translate-box'>
              <GlobalOutlined className='img'/>
                <select class='lang-select'>
                  <option value="en">EN</option>
                  <option value="hn">HN</option>
                </select>
            </div>
    </div>
  )
}

export default AboveNavbar