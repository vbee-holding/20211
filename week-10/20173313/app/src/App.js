import React, { Component } from 'react';
import {StudentManager} from './components/student/StudentManager';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <h1> Test </h1>
        {/* <Navbar /> */}
        {/* <Sidebar /> */}
        <div className="content-wrapper">
          <section className="content">
            <Route exact path="/" component={StudentManager} />
          </section>
        </div>
        {/* <Footer /> */}
        <NotificationContainer />
      </div>
    </Router>
  );
}

export default App;
