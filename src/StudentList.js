import axios from 'axios'
import React, { Component } from 'react'
import Table from 'react-bootstrap/esm/Table'
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'
export default class StudentList extends Component {
    constructor (){
        super()
        this.state={
        list:[],
        firstName:"",
        lastName:"",
        emailId:"",
        collegeId:"",
        mobileNo:"",
        // id:""
        }
       this.search()
    }
    search(){
        let url='http://localhost:8000/StudentList/search'
        axios.get(url,this.state).then((res)=>{
          console.log(res)
             this.setState({list:res.data.list})
        }
        )
    }
    // componentDidMount(){
    //   this.update()
    // }
    delete(collegeId){
        let url='http://localhost:8000/StudentDel/delete/'+collegeId
        axios.get(url).then(()=>{
            this.search()
            alert("Data deleted")
        })
    }
  render() {
    return (
        <div>
        <center>  <div> <h2>STUDENT LIST</h2>
        </div></center>
      <div>
      <div>
        <form id="sign-in-form" className="text-left text-center"style={{margin:"50px"}}>
          <span>
            <label><b>Name:</b></label>
            <input type="text" name="firstName" placeholder='Search by Name' value={this.state.firstName}
              onChange={(event) => { this.setState({ firstName: event.target.value }) }} style={{borderRadius:"25px", border:"2px solid black",width:"180px"}}/>
          </span> &nbsp; &nbsp; &nbsp;
          <span>
            <label><b>collegeId:</b></label>
            <input type="text" name="collegeId" placeholder=' collegeId'
              value={this.state.collegeId} onChange={(event) => { this.setState({ collegeId: event.target.value }) }}style={{borderRadius:"25px", border:"2px solid black",width:"180px"}} />
          </span> &nbsp; &nbsp; &nbsp;
          <span className='bg-info'>
            <Button type='button' onClick={(event) =>this.search(event)}>Search</Button>
          </span>
        </form>
        </div>
        <Table striped bordered hover  >
         
            <thead>
            <tr>
                <th>index</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>College Id</th>
                <th>Mobile No.</th>
                <th>Email</th>
                <th>DELETE</th>
                <th>EDIT</th>
            </tr>
            </thead>
            <tbody>
                {
                    this.state.list.map((ele,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{ele.firstName}</td>
                            <td>{ele.lastName}</td>
                            <td>{ele.collegeId}</td>
                            <td>{ele.mobileNo}</td>
                            <td>{ele.emailId}</td>
                            
                          <td> <button className='btn btn-danger'onClick={()=>this.delete(ele.collegeId)}>Delete</button></td> 


                        <td><Link className='btn btn-info' to={"/student/"+ele.collegeId}>Edit</Link></td>
                        </tr>
                    )
                        
                    )
                }
            </tbody>
        </Table>
      
      </div>
      </div>
    )
   
  }
}
