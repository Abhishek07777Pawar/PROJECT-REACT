import axios from 'axios'
import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
export default class RoleList extends Component {
    constructor(){
        super()
        this.state={
            list:[],
            id:""
            }
    }
  async search(){
        let url="http://api.sunilos.com:9080/ORSP10/Role/search"
      await axios.post(url,this.state).then((res)=>{
        //    if(res.data.success){
                this.setState({list:res.data.result.data})
           // }
        }
        )
    }
    componentDidMount(){
        this.search()
    }
    delete(id){
        let url='http://api.sunilos.com:9080/ORSP10/Role/delete/'+id
        axios.get(url).then(()=>{
            this.search()
            alert("Data deleted")
        })
    }

  render() {  
    return (
      <div>


        
        <Table striped bordered hover style={{marginTop:100}}>
            <thead>
            <tr>
            <th>Index</th>
                <th>Id</th>
                <th>Name</th>
                <th>Discription</th>
            </tr>
            </thead>
            <tbody>
                {
                this.state.list.map((ele,index)=>(
                    <tr>
                         <td>{index+1}</td>
                        <td> {ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.discription}</td>
                      <td> <Link to={"/role/"+ ele.id}>Edit</Link></td> 
                      
                        <button className='btn btn-success'onClick={()=>this.delete(ele.id)}>Delete</button>
                    </tr>
                ))
  }
            </tbody>
        </Table>
      </div>
    )
  }
}
