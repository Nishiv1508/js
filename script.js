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

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgD, avgK) {
  if (avgD > 2 * avgK) {
    console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
  } else if (avgK > 2 * avgD) {
    console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
  } else {
    console.log("No team wins...");
  }
}

checkWinner(scoreDolphins, scoreKoalas);
