import React from 'react';
class ChildComponent extends React.Component{
  
  componentWillUnmount(){
      console.log("--Child Component is unmounted--");
  }
  render(){
      return(
          <h1>Yash Technologies</h1>
      );
  }

}
export default ChildComponent;