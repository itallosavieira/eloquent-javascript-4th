let arrays = [[1, 2, 3], [4, 5], [6]];

const flatted = arrays.reduce((acc, cur) => acc.concat(cur));

console.log(flatted);
// → [1, 2, 3, 4, 5, 6]