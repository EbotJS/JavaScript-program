/******************************** 

// vid 006
console.log('Hello World!!!');

//vid 007

//vid 008 Variables and Data types
 
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28; 

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

var job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/



/************************************* 
 *vid 009 Variable Mutation and Type Coercion
 */

/*
 var firstName = 'John';
 var age = 28;

 // Type coercion
 console.log(firstName + ' ' + age); 

 var job, isMarried;
 job= 'teacher';
 isMarried = false;

 console.log(firstName + ' is a ' + age + 
 ' year old ' + job + '. Is he married? ' + isMarried);

 // Variable mutation
 age = 'twenty eight';
 job = 'driver';

 alert(firstName + ' is a ' + age + ' year old ' 
 + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName); 

*/


/************************************
 * vid 010 Basic Operators
 */
/*
var now, yearJohn, yearMark;
 now = 2018;
 ageJohn = 28;
 ageMark = 33;

 //Math operators
 yearJohn = now - 28;
 yearMark = now - 33;

console.log(yearJohn);

console.log( now + 2);
console.log( now * 2);
console.log( now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// tyypeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/***************************
 * vid 011 Operator Precedence
 */
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple opetators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3+5) * 4 - 6;
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);

*/





/*******************************
 * vid 012 Coding Challenge 1
 */
/*
let johnMass = 92, markMass = 78, johnHeight=1.95, markHeight = 1.68,
johnBMI, markBMI,markGreaterThanJohn;

johnBMI = johnMass / (johnHeight*johnHeight);
markBMI = markMass / (markHeight*markHeight);

markGreaterThanJohn = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's? "+ markGreaterThanJohn);
*/


/************************************
 * vid 014 If else Statements
 */

// var firstName = 'John';
// var civilStatus = 'single';

// if(civilStatus === 'married') {
//     console.log(firstName + ' is married');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// var isMarried = true;

// if(isMarried) {
//     console.log(firstName + ' is married');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }



// let johnMass = 192, markMass = 78, johnHeight=1.95, markHeight = 1.68,
// johnBMI, markBMI,markGreaterThanJohn;

// johnBMI = johnMass / (johnHeight*johnHeight);
// markBMI = markMass / (markHeight*markHeight);

// if(markBMI > johnBMI) {
//     console.log('Mark\'s BMI is higher than John\'s.');
// } else {
// console.log('John\'s BMI is higher than Mark\'s.')
// }
// markGreaterThanJohn = markBMI > johnBMI;

// console.log("Is Mark's BMI higher than John's? "+ markGreaterThanJohn;


/********************************
 * vid 015 Boolean logic
 */

// var firstName = 'John';
// var age = 16;

// if(age< 13) {
//     console.log(firstName * ' is a boy.');
// } else if(age >= 13 && age<20) {
//     console.log(firstName + ' is a teenager.');
// } else if(age>= 20 && age < 30) {
//     console.log(firstName + ' is a young man.');
// } 

// else {
//     console.log(firstName + 'is a man.');
// }


/**************************
 * vid 017 Truthy and Falsy Values and Equality Operators
 */

// var height;
// height = 23;
// if(height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable has NOT been defined');
// }

// // Equality operators

// if(height === '23') {
//     console.log('The == operator does type coercion!');
// }


/************************
 * vid 018 Coding Challenge 2
 */

// var johnTeamAverage = (89 + 120 + 103)/3;
// var mikeTeamAverage = (89 + 120 + 103)/3;
// var maryTeamAverage = (89 + 120 + 103)/3;

// if(johnTeamAverage > mikeTeamAverage && johnTeamAverage > maryTeamAverage) {
//     console.log("John's team wins with " + johnTeamAverage + " points");
// } else if(mikeTeamAverage > johnTeamAverage && mikeTeamAverage > maryTeamAverage) {
//     console.log("Mike's team wins with " + mikeTeamAverage + " points");
// } else if(maryTeamAverage > mikeTeamAverage && maryTeamAverage > johnTeamAverage) {
//     console.log("Mary's team wins with " + maryTeamAverage + " points");
// } else{
//     console.log("We have a tie");
// }



/*************************************
 * Vid 020 Functions
 */
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years.');
} else {
      console.log(firstName + ' is already retired');
}
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/*********************************
 * Vid 021 Function statements and expressions
 */

//Function declaration
// function whatDoYouDo(job, firstName){}

//Function expression

/*
var whatDoYouDo = function(job, firstName)
{
   switch(job)
   {
       case 'teacher': 
            return firstName + ' teaches kids how to code';
       case 'driver':
             return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
   }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Paul'));
console.log(whatDoYouDo('driver', 'Ebot'));

*/


/***************************
 * vid 022 Arrays
 */

// Initialize new array
/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1967, 3458);

console.log(names[0]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types

var john = ['John', 'Smith', 1567, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.pop();
john.shift();
console.log(john);


console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is Not a designer' : 'John is a designer';
console.log(isDesigner);
*/

/*****************************
 * vid 023 Coding Challenge 3
 */

// JONAS' SOLUTION

/*
function tipCalculator(bill) {
    var percentage;
    if(bill < 50) {
        percentage = .2;
    }else if(bill >= 50 && bill < 200) {
        percentage = .15;
    }else{
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];


console.log(tips, finalValues);

*/

/************************************
 * Vid 025 Objects and Properties
 */

// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);