// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.

let magicians_names:any[] = ["Lance Burton", "Ricky Jay", "Mark Wilson", "john"];
function show_magicians(magicians_names:any) {
  magicians_names.forEach((element: any) => {
    console.log(element);
  });
}
show_magicians(magicians_names);
