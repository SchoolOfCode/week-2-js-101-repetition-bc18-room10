//Task 1
//1. Make a variable that is a number.
let num = 62;

//2. Read the value of that variable in your console.
console.log(num);

//3. Reassign that variable to be itself plus 50. Had to update from const to let variable.
num = num + 50;

//4. Read the value of the variable again in your console to prove that it has changed.
console.log(num);

//5. Repeat steps three and four, but use [different mathematical operators](https://www.w3schools.com/js/js_arithmetic.asp).

num = num ** 2;
console.log(num);
num = num / 50;
console.log(num);

// Task 2:
//1. Make a variable that is a string (using `""` or `''`).
const str = `My number became ${num}. `;
const toInstructionsStr = "HowdeeDoodee!";

// 2. Using the `+` operator, reassign your variable to be what it was before, concatenated with another string.

const newStr = str + toInstructionsStr;
const tryHard = toInstructionsStr + " Everybody.";

//3. Read the value of `myString` in the console to prove to yourself that it has changed.
console.log(str, "\n", toInstructionsStr, "\n", newStr, "\n", tryHard);
