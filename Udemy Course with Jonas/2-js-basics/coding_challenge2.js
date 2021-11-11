/************************
 * vid 018 Coding Challenge 2
 */

var johnTeamAverage = (89 + 120 + 103)/3;
var mikeTeamAverage = (89 + 120 + 103)/3;
var maryTeamAverage = (89 + 120 + 103)/3;

if(johnTeamAverage > mikeTeamAverage && johnTeamAverage > maryTeamAverage) {
    console.log("John's team wins with " + johnTeamAverage + " points");
} else if(mikeTeamAverage > johnTeamAverage && mikeTeamAverage > maryTeamAverage) {
    console.log("Mike's team wins with " + mikeTeamAverage + " points");
} else if(maryTeamAverage > mikeTeamAverage && maryTeamAverage > johnTeamAverage) {
    console.log("Mary's team wins with " + maryTeamAverage + " points");
} else{
    console.log("We have a tie");
}

