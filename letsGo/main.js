console.log("Hello world");
//1.
let myFavNumber = 80;
if (myFavNumber === 5) {
  console.log("My favourite number is 5 too!");
}
//2.
let myVariable = prompt("What's your name?");
if (myVariable === "Ben") {
  alert("That's my name too!");
} else {
  alert(`${myVariable}?! That's a silly name...`);
}
//3.
const weatherType = "";
if (weatherType === "raining") {
  alert("Take an umbrella!");
} else {
  if (weatherType === "sunny") {
    alert("Don't forget sunscreen!");
  } else {
    alert("Must be a normal, grey, non-descript day!");
  }
}
