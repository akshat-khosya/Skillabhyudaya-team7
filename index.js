alert("Hello");
var Name = prompt("What is your name?");

var firstchar = Name.slice(0,1);

var upcase = firstchar.toUpperCase();

var remainname = Name.slice(1,Name.length);

var fullName = upcase + remainname;
alert(+ fullName +", welcome to the site!");

var message = prompt("Hey! write down your details");

var character = message.length;
alert("You have written" + character + "characters");
