const students = [
  { id: 21, name: "Omar Sunny" },
  { id: 31, name: "Manna" },
  { id: 41, name: "Moyori" },
  { id: 71, name: "Deepjol" },
];
// long way to get the names
// const onlyName = [];
// for (let i = 0; i < students.length; i++) {
//   const element = students[i].name;
//   onlyName.push(element);
// }
// console.log(onlyName);

// Shortest way
const name = students.map((s) => s.name);
const id = students.map((s) => s.id);
const idAbove40 = students.filter((s) => s.id > 40);
const firstIdAbove40 = students.find((s) => s.id > 40);
console.log(name);
console.log(id);
console.log(idAbove40);
console.log(firstIdAbove40);
