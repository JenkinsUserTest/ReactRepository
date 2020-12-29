import React from 'react';
class AllEmployeeRetrieveComponent extends React.Component{

constructor(props){
    super(props);
    this.state={
        employee:{
        employees:[]
        }
    }
}
componentDidMount(){
    const fetchEmployeeDetails=async()=>{
        fetch("http://localhost:8083/api/employees")
    .then(res=>res.json())
    .then((data)=>{
        this.setState({employee:data})
    }).catch(console.log);
}
fetchEmployeeDetails();
}
render(){
    return(
<div>
    <table>
        <tr>
            <th>Employee Id</th><th>Employee Name</th><th>Employee Salary</th><th>Employee Designation</th>
            </tr>
           
           {this.state.employee.employees.map(
               (e)=>(
                   <tr>
                       <td>{e.employeeId}</td>
                       <td>{e.firstName}</td>
                       <td>{e.lastName}</td>
                       <td>{e.salary}</td>
                       </tr>
               )
           )}
        </table>
    </div>

    );
}
}
export default AllEmployeeRetrieveComponent;