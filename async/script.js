// callbacks
setTimeout(() => {
  console.log("Hello");
}, 0);

const cart = ["shoes", "pants", "t-shirt"];

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
const GITHUB_API = "https://api.github.com/users/Nishiv15";

const user = fetch(GITHUB_API); //Readable stream
console.log(user);

user
  .then((data) => {
    return data.json(); //do not forget to return
  })
  .then((parsedData) => {
    console.log(parsedData);
  });

////////////////////////////////////////////// CREATING PROMISE (Producer part)
function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("Cart isnt valid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function validateCart(cart) {
  return false;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve("Payment Successfull");
  });
}

//Consumer Part
const promise = createOrder(cart);
// promise
//   .then((orderId) => {
//     console.log(orderId);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

promise
  .then((orderId) => {
    return orderId;
  })
  .then((orderId) => {
    return proceedToPayment(orderId); // This is a promise so the then block from now will be attached to this
  })
  .then((payInfo) => {
    console.log(payInfo);
  })
  .catch((err) => {
    console.log(err.message);
  })
  .then(() => {
    console.log(
      "This will must happen as it is after catch block. Catch only handles the then blocks above it",
    );
  });
