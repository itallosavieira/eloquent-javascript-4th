const countBs = (str) => {
  let counter = 0;
  for(let i=0; i <= str.length-1; i++) {
    if(str[i] === 'B') counter++;
  } 
  return counter;
}

const countChar = (str, char) => {
  let counter = 0;
  for(let i=0; i <= str.length-1; i++) {
    if(str[i] === char) counter++;
  } 
  return counter;
}

console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k"));
