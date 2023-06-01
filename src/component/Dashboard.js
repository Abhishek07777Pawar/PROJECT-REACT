import React, { Component } from 'react'
import {  NavLink } from 'react-router-dom'
import './Dash1.css';
// import{CiHome} from 'react-icons/ci'
import {FaArrowRight, FaUserAlt,FaHouseUser} from 'react-icons/fa'


export default class Dashboard extends Component {
  render() {
    return (

      <div>
        <nav className="navbar navbar fixed-top navbar-expand-lg ">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li> <img alt='logo' src={require("./img/NCS1.png")} height="40px" /></li>
                <li className="nav-item">&nbsp;&nbsp;&nbsp;
              
                     <NavLink className="navbar-brand page-scroll"id='five' aria-current="page"to= "/">
                   <font color="black"><FaHouseUser size={25} />Home</font>
                   </NavLink>
                   
                </li>
                <li className="nav-item">
                  <NavLink className="nav-bar-link active" id='six' aria-current="page" to="registration/"><font color="black"><FaUserAlt size={20} /></font>Registration</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-bar-link active" id='seven' aria-current="page" to="login/"><font color="black"><FaArrowRight size={20} /></font>Login</NavLink>
                </li>
             
                

              </ul>

            </div>
          </div>
        </nav>
      </div>
    )
  }
}
