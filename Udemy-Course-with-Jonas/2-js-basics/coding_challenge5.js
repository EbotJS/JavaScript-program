
// Part 1

var john = {
    fullName : 'John Smith',
    bill : [124, 48, 268, 180, 42],
    allTips : [],
    finalPaidAmts : [],
    tipCalc : function () {

        billLength = this.bill.length;

        for(let i = 0; i < billLength; i++){
            bill = this.bill[i];
            var tip;
            // calculation of the 
            if(bill < 50){
                 tip = 0.2 * bill;   
            }
            else if(bill >= 50 && bill <= 200){
                tip = 0.15 * bill;
               
            }else{
                tip = 0.1 * bill;
            }
            // tips depending on the bills
            this.allTips.push(tip);
                this.finalPaidAmts.push(tip + bill);
        }
        
    }
    
}


john.tipCalc();
// console.log(john);


var mark = {
    fullName : 'Mark Miller',
    bill : [77, 375, 110, 45],
    allTips : [],
    finalPaidAmts : [],
    tipCalc : function () {
     billLength = this.bill.length;

        for(let i=0; i < billLength; i++){
            var bill = this.bill[i];
            var tip;
            if(bill < 100){
                tip = 0.2 * bill;
            }else if(bill >= 100 && bill <= 300){
                tip = 0.1 * bill;
            }else{
                tip = 0.25 * bill;
            }
            this.allTips.push(tip);
            this.finalPaidAmts.push(tip + bill);
        }
    }
}

mark.tipCalc();
// console.log(mark);

// Part 2
function averageTips(tips){
    var sum = 0;
    for(let i = 0; i < tips.length; i++){
    sum += tips[i];
    }
    return sum / tips.length;
}

mark.Average = averageTips(mark.allTips);
john.Average = averageTips(john.allTips);

if(mark.Average > john.Average) {
    console.log(mark.fullName + "'s family paid the highest tips on average, with an average of $" + mark.Average);
}else if(john.Average > mark.Average){
    console.log(john.fullName + "'s family paid the highest tips on average, with an average of $" + john.Average);
}else{
    console.log('both families paid the same tips on average')
}

console.log(john, mark);
console.log(mark.Average, john.Average);

