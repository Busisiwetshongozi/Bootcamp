class person {
    constructor(name,id){
       this.name = name;
       this.id = id ;
    }
    addAddress(address){
        this.address = address;
    }
    getDetails(){
        console.log(`Name of person id ${this.name}
        ,residing at ${this.address}`)

    }

}
let person1= new person('bob',10);
person1.addAddress('limpopo');
//abstraction
person1.getDetails();