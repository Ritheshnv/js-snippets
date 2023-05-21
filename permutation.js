function factorial(str) {
    let strLen = str.length;
    let fact = 1;
    if(!strLen) return fact;
    for(let i=0;i<str.length;i++) {
        if(strLen){
        fact *= strLen;
        }
        strLen = strLen - 1;
    }
    return fact;
}

console.log(factorial('hell0'));

function numPerm(letters) {
    if(letters.length !== 1){
        return 1;
    }
    console.log(letters);
    console.log(letters.length);
    return letters.length * numPerm(letters.slice(1));
}

console.log(numPerm('hell'));