import React from 'react';
var intialData={
    data: 'initial data'
}

var MyHoc=ComposedComponent=> class extends React.Component{
    componentDidMount(){
    this.setState({
        data:intialData.data
    })
    setTimeout(()=>{
    this.setState({data:'data modified....'});
},10000);
}
render(){
    return <ComposedComponent {...this.props} {...this.state}/>
}
}
class MyComponent extends React.Component{
    render(){
        return(
            <div>
            <p>{this.props.data}</p>
            </div>
        )
    }
}
export default  MyHoc(MyComponent);