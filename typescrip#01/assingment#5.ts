// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message.

export function authorName(author = "Author") {
  var name = author;
  var qoute =
    " once said, The only impossible journey is the one you never begin.";
  return name + qoute;
}
var authorname = "Tony Robbins";
console.log(authorName(authorname));
