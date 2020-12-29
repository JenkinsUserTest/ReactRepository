import React from 'react';
class EmployeeModifyStateArrowFunction extends React.Component{

constructor(){
    super();
    this.state={
        empName:''
    }
}
changeEmpName=(event)=>{
 this.setState({empName:'sabbir'})
}
render(){
    return(
    <div>
    <p>Current Value:{this.state.empName}</p>
    <button type="button" onClick={this.changeEmpName}>Modify</button>

    </div>

    );
}
}
export default EmployeeModifyStateArrowFunction;