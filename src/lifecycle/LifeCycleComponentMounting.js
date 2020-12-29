import React from 'react';
class LifeCycleComponentMounting extends React.Component{
   
   constructor(props){
       super(props);
       console.log("--constructor--");
       this.state={
           empName:'intial value'
       }
   }


   static getDerivedStateFromProps(props,state){
     console.log("--getDerivedStateFromProps--");
     return {empName:props.empNameProp};
   }

   render(){
       console.log("--render--");
       return(
           <div>
               <p>EmpName:{this.state.empName}</p>
               </div>
       );
   }

   componentDidMount(){
     console.log("--component did mount--");
     setTimeout(()=>{
     this.setState({empName:'shabbir'});
     },10000)
   }

}

export default LifeCycleComponentMounting;