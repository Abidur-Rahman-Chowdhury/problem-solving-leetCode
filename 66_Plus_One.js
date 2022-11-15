var plusOne = function (digits) {
    let arrToNumber =BigInt(digits.join(''))
    let res = BigInt(arrToNumber + BigInt(1))
    let myFunc = res => Number(res);
    
    var intArr = Array.from(String(res), myFunc);
    return intArr
    };