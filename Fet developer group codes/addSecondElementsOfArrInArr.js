const array = [[1,2,3],[4,7],[8,0,1,1]];

// function addSecondElt(arr){
//     let sum = 0;
// for(let i=0; i < arr.length; i++){
// sum += arr[i][1];
// }
// return sum;
// }

//Here is the same function using ES6
const addSecondElt = (arr) =>{
    let sum = 0;
for(let i=0; i < arr.length; i++){
sum += arr[i][1];
}
return sum;
}

console.log(addSecondElt(array));