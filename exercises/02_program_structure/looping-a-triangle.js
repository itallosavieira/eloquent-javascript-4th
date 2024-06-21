function drawTriangle(size, fill) {
  if(size <= 0) return;

  let triangle = '';
  for(let i=0; i<size; i++) {
    let line = ''

    for(let j=0; j<=i; j++) {
      line += fill
    }
    line += `\n`
    triangle += line;
  }
  console.log(triangle);
}

drawTriangle(10, "#");