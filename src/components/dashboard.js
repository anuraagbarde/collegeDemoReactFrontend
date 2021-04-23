import React from 'react';
import ChartBasic from './chartBasic';
import { Space, Row, Card, Col } from 'antd';
import CollegeList from './collegeList';


const Dashboard = (props) => {
    return (
            <Row align="center">
                <Col>
                    <Space direction="vertical">
                        <Card>
                            <ChartBasic />
                        </Card>
                        <Card>
                            <CollegeList filterBy="none" />
                        </Card>
                        <Card title="Made by:">
                            <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/anuraagbarde">Anuraag Barde</a><br />
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/anuraagbarde/collegeDemoReactFrontend">Git Front-end ReactJS</a><br />
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/anuraagbarde/collegeDemoNodeBackend">Git Back-end Node/Express</a><br />
                            <a target="_blank" rel="noopener noreferrer" href="https://bardecollegedemo.herokuapp.com/">Back-end Node/Express Server</a><br />
                        </Card>
                    </Space>
                </Col>
            </Row>
    );
}

export default Dashboard;