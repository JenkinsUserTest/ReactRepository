import React from 'react';
import ChildComponentSender from './ChildComponentSender';
class ParentComponentReceiver extends React.Component{

    constructor(props){
        super(props);
        this.state={
            empName:''
        };
        this.changeEmpName=this.changeEmpName.bind(this);
    }
    changeEmpName(val){
        this.setState({empName:val});
    }
    render(){
        return(
        <div>
            <h1>Parent Component</h1>
            Parent EmpName value:{this.state.empName}
            <ChildComponentSender propsFunc={this.changeEmpName}/>
            </div>

        );
    }

}
export default ParentComponentReceiver;