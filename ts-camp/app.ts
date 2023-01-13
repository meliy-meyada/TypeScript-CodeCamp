function add(n1: number, n2: number){
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
  
}
function addHandle(n1: number, n2: number, cb: (num: number) => void){
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 23));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

addHandle(10, 30, (result) => {
  console.log(result);
  return result;
})

