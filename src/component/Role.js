import React, { Component } from 'react'
import axios from 'axios'

import withRouter from "./withRouter"
 class Role extends Component {
  constructor(props){
    super(props)
    this.state={
      name:"",
      discription:"",
      inputError:{
        discription:"",
        name:"",
        id:"", 
      },
      list:[]
    }
     if(this.props.param.id){
     this.get()
     }
  }
 
  get(){
    let url="http://api.sunilos.com:9080/ORSP10/Role/get/"+this.props.param.id
    // preventDefault();
    axios.get(url).then((responce)=>{
      console.log(responce.data.result.data)
      this.setState({
        name:responce.data.result.data.name,
        discription:responce.data.result.data.discription

      });

    });
  }
  changeState(event){
    let name=event.target.name
    let value=event.target.value
    this.setState({[name]:value})
  }
  save(event){
    let url='http://api.sunilos.com:9080/ORSP10/Role/save'
    axios.post(url,this.state).then((res)=>{
      this.setState({list:res.data.result.data})
      // alert("Role and successfully")
      if(res.data.result.inputerror){
        this.setState({inputError:res.data.result.inputerror})
        console.log("working")
      }
      // else if (res.data.result.message === "name already exists") {
      // //   // this.setState({ done: "Name Already exists" })
      //   this.props.showAlert("Name Already exists !!!", "info");
      // }
      else {
        // this.setState({ done: "Success" })
        this.setState({inputError:{
          discription:"",
          name:"",
        }
      })
        alert("RoleId loaded successfully !!!", "success");
      }
    }
    ).catch(
      err => {
        this.setState({message:err.name})
        console.log("this is error handling..")
      }
    )
  }
reset(){
  this.setState({
    name:"",
    discription:"",
    inputError:{
      discription:"",
      name:"",
    }
  })
}
  
  render() {
    console.log(this.props)
    return (
      <center>
      
<div className='card'style={{marginTop:"100px",width:"500px",height:"300px",backgroundColor:"skyblue"}}>
        <div className='card-header'>
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>
            {this.props.param.id ? "EDIT ROLL" : "ADD ROLE"}
          </h2>
        {/* <center><h1>Add Role</h1></center>   */}
          <center><h6 style={{color:"red"}}>{this.state.message}</h6></center>
        </div>
     <label>Name:</label> <span style={{color:"red"}}>{this.state.inputError.name}</span>
        <input className='form-control' type='text'name='name'placeholder='Name'value={this.state.name}onChange={(event)=>this.changeState(event)}></input><br></br>
  <label>Discription:</label> <span style={{color:"red"}}>{this.state.inputError.discription}</span>
        <input className='form-control' type='text'name='discription'value={this.state.discription}placeholder='write discription'onChange={(event)=>this.changeState(event)}></input>
        <br></br>
        <br></br>
        <div className='card-footer'>
      <button 
      className='btn btn-secondary' 
      type='button'
      value="submit"
      style={{border:"2px solid black"}}
      onClick={(event)=>this.save(event)}> 
      {this.props.param.id ? "Update" : "SUBMIT"}</button>
      <button className='btn btn-info'onClick={()=>this.reset()}>RESET
        </button>
        </div>
      </div>
      </center>
    )
  }
}
export default withRouter(Role)