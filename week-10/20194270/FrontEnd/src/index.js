import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Components/Header/Header.js';
import ListStudents from './Components/ListStudents/ListStudents.js';
//import DetailStudent from './Components/DetailStudent/DetailStudent.js';


class MainPage extends React.Component {

    render () {
        
        return (
            <div >
                <Header></Header>
                <ListStudents></ListStudents>
                
            </div>
        )}

}

ReactDOM.render (
    <MainPage />,
    document.getElementById('root')
);

