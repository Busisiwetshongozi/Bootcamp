
let prompt = require("prompt-sync")(

)
function checkage(age){
    if (age>=18) 
    {return true}
    
    else{
        return console.log("you received permission from your parents ?")
    }}
    let age = prompt('how old are you? ',18)
    if (checkage(age)){
        console.log('access is granted')
        showmovie();
    }else
    {console.log('access id denied')};

function showmovie(){
  let d=0
  let i=2
  for(i=5 ;i>d;i--){
    console.log('access is granted')
    console.log('playing a movie')
  }
    }
