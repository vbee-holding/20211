import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component{

    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                            <p>Alexander Pierce</p>
                            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li>
                            <Link to="/students/list">
                                <i className="fa fa-dashboard"></i> <span>Student list</span>
                                <span className="pull-right-container">
                            </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="fa fa-dashboard"></i> <span>Student add</span>
                                <span className="pull-right-container">
                                </span>
                            </Link>
                        </li>
                    </ul>
                </section>
            </aside>

    );
    }
}