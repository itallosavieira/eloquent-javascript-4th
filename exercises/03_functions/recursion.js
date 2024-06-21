// Zero is even.
// One is odd.
// For any other number N, its evenness is the same as N - 2.

const isEven = (n) => {
  if(n < 0) return "??";
  if(n === 0) return true;
  if(n === 1) return false;
  return isEven(n-2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));


