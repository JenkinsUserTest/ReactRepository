import React from 'react';
import ChildDefaultPropsComponent from './ChildDefaultPropsComponent';
import PropTypes from 'prop-types';
class ParentDefaultPropsComponent extends React.Component{
    constructor(props){
        super(props);
    
    }

render(){
    return(
     <div>
         <ChildDefaultPropsComponent header={this.props.header}/>
         </div>
    );
}
}

ParentDefaultPropsComponent.defaultProps={
header:"Default header"
}
ParentDefaultPropsComponent.propTypes={
    header: PropTypes.string
}
export default ParentDefaultPropsComponent;