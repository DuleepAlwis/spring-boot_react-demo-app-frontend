import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import EmployeeService from "../services/EmployeeService";


class EmployeeListComponent extends Component{

     

    constructor(props){
        super(props);

        this.state = {
            employees:[]
        }

        this.addEmployee = this.addEmployee.bind(this);
    }

    addEmployee(){
        
        this.props.history.push('/add-employee');
        console.log(this.props.history);
    }

    componentDidMount(){
        EmployeeService.getAllEmployee().then((res)=>{
            this.setState({employees:res.data})
        },(err)=>{
            console.log("Error occurred "+err)
        })
    }

    render(){
        return(
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee=>
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.email}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default withRouter(EmployeeListComponent);