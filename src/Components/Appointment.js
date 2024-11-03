import React from "react";
import Navbar from "./Navbar";
import "../Styles/Appointment.css";
import { DatePicker, Space, Input } from "antd";
import AppointmentTable from "./AppointmentTable";
// import AboveNavbar from "./AboveNavbar";

const { RangePicker } = DatePicker;
const { Search } = Input;
const onSearch = (value) => console.log(value);

const Appointment = () => {
  return (
    <div>
      {/* <AboveNavbar /> */}
      <Navbar />
      <div class="lowerbar">
        <div class="appointment">
          <label>Appointments</label>
        </div>
        <div class="innerbar">
          <Space class="search-icon">
            <Search
              placeholder="Search a patient"
              allowClear
              onSearch={onSearch}
              style={{ width: 250 }}
            />
          </Space>
          <Space class="search-icon">
            <Search
              placeholder="Search a clinician"
              allowClear
              onSearch={onSearch}
              style={{ width: 250 }}
            />
          </Space>
          <Space class="date-box">
            <RangePicker style={{ width: 250 }} />
          </Space>
          <button type="button" class="resetbtn">
            Reset
          </button>
        </div>
        <AppointmentTable />
      </div>
    </div>
  );
};

export default Appointment;
