import React from 'react'
import { Table, Tag } from 'antd';
import "../Styles/AppointmentTable.css"

const onChange = ( sorter ) => {
    console.log('params', sorter );
  };

  const columns = [
    {
      title: 'Patient',
      dataIndex: 'pname',
    },
    {
      title: 'Clinician',
      dataIndex: 'cname',
    },
    {
      title: 'Status',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 6 ? '#6f7ae3' : '#00c1d4';
            return (
              <Tag color={color} key={tag}>
                {tag.toLowerCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Date of Appointment',
      dataIndex: 'date',
      // sorter: {
      //   compare: (a, b) => a.date - b.date,
      //   multiple: 1,
      // },
      sorter: (a, b) => a.date - b.date,
    },
  ];
  const data = [
    {
      pname: 'John Brown',
      cname: 'Adam Johnson',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jim Green',
      cname: 'Carla Wilson',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Joe Black',
      cname: 'Carl Davis',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jacob Smith',
      cname: 'Gabriel Morgan',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Mason Rivera',
      cname: 'Victoria Sanders',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },                                        
    {
      pname: 'John Brown',
      cname: 'Adam Johnson',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jim Green',
      cname: 'Carla Wilson',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Joe Black',
      cname: 'Carl Davis',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jacob Smith',
      cname: 'Gabriel Morgan',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Mason Rivera',
      cname: 'Victoria Sanders',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },                                        
    {
      pname: 'John Brown',
      cname: 'Adam Johnson',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jim Green',
      cname: 'Carla Wilson',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Joe Black',
      cname: 'Carl Davis',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jacob Smith',
      cname: 'Gabriel Morgan',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Mason Rivera',
      cname: 'Victoria Sanders',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'John Brown',
      cname: 'Adam Johnson',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jim Green',
      cname: 'Carla Wilson',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Joe Black',
      cname: 'Carl Davis',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jacob Smith',
      cname: 'Gabriel Morgan',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Mason Rivera',
      cname: 'Victoria Sanders',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'John Brown',
      cname: 'Adam Johnson',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jim Green',
      cname: 'Carla Wilson',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Joe Black',
      cname: 'Carl Davis',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jacob Smith',
      cname: 'Gabriel Morgan',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Mason Rivera',
      cname: 'Victoria Sanders',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'John Brown',
      cname: 'Adam Johnson',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jim Green',
      cname: 'Carla Wilson',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Joe Black',
      cname: 'Carl Davis',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jacob Smith',
      cname: 'Gabriel Morgan',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Mason Rivera',
      cname: 'Victoria Sanders',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'John Brown',
      cname: 'Adam Johnson',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jim Green',
      cname: 'Carla Wilson',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Joe Black',
      cname: 'Carl Davis',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jacob Smith',
      cname: 'Gabriel Morgan',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Mason Rivera',
      cname: 'Victoria Sanders',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'John Brown',
      cname: 'Adam Johnson',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jim Green',
      cname: 'Carla Wilson',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Joe Black',
      cname: 'Carl Davis',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jacob Smith',
      cname: 'Gabriel Morgan',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Mason Rivera',
      cname: 'Victoria Sanders',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'John Brown',
      cname: 'Adam Johnson',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jim Green',
      cname: 'Carla Wilson',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Joe Black',
      cname: 'Carl Davis',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jacob Smith',
      cname: 'Gabriel Morgan',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Mason Rivera',
      cname: 'Victoria Sanders',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'John Brown',
      cname: 'Adam Johnson',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jim Green',
      cname: 'Carla Wilson',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Joe Black',
      cname: 'Carl Davis',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jacob Smith',
      cname: 'Gabriel Morgan',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Mason Rivera',
      cname: 'Victoria Sanders',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'John Brown',
      cname: 'Adam Johnson',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jim Green',
      cname: 'Carla Wilson',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Joe Black',
      cname: 'Carl Davis',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jacob Smith',
      cname: 'Gabriel Morgan',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Mason Rivera',
      cname: 'Victoria Sanders',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'John Brown',
      cname: 'Adam Johnson',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jim Green',
      cname: 'Carla Wilson',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Joe Black',
      cname: 'Carl Davis',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jacob Smith',
      cname: 'Gabriel Morgan',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Mason Rivera',
      cname: 'Victoria Sanders',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {                                                     
      pname: 'John Brown',
      cname: 'Adam Johnson',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jim Green',
      cname: 'Carla Wilson',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Joe Black',
      cname: 'Carl Davis',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jacob Smith',
      cname: 'Gabriel Morgan',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Mason Rivera',
      cname: 'Victoria Sanders',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'John Brown',
      cname: 'Adam Johnson',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jim Green',
      cname: 'Carla Wilson',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Joe Black',
      cname: 'Carl Davis',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jacob Smith',
      cname: 'Gabriel Morgan',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Mason Rivera',
      cname: 'Victoria Sanders',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'John Brown',
      cname: 'Adam Johnson',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jim Green',
      cname: 'Carla Wilson',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Joe Black',
      cname: 'Carl Davis',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jacob Smith',
      cname: 'Gabriel Morgan',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Mason Rivera',
      cname: 'Victoria Sanders',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'     
    },
    {
      pname: 'John Brown',
      cname: 'Adam Johnson',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jim Green',
      cname: 'Carla Wilson',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Joe Black',
      cname: 'Carl Davis',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jacob Smith',
      cname: 'Gabriel Morgan',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Mason Rivera',
      cname: 'Victoria Sanders',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'John Brown',
      cname: 'Adam Johnson',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jim Green',
      cname: 'Carla Wilson',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Joe Black',
      cname: 'Carl Davis',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jacob Smith',
      cname: 'Gabriel Morgan',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Mason Rivera',
      cname: 'Victoria Sanders',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'John Brown',
      cname: 'Adam Johnson',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jim Green',
      cname: 'Carla Wilson',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Joe Black',
      cname: 'Carl Davis',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jacob Smith',
      cname: 'Gabriel Morgan',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Mason Rivera',
      cname: 'Victoria Sanders',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    
    {
      pname: 'John Brown',
      cname: 'Adam Johnson',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jim Green',
      cname: 'Carla Wilson',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Joe Black',
      cname: 'Carl Davis',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jacob Smith',
      cname: 'Gabriel Morgan',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Mason Rivera',
      cname: 'Victoria Sanders',
      tags: ['booked'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'John Brown',
      cname: 'Adam Johnson',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jim Green',
      cname: 'Carla Wilson',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Joe Black',
      cname: 'Carl Davis',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Jacob Smith',
      cname: 'Gabriel Morgan',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
    {
      pname: 'Mason Rivera',
      cname: 'Victoria Sanders',
      tags: ['completed'],
      date: '12/24/2021  12:40 - 13:00'
    },
  ];

const AppointmentTable = () => {
    return (
        <Table
            className='table1'
            columns={columns}
            dataSource={data}
            onChange={onChange}
            // pagination={{ pageSize: 20 }}
            bordered
        />
    )
} 

export default AppointmentTable