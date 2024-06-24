const prepend = (value, rest) => {
  return { value, rest };
}

const nth = (list, index) => {
  const arr = listToArray(list);
  return arr[index];
}

function nthRecursive(list, index) {
  if (!list) return undefined;
  if (index === 0) return list.value;
  return nth(list.rest, index - 1);
}


const arrayToList = (arr) => {
  let list = null;

  for (let i = arr.length-1; i >= 0; i--) {
    list = prepend(arr[i], list);
  }
  return list;
}

const listToArray = (list) => {
  let arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nthRecursive(arrayToList([10, 20, 30]), 1));
// // → 20