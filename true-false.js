// zero gives false value
// empty string gives false value
// undefined values are false
// null gives false value
// NaN gives false value

// Values other than mentioned above are true

let name = "";
if (name) {
  console.log("The value is true");
} else {
  console.log("The value is false");
}

let name2 = "thomas";
if (name2) {
  console.log("The value is true");
} else {
  console.log("The value is false");
}

let age;
console.log(age);
if (age) {
  console.log("The value is true");
} else {
  console.log("The value is false");
}

let num = 0;
if (num) {
  console.log("The value is true");
} else {
  console.log("The value is false");
}

let num2 = 5;
if (num2) {
  console.log("The value is true");
} else {
  console.log("The value is false");
}

let num3 = NaN;
if (num3) {
  console.log("The value is true");
} else {
  console.log("The value is false");
}
