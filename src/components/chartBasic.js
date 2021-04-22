import { Chart } from "react-google-charts";
import React, { useState, useEffect } from 'react';

const ChartBasic = (props) => {
    const [stateArray, setStateArray] = useState([['State', 'Count']]);
    const [isStateArrayReady, setIsStateArrayReady] = useState(false);
    
    const [coursesArray, setCoursesArray] = useState([['Courses', 'Count']]);
    const [isCoursesArrayReady, setIsCoursesArrayReady] = useState(false);
    
    useEffect(() => {
        fetch("http://localhost:9000/chartData/list/StatesvsCount/")
            .then(res => res.json())
            .then(data => {
                setStateArray([...stateArray,...data])
                console.log(stateArray);
                setIsStateArrayReady(true);
            });

        fetch("http://localhost:9000/chartData/list/CoursesvsCount/")
            .then(res => res.json())
            .then(data => {
                setCoursesArray([...coursesArray,...data])
                console.log(coursesArray);
                setIsCoursesArrayReady(true);
            });
    }, [])

    const stateChart = (
        <div>
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
        <div>
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
            <p>loading</p>
        </div>
    )

    return (
        <div>
            
            { isStateArrayReady? stateChart : loadingchart }
            
            { isCoursesArrayReady? coursesChart : loadingchart }
        </div>
    );
}

export default ChartBasic;

