function findKth(num, k){
    if (k <=0 || k > num.length){
        return "Invalid K"
    }

    for(let i=0; i<k; i++){
        let maxIndx = i;
        for(let j=i+1; j<num.length; j++){
        if(num[j]>num[maxIndx]){
            maxIndx = j;

        }
        [num[i], num[maxIndx]] = [num[maxIndx], num[i]];
        }
    }
    return num[k-1];

}

const num = [10, 4, 12, 9, 87, 34];
const K =2;
const result = findKth(num, K);

console.log(`Input: num = [$(num)], K = ${K}`);
console.log(`output: ${result}`)