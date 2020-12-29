import React from 'react';
class EmployeeContentPropsComponent extends React.Component{

render(){
    return(
        <div>
            <p>{this.props.contentProp}</p>
            </div>
    );
}
}
export default EmployeeContentPropsComponent;