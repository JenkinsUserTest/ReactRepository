import React from 'react';
import LegacyLifeCycleMethod from './LegacyLifeCycleMethod';
class RootComponent extends React.Component{
constructor(props){
    super(props);
    this.state={
        counter:0
    }
    this.changeCounter=this.changeCounter.bind(this);
}
changeCounter(){
    this.setState({counter:this.state.counter+1})
}
render(){
    return(
        <div>
            <button onClick={this.changeCounter}>+</button>
            <LegacyLifeCycleMethod counterProps={this.state.counter}/>
            </div>
    );
}
}
export default RootComponent;