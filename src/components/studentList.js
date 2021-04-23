import React, { useState, useEffect } from 'react';
import { Table, Tag } from 'antd';
import { Link } from 'react-router-dom';
var config = require('../config');



const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => (a.name).localeCompare(b.name),
        sortDirections: ['descend', 'ascend'],
        render: (name, record, idx) => {
            return (< Link to={`/student/id/${record._id}`}>{name}</Link>)
        }
    },
    {
        title: 'Year of Batch',
        dataIndex: 'yearOfBatch',
        key: 'yearOfBatch',
        sorter: (a, b) => (a.yearOfBatch).localeCompare(b.yearOfBatch),
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Skills',
        key: 'skills',
        dataIndex: 'skills',
        render: skills => (
            <>
                {skills.map(skill => {
                    let color = skill.length > 10 ? 'geekblue' : 'green';
                    if (skill === 'node' || skill === "react" || skill === "mongo" || skill === "multi-processing") {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={skill}>
                            {skill.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    }
]


const StudentList = (props) => {
    const [studentListData, setStudentListData] = useState([]);
    const [studentListDataLoading, setStudentListDataLoading] = useState(true);

    useEffect(() => {
        fetch(`${config.SERVERURL}student/college/${props.collegeid}/`)
            .then(res => res.json())
            .then(data => setStudentListData(data))
            .then(t => setStudentListDataLoading(false))
            .catch(err => alert(err));
    }

        // eslint-disable-next-line react-hooks/exhaustive-deps
        , [])

    return (
        <div>
            <Table columns={columns} dataSource={studentListData} loading={studentListDataLoading} />
        </div>);
}

export default StudentList;