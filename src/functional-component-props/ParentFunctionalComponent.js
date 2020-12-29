import React from 'react';
import ChildFunctionalComponent from './ChildFunctionalComponent';
function ParentFunctionalComponent(){
  const greeting='This is coming from Parent';
  return <ChildFunctionalComponent value={greeting}/>;
  
}
export default ParentFunctionalComponent;