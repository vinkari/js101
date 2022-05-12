function range(n1, n2) {
  let start;
  let end;
  
  if (Object.entries(arguments).length === 1) {
    start = 0;
    end = n1;
  } else {
    start = n1;
    end = n2;
  }
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

//Test
console.log(range(10, 20));
console.log(range(5));