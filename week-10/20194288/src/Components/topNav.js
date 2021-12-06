import React from 'react';
function topNav(props) {
  return (
    <>
      <div className="topnav">
        <div className="list-link">
          <a href="#home" className="link">LIST</a>
          <a href="#list" className="link">ADD STUDENT</a>
          <a href="#manage" className="link">DELETE STUDENT</a>
        </div>
        <form action="/" className="form-search" >
          <input name="name" placeholder="Search by MSSV" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default topNav;