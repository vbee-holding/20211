import React from "react";
import StudentList from './Components/StudentList';
import TopNav from "./Components/topNav";

function Home(props){
    return(
        <>
            <TopNav />
            <StudentList />
        </>
    );  
}
export default Home;