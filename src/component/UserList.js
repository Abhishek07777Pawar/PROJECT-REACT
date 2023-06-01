import React, { Component } from "react";
import { Table, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import AddUser from "./AddUser";
import axios from "axios";
export default class UserList extends Component {
  constructor() {
    super();
    this.state = {
      empId: "",
      adminId: "",
      empName: "",
      loginId: "",
      password: "",
      Address: "",
      salary: "",
      post: [],
    };
    this.search();
  }
  // componentDidMount() {
  //   axios.get("http://localhost:8000/empData/search").then((res) => {
  //     console.log(res.data.list);
  //     this.setState({ post: res.data.list });
  //   });
  // }
  search() {
    axios
      .get("http://localhost:8000/empData1/search")
      .then((res) => {
        console.log(res);
        this.setState({ post: res.data.list });
        
      });
  }
   delete(empId) {
    // console.log(this.state.message);
     let url = "http://localhost:8000/empData/delete/" + empId;
     axios.get(url).then((res) => {
      //  this.setState({post : res.data.list});
      this.post =res.data.list;
       // console.log(res.data.result);
     });
    //  this.search()
   }
  render() {
    return (
      <>
        <h2 align="center">User List</h2>
        <Form align="center">
          <input
            type="text"
            name="name"
            placeholder="search by name"
            value={this.state.empName}
            className="rounded-4"
            onChange={(event) =>
              this.setState({ empName: event.target.value })
            }
          />
          &nbsp; &nbsp;
          <input
            type="text"
            name="address"
            placeholder="search by empId"
            value={this.state.empId}
            className="rounded-4"
            onChange={(event) =>
              this.setState({ empId: event.target.value })
            }
          />
          &nbsp; &nbsp;
          <Button type="button" onClick={(event) => this.search(event)}>
            Search
          </Button>
        </Form>
        <Table className="table-list" >
        
          <thead>
            <tr>
            <th>Sr.No.</th>
              <th>Emp Id</th>
              <th>Admin Id</th>
              <th>EmpName</th>
              <th>Address</th>
              <th>Login Id</th>
              <th>Salary</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.state.post.map((ele, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{ele.empId}</td>
                <td>{ele.adminId}</td>
                <td>{ele.empName}</td>
                <td>{ele.Address}</td>
                <td>{ele.loginId}</td>
                <td>{ele.salary}</td>
                
                <td>
                  <Button
                    type="button"
                    variant="danger"
                    onClick={(event) => this.delete(ele.empId)}
                  >
                    Delete
                  </Button>{" "}
                </td>
                <td>
                   <Link
                    className="btn btn-info"
                    to={"/user/" + ele.empId}
                  >
                    Edit
                  </Link> 
                </td> 
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}
