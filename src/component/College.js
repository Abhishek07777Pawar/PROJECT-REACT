import React, { Component } from 'react'
import axios from 'axios';
import { Button } from "react-bootstrap";
import withRouter from './withRouter';
 class College extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post:[],
      name: "",
      address: "",
      city: "",
      State: "",
      phoneNo: "",
      list:[]
    
    }
     if(this.props.param.name){
      this.get()
    }
  }

  get(){
    var id=this.props.param.name;
    console.log(id)
        let url="http://localhost:8000/CollegeByName/get/" +id
        axios.get(url).then((res) =>{
       console.log(res)
       this.setState({
         name: res.data.list[0].name,
         address: res.data.list[0].address,
         city: res.data.list[0].city,
         State:res.data.list[0].State,
         phoneNo: res.data.list[0].phoneNo,
       })
        });
    }

  save(event) {
    let url = "http://localhost:8000/CollegeSave/save"
    axios.post(url, this.state).then((res) => {
    this.setState({post:res.data})
  
  })
  }
  update(){
    var id=this.props.param.name;
    console.log(id)
    let url="http;//localhost:8000/collegeUpd/update/"+id
    axios.put(url,this.state).then((res)=>{
      console.log(res)
      this.setState({list:res.data.list})
    })
  }
 reset(){
  this.setState({
     name: "",
      address: "",
      city: "",
      state: "",
      phoneNo: "",
      message : "",
      inputError: {
        address: "",
        city: "",
        name: "",
        state: "",
        phoneNo: ""
      }
  })

 }
  render() {
    // console.log(this.props.param.id)
    return (      
      <center>
          <div className='card'style={{marginTop:"100px",width:"500px",height:"500px",backgroundColor:"skyblue"}}>
            <div className='card-header'>
              <h2>{this.props.param.name ? "EDIT COLLEGE" : "ADD COLLEGE"  }</h2>
        
            </div>
            <div className='card-body'>

               <label>Name:</label>
      {/* <span style={{ color: "red" }}>{this.state.inputError.name}</span> */}
              <input className='form-control' 
              type='text' 
              name='name'
               placeholder=' ENTER clg_NAME' 
               onChange={(event) => this.setState({name:event.target.value})} 
              value={this.state.name} />
              
              <label>Address:</label>
      {/* <span style={{ color: "red" }}>{this.state.inputError.address}</span> */}
              <input className='form-control' 
              type='text' 
              name='address'
              placeholder='ENTER Address' 
             onChange={(event) => this.setState({address:event.target.value})} value={this.state.address} />

              <label>City:</label>
              
      {/* <span style={{ color: "red" }}>{this.state.inputError.city}</span> */}
              <input className='form-control'
               type='text'
              name='city'
              placeholder='ENTER City' 
              onChange={(event) => this.setState({city:event.target.value})} value={this.state.city} />

              <label>state:</label>
        {/* <span style={{ color: "red" }}>{this.state.inputError.state}</span> */}
              <input className='form-control'
               type='text' 
               name='State' 
               placeholder='ENTER State' onChange={(event) => this.setState ({State:event.target.value})} value={this.state.State} />

              <label>PhoneNo:</label>
      {/* <span style={{ color: "red" }}>{this.state.inputError.phoneNo}</span> */}
              <input className='form-control'
               type='text'
                name='phoneNo' 
                placeholder=' ENTER clg_PhoneNO' 
                onChange={(event) => this.setState({phoneNo:event.target.value})}
              value={this.state.phoneNo}  />

            </div>

            <div className='card-footer'>
              {/* <button className='btn btn-secondary'
               type="button"
               style={{border:"2px solid black"}} 
               value="Submit" onClick={(event) => this.save(event)} >
               {
                                this.props.param.name ? "Update" : "SUBMIT"
                              }
                              </button> */}
                              
              {this.props.param.name ? <Button type="button" onClick={(event) => this.update(event)}>Update</Button>
               : <Button type="button" onClick={(event) => this.save(event)}>Save</Button>}

 <button  className='btn btn-info' onClick={() => this.reset()}>RESET</button>  
                                    

            </div>
          </div>
       
          </center>
         
    )
  }
}

export default withRouter(College)