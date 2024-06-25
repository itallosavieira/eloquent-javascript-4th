const deepEqual = (a, b) => {
  if (a === b) return true;
  let aKeys = Object.keys(a);
  let bKeys = Object.keys(b);
  for (let key of aKeys)  {
    if (!bKeys.includes(key) || !deepEqual(a[key], b[key])) 
      return false;
  }
  return true;
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true