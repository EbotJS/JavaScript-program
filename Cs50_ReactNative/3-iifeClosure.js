function makeFunctionArray() {
    const Arr = [];
    for(var i=0; i<5; i++){
        Arr.push((function (x){
          return function() {console.log(x)}
    })(i))
}
    return Arr;
}

// console.log(makeFunctionArray());
const functionArr = makeFunctionArray();
functionArr[0]();


