// challenge 1
let massMark = 60;
let heightMark = 1.6;
let massJohn = 80;
let heightJohn = 1.8;

let bmiMark = massMark / (heightMark * heightMark);
let bmiJohn = massJohn / (heightJohn * heightJohn);

let markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI);

//challenge 2
let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
} else {
  console.log("Dolphins win the trophy");
}

//challenge 3
const bill = 275;

/* Write your code below. Good luck! 🙂 */
let tip = bill > 50 && bill < 300 ? (15 * bill) / 100 : (20 * bill) / 100;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`,
);

//challenge 4
/* Write your code below. Good luck! 🙂 */

const calcAverage = (i, j, k) => {
  return (i + j + k) / 3;
};

let avgScoreDolphins = calcAverage(44, 23, 71);
let avgScoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgD, avgK) {
  if (avgD > 2 * avgK) {
    console.log(`Dolphins win (${avgScoreDolphins} vs. ${avgScoreKoalas})`);
  } else if (avgK > 2 * avgD) {
    console.log(`Koalas win (${avgScoreKoalas} vs. ${avgScoreDolphins})`);
  } else {
    console.log("No team wins...");
  }
}

checkWinner(avgScoreDolphins, avgScoreKoalas);

//challenge 5
// this.bmi creates a new key in the object
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john["calcBMI"]();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark["fullName"]}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`,
  );
} else {
  console.log(
    `${john["fullName"]}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`,
  );
}

//Challenge 6
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i in bills) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

const calcAverage = (arr) => {
  let sum = 0;
  arr.map((i) => {
    sum = sum + i;
  });
  return sum / arr.length;
};

let ans = calcAverage([1, 2, 3]);
console.log(ans);

// Destructuring and spread operator
const arr = [1, 2, 3];
const arr1 = [...arr, 4, 5];
console.log(arr1);
const [i, j, ...rest] = arr1;
console.log(i, j, rest);

const obj = {
  status: 201,
  msg: "Created",
};
const { status, msg } = { ...obj };
console.log(status);
console.log(msg);

const add = (...numbers) => {
  let sum = 0;
  for (let i of numbers) {
    sum = sum + i;
  }
  return sum;
};

console.log(add(1, 2, 3));
const numArray = [2, 3];
console.log(add(...numArray));

//?, ||, &&, ??  (Sort-circuiting)
const eg1 = 0 || 5;
const egg = 0 || undefined;
const eg2 = null && 5;
const eg3 = undefined ?? 5;
console.log(eg1, egg, eg2, eg3);
const obj1 = {
  name: "Js",
  devTime: 10,
};
console.log(obj1?.age ?? "No data available");
console.log(obj1?.name ?? "No data available");

//set
const set1 = new Set(["Pizza", "Risotto", "Pasta", "Pizza"]);
console.log(set1);
console.log(set1.has("Pizza"));
console.log(set1.has("Kachori"));
set1.add("Garlic Bread");
set1.delete("Risotto");
for (let i of set1) {
  console.log(i);
}

set1.clear();
console.log(set1);

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);
const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(commonFoods);
console.log([...commonFoods]); //set coverted to array

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log("Union", italianMexicanFusion);

console.log([...new Set([...italianFoods, ...mexicanFoods])]);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log("Difference: ", uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log("Difference mexican: ", uniqueMexicanFoods);

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods);
