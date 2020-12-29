import React from 'react';
class ChildComponent extends React.Component{

    render(){
        return(
            <div>
                <hr/>
                <h3>Child Component</h3>
                <p>{this.props.empName}</p>
                </div>
        )
    }

}
export default ChildComponent;