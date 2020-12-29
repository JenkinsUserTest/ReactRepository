import React from 'react';
import axios from 'axios';
class PostEmployeeDataAxios extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Employee:{
                empId:0,
                empName:'',
                empSalary:0,
                empDesignation:''
            },
            res:''
        }
    }
    changeHandler=(event)=>{
        let Employee={...this.state.Employee};
        Employee[event.target.name]=event.target.value;
        this.setState({Employee});
    }

    sendData=(event)=>{

     event.preventDefault();

     axios(
         {
             method:'post',
             url:'http://localhost:8082/api/employees',
             data:{
                 empId:this.state.Employee.empId,
                 empName:this.state.Employee.empName,
                 empSalary:this.state.Employee.empSalary,
                 empDesignation:this.state.Employee.empDesignation
             }
         }
     ).then(
         response=>{
             this.setState({res:response.data})
         }
     ).catch(console.log);

    }

 render(){

    return(
        <div>
            <form onSubmit={this.sendData}>
        Emp Id:<input type='text' value={this.state.Employee.empId} name="empId" onChange={this.changeHandler}/>
        Emp Name:<input type='text' value={this.state.Employee.empName} name="empName" onChange={this.changeHandler}/>
        Emp Salary:<input type='text' value={this.state.Employee.empSalary} name="empSalary" onChange={this.changeHandler}/>
        Emp Designation:<input type='text' value={this.state.Employee.empDesignation} name="empDesignation" onChange={this.changeHandler}/>
        <button>Submit</button>

        <p>Response is :{this.state.res}</p>
        </form>
        </div>
    )

    }
}
export default PostEmployeeDataAxios;