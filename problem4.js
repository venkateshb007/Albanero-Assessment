const numbers = [3,30,34,5,9];
const numString = numbers.map(num => num.toString());

const customCompare = (a,b) =>{
    const order1 = a + b;
    const order2 = b + a;
    if (order1 > order2) return -1;
    if (order1 < order2) return 1;
    return 0;
    
}

numString.sort(customCompare);

if(numString[0]=== '0'){
    console.log('0');
}else{
    console.log(numString.join(''))
}

