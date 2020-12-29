import React from 'react';
import axios from 'axios';
class DynamicDropDownComponent extends React.Component{

constructor(props){
    super(props);
    this.state={
        department:[]
    }
}
componentDidMount(){
  axios.get("http://localhost:8083/api/departments")
  .then(response=>{
      this.setState({department:response.data});
  }).catch(console.log)
}
render(){
    let arrayOfData=this.state.department;
    let options=arrayOfData.map(
       (d)=><option key={d.departmentId} value={d.departmentName}>
           {d.departmentName}
           </option>
    );
    return(
        <select className="custom-search-select">
            {options}
        </select>
    )
}
}
export default DynamicDropDownComponent;