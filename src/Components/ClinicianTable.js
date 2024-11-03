import React from 'react'
import { Table } from 'antd';
import "../Styles/ClinicianTable.css"

const onChange = ( sorter ) => {
    console.log('params', sorter );
  };

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Speciality',
      dataIndex: 'speciality',
    },
    {
      title: 'Position',
      dataIndex: 'position',
    },
    {
      title: 'Creation Date',
      dataIndex: 'date',
      sorter: {
        compare: (a, b) => a.date - b.date,
        multiple: 1,
      },
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      render: (text) => <a>{text}</a>,
    }
  ];
  
  const data = [
    {
        name: 'Adam Johnson',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carla Wilson',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carl Davis',
        speciality: 'Therapist',
        position: 'Nurse',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Gabriel Morgan',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Victorian Sanders',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Adam Johnson',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carla Wilson',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carl Davis',
        speciality: 'Therapist',
        position: 'Nurse',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Gabriel Morgan',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Victorian Sanders',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Adam Johnson',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carla Wilson',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carl Davis',
        speciality: 'Therapist',
        position: 'Nurse',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Gabriel Morgan',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Victorian Sanders',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Adam Johnson',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carla Wilson',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carl Davis',
        speciality: 'Therapist',
        position: 'Nurse',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Gabriel Morgan',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Victorian Sanders',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Adam Johnson',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carla Wilson',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carl Davis',
        speciality: 'Therapist',
        position: 'Nurse',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Gabriel Morgan',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Victorian Sanders',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Adam Johnson',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carla Wilson',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carl Davis',
        speciality: 'Therapist',
        position: 'Nurse',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Gabriel Morgan',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Victorian Sanders',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Adam Johnson',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carla Wilson',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carl Davis',
        speciality: 'Therapist',
        position: 'Nurse',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Gabriel Morgan',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Victorian Sanders',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Adam Johnson',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carla Wilson',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carl Davis',
        speciality: 'Therapist',
        position: 'Nurse',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Gabriel Morgan',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Victorian Sanders',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Adam Johnson',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carla Wilson',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carl Davis',
        speciality: 'Therapist',
        position: 'Nurse',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Gabriel Morgan',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Victorian Sanders',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Adam Johnson',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carla Wilson',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carl Davis',
        speciality: 'Therapist',
        position: 'Nurse',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Gabriel Morgan',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Victorian Sanders',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Adam Johnson',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carla Wilson',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carl Davis',
        speciality: 'Therapist',
        position: 'Nurse',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Gabriel Morgan',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Victorian Sanders',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Adam Johnson',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carla Wilson',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carl Davis',
        speciality: 'Therapist',
        position: 'Nurse',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Gabriel Morgan',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Victorian Sanders',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Adam Johnson',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carla Wilson',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carl Davis',
        speciality: 'Therapist',
        position: 'Nurse',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Gabriel Morgan',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Victorian Sanders',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Adam Johnson',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carla Wilson',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carl Davis',
        speciality: 'Therapist',
        position: 'Nurse',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Gabriel Morgan',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Victorian Sanders',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Adam Johnson',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carla Wilson',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carl Davis',
        speciality: 'Therapist',
        position: 'Nurse',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Gabriel Morgan',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Victorian Sanders',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Adam Johnson',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carla Wilson',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carl Davis',
        speciality: 'Therapist',
        position: 'Nurse',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Gabriel Morgan',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Victorian Sanders',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Adam Johnson',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carla Wilson',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carl Davis',
        speciality: 'Therapist',
        position: 'Nurse',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Gabriel Morgan',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Victorian Sanders',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Adam Johnson',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carla Wilson',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carl Davis',
        speciality: 'Therapist',
        position: 'Nurse',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Gabriel Morgan',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Victorian Sanders',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Adam Johnson',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carla Wilson',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carl Davis',
        speciality: 'Therapist',
        position: 'Nurse',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Gabriel Morgan',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Victorian Sanders',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Adam Johnson',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carla Wilson',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Carl Davis',
        speciality: 'Therapist',
        position: 'Nurse',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Gabriel Morgan',
        speciality: 'Surgeon',
        position: 'Head Department',
        action: 'Edit',
        date: '12/24/2021'
    },
    {
        name: 'Victorian Sanders',
        speciality: 'Cardiologist',
        position: 'Practitioner',
        action: 'Edit',
        date: '12/24/2021'
    },
  ];

const ClinicianTable = () => {
  return (
    <Table
        className='table3'
        columns={columns}
        dataSource={data}
        onChange={onChange}
        // pagination={{ pageSize: 20 }}
        bordered
    />
  )
}

export default ClinicianTable