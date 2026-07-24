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
