// callbacks
// setTimeout(() => {
//   console.log("Hello");
// }, 0);

// const cart = ["shoes", "pants", "t-shirt"];

//callback hell and inversion of control
// api.createOrder(cart, function () {
//   api.proceedToPayment(function () {
//     api.showOrderSummary(function () {
//       api.updateWallet();
//     });
//   });
// });

// Promises : an object storing eventual completion/rejection of the async operation
//Overview:
const GITHUB_API = "https://api.github.com/users/";

// const user = fetch(GITHUB_API); //Readable stream
// console.log(user);

// user
//   .then((data) => {
//     return data.json(); //do not forget to return
//   })
//   .then((parsedData) => {
//     console.log(parsedData);
//   });

////////////////////////////////////////////// CREATING PROMISE (Producer part)
// function createOrder(cart) {
//   const pr = new Promise((resolve, reject) => {
//     if (!validateCart(cart)) {
//       const err = new Error("Cart isnt valid");
//       reject(err);
//     }
//     const orderId = "12345";
//     if (orderId) {
//       setTimeout(() => {
//         resolve(orderId);
//       }, 5000);
//     }
//   });
//   return pr;
// }

// function validateCart(cart) {
//   return false;
// }

// function proceedToPayment(orderId) {
//   return new Promise((resolve, reject) => {
//     resolve("Payment Successfull");
//   });
// }

// //Consumer Part
// const promise = createOrder(cart);
// promise
//   .then((orderId) => {
//     console.log(orderId);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// promise
//   .then((orderId) => {
//     return orderId;
//   })
//   .then((orderId) => {
//     return proceedToPayment(orderId); // This is a promise so the then block from now will be attached to this
//   })
//   .then((payInfo) => {
//     console.log(payInfo);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   })
//   .then(() => {
//     console.log(
//       "This will must happen as it is after catch block. Catch only handles the then blocks above it",
//     );
//   });

// async-await
//async function always return a promise

// const p1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise resolved");
//     }, 5000);
//   });
// };
// const p2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise resolved");
//     }, 3000);
//   });
// };
// const val1 = p1();
// const val2 = p2();
// async function handlePromise() {
//   const data = await fetch(GITHUB_API); //fetch returns a promise (readable stream)
//   const parsedData = await data.json();
//   console.log(parsedData);

//   const pre1 = await val1;
//   console.log(pre1);
//   const pre2 = await val2;
//   console.log(pre2);
// }

// handlePromise();

//Promise methods (time taken will be the time taken by a promise in that array)

//Promise.all([p1,p2,p3]) returns array of results from promises (all promises must get execute is any one is a reject then this will show error)

//Promise.allSettled([p1,p2,p3]) -> same as .all but if one rejects then also it will wait for all promises to get settled.

//Promise.race([p1,p2,p3]) -> fastest promise that is executed and if the promise is rejected then error will be thrown

//Promise.any([p1,p2,p3]) -> Similar like race. waits for 1st promise to get successfull. But if the samallest time promise is rejected then whichever is successfull first, it will return that promise. If all fails then return will be aggregate error (an array of all three errors)

// const pro1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Pro1 success"), 3000);
// });
// const pro2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Pro2 fail"), 1000);
// });
// const pro3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Pro3 success"), 5000);
// });

// Promise.all([pro1, pro2, pro3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// Promise.allSettled([pro1, pro2, pro3])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Promise.race([pro1, pro2, pro3])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// Promise.any([pro1, pro2, pro3])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

const btn = document.querySelector(".btn-1");
const container = document.querySelector(".container");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");
const para4 = document.createElement("pre");
const img1 = document.createElement("img");
const a1 = document.createElement("a");

btn.addEventListener("click", async (e) => {
  const url = GITHUB_API + document.querySelector(".username").value;

  const userData = await fetch(url);
  const userParsedData = await userData.json();
  console.log(userParsedData);
  const repo = await fetch(userParsedData.repos_url);
  const repoData = await repo.json();
  let str = "";
  let i = 1;
  for (let key in repoData) {
    str = str + `${i} : ${repoData[key].name}\n`;
    i++;
  }

  para1.textContent = `Bio: ${userParsedData.bio == null ? "Data Not Available" : userParsedData.bio}`;
  para2.textContent = `Followers: ${userParsedData.followers == null ? "Data Not Available" : userParsedData.followers}`;
  para3.textContent = `Location: ${userParsedData.location == null ? "Data Not Available" : userParsedData.location}`;
  img1.setAttribute("src", `${userParsedData.avatar_url}`);
  a1.setAttribute("href", `${userParsedData.html_url}`);
  a1.textContent = `Go to ${userParsedData.login}`;
  para4.textContent = "Repos: \n" + str;

  container.append(para1);
  container.append(para2);
  container.append(para3);
  container.append(img1);
  container.append(para4);
  container.append(a1);
});
