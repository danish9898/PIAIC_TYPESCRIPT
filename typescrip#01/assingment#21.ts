// They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.

// Both way to declare objects in javascript
class Person {
  private _name!: string;
  private _age!: number;
  private _city!: string;
  private _occupation!: string;
  constructor(name:string,age:number,city:string,occupation:string){
    this._name = name;
    this._age = age;
    this._city = city;
    this._occupation = occupation;
  }
  get name(){
    return this._name;
  }
  get age(){
    return this._age;
  }
  get city(){
    return this._city;
  }
  get occupation(){
    return this._occupation;
  }
}
const person = new Person("ali",45,"lahore","developer");
const message = `Hi, my name ${person.name}. I am ${person.age} years old. I live in ${person.city}. I am a ${person.occupation}.`;
console.log(message);
