import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component {

    render() { 
        return ( 
            
            <nav className="navbar navbar-expand-lg navbar-light bg-info">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active"> 
                            <Link to='/' className='text-white nav-link'>Home</Link> 
                        </li>

                        <li className="nav-item">
                            <Link to = '/signup'className="nav-link text-white"> Register Student </Link> 
                        </li>

                        <li className="nav-item">
                            <Link to = '/create'className="nav-link text-white"> Create Assignment </Link> 
                        </li>
                        
                    </ul>

                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>

                </div>
            </nav>
            
         );
    }
}
 
export default Nav;