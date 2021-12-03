import React, { Component } from 'react';

export default class Footer extends Component{
    render(){
        return (
            <footer className="main-footer">
                <div className="pull-right hidden-xs">
                    <b>Version</b> 2.4.0
                </div>
                <strong>Copyright &copy; 2014-2017 <a href="#">Student Management System</a>.</strong>
                All rights reserved.
            </footer>
        );
    }

}