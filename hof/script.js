const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const transformer = (str, fn) => {
  console.log(`OG string: ${str}`);
  console.log(`Tranformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("Javascript is the best!", upperFirstWord);
transformer("Javascript is the best!", oneWord);

//closure
const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet("Hey");
greeterHey("Alpha");
greet("Hey")("Beta");

//call apply bind
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "nishiv");
lufthansa.book(635, "meow");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
book.call(eurowings, 23, "Halala");
book.call(lufthansa, 239, "Cooper");

const swiss = {
  name: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Kangaroo");

const flightData = [583, "Cat"];
book.apply(swiss, flightData);
book.call(swiss, ...flightData); //call is mostly used (alternative of using apply)

const bookEW = book.bind(eurowings); //bind keyword returns a function
const bookLH = book.bind(lufthansa);
bookEW(23, "Koala");
bookLH(790, "Nagasaki");
const bookEW23 = book.bind(eurowings, 23); // a default parameter set
bookEW23("Bruce Wayne");

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

// IIFE
(function () {
  console.log("This will never run again");
})();

(() => {
  console.log("This will also never run again");
})();
