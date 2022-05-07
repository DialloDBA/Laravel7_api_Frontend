import React from 'react'
import "../App.css";
import {Link,NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{paddingBottom:'0'}}>
            <Link className="navbar-brand" to="/">Laravel React API </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav pull-right">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/create" tabIndex="-1" aria-disabled="true">Create a Product</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
