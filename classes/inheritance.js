function person (fname,lname){
    let firstname= fname
    let lastname= lname
    let getDetails_noAccess=function(){
        return (`first name is: ${firstname} and last  name is: ${lastname}`)
    }
    {this.getDetails_Access=function(){
        return (`first name is: ${firstname} and last name is : ${lastname}`)

    }
}
}
let person1= new person('alice','mazibuko');
console.log(person1.firstname);
console.log(person1.getDetails_Access());
console.log(person1.getDetails_noAccess);
