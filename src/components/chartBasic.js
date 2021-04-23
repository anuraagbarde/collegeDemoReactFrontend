import { Chart } from "react-google-charts";
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { Row, Col } from 'antd';
var config = require('../config');

const ChartBasic = (props) => {
    const [stateArray, setStateArray] = useState([['State', 'Count']]);
    const [isStateArrayReady, setIsStateArrayReady] = useState(false);

    const [coursesArray, setCoursesArray] = useState([['Courses', 'Count']]);
    const [isCoursesArrayReady, setIsCoursesArrayReady] = useState(false);

    useEffect(() => {
        fetch(`${config.SERVERURL}chartData/list/StatesvsCount/`)
            .then(res => res.json())
            .then(data => {
                setStateArray([...stateArray, ...data])
                console.log(stateArray);
                setIsStateArrayReady(true);
            });

        fetch(`${config.SERVERURL}chartData/list/CoursesvsCount/`)
            .then(res => res.json())
            .then(data => {
                setCoursesArray([...coursesArray, ...data])
                console.log(coursesArray);
                setIsCoursesArrayReady(true);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const stateChart = (
        <div margin="100">
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={isStateArrayReady}
                data={stateArray}
                options={{
                    title: 'Colleges in State',
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )

    const coursesChart = (
        <div margin="100">
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={isCoursesArrayReady}
                data={coursesArray}
                options={{
                    title: 'Courses available in colleges',
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )

    const loadingchart =
        (
            <div>
                <Spin />
            </div>
        )

    return (
        <div>
            <Row justify="center" gutter="10%">
                <Col span={12} type="flex" align="middle">
                { isStateArrayReady ? stateChart : loadingchart}
                </Col>
                <Col span={12} type="flex" align="middle">
                { isCoursesArrayReady ? coursesChart : loadingchart}
                </Col>
            </Row>
        </div>
    );
}

export default ChartBasic;

