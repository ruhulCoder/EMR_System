import React from 'react'
import { Table } from 'antd';
import "../Styles/PatientTable.css"

const columns = [
    {
      title: 'Patient',
      dataIndex: 'pname',
    },
    {
      title: 'NHI Number',
      dataIndex: 'nhi',
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      render: (text) => <a>{text}</a>,
    }
  ];
  
  const data = [
    {
        pname: 'John Brown 1',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 2',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 3',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 4',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 5',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 6',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 7',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 8',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 9',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 10',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 11',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 12',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 13',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 14',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 15',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 16',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 17',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 18',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 19',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 20',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 21',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 22',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 23',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 24',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 25',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 26',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 27',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 28',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 29',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 30',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 31',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 32',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 33',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 34',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 35',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 36',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 37',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 38',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 39',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 40',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 41',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 42',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 43',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 44',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 45',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 46',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 47',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 48',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 49',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 50',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 51',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 52',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 53',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 54',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 55',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 56',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 57',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 58',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 59',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 60',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 61',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 62',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 63',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 64',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 65',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 66',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 67',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 68',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 69',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 70',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 71',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 72',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 73',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 74',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 75',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 76',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 77',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 78',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 79',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 80',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 81',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 82',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 83',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 84',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 85',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 86',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 87',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 88',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 89',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 90',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 91',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 92',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 93',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 94',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 95',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 96',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 97',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 98',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 99',
        nhi: 'NHI100002',
        action: 'Edit',
    },
    {
        pname: 'John Brown 100',
        nhi: 'NHI100002',
        action: 'Edit',
    },
  ];
  
const PatientTable = () => {
  return (
    <Table
        className='table2'
        columns={columns}
        dataSource={data}
        // pagination={{ pageSize: 20}}
        bordered
    />
  )
}

export default PatientTable