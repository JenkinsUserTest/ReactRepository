import React from 'react';
import axios from 'axios';
class MultipleServicesComponent extends React.Component{

constructor(props){
    super(props);
    this.state={
        departments:[],
        jobs:[],
        managers:[]
    }
}

componentDidMount(){
    axios.all(
        [
            axios.get("http://localhost:8083/api/departments"),
            axios.get("http://localhost:8083/api/jobs"),
            axios.get("http://localhost:8083/api/managers")
        ]
    ).then(
        response=>{
            this.setState({departments:response[0].data});
            console.log(response[0].data);
            this.setState({jobs:response[1].data});
            console.log(response[1].data);
            this.setState({managers:response[2].data});
            console.log(response[2].data);
        }
    )
}
render(){
    return <p>Dynamic Controls</p>;
}

}
export default MultipleServicesComponent;