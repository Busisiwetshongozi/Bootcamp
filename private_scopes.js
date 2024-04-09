class person{
    constructor(fname){
        this.fname = fname

    }
    toString(){
        return(`name of this person : ${this.fname}`)
    }
}
class student extends person{
    constructor(fname,id){
        super(fname);
        this.id = id;
    }
    toString() {
        return(`${super.toString()}
        with student id : ${this.id}`)
     

     }


}
    
        
    

     
let student1= new student('alice',28373878);
console.log(student1);
console.log(student1.toString());
