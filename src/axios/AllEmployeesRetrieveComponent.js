import React from 'react';
import axios from 'axios';
class AllEmployeesRetrieveComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            employee:[]
        }
    }

 
 componentDidMount(){
     axios.get("http://localhost:8083/api/employees")
     .then(response=>{
         this.setState({employee:response.data});
     }).catch(console.log);
 }

 render(){
     return(
     <div>
   <table class="table table-striped">
   <thead>
   <tr>
   <th scope="col">Employee Id#</th>
   <th scope="col">First Name</th>
   <th scope="col">Last Name</th>
   <th scope="col">Email Address</th>
    </tr>
    </thead>
    <tbody>
        {
        this.state.employee.map(
            (e)=>(
                <tr>
                <td>{e.employeeId}</td>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.email}</td>
                </tr>
            )
        )

        }
        </tbody>
    </table>
    </div>

     );
 }
}
export default AllEmployeesRetrieveComponent;