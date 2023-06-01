import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import App from '../App';


export default class Dashboard2 extends Component {
  logout(ev) {
    localStorage.clear();
    const root = createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    // window.location.href="/login";
  }
  render() {
    return (
      <div>

        <nav className=" navbar fixed-top navbar  navbar-expand-lg bgg-info">

          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation ">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li> <img alt='logo' src={require("./img/NCS1.png")} height="40px" style={{ marginTop: 10 }} /></li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Student
                    </button>
                    <ul className="dropdown-menu">
                      <Link className="nav-link active" to="student/">Add Student</Link>
                      <Link className="nav-link active" to="studentlist/">Student List</Link>
                    </ul>
                  </div>

                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      College
                    </button>
                    <ul className="dropdown-menu">
                      <Link className="nav-link active" to="college/">Add College</Link>
                      <Link className="nav-link active" to="collegelist/">College List</Link>
                    </ul>
                  </div>

                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Marksheet
                    </button>
                    <ul className="dropdown-menu">
                      <Link className="nav-link active" to="marksheet/">Add Marksheet</Link>
                      <Link className="nav-link active" to="marklist/">Marksheet List</Link>
                    </ul>
                  </div>

                </li>
                {/* <li className="nav-item">
                  <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Role
                    </button>
                    <ul class="dropdown-menu">
                      <Link className="nav-link active" to="role/">Add Role</Link>
                      <Link className="nav-link active" to="rolelist/">Role List</Link>
                    </ul>
                  </div>

                </li> */}

                
                <li className="nav-item">
                  <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      User
                    </button>
                    <ul className="dropdown-menu">
                      <Link className="nav-link active" to="user/">Add User</Link>
                      <Link className="nav-link active" to="userlist/">User List</Link>
                    </ul>
                  </div>

                </li>

              </ul>

            </div>
            {/* <Link className="nav-link active btn btn-success" to="logout/">Logout</Link> */}
            <button onClick={(ev) => { this.logout(ev); }}>Logout</button>
          </div>

        </nav>
      </div>
    )
  }
}

