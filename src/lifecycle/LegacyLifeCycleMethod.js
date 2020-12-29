import React from 'react';
class LegacyLifeCycleMethod extends React.Component{


componentWillMount(){
    console.log('Component will Mount');
}
componentDidMount(){
    console.log('Component did mount');
}
componentWillReceiveProps(newProps){
    console.log('Component will receive props');
}
shouldComponentUpdate(newProps,newState){
    return true;
}
componentWillUpdate(prevProps,prevState){
    console.log('Component Did Update');
}
componentWillUnmount(){
    console.log('Component will unmount');
}
render(){
    console.log('render');
    return(
        <div>
            <h3>{this.props.counterProps}</h3>
            </div>
    );
}
}
export default LegacyLifeCycleMethod;