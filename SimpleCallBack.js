// This takes in a greeting and logs it out in 2 seconds.
const TimelyGreeter = (greeting) => {
  setTimeout(() => {
    console.log(greeting);
  }, 2000);
};

TimelyGreeter("hello world");


