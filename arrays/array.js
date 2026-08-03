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
