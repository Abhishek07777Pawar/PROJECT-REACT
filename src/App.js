import React, { Component } from 'react'
import { createRoot } from 'react-dom/client';

import Dashboard from './component/Dashboard'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './component/Home'
import Registration from './component/Registration'
import Login from './component/Login'
import "./App.css";
// import LoadingBar from 'react-top-loading-bar'
import App1 from './App1'



export default class App extends Component {
  constructor(){
    super();
    this.state = {
  
    }
  
  }
  componentDidMount(){
    if(localStorage.getItem("Name")){
      const root = createRoot(document.getElementById('root'))
      root.render(<App1 />)     
    }
  }



  render() {
   
    return (
      <div>
        <BrowserRouter>
        <Dashboard/>
          
    
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/registration' element={<Registration setProgress={this.setProgress} />}/>
          <Route path='/login' element={<Login/>}/> 

          
        </Routes>

        </BrowserRouter>
     
      
        <br></br>
      
      </div>
    )
  }
}
