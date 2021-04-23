import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Spin } from 'antd';
import { Descriptions } from 'antd';


import { SERVERURL } from '../config';
import StudentList from './studentList';

const CollegeDetail = (props) => {
    const { collegeid } = useParams();
    const [collegeData, setCollegeData] = useState({});
    const [collegeDataLoading, setCollegeDataLoading] = useState(true);
    useEffect(() => {
        fetch(`${SERVERURL}college/id/${collegeid}`)
            .then(res => res.json())
            .then(data => { console.log(data); return data; })
            .then(data => setCollegeData(data[0]))
            .then(t => setCollegeDataLoading(false));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loading =
        (
            <div>
                <Spin />
            </div>
        )

    const collegeDetails = (
        <div>
            
            
            
            
        <Descriptions
          title="College Details"
          bordered
          column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        >
          <Descriptions.Item label="Name">{collegeData.name}</Descriptions.Item>
          <Descriptions.Item label="City">{collegeData.city}</Descriptions.Item>
          <Descriptions.Item label="State">{collegeData.state}</Descriptions.Item>
          <Descriptions.Item label="Year Founded">{collegeData.yearFounded}</Descriptions.Item>
        </Descriptions>
      </div>

    )

    return (
        <div>
            {collegeDataLoading ? loading : collegeDetails}

            < StudentList collegeid={collegeid} />
        </div>
    );
}

export default CollegeDetail;