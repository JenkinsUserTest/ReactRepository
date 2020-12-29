import React from 'react';
class ChildDefaultPropsComponent extends React.Component{

    render(){
        return(
            <div>
                <h1>{this.props.header}</h1>
                </div>
        );
    }


}
ChildDefaultPropsComponent.defaultProps={
header:"Default child header"
}
export default ChildDefaultPropsComponent;