import React from 'react';
import './Header.css'


class Header extends React.Component {
    render () {
        return (
            <header>
                <button className="mainPageButton">
                        Main Page
                </button>

                <button className="listStudentButton">
                        List Student
                </button>

                <div className="search-box">
                    <input type="text" name="" className="search-box__input" title="Search" /> 
                    <button className="search-box__submit-button">
                        Search by MSSV
                    </button>
                </div>
            </header>


        )
    }

}

export default  Header;