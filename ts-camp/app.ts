function add(n1: number, n2: number){
  return n1 + n2;
}

function printResult(num: number): undefined {
  console.log('Result: ' + num);
  return;
}

printResult(add(5, 23));

