// function log(message : any){
//     console.log(message);
// }
// let message = "Hello World"
// log(message);
var Humanbeing = /** @class */ (function () {
    function Humanbeing(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        // this.firstname = firstname;
        // this.lastname = lastname;
    }
    Humanbeing.prototype.greet = function () {
        console.log("Hi there!" + this.firstname + " " + this.lastname);
    };
    return Humanbeing;
}());
var p = new Humanbeing("ali", "book");
p.greet();
