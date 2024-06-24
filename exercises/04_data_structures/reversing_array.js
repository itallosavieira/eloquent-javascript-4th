const reverseArray = (arr) => {
  let result = [];
  for (let item of arr) {
    result.unshift(item);
  }
  return result;
}
const reverseArrayInPlace = (arr) => {
  let reversedNewArr = reverseArray(arr.slice());
  for (let i=0; i < newArray.length; i++) {
    arr[i] = reversedNewArr[i];
  }
  return arr;
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]