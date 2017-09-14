
//Problem: 

//Given a group of prospective voters ranging from ages 18-55, determine the percentage of those who voted in the last election by the following age groups:

//1) 18-25 
//2) 26-35 
//3) 36-55

//Print to the console each group with it's corresponding voter turnout percentage in this format: 18-25: n%

var voters = [  
    {name: 'Bob', age: 30, voted: true},
    {name: 'Jake', age: 32, voted: true},
    {name: 'Kate', age: 25, voted: false},
    {name: 'Sam', age: 20, voted: false},
    {name: 'Phil', age: 21, voted: true},
    {name: 'Ed', age: 55, voted: true},
    {name: 'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function votersByAgeGroup(voters) {

    var groupOneVoted = 0;
    var groupOneTotal = 0;
    
    var groupTwoVoted = 0;
    var groupTwoTotal = 0;
    
    var groupThreeVoted = 0;
    var groupThreeTotal = 0;
    
    for (var i = 0; i < voters.length; i++) {
        console.log(voters[i].age);
        if(18 <= voters[i].age && voters[i].age <= 25) {
            groupOneTotal++;
            if (voters[i].voted === true) {
                groupOneVoted++;
            }
        } else if (26 <= voters[i].age && voters[i].age <= 35) {
            groupTwoTotal++;
            if (voters[i].voted === true) {
                groupTwoVoted++;
            }
        } else if (36 <= voters[i].age && voters[i].age <= 55) {
            groupThreeTotal++;
            if (voters[i].voted === true) {
                groupThreeVoted++;
            }
        }
    };
    
    var percentVotedOne = (groupOneVoted / groupOneTotal) * 100;
    var percentVotedTwo = (groupTwoVoted / groupTwoTotal) * 100;
    var percentVotedThree = (groupThreeVoted / groupThreeTotal) * 100;
    
    console.log("18-25: " + percentVotedOne + "%\n 26-35: " + percentVotedTwo + "%\n 36-55: " + percentVotedThree + "%");
}

votersByAgeGroup(voters);