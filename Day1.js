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