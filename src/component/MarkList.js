import axios from 'axios'
import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Marksheet from './Marksheet';
import { Route,Routes} from 'react-router-dom'
export default class MarkList extends Component {
  constructor(){
    super()
    this.state={
      studentId:'',
      rollNo:"",
      Name:'',
      physics:'',
      chemistry:'',
      maths:'',
      list:[],
    }
    this.search()
  }
  search(){
    let url="http://localhost:8000/MarksheetList/search/"
    axios.get(url,this.state).then((res)=>{
      console.log(res)
    this.setState({list:res.data.list})
    });
   }
  // componentDidMount(){
  //   this.search()
  // }
  delete(studentId){
    let url='http://localhost:8000/Marksheetdel/delete/'+ studentId;
    axios.get(url).then(()=>{
      this.search()
      alert("data deleted")
    })
  }
  render() {
    return (
      <div>
        <Table striped bordered hover style={{marginTop:100}}>
          <thead>
          <tr>
            <th>Index</th>
            <th>StudentId</th>
            <th>Roll NO</th>
            <th>Name</th>
            <th>Physics</th>
            <th>Chemistry</th>
            <th>Maths</th> 
            <th>DELETE</th>
            <th>EDIT</th>
          </tr>
          </thead>
          <tbody>
          {
          this.state.list.map((ele,index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{ele.studentId}</td>
                <td>{ele.rollNo}</td>
                <td>{ele.Name}</td>
                <td>{ele.physics}</td>
                <td>{ele.chemistry}</td>
                <td>{ele.maths}</td>

                <td> 
                   {" "}
                   <button className='btn btn-danger'
                   onClick={()=>this.delete(ele.studentId)}>Delete</button> 
                   {" "}
                   </td> 
              
              <td>
              {/* <Routes>
                  <Route path="/marksheet/:studentId" element={<MarkSheet />} />
                </Routes> */}
                
                <Link className='btn btn-info'
                to={'/marksheet/'+ ele.studentId}>Edit</Link>
                </td>
            
              </tr>
            ))
          }
       </tbody>
        </Table>
      </div>
    )
  }
}

