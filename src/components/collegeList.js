import React, { useState, useEffect } from 'react';
import { Table, Tag } from 'antd';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Space, Row, Card, Col } from 'antd';
var config = require('../config');

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => (a.name).localeCompare(b.name),
        sortDirections: ['descend', 'ascend'],
        render: (name, record, idx) => {
            return (< Link to={`/college/id/${record._id}`}>{name}</Link>)
        }
    },
    {
        title: 'City',
        dataIndex: 'city',
        key: 'city',
        sorter: (a, b) => (a.city).localeCompare(b.city),
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'State',
        dataIndex: 'state',
        key: 'state',
        sorter: (a, b) => (a.state).localeCompare(b.state),
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Year Founded',
        dataIndex: 'yearFounded',
        key: 'yearFounded',
        sorter: (a, b) => a.yearFounded - b.yearFounded,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Number of Students',
        dataIndex: 'noOfStudents',
        key: 'noOfStudents',
        sorter: (a, b) => a.noOfStudents - b.noOfStudents,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Courses',
        key: 'courses',
        dataIndex: 'courses',
        render: courses => (
            <>
                {courses.map(course => {
                    let color = course.length > 10 ? 'geekblue' : 'green';
                    if (course === 'Civil') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={course}>
                            {course.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    }
]


const CollegeList = (props) => {
    const [collegeListData, setCollegeListData] = useState([]);
    const [collegeListDataLoading, setCollegeListDataLoading] = useState(true);
    const { statename } = useParams();
    const { coursename } = useParams();
    const { collegeid } = useParams();

    useEffect(() => {
        if (props.filterBy === "simillar") {
            fetch(`${config.SERVERURL}college/simillar/${collegeid}/`)
                .then(res => res.json())
                .then(data => setCollegeListData(data))
                .then(t => setCollegeListDataLoading(false))
                .catch(err => alert(err));
        }
        if (props.filterBy === "course") {
            fetch(`${config.SERVERURL}college/course/${coursename}/`)
                .then(res => res.json())
                .then(data => setCollegeListData(data))
                .then(t => setCollegeListDataLoading(false))
                .catch(err => alert(err));
        }
        if (props.filterBy === "state") {
            fetch(`${config.SERVERURL}college/state/${statename}/`)
                .then(res => res.json())
                .then(data => setCollegeListData(data))
                .then(t => setCollegeListDataLoading(false))
                .catch(err => alert(err));
        }
        if (props.filterBy === "none") {
            fetch(`${config.SERVERURL}college/list/`)
                .then(res => res.json())
                .then(data => setCollegeListData(data))
                .then(t => setCollegeListDataLoading(false))
                .catch(err => alert(err));
        }
    }

        // eslint-disable-next-line react-hooks/exhaustive-deps
        , [])

    return (
        <div>
            <Row align="center">
                <Col>
                <Space direction="vertical">
                    <Card>
                        <Table columns={columns} dataSource={collegeListData} loading={collegeListDataLoading} />

                    </Card>
                </Space>
                </Col>
            </Row>
        </div>);
}

export default CollegeList;