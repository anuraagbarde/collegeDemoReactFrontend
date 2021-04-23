import React from 'react';
import ChartBasic from './chartBasic';
import { Space, Row, Card } from 'antd';
import CollegeList from './collegeList';


const Dashboard = (props) => {
    return (
        <div>
            <Row align="center">

            <Space direction="vertical">
                    <Card>
                        <ChartBasic />
                    </Card>
                    <Card>
                        <CollegeList filterBy="none"/>
                    </Card>
            </Space>
            </Row>
        </div>
    );
}

export default Dashboard;