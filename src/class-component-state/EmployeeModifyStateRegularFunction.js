import React from 'react';
class EmployeeModifyStateRegularFunction extends React.Component{

constructor(){
    super();
    this.state={
        empName:''
    }
   this.changeEmpName= this.changeEmpName.bind(this);
}

//regular function
changeEmpName(){
    this.setState({empName:'sabbir'});
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
export default EmployeeModifyStateRegularFunction;