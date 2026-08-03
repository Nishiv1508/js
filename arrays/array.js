//Do not compare any type of object with primitive datatype with == operator as the object will be converted to primitive datatype. (Use ===)

let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits);
fruits[1] = "Pear";
console.log(fruits);
console.log(fruits.length);
console.log(fruits.at(-1)); //negative indexing

//push pop
fruits.pop();
console.log(fruits);
fruits.push("Banana");
console.log(fruits);

//shift and unshift
fruits.unshift("Mango");
console.log(fruits);
fruits.shift();
console.log(fruits);

//mix values
let arr = [
  "Apple",
  { name: "John" },
  true,
  () => {
    console.log("hello");
  },
];
console.log(arr[1].name);
arr[3]();

// new Array method
let arr1 = new Array("Cat", "Dog");
console.log(arr1);

//Multi-dimensional arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[2][1]);

//deleting an element
let arr2 = ["i", "go", "home"];
delete arr2[1];
console.log(arr2[1]);
arr2[1] = "go";

//splice
arr2.splice(1, 1); //from index 1 remove 1 element
console.log(arr2);

//slice and concat
let arr3 = ["t", "e", "s", "t"];
console.log(arr3.slice(1, 3));
console.log(arr3.concat("Meow"));

//forEach method
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in array ${array}`);
});

// index methods
let arr4 = [1, 0, false];
console.log(arr4.indexOf(0));
console.log(arr4.indexOf(false));
console.log(arr4.includes(1));
console.log(arr4.lastIndexOf(0));

let arr5 = [NaN];
console.log(arr5.indexOf(NaN)); // -1 (wrong, it should be 0)
console.log(arr5.includes(NaN)); // true (Correct)

// find methods
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" },
];
let user = users.find((item) => {
  return item.id == 1;
});
console.log(user.name);

console.log(users.findIndex((user) => user.name == "John"));
console.log(users.findLastIndex((user) => user.name == "John"));

//map, filter, reduce
let someUsers = users.filter((item) => item.id < 3);
console.log(someUsers);

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
console.log(lengths);

let arr6 = [1, 2, 3, 4, 5];
//reduce params (accumulator, item, index, array)  accumulator must have a initial value
let result = arr6.reduce((sum, current) => sum + current, 0);
console.log(result);

//isArray method
console.log(typeof []);
console.log(typeof {}); //both will return object only

console.log(Array.isArray({}));
console.log(Array.isArray([]));

//sort reverse split (str to array) and join (array to str)
let arr7 = [1, 2, 15];
// arr7.sort();  -> Do not use this
arr7.sort((a, b) => a - b); //ascending order
console.log(arr7);
arr7.sort((a, b) => b - a); //descending order
console.log(arr7);

arr7.reverse();
console.log(arr7);

let names = "Bilbo, Gandalf, Nazgul";
let arr8 = names.split(", ");
console.log(arr8);
let arr9 = "Bilbo, Ganadalf, Nazgul".split(", ", 2);
console.log(arr9);

let str = "test";
console.log(str.split(""));

let arr10 = ["Bilbo", "Gandalf", "Nazgul"];
let str1 = arr10.join(" ");
console.log(str1);
