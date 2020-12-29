import React from 'react';
import HeaderComponent from './HeaderComponent';
import EmployeePersonalDetailsComponent from './EmployeePersonalDetailsComponent';
import EmployeeProfessionalDetailsComponent from './EmployeeProfessionalDetailsComponent';
class EmployeeRootComponent extends React.Component{

render(){
    return(
        <div>
        <HeaderComponent/>
        <EmployeePersonalDetailsComponent/>
        <EmployeeProfessionalDetailsComponent/>
        </div>
    );

}
}
export default EmployeeRootComponent;