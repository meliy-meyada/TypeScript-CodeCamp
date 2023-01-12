function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if(resultConversion === 'as-number'){
    //   return +result;
    // } else {
    //   return result.toString();
    // }
}
var combineAges = combine(26, 40, 'as-number');
console.log(combineAges);
var combineStringAges = combine('26', '40', 'as-number');
console.log(combineStringAges);
var combineName = combine('Meya', 'Anne', 'as-text');
console.log(combineName);
