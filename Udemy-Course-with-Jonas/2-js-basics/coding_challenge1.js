/*******************************
 * vid 012 Coding Challenge 1
 */

let johnMass = 92, markMass = 78, johnHeight=1.95, markHeight = 1.68,
johnBMI, markBMI,markGreaterThanJohn;

johnBMI = johnMass / (johnHeight*johnHeight);
markBMI = markMass / (markHeight*markHeight);

markGreaterThanJohn = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's? "+ markGreaterThanJohn);
