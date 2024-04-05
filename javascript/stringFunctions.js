let UserName= 'alice'
let message = 'welcome ' +  UserName;
from=''
text=''
function sendmsg(){
   
   console.log(message);
}

function showMessage(){
UserName='BOB';
console.log(message ,UserName) 
}

console.log(message,UserName)
function msg(from,text){
    from= 'anonymous '
    text= 'welcome to my online learnership'
    return from + text
}
console.log(msg())

