function revInt(x){
    const reversed = parseInt(x.toString().split('').reverse().join(''));
    return reversed;
}

function primeNum(num){
    if(num <= 1){
        return false;
    }
    for (let i=2; i<=Math.sqrt(num); i++){
        if(num % i=== 0){
            return true;
        }
    }

    return false;
    

}

function checkForPrime(x){
    const reversed = revInt(x);

    if(primeNum(reversed)){
        return 'No';
    }else{
        return 'Yes';
    }

}

// example 1
const inputGiven = 1500;
const result = checkForPrime(inputGiven);

console.log(inputGiven);
console.log(revInt(inputGiven));
console.log(result);
