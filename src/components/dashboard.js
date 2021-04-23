import React from 'react';
import ChartBasic from './chartBasic';
import { Layout } from 'antd';
import CollegeList from './collegeList';
import NavBar from './navBar';

const {Footer, Content } = Layout;


const Dashboard = (props) => {
    return (
        <div>
            <div>
                <Layout>
                    <Content>
                        <ChartBasic />
                        <CollegeList />
                    </Content>
                    <Footer>
                        <NavBar/>
                    </Footer>
                </Layout>
            </div>
        </div>
    );
}

export default Dashboard;