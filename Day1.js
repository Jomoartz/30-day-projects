// This takes in a greeting and logs it out in 2 seconds.
const TimelyGreeter = (greeting) => {
  setTimeout(() => {
    console.log(greeting);
  }, 2000);
};

TimelyGreeter("hello world");

//makeCounter logs the number of times it is called.
const makeCounter = () => {
  let noOfTimesCalled = 1;
  console.log(`makeCounter has only been called: ${noOfTimesCalled} time`);
  return () => {
    noOfTimesCalled++;
    console.log(`makeCounter has only been called: ${noOfTimesCalled} times`);
  };
};

const noOfTimesCalled = makeCounter();
noOfTimesCalled();
noOfTimesCalled();
noOfTimesCalled();

//Simple calculator: this takes in two numerical parameters and a callback operator function to perform calculator operations
const add = (param1, param2) => param1 + param2;
const subtract = (param1, param2) => param1 - param2;
const multiply = (param1, param2) => param1 * param2;

const calculator = (param1, param2, operator) => {
  result = operator(param1, param2);
  console.log(result);
};

calculator(1, 2, multiply);
