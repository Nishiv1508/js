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
