// import axios from 'axios'
// import React, { Component } from 'react'
// import './user.css'
// export default class User extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//       firstName:"",
//       lastName:"",
//       loginId:"",
//       roleId:"",
//       inputerror:{
//         firstName:"",
//         lastName:"",
//         loginId:"",
//         roleId:""
//       }
//     }
//   }
//   changeState(event){
//     let name=event.target.name
//     let value=event.target.value
//     this.setState({[name]:value})

//   }
//   save(){
//     let url='http://api.sunilos.com:9080/ORSP10/User/save'
//     axios.post(url,this.state,{
      
//     }
      
//       ).then((res)=>{
//       if(res.data.result.inputerror){
//         this.setState({inputerror:res.data.result.inputerror})
//       }  
//       else
//       alert("data saved")
//     }).catch(
//     err=>{
//       this.setState({message:err.name})
//       console.log(err.name)
//     }
//     )
//   }
//   reset(){
//     this.setState({
//       firstName:"",
//       lastName:"",
//       loginId:"",
//       roleId:"",
//       inputerror:{
//         firstName:"",
//         lastName:"",
//         loginId:"",
//         roleId:""
//       }
//     })
//   }
//   render() {
//     return (
//   <center>
//           <div className='card'style={{marginTop:"100px",width:"500px",height:"500px",backgroundColor:"skyblue"}}>
//          <div className='card-header'>
//       <h1>User</h1>
//         <center><h6 style={{color:"red"}}>{this.state.message}</h6></center>
//         </div> 
//         <div className='card-body'> 
//   <label>First Name:</label><span style={{color:"red"}}>{this.state.inputerror.firstName}</span>
//   <input className='form-control' type='text'name='firstName' placeholder='FirstName' onChange={(event)=>this.changeState(event)}/>
//   <br></br>

//   <label>last Name:</label><span style={{color:"red"}}>{this.state.inputerror.lastName}</span>
  
//   <input  className='form-control' type='text'name='lastName' placeholder='LastName' onChange={(event)=>this.changeState(event)}/>
  
// <br></br>
//   <label>Login Id</label> <span style={{color:"red"}}>{this.state.inputerror.loginId}</span>
//   <input  className='form-control' type='text'name='loginId'placeholder='LoginId' onChange={(event)=>this.changeState(event)}/>
//  <br></br>
//   <label>Role Id:</label><span style={{color:"red"}}>{this.state.inputerror.roleId}</span>
//   <input  className='form-control' type='text'name='roleId' placeholder='RoleId' onChange={(event)=>this.changeState(event)}/></div>
//   <div className='card-footer'>
//   <input className='btn btn-secondary' type='button'value='SUBMIT'onClick={()=>this.save()}style={{borderRadius:"25px", border:"2px solid black",width:"180px"}}></input>

//   <button className='btn btn-info' onClick={()=>this. reset()}>RESET</button>
//   </div>
  
//   </div>
//   </center>

//     )
//   }
// }




import React,{Component} from "react";
// import FormMessage from "./FormMessage";
// import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import axios from "axios";
import withRouter from "./withRouter";
// import BaseCtrl from "./BaseCtrl";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[],
      empId: "",
      adminId: "",
      empName: "",
      loginId: "",
      password: "",
      Address: "",
      post: [],
      inputerror:{
        empId: "",
        adminId: "",
        empName: "",
        loginId: "",
        password: "",
        Address: "",
      }
      
    };
     if (this.props.param.empId) {
       this.get();
     }
  }
  get() {
    let id = this.props.param.empId;
    axios
      .get("http://localhost:8000/registration/serach/" + id)
      .then((res) => {
        console.log("====================================");
        console.log(res);
        console.log("====================================");
        this.setState({
          empId: res.data.list[0].empId,
          empName: res.data.list[0].empName,
          adminId: res.data.list[0].adminId,
          loginId: res.data.list[0].loginId,
          password: res.data.list[0].password,
          Address: res.data.list[0].Address,
          salary: res.data.list[0].salary,
        });
      })
     
      .catch((err) => {
        this.setState({ error: err.message });
      });
  }
  // componentDidMount() {
  //   axios
  //     .post("http://api.sunilos.com:8080/registration/search", this.state)
  //     .then((res) => {
  //       this.setState({ list: res.data.result.data });
  //     });
  // }
  save() {
    let url = "http://localhost:8000/emp/save/";
    axios.post(url, this.state).then((res) => {
       console.log(res);
    this.setState({ post: res.data });
    if(res.data.result.inputerror){
             this.setState({inputerror:res.data.result.inputerror})
           }  
             else
             alert("data saved")    






      // if (res.data.result.inputerror) {
      //   this.setState({ inputError: res.data.result.inputerror });
      //   this.changeInputError("error", "true");
      // } else {
      //   this.changeInputError("error", "false");
      //   this.changeInputError("message", "Data saved Successfully");
      //   this.changeInputError("id", "");
      //   this.changeInputError("firstName", "");
      //   this.changeInputError("lastName", "");
      //   this.changeInputError("loginId", "");
      //   this.changeInputError("roleId", "");
      // }
    })
  }
    
    
    update(){
      var empId=this.props.param.empId;
      console.log(empId)
      let url="http://localhost:8000/empSave/update/"+empId;
      axios.put(url,this.state).then((res)=>{ 
        console.log(res)
        this.setState({list:res})
      
      })
    }

    // .catch((error) => {
    //   if (error) {
    //     this.setState({ error: error.message });
    //   }
    // });
  
  resetForm = () => {
    this.setState({
      empId: "",
      adminId: "",
      empName: "",
      loginId: "",
      password: "",
      Address: "",
      inputError: {
        empId: "",
        adminId: "",
        empName: "",
        loginId: "",
        password: "",
        Address: "",
        error: "",
      },
    })
  };
  // mouseEnter = (e) => {
  //   this.setState({ roleId: e.target.value });
  // }
  render() {
   
  
    return (
      <center>
      <>
     
        {/* <div align="center" className="Auth-registration-container"> */}
        <div className='card'style={{width:"500px",height:"800px",backgroundColor:"skyblue"}}>
          <div className='card-header'>
          <h2 align="center">
          {!localStorage.getItem("Name")
            ? "Registration"
            : this.props.param.empId
            ? "EDIT USER"
            : "ADD USER"}
        </h2>
   </div>
          <Form className="Auth-form-login">
            {/* <FormMessage
              error={this.getInputError("error")}
              message={this.getInputError("message")}
            /> */}
            {/* {this.state.error && (
              <div>
                <h2 style={{ color: "red" }}>{this.state.error.message}</h2>
              </div>
            )} */}
            <table className="Auth-form-content">
              <div className="form-group mt-3">
                <label>EmpId</label>
                <input
                  className="form-control mt-1"
                  name="Name"
                  type="text"
                  onChange={(event) =>
                    this.setState({ empId: event.target.value })
                  }
                  value={this.state.empId}
                  placeholder="Enter Emp ID"
                  required
                />
                 <p style={{ color: "red" }}>{this.state.inputerror.empId}</p>
              </div>
              <div className="form-group mt-3">
                <label>AdminId</label>
                <input
                  className="form-control mt-1"
                  name="Name"
                  type="text"
                  onChange={(event) =>
                    this.setState({ adminId: event.target.value })
                  }
                  value={this.state.adminId}
                  placeholder="Enter Admin Id "
                  required
                />
                 <p style={{ color: "red" }}>{this.state.inputerror.adminId}</p>
              </div>
              <div className="form-group mt-3">
                <label>Name</label>
                <input
                  className="form-control mt-1"
                  name="Name"
                  type="text"
                  onChange={(event) =>
                    this.setState({ empName: event.target.value })
                  }
                  value={this.state.empName}
                  placeholder="Enter Name"
                  required
                />
                 <p style={{ color: "red" }}>{this.state.inputerror.empName}</p>
              </div>
              <div className="form-group mt-3">
                <label>Address</label>
                <input
                  className="form-control mt-1"
                  name="Name"
                  type="text"
                  onChange={(event) =>
                    this.setState({ Address: event.target.value })
                  }
                  value={this.state.Address}
                  placeholder="Enter Address "
                  required
                />
                 <p style={{ color: "red" }}>{this.state.inputerror.Address}</p>
              </div>
             
              
              <div className="form-group mt-3">
                <label>Email Id</label>
                <input
                  className="form-control mt-1"
                  name="loginId"
                  value={this.state.loginId}
                  placeholder="Enter Email Id"
                  onChange={(event) =>
                    this.setState({ loginId: event.target.value })
                  }
                  required
                />
                <p style={{ color: "red" }}>{this.state.inputerror.loginId}</p>
              </div>
              <div></div>
              <div className="form-group mt-3">
                <label> Password </label>

                <input
                  className="form-control mt-1"
                  name="password"
                  type={"password"}
                  value={this.state.password}
                  onChange={(event) =>
                    this.setState({ password: event.target.value })
                  }
                  placeholder="Enter Password"
                  required
                />
                <p style={{ color: "red" }}>{this.state.inputerror.password}</p>
              </div>
              <div className="form-group mt-3">
                <label>Salary</label>
                <input
                  className="form-control mt-1"
                  name="Name"
                  type="text"
                  onChange={(event) =>
                    this.setState({ salary: event.target.value })
                  }
                  value={this.state.salary}
                  placeholder="Enter Salary"
                  required
                />
                 <p style={{ color: "red" }}>{this.state.inputerror.salary}</p>
              </div>
              {/* <div className="form-group mt-3">
                <label> Role Id </label>
                &nbsp;&nbsp;
                <select
                  name="roleId"
                  onChange={(event) =>
                    this.setState({ roleId: event.target.value })
                  }
                >
                  <option>---Selected Role Id---</option>
                  {list.length
                    ? list.map((ele) => (
                        <option key={ele.id} value={ele.id}>{ele.name}</option>
                      ))
                    : null}
                </select>
                <p style={{ color: "red" }}>{this.state.inputError.roleId}</p>
              </div> */}
              <br></br>
              <div>
                
    {this.props.param.empId ? <Button type="button" onClick={(event) => this.update(event)}>Update</Button>
     :<Button type="button" onClick={(event) => this.save(event)}>Save</Button> }
                
                &nbsp; &nbsp;
                <Button
                  type="reset"
                  variant="danger"
                  onClick={(event) => this.resetForm(event)}
                >
                  Reset
                </Button>
              </div>
            </table>
            <br></br>
          </Form>
        </div>
      </>
      </center>
    );
  }
}
export default withRouter(User);