// Number One 
let num = [9,1,1,9];
let square = num.map(num=>{
    return num * num 
})
console.log(square);

// Number Two 
let score = [2,5,8,1,6,9,5];
score.sort((x,y)=>{
    return y-x 
});

console.log(score[0]);

// Number Three

// this is giving me the index number of the answer
const mostFrequent = (arr, k) => {
    let result = [];
    let numIndex = new Map();

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let compliment = k - num;
        
        if (numIndex.has(compliment)) {
            result[0] = compliment;
            result[1] = num;
            console.log(result[0],result[1]);
            return result;
        }
        numIndex.set(num, i);
    }
    return result;
}

arr = [3,2,4];
k = 6;
mostFrequent(arr, k);

