import React,{Component} from 'react';
function FunctionalHOC(HocComponent){

return class extends Component{
    render(){
        return(
            <div>
           <HocComponent/>
            </div>
        )
    }
}
}
export default FunctionalHOC;