import React from 'react';
class EmployeeHeaderPropsComponent extends React.Component{

render(){
    return(
        <div>
            <h1>{this.props.headerProp}</h1>
            </div>
    );
}
}
export default EmployeeHeaderPropsComponent;