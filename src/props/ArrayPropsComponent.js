import React from 'react';
import PropTypes from 'prop-types';
class ArrayPropsComponent extends React.Component{
render(){
return(
<div>
<ul>
{
    this.props.passArray.map(
        (element)=>(
            <li>{element}</li>
        )
    )
}
</ul>
</div>

);

}
}
ArrayPropsComponent.propTypes={
    passArray:PropTypes.array.isRequired
}
ArrayPropsComponent.defaultProps={
   passArray:['rohit','rakesh'] 
}
export default ArrayPropsComponent;