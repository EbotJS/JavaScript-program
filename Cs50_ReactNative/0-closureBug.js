function makeFunctionArray() {
    const Arr = [];
    for(let i=0; i<5; i++){
        Arr.push(function (){console.log(i)});
    }
    return Arr;
}

// console.log(makeFunctionArray());
const functionArr = makeFunctionArray();
functionArr[0]();


