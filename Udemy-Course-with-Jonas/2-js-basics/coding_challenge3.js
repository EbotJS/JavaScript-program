// function simpleTipCalculator(bill1, bill2, bill3) {
//     var tips = [], bills=[], tip1, tip2, tip3;
    
//     // bill 1
    
//     if(bill1 < 50){
//          tip1= bill*(20/100);
//          tips.push(tip1);
//          bills.push(bill1 + tip1);
//      }
//      else if(bill1> 50 && bill1 < 200){
//          tip1= bill1 * (15/100);
//          tips.push(tip1);
//          bills.push(bill1 + tip1);
//      }
//      else if(bill1 > 200){
//          tip1= bill1*(10/100);
//          tips.push(tip1);
//          bills.push(bill1 + tip1);
//      }

//      //bill 2
//      if(bill2 < 50){
//         tip2= bill2 *(20/100);
//         tips.push(tip2);
//         bills.push(bill2 + tip2);
//     }
//     else if(bill2> 50 && bill2 < 200){
//         tip2= bill2 * (15/100);
//         tips.push(tip2);
//         bills.push(bill2 + tip2);
//     }
//     else if(bill2 > 200){
//         tip2= bill2 *(10/100);
//         tips.push(tip2);
//         bills.push(bill2 + tip2);
//     }

//     //bill 3

//     if(bill3 < 50){
//         tip3= bill3 *(20/100);
//         tips.push(tip3);
//         bills.push(bill3 + tip3);
//     }
//     else if(bill3> 50 && bill3 < 200){
//         tip3= bill3 * (15/100);
//         tips.push(tip3);
//         bills.push(bill3 + tip3);
//     }
//     else if(bill3 > 200){
//         tip3= bill3*(10/100);
//         tips.push(tip3);
//         bills.push(bill3 + tip3);
//     }
// return `bills: ${bills}
// tips: ${tips}`;
// }

// console.log(simpleTipCalculator(124, 48, 268));




/*******************************************************
 * THIS IS MY UPDATED PROGRAM(This is my solution from my own point of view)
 */

var bills = [124, 48, 268, 180, 42];
billLength = bills.length;

function simpleTipCalculator(bill){

var finalPaidBill = [];
var finalTips = [];
var tip = [];

    for(let i=0; i< billLength; i++){

        if(bill[i] < 50){

            tip[i]= bill[i] *(20/100);
            finalTips.push(tip[i]);
            finalPaidBill.push(bill[i] + tip[i]);

        }else if(bill[i]> 50 && bill[i] < 200){
            
            tip[i]= bill[i] * (15/100);
            finalTips.push(tip[i]);
            finalPaidBill.push(bill[i] + tip[i]);
        }
        else if(bill[i] > 200){
            tip[i]= bill[i] * (10/100);
            finalTips.push(tip[i]);
            finalPaidBill.push(bill[i] + tip[i]);
        }
    }
    return `bills: ${finalPaidBill}
tips: ${finalTips}`;
 
}

console.log(simpleTipCalculator(bills));


