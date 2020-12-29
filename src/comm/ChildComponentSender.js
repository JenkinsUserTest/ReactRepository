import React from 'react';
class ChildComponentSender extends React.Component{
constructor(props){
    super(props);
    this.state={
        empName:''
    };
this.onEmpNameChange=this.onEmpNameChange.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);
}
onEmpNameChange(event){
    this.setState({empName:event.target.value});
}
handleSubmit(){
    this.props.propsFunc(this.state.empName);
}
render(){
    return(
        <div>
            <hr/>
            <h3>Child Component</h3>
            Current Emp Name is {this.state.empName}<br></br>
            Emp Name:<input type='text' value={this.state.empName} onChange={this.onEmpNameChange}/>
            <input type="button" value="submit" onClick={this.handleSubmit}/>
            </div>
    );
}
}
export default ChildComponentSender;