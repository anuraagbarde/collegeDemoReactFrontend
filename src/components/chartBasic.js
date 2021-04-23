import { Chart } from "react-google-charts";
import React, { useState, useEffect} from 'react';
import { Spin } from 'antd';
import { Row, Col, Card } from 'antd';
import { useHistory } from 'react-router-dom'
var config = require('../config');

const ChartBasic = (props) => {
    const history = useHistory(); 
    const [stateArray, setStateArray] = useState([['State', 'Count']]);
    const [isStateArrayReady, setIsStateArrayReady] = useState(false);

    const [coursesArray, setCoursesArray] = useState([['Courses', 'Count']]);
    const [isCoursesArrayReady, setIsCoursesArrayReady] = useState(false);

    useEffect(() => {
        fetch(`${config.SERVERURL}chartData/list/StatesvsCount/`)
            .then(res => res.json())
            .then(data => {
                setStateArray([...stateArray, ...data])
                setIsStateArrayReady(true);
            });

        fetch(`${config.SERVERURL}chartData/list/CoursesvsCount/`)
            .then(res => res.json())
            .then(data => {
                setCoursesArray([...coursesArray, ...data])
                setIsCoursesArrayReady(true);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const stateChart = (
        <div >
            <Chart
                // width={'500px'}
                height={'400px'}
                chartType="PieChart"
                loader={isStateArrayReady}
                data={stateArray}
                options={{
                    title: 'Colleges in State',
                    pieHole: 0.35,
                }}
                chartEvents={[
                    {
                        eventName: "select",
                        callback({ chartWrapper }) {
                            history.push('/college/state/' + stateArray[chartWrapper.getChart().getSelection()[0].row + 1][0] ) 
                        }
                    }
                ]}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )

    const coursesChart = (
        <div >
            <Chart
                // width={"100%"}
                height={'400px'}
                chartType="PieChart"
                loader={isCoursesArrayReady}
                data={coursesArray}
                options={{
                    title: 'Courses available in colleges',
                    pieHole: 0.35,
                }}
                chartEvents={[
                    {
                        eventName: "select",
                        callback({ chartWrapper }) {
                            history.push('/college/course/' + coursesArray[chartWrapper.getChart().getSelection()[0].row + 1][0] ) 
                        }
                    }
                ]}
    
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
            <Row justify="center" gutter="10">
                <Col type="flex" align="middle">
                    <Card>
                        {isStateArrayReady ? stateChart : loadingchart}

                    </Card>
                </Col>
                <Col type="flex" align="middle">
                    <Card>
                        {isCoursesArrayReady ? coursesChart : loadingchart}

                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default ChartBasic;

