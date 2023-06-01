import React, { Component } from 'react'

import {Link} from 'react-router-dom';
import withRouter from './withRouter';
import axios from 'axios';
import {  } from 'react-router-dom';
 class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      empId: "",
      adminId: "",
      empName: "",
      loginId: "",
      password: "",
      Address: "",
      salary:"",
      post:[]
    

    }
    
  }
   
save(){
  let url="http://localhost:8000/emp/save/"
  axios.post(url,this.state).then((res)=>{
    console.log(res.data)
    this.setState({ post: res.data });
  
  })
}
reset() {
  this.setState({
    empId: "",
    adminId: "",
    empName: "",
    loginId: "",
    password: "",
    Address: "",
    salary:"",
    })
  
}

  render() {
    
    return (
    
    <center>
   <div className='card'style={{marginTop:"30px",width:"500px",height:"700px",backgroundColor:"skyblue"}}>   
   <center>
            <div className='card-header'>
             <h2>REGISTRATION</h2> 
           <center><h6 style={{color:"red"}}>{this.state.message1}</h6></center> 
            </div>
            <div className='card-body'>
              
                <label>empId :</label>
  {/* <span style={{color:"red"}}> {this.state.inputerror.firstName}</span> */}
                <input className='form-control' 
                type="text"
                 name='empId'
                value={this.state.empId} 
                placeholder='EmpId' 
                onChange={(e) => this.setState({ empId: e.target.value })} />
              
              
                <label>adminId :</label>
    {/* <span style={{color:"red"}}>{this.state.inputerror.lastName}</span> */}
                <input  className='form-control' 
                type="text"
                 name='adminId'
                  placeholder='AdminId'
                  value={this.state.adminId}
                  onChange={(e) => this.setState({ adminId: e.target.value })} />
              

              <label>empName :</label>
    {/* <span style={{color:"red"}}>{this.state.inputerror.lastName}</span> */}
                <input  className='form-control' 
                type="text"
                 name='empName'
                  placeholder='EmpName'
                  value={this.state.empName}
                  onChange={(e) => this.setState({ empName: e.target.value })} />


            
                <label>loginId :</label>
    {/* <span style={{color:"red"}}> {this.state.inputerror.loginId}</span> */}
                
                <input className='form-control' 
              type="loginId" name='loginId'
              placeholder='Login Id *'
               onChange={(e) => this.setState({ loginId: e.target.value })}
                  value={this.state.loginId} />
               
              
             
              
              <label>Password:</label> 
      {/* <span style={{color:"red"}}>{this.state.message}</span> */}
                <input className='form-control' 
                type="text"
                 name='password'
                 placeholder='Password'
                  onChange={(e) => this.setState({password: e.target.value })}
                  value={this.state.password} />
               
              
              
               <label>Address:</label>
         {/* <span style={{color:"red"}}>{this.state.message}</span> */}
                <input className='form-control'
                 type="text"
                  name='Address' 
                  placeholder='Address'
                  onChange={(e) => this.setState({Address: e.target.value })}
                  value={this.state.Address} />
             

              <label>Salary:</label>
         {/* <span style={{color:"red"}}>{this.state.message}</span> */}
                <input className='form-control'
                 type="text"
                  name='salary' 
                  placeholder='Salary'
                  onChange={(e) => this.setState({ salary: e.target.value })}
                  value={this.state.salary} />
              
                {/* <label >Role :</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <select  onClick={this.changeId}>

                  <option>Name</option>
                  {
                    this.state.roleids.map((item) => {
                      return (
                        <option name="roleId" value={item.id}>
                          {item.id}

                        </option>)
                    })
                  }
                </select> */}
                {/* <span style={{color:"red"}}> {this.state.inputerror.roleId}</span> */}
                <br></br>
                <br></br>
                <button className='btn btn-secondary'id='two' 
                onClick={() => this.save()} 
                style={{borderRadius:"25px", border:"2px solid black",width:"150px"}}>SUBMIT</button>
              
       <button  className='btn btn-info' onClick={() => this.reset()} style={{borderRadius:"25px", border:"2px solid ",width:"150px"}}>RESET</button> 
            </div>
            <div className='card-footer'>
        
            <Link to="/login" style={{color:"black"}}><u><b>Go to Login Page</b></u></Link>
            </div>
            </center>
          </div>
      
      </center>
  
    )
  }
}



export default withRouter(Registration);