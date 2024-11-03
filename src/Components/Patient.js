import React from 'react'
import Navbar  from './Navbar'
import "../Styles/Patient.css"
import { Input, Space } from 'antd';
import CreatePatient from './CreatePatient';
import PatientTable from './PatientTable';
// import AboveNavbar from "./AboveNavbar";

const { Search } = Input;
const onSearch = (value) => console.log(value);

const Patient = () => {
  return (
    <div>
      {/* <AboveNavbar /> */}
      <Navbar/>
        <div class="lowerbar">
          <div class="patient">
            <label>Patients</label>
          </div>
          <CreatePatient/>
              <div class="innerbar">
                <Space class="search-icon">
                  <Search
                    placeholder="Search a patient"
                    allowClear
                    onSearch={onSearch}
                    style={{width: 250
                    }}
                  />
                </Space>
                <Space class="search-icon">
                  <Search
                    placeholder="Search NHI Number"
                    allowClear
                    onSearch={onSearch}
                    style={{width: 250}}
                  />
                </Space>
                <button type="button" class="resetbtn2">Reset</button>
              </div>
              <PatientTable/>   
        </div>
    </div>
  )
}

export default Patient