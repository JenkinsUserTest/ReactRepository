import React from 'react';
class LifeCycleComponentUpdating extends React.Component{

constructor(props){
    super(props);
    console.log("--constructor--");
    this.state={
        empName:'initial value'
    }
}
shouldComponentUpdate(){
    console.log("--should component update--");
    return true;
}

getSnapshotBeforeUpdate=(prevProps,prevState)=>{
    console.log("--get snapshot before update--");
    document.getElementById("div1").innerHTML="Before update:"+prevState.empName;
    return null;
}
componentDidUpdate(){
    console.log("--component did update--");
    document.getElementById("div2").innerHTML="After update:"+this.state.empName;
}

changeEmpName=()=>{
    console.log("--changeEmpName--");
    this.setState({empName:'Shabbir'});
}
render(){
    console.log("-render-");
    return(
        <div>
            <p>Emp Name:{this.state.empName}</p>
            <button onClick={this.changeEmpName}>update</button>
            <div id="div1"></div>
            <div id="div2"></div>
            </div>
    );
}
}
export default LifeCycleComponentUpdating;