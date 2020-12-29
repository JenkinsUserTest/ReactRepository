import React from 'react';
import FunctionalHOC from './FunctionalHOC';
class AppHoc extends React.Component{

    render(){
     return(
         <div>
        wrapped component
        </div>
     );

    }
}

AppHoc=FunctionalHOC(AppHoc)
export default AppHoc;