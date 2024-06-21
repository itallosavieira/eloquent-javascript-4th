const isDivisibleBy3 = (n) => n % 3 === 0;
const isDivisibleBy5 = (n) => n % 5 === 0;

function handleExceptions(n) {
  if(isDivisibleBy3(n)) {
    console.log('Fizz');
  }

  if(isDivisibleBy5(n) && !isDivisibleBy3(n)) {
    console.log('Buzz');
  }

  if (isDivisibleBy3(n) && isDivisibleBy5(n)) {
    console.log('FizzBuzz');
  }

  if(!isDivisibleBy3(n) && !isDivisibleBy5(n))
  console.log(n);
}

function fizzBuzz(n) {
  for(let i=0; i<=n; i++) {
   handleExceptions(i);
  }
}

fizzBuzz(100);