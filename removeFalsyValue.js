const arr = [false, NaN, undefined, 0, null, '', 5, 6, 7, 8]

const trueValues = arr.filter(Boolean);
console.log(trueValues);

// convert any value to bollen
// using !! in front of any value will convert it into boolean value

console.log(!!"mashrafi");
