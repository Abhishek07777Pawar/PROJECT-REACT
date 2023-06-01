import axios from 'axios'
import React, { Component } from 'react'
import withRouter from './withRouter';
import { Button } from "react-bootstrap"; 
 class Student extends Component {
  constructor(props){
    super(props)
    this.state ={
      firstName:"",
      lastName:"",
      collegeId:"",
      mobileNo:"",
      emailId:"",
      post:[]
   
  }
 if(this.props.param.collegeId){
   this.get()
   }
}
  get(){
    let id=this.props.param.collegeId;
   
    console.log(id)
    let url="http://localhost:8000/StudentById/get/"+ id;
    axios.get(url).then((res) =>{
      console.log(res)
      this.setState({
        firstName:res.data.list[0].firstName,
        lastName:res.data.list[0].lastName,
        collegeId:res.data.list[0].collegeId,
        mobileNo:res.data.list[0].mobileNo,
        emailId:res.data.list[0].emailId

      })
  //  console.log(res.data.result)
  //  this.setState({
  //   firstName: res.data.result.data.firstName,
  //     lastName: res.data.result.data.lastName,
  //     collegeId: res.data.result.data.collegeId,
  //     mobileNo :res.data.result.data.mobileNo,
  //     email: res.data.result.data.email,
  //   // name: res.data.result.data.name,
  //   // address: res.data.result.data.address,
  //   // city: res.data.result.data.city,
  //   // state: res.data.result.data.state,
  //   // phoneNo: res.data.result.data.phoneNo,
  //  })
    });
}



  save(){
    let url="http://localhost:8000/studentSave/save"
    axios.post(url,this.state,{
      headers:{
        authorization:localStorage.getItem("token"),
        Accept:"application/json",
        "Content-Type":"application/json",
      }
    }).then((res) => 
    {
      this.setState({post:res.data})
      console.log(res)
       })
    
    }
    update(){
      var id=this.props.param.collegeId
      let url="http://localhost:8000/studentUpdate/update/"+id
      axios.put(url,this.state).then((res)=>{
        console.log(res)
        this.setState({list:res.data.list})
      })
    }
    reset(){
      this.setState({
        firstName:"",
        lastName:"",
        collegeId:"",
        mobileNo:"",
        emailId:"",
    
      })
    }

  render() {
  //  console.log( this.props.param)
    return (
  
      <center>
  <div className='card'style={{marginTop:"100px",width:"500px",height:"500px",backgroundColor:"skyblue"}}>
    <center>
    <div className='card-header'>
    
      <h2 style={{ textAlign: 'center' }}>
                      {
                         this.props.param.collegeId ? "EDIT STUDENT" : "ADD STUDENT"
                      }
                    </h2>
      <center><h6 style={{color:"red"}}>{this.state.message}</h6></center>
    </div>
    <div className='card-body'>

     
     <label> FirstName:</label>
     {/* <span style={{color:"red"}}>{this.state.inputerror.firstName}</span> */}
      <input className='form-control' 
      type="text"
      name='firstName'
      value={this.state.firstName}
      placeholder='First Name'
      onChange={(event)=>this.setState({firstName:event.target.value})} />
     
      <label>LastName:</label>
      {/* <span style={{color:"red"}}>{this.state.inputerror.lastName}</span> */}
      <input className='form-control' 
      type="text"
      name='lastName'
      placeholder='Last Name'
      onChange={(event)=>this.setState({lastName:event.target.value})}
      value={this.state.lastName} />
      
      
      <label>CollegeId:</label>
      {/* <span style={{color:"red"}}>{this.state.inputerror.collegeId}</span> */}
      <input className='form-control'
      type="Number"name='collegeId'
      placeholder='College Id'
      onChange={(event)=>this.setState({collegeId:event.target.value})}
      value={this.state.collegeId}/>
      
      
      <label>MobileNo:</label>
      {/* <span style={{color:"red"}}>{this.state.inputerror.mobileNo}</span> */}
      <input className='form-control'
       type="text"name='mobileNo'
      placeholder='Mobile Number'
      onChange={(event)=>this.setState({mobileNo:event.target.value})}
      value={this.state.mobileNo}/>
     
     
      <label> Email:</label>
      {/* <span style={{color:"red"}}>{this.state.inputerror.email}</span> */}
       <input className='form-control' type="email"name='emailId'placeholder='Email'
       onChange={(event)=>this.setState({ emailId:event.target.value })}
       value={this.state.emailId}/>
      <br></br> 
      </div>
    <div className='card-footer'>
    {this.props.param.collegeId ? <Button type="button" onClick={(event) => this.update(event)}>Update</Button>
     :<Button type="button" onClick={(event) => this.save(event)}>Save</Button> }
    
      <button className='btn btn-info'onClick={()=>this.reset()}>RESET</button>
    </div>
    </center>
  </div>
  </center>
    )
  }
}
export default withRouter(Student)