
import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

class CreateEmployeeComponent extends Component{

    constructor(props){
        super(props);

        this.state = {

        }
    }



    render(){
        return (
            <div>
                <h1>Create Employee</h1>
            </div>
        )
    }
}


export default withRouter(CreateEmployeeComponent);