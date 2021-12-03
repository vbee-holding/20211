import React, { Component } from 'react';
import {StudentManager} from './components/student/StudentManager';
import {Route, BrowserRouter as Router } from 'react-router-dom';
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <div className="content-wrapper">
          <section className="content">
            <Route exact path="/" component={StudentManager} />
          </section>
        </div>
        <NotificationContainer />
      </div>
    </Router>
  );
}

export default App;
