import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
 import Table from 'react-bootstrap/Table';

export default class CollegeList extends Component {
    constructor(){
        super()
        this.state={
          name: "",
          address: "",
          city: "",
          state: "",
          phoneNo: "",
    
            list:[],
         

        }
        this.search() 
    }
     search() {
        const url = "http://localhost:8000/CollegeList/search";
        axios.get(url, this.state).then((responce) => {
          console.log(responce)
          this.setState({ list: responce.data.list})
          
        })
      }
      // componentDidMount() {
      //   this.update()
      // }
    // delete(id){
    //     let url='http://api.sunilos.com:9080/ORSP10/Collegedel/delete/'+id
    //     axios.get(url).then(()=>{
        
    //        this.update() 
    //        alert("Data deleted ")
    //     }
    //     )
    // }
  render() {
    return (
      <div>
      <center>  <div> <h1 style={{marginTop:70}}>COLLEGE LIST</h1>
        </div></center>
      <div></div>
        <div>
        <form id="sign-in-form" className="text-left text-center"style={{margin:"50px"}}>
          <span>
            <label><b>Name:</b></label>
            <input type="text" name="name" placeholder='Search by Name' value={this.state.name}
              onChange={(event) => { this.setState({ name: event.target.value }) }} style={{borderRadius:"25px", border:"2px solid black",width:"180px"}}/>
          </span> &nbsp; &nbsp; &nbsp;
          <span>
            <label><b>City:</b></label>
            <input type="text" name="address" placeholder='Search by City'
              value={this.state.city} onChange={(event) => { this.setState({ city: event.target.value }) }}style={{borderRadius:"25px", border:"2px solid black",width:"180px"}} />
          </span> &nbsp; &nbsp; &nbsp;
          <span className='bg-info'>
            <button type='button' onClick={() => this.update()}>Search</button>
          </span>
        </form>
        
    <Table striped bordered hover style={{marginTop:70}}>
        <thead>
        <tr>
        <th>index</th>
        <th>NAME</th>
        <th>ADDRESS</th>
        <th>CITY</th>
        <th>STATE</th>
        <th>PHONE NO</th>
        <th>DELETE</th>
        <th>EDIT</th>
        </tr>
        </thead>
        <tbody>

        {
            this.state.list.map((ele,index)=>(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{ele.name}</td>
                    <td>{ele.address}</td>
                    <td>{ele.city}</td>
                    <td>{ele.State}</td>
                    <td>{ele.phoneNo}</td>
                  
                    <td> <button className='btn btn-danger' onClick={()=>this.delete(ele.name)}>Delete</button></td>

                 <td>  <button  className=" btn btn-info "  type="button">
                      <Link to={"/college/"+ele.name}>Edit</Link></button></td> 

                  
                </tr>
                ))
        }



</tbody>
    </Table>
        </div>
        </div>
    )
  }
}
