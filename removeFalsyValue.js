const arr = [false, NaN, undefined, 0, null, '', 5, 6, 7, 8]

const trueValues = arr.filter(Boolean);
console.log(trueValues);