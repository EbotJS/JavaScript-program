

 var mark = {
    fullName : 'Mark Rock',
    mass : 41.5,
    height: 1.67,
    calcBMI : function (){
    this.BMI = this.mass / (this.height * this.height);
     return this.BMI; 
   }
};

mark.calcBMI();

var john = {
    fullName : 'Johnson Evans',
    mass : 41.5,
    height : 1.57,
    calcBMI : function(){
        this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
    }
}

john.calcBMI();

if(john.BMI > mark.BMI){
    console.log(john.fullName + ' has a higher BMI of ' + john.BMI);
}else if(mark.BMI > john.BMI){
    console.log(mark.fullName + ' has a higher BMI of ' + mark.BMI);
}else{
    console.log(mark.fullName + ' and ' + john.fullName + ' have the same BMI of ' + john.BMI);
}

