// function log(message : any){
//     console.log(message);
// }
// let message = "Hello World"
// log(message);

class Humanbeing {
    constructor(private firstname : string, private lastname : string) {
    // this.firstname = firstname;
    // this.lastname = lastname;
    }
    greet() {
    console.log("Hi there!"+this.firstname+" "+this.lastname);
    }
}
let p = new Humanbeing("ali","book")
p.greet()