import React from 'react';
class EmployeeStateComponent extends React.Component{
    constructor(){
        super();
        this.state={
            employee:{
               empId:1001,
               empName:'sabbir',
               empSalary:34000,
               empDesignation:'Trainer'
            }
        }
    }
    render(){
        return(
          <div>
          <table border='2'>
        <tr>
            <th>Employee Id</th><th>Employee Name</th><th>Employee Salary</th><th>Employee Designation</th>
            </tr>
            <tr>
                <td>{this.state.employee.empId}</td>
                <td>{this.state.employee.empName}</td>
                <td>{this.state.employee.empSalary}</td>
                <td>{this.state.employee.empDesignation}</td>
                </tr>
         </table>
          </div>
        );
    }

}
export default EmployeeStateComponent;