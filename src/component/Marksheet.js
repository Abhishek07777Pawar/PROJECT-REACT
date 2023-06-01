import axios from 'axios'
import React, { Component } from 'react'
import withRouter from './withRouter'
import { Button } from "react-bootstrap";
class Marksheet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: [],
            Name: "",
            rollNo: "",
            physics: "",
            chemistry: "",
            maths: "",
            studentId: "",
            list: [],
            // message: "",
            // message1: "",
            // inputerror: {
            //     name: "",
            //     rollNo: "",
            //     physics: "",
            //     chemistry: "",
            //     maths: "",
            //     studentId:"",
            // },

        }
        if (this.props.param.studentId) {
        this.get();
         }
    }


    get() {
        let id = this.props.param.studentId;
        console.log(id)
        let url = "http://localhost:8000/MarksheetById/get/" + id
        axios.get(url).then((res) => {
            console.log(res)
            this.setState({
                rollNo: res.data.list[0].rollNo,
                Name: res.data.list[0].Name,
                physics: res.data.list[0].physics,
                chemistry: res.data.list[0].chemistry,
                maths: res.data.list[0].maths,
                studentId: res.data.list[0].studentId

            })
        })
    }

    // changeState(event) {
    //     let name = event.target.name
    //     let value = event.target.value
    //     this.setState({ [name]: value })
    // }



    save() {

        let url = 'http://localhost:8000/marksheet/save'
        axios.post(url, this.state).then((res) => {
            this.setState({ post: res.data })
            console.log(res)
            // this.setState({list:res.data.result.data})
            // if (res.data.result.inputerror && this.state.name=="") {
            //     this.setState({ inputerror: res.data.result.inputerror,
            //         message1:"must not be empty"
            //      })
            // }
            // else
            //     alert("LOADED")
        })
        // .catch(
        //     err => {
        //         this.setState({ message: err.name })
        //     }
        // )
    }
    update() {
        var id = this.props.param.studentId
        console.log(id)
        let url = "http://localhost:8000/MarkUpd/update/" + id
        axios.put(url, this.state).then((res) => {
            console.log(res)
            this.setState({ list: res.data.list })

        })
    }
    reset() {
        this.setState({
            name: "",
            rollNo: "",
            physics: "",
            chemistry: "",
            maths: "",
            message: "",
            studentId: "",
            message1: "",
            inputerror: {
                name: "",
                rollNo: "",
                physics: "",
                chemistry: "",
                maths: "",
                studentId: ""
            }
        })
    }

    render() {
        // console.log(this.props.param)
        return (

            <center>
                <div className='card' style={{ marginTop: "100px", width: "500px", height: "500px", backgroundColor: "skyblue" }}>
                    <div className='card-header'>
                        <h2>{
                            this.props.param.studentId ? "EDIT MARKSHEET" : "ADD MARKSHEET"}</h2>
                        <center><h6 style={{ color: "red" }}>{this.state.message}</h6></center>
                    </div>
                    <div className='card-body'>
                        <label>Name:</label>
                        {/* <span style={{ color: "red" }}>{this.state.message1 }</span> */}
                        <input className='form-control'
                            name='Name'
                            placeholder='Name'
                            value={this.state.Name}
                            onChange={(event) => this.setState({ Name: event.target.value })}
                        />

                        <label>Roll No:</label>
                        {/* <span style={{ color: "red" }}>{this.state.inputerror.rollNo}</span> */}
                        <input className='form-control'
                            name='rollNo'
                            placeholder='RollNo'
                            onChange={(event) => this.setState({ rollNo: event.target.value })}
                            value={this.state.rollNo} />

                        <label>Physics:</label>
                        {/* <span style={{ color: "red" }}>{this.state.inputerror.physics}</span> */}
                        <input className='form-control'
                            type='number'
                            name='physics'
                            placeholder='Physics'
                            onChange={(event) => this.setState({ physics: event.target.value })}
                            value={this.state.physics} ></input>

                        <label>Chemistry:</label>
                        {/* <span style={{ color: "red" }}>{this.state.inputerror.chemistry}</span> */}
                        <input className='form-control'
                            name='chemistry'
                            placeholder='Chemistry'
                            onChange={(event) => this.setState({ chemistry: event.target.value })}
                            value={this.state.chemistry}></input>

                        <label>Maths:</label>
                        {/* <span style={{ color: "red" }}>{this.state.inputerror.maths}</span> */}
                        <input className='form-control'

                            name='maths'
                            placeholder='Maths'
                            onChange={(event) => this.setState({ maths: event.target.value })}
                            value={this.state.maths}></input>

                        {/* maths */}
                        <label>studentId:</label>
                        <input className='form-control'

                            name='studentId'
                            placeholder='studentId'
                            onChange={(event) => this.setState({ studentId: event.target.value })}
                            value={this.state.studentId}></input>

                        {/* <span style={{ color: "red" }}>{this.state.inputerror.studentId}</span> */}
                        {/* <input className='form-control'
                         name='studentId'
                         placeholder='StudentId'
                       onChange={(event) => this.setState({studentId:event.target.value})}
                          vlaue={this.state.studentId}></input> */}
                    </div>

                    {/* <button onClick={()=>}></button> */}
                    <div className='card-footer'>
                        {/* <button className='btn btn-secondary '
                         type="button" 
                         value="Submit"
                         style={{border:"2px solid black"}}
                          onClick={(event) => this.save(event)} >
                            {
                            this.props.param.studentId ? "UPDATE " : "SUBMIT  "
                        }
                        </button> */}


                        {this.props.param.studentId ? <Button type="button" onClick={(event) => this.update(event)}>Update</Button>
                            : <Button type="button" onClick={(event) => this.save(event)}>Save</Button>}

                        <button className='btn btn-info' onClick={() => this.reset()}>RESET</button>
                    </div>
                </div>
            </center>
        )
    }
}
export default withRouter(Marksheet)