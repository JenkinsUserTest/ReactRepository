import User from './defaultexportmodule.js';
export function displayOnConsole(){
    var user=new User('Sabbir');
    console.log(user);
}

//export default displayOnConsole;
export {displayOnConsole as dc};