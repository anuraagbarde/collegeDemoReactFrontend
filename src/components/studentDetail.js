import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Spin } from 'antd';
import { Descriptions } from 'antd';




import { SERVERURL } from '../config';

const StudentDetail = (props) => {
    const { studentid } = useParams();
    const [studentData, setStudentData] = useState({});
    const [studentDataLoading, setStudentDataLoading] = useState(true);
    useEffect(() => {
        fetch(`${SERVERURL}student/id/${studentid}`)
            .then(res => res.json())
            .then(data => { console.log(data); return data; })
            .then(data => setStudentData(data[0]))
            .then(t => setStudentDataLoading(false));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loading =
        (
            <div>
                <Spin />
            </div>
        )

    const studentDetails = (
        <div>
            
        <Descriptions
          title="Student Details"
          bordered
          column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        >
          <Descriptions.Item label="Name">{studentData.name}</Descriptions.Item>
          <Descriptions.Item label="Year of Batch">{studentData.yearOfBatch}</Descriptions.Item>
          <Descriptions.Item label="College ID">{studentData.college}</Descriptions.Item>
        </Descriptions>
      </div>

    )

    return (
        <div>
            {studentDataLoading ? loading : studentDetails}
        </div>
    );
}

export default StudentDetail;