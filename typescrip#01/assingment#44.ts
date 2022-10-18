// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered.
// Call the function three times, using a different number of arguments each time.
class Sandwitch {
  private _name: string;
  private _type: string;
  constructor(name: string, type: string) {
    this._name = name;
    this._type = type;
  }
  get name() {
    return this._name;
  }
  get type() {
    return this._type;
  }
}
// let sandwitch = [
//   {
//     name:string = "test";
//     type: "Grilled Chicken Sandwich",
//   },
//   {
//     name: "mine",
//     type: "Ham Sandwich",
//   },
// ];
// let sandwitchOne = [
//   {
//     name: "test",
//     type: "Chicken Sandwich",
//   },
//   {
//     name: "mine",
//     type: "Seafood Sandwich",
//   },
// ];
// let sandwitchTwo = [
//   {
//     name: "test",
//     type: "Ham Sandwich",
//   },
//   {
//     name: "mine",
//     type: "Grilled Cheese",
//   },
// ];

function sandwhiceOrdered(items: Sandwitch[]) {
  items.forEach((element) => {
    console.log(
      `The Sandwhich name is ${element.name} and type is ${element.type}`
    );
  });
}
let sandwitch = new Sandwitch("test", "Grilled Chicken Sandwich");
let sandwitchOne = new Sandwitch("test", "Chicken Sandwich");
let sandwitchTwo = new Sandwitch("test", "Ham Sandwich");
let sandArary: Sandwitch[] = [];
sandArary.push(sandwitch);
sandArary.push(sandwitchOne);
sandArary.push(sandwitchTwo);
sandwhiceOrdered(sandArary);
