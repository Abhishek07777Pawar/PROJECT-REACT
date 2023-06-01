import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { createRoot } from 'react-dom/client';
import App1 from '../App1';
import withRouter from './withRouter';

 class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginId: "",                
      password: "",
      
      list:[],
      inputErrors:[]
    }
  }


  login() {
    axios
    .post("http://localhost:8000/au/loginPage", this.state)
    .then((res) => {
      this.setState({ list: res.data.result});
      //
    console.log("Hello")
    
        if (res.data.errors ) {
          this.setState({inputErrors:res.data.errors[0].msg});
       
        } else {
          localStorage.setItem("Name", res.data.rows[0].empName)
          const token = "Bearer " + res.data.token;
         localStorage.setItem("token",token)
          const root = createRoot(document.getElementById('root'))
          root.render(<App1/>        
          );
       
        }
      }
    )
    .catch(
      err => {
        this.setState({message:err.name})
        console.log("this is error handling..")
        console.log(err)
        
      }
    )
  }
 
  reset() {
    this.setState({
      loginId: "",                
      password: "",
      inputErrors:[]
      })
    
  }
  render() {
    return (
    
     
 <center>
    <div className='card'style={{marginTop:"100px",width:"500px",height:"500px",backgroundColor:"skyblue"}}>
      <div className='card-header'>
       <center> <h2>LOGIN</h2></center>
       <center><h6 style={{color:"red"}}>{this.state.message}</h6></center>
      </div>
      <div className='card-body'>
        {/* <div className='form-group'> */}
        <label>LoginId :<span></span></label>
        <input className='form-control' 
        type="Text" 
        name='loginId'
         placeholder='LoginId'
         value={this.state.loginId}
         onChange={(event)=> this.setState({loginId:event.target.value})
         }
       />
        <h6 style={{color:"red"}}>{this.state.inputErrors}</h6>
        {/* </div> */}
        <br></br>
        {/* <div className='form-group'> */}
        <label>Password :</label>
        <input className='form-control' 
        type="Text" name="password" 
        placeholder=' password' 
        value={this.state.password} 
        onChange={(event) => this.setState({password:event.target.value})
        }
        /> 
        <h6 style={{color:"red"}}> {this.state.inputErrors}</h6> <br></br>
        {/* </div> */}

      <center><button className='btn btn-secondary' onClick={() => this.login()}style={{borderRadius:"25px", border:"2px solid black",width:"180px"}}>SUBMIT</button></center>
      <br></br>
       <button  className='btn btn-info' onClick={() => this.reset()} style={{borderRadius:"25px", border:"2px solid ",width:"180px"}}>RESET</button>  
      </div>
      <div className='card-footer'>
    <Link to="/Registration"><h6><u><b>Create New Account</b></u></h6></Link>
     
      </div>
  </div>
  </center>
    )
  }
}
export default withRouter(Login)