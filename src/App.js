import 'antd/dist/antd.css';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard';
import CollegeDetail from './components/collegeDetail';
import StudentDetail from './components/studentDetail';
import NavBar from './components/navBar';
import CollegeList from './components/collegeList';

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
          <Route exact path='/college/id/:collegeid' component={CollegeDetail}></Route>
          <Route exact path='/student/id/:studentid' component={StudentDetail}></Route>
          <Route exact path='/college/state/:statename' render={props => <CollegeList filterBy="state" {...props} />}></Route>
          <Route exact path='/college/course/:coursename' render={props => <CollegeList filterBy="course" {...props} />}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
