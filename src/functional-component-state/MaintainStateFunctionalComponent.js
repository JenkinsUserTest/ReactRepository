import React,{useState} from 'react';
function MaintainStateFunctionalComponent(){

    const[click,setClick]=useState(0);

    return(

        <div>
            <p>Current click value:{click}</p>
            <button onClick={()=>setClick(click+1)}>Change</button>
            </div>
    );
}

export default MaintainStateFunctionalComponent;