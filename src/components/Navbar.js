import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav className='nav-wrapper grey darken-3'>
                <div className='container'>
                    <a href='./' className='brand-logo center'>GuitarNeck</a>
                    <ul className='right'>
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/Create'}>Create Neck</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;