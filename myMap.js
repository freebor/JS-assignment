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
let number = [3,2,4];
let k = 6;
counter = 0;