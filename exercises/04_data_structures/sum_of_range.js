const range = (start, end) => {
  if (start > end) return;
  let result = [];

  while (true) {
    if(start > end) break;
    result.push(start);
    start++;
  }
  return result;
}

const sum = (...numbers) => {
  let result = 0;
  for (let number of numbers[0]) {
    result += number;
  }
  return result;
}

const stepRange = (start, end, step = 1) => {
  if (step === 0) return;
  let isPositiveStep = step > 0;
  let result = [];

  while (true) {
    if (isPositiveStep) 
      if(start > end) break;
    if (!isPositiveStep) 
      if(start < end) break;

    result.push(start);
    start += step;
  }
  return result;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(stepRange(5, 2, -1))
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55