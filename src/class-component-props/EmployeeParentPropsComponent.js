import React from 'react';
import EmployeeHeaderPropsComponent from './EmployeeHeaderPropsComponent';
import EmployeeContentPropsComponent from './EmployeeContentPropsComponent';
class EmployeeParentPropsComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            header:"Yash Technologies",
            content:"Employee Information"
        }
    }
    render(){
        return(
            <div>
                <EmployeeHeaderPropsComponent headerProp={this.state.header}/>
                <EmployeeContentPropsComponent contentProp={this.state.content}/>
                </div>
        );
    }

}
export default EmployeeParentPropsComponent;