import React from "react";
import Navbar from "./Navbar";
import "../Styles/Clinician.css";
import { Input, Space } from "antd";
import CreateClinician from "./CreateClinician";
import ClinicianTable from "./ClinicianTable";
// import AboveNavbar from "./AboveNavbar";

const { Search } = Input;
const onSearch = (value) => console.log(value);

const Clinician = () => {
  return (
    <div>
      {/* <AboveNavbar /> */}
      <Navbar />
      <div class="lowerbar">
        <div class="clinician">
          <label>Clinicians</label>
        </div>
        <CreateClinician/>
        <div class="innerbar">
          <Space direction="vertical" class="search-icon">
            <Search
              placeholder="Search by name"
              allowClear
              onSearch={onSearch}
              style={{ width: 250 }}
            />
          </Space>
          <button type="button" class="resetbtn3">
            Reset
          </button>
        </div>
        <ClinicianTable />
      </div>
    </div>
  );
};

export default Clinician;
