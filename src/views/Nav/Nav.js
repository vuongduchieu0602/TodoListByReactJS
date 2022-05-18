import React from 'react';
import './Nav.scss';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

class Nav extends React.Component {
    render(){
        return (
            <>
                <div className="topnav">
                    <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                    <NavLink to="/todo" activeClassName="active">Todo</NavLink>
                    <NavLink to="/jobs" activeClassName="active">Jobs</NavLink>
                    <NavLink to="/user" activeClassName="active">User</NavLink>
                </div>
            </>
        )
    }
}

export default Nav;