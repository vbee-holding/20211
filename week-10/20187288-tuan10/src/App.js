import React from 'react'
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListStudentComponent from './components/ListStudentComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateStudentComponent from './components/CreateStudentComponent';
import EditStudentComponent from './components/EditStudentComponent';
import ViewStudentComponent from './components/ViewStudentComponent';

function App() {
  return (
    <div>
      <Router>
        <div className ="container">
          <HeaderComponent />
            <div className="container">
              <Switch>
                <Route path = "/" exact component = {ListStudentComponent}></Route>
                <Route path = "/students" component = {ListStudentComponent}></Route>
                <Route path = "/add-student/:id" component = {CreateStudentComponent}></Route>
                <Route path = "/view-student/:id" component = {ViewStudentComponent}></Route>
                {/* <Route path = "/update-student/:id" component = {EditStudentComponent}></Route> */}
              </Switch>
            </div>
          <FooterComponent/>
      </div>
      </Router>
    </div>
  );
}

export default App;