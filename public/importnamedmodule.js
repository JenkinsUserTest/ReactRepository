//import {months,User} from './exportnamedmodule.js';
//import {MODULES_BECAME_STANDARD_YEAR as cv} from './exportnamedmodule.js';
import * as everything from './exportnamedmodule.js';
export function displayOnConsole(){

    console.log(everything.months);
    console.log(everything.MODULES_BECAME_STANDARD_YEAR);
    var user=new everything.User("sabbir");
    console.log(user);
}