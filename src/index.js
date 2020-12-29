import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import EmployeeComponent from './EmployeeComponent';
import EmployeeRootComponent from './EmployeeRootComponent';
import EmployeeRootFunctionalComponent from './EmployeeRootFunctionalComponent';
import EmployeeStateComponent from './EmployeeStateComponent';
import EmployeeModifyStateRegularFunction from './EmployeeModifyStateRegularFunction';
import EmployeeModifyStateArrowFunction from './EmployeeModifyStateArrowFunction';
import MaintainStateFunctionalComponent from './MaintainStateFunctionalComponent';
import EmployeePropsComponent from './EmployeePropsComponent';
import EmployeeParentPropsComponent from './EmployeeParentPropsComponent';
import ParentFunctionalComponent from './ParentFunctionalComponent';
import ParentDefaultPropsComponent from './ParentDefaultPropsComponent';
import ArrayPropsComponent from './props/ArrayPropsComponent';
//import ParentComponent from './comm/ParentComponent';
import ParentComponentReceiver from './comm/ParentComponentReceiver';
import RootComponent from './lifecycle/RootComponent';
import LifeCycleComponentMounting from './lifecycle/LifeCycleComponentMounting';
import LifeCycleComponentUpdating from './lifecycle/LifeCycleComponentUpdating';
import ParentComponent from './lifecycle/ParentComponent';
import AllEmployeeRetrieveComponent from './fetch/AllEmployeeRetrieveComponent';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import AllEmployeesRetrieveComponent from './axios/AllEmployeesRetrieveComponent';
import DynamicDropDownComponent from './axios/DynamicDropDownComponent';
import MultipleServicesComponent from './axios/MultipleServicesComponent';
import PostEmployeeDataComponent from './fetch/PostEmployeeDataComponent';
import PostEmployeeDataAxios from './axios/PostEmployeeDataAxios';
import AppHoc from './HOC/AppHoc.js'
import MyHoc from './HOC/MyComponent.js';
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

//const employeedetails=<p>Employee Details</p>;
const employeedetails=(
  <table border='2'>
<tr>
  <th>Employee Id</th><th>Employee Name</th><th>Employee Salary</th><th>Employee Designation</th>
  </tr>
  <tr>
    <td>1001</td>
    <td>Sabbir</td>
    <td>34000</td>
    <td>Trainer</td>
    </tr>
    </table>
);
//ReactDOM.render(employeedetails,document.getElementById('root'));
//ReactDOM.render(<EmployeeComponent/>,document.getElementById('root'))
const employeedetailsExplict=React.createElement('p',{},'Employee Details');
//ReactDOM.render(employeedetailsExplict,document.getElementById('root'));
//ReactDOM.render(<EmployeeRootComponent/>,document.getElementById('root'));
//ReactDOM.render(<EmployeeRootFunctionalComponent/>,document.getElementById('root'));
//ReactDOM.render(<EmployeeStateComponent/>,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
//ReactDOM.render(<EmployeeModifyStateRegularFunction/>,document.getElementById('root'));
//ReactDOM.render(<EmployeeModifyStateArrowFunction/>,document.getElementById('root'));
//ReactDOM.render(<MaintainStateFunctionalComponent/>,document.getElementById('root'));
//ReactDOM.render(<EmployeePropsComponent empId="1002" empName="sabbir" empSalary="34000" empDesignation="Trainer"/>,document.getElementById('root'));
//ReactDOM.render(<EmployeeParentPropsComponent/>,document.getElementById('root'));
//ReactDOM.render(<ParentFunctionalComponent/>,document.getElementById('root'));
//ReactDOM.render(<ParentDefaultPropsComponent header={23232}/>,document.getElementById('root'));
const names=['sabbir','amit','sumeet'];
//ReactDOM.render(<ArrayPropsComponent passArray={names}/>,document.getElementById('root'));
//ReactDOM.render(<ParentComponent/>,document.getElementById('root'));
//ReactDOM.render(<ParentComponentReceiver/>,document.getElementById('root'));
/*ReactDOM.render(<RootComponent/>,document.getElementById('root'));
setTimeout(
  ()=>{
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
  },10000);
  */
  //ReactDOM.render(<LifeCycleComponentMounting empNameProp='amit'/>,document.getElementById('root'));
//ReactDOM.render(<LifeCycleComponentUpdating/>,document.getElementById('root'));
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//ReactDOM.render(<ParentComponent/>,document.getElementById('root'));
//ReactDOM.render(<AllEmployeeRetrieveComponent/>,document.getElementById('root'));
//ReactDOM.render(<AllEmployeesRetrieveComponent/>,document.getElementById('root'));
//ReactDOM.render(<DynamicDropDownComponent/>,document.getElementById('root'));
//ReactDOM.render(<MultipleServicesComponent/>,document.getElementById('root'));
//ReactDOM.render(<PostEmployeeDataComponent/>,document.getElementById('root'));
//ReactDOM.render(<PostEmployeeDataAxios/>,document.getElementById('root'));
//ReactDOM.render(<AppHoc/>,document.getElementById('root'));
ReactDOM.render(<MyHoc/>,document.getElementById('root'));
serviceWorker.unregister();
