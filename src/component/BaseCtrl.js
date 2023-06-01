import React, { Component } from 'react'

export default class BaseCtrl extends Component {
    constructor(props){
        super(props);
    }
    ChangeInputError=(name,value)=>{
        var data=this.state["inputError"];
        return data[name]
    }
    getInputError=(name)=>{
        var data=this.state["inputError"];
        return data[name];
    }
 
}

