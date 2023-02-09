'use strict';

let person = prompt("Please enter your name...");

let gender = prompt("please enter your gender (male or female)...");

while (true) {
    let age = prompt('Please enter your age...');
    if (age <= 0) {
        alert ('You have entered a wrong value :(');
    } else {
        break;
    }
}

let answers = [];

function question1() {
    while (true) {
        let nationality = prompt("Are you Jordanian? (yes/no)");
        if (nationality == "yes") {
            answers.push("Jordanian");
            break;
        } else if (nationality == "no") {
            answers.push("Not Jordanian");
            break;
        } else {
            alert ("invalid :(");
        }
    }
}
question1();

function question2() {
    while (true) {
        let maritalStatus = prompt("Are you married? (yes/no)");
        if (maritalStatus == "yes") {
            answers.push('Married');
            break;
        } else if (maritalStatus == "no") {
            answers.push('Single');
            break;
        } else {
            alert ("invalid :(");
        }
    }
}
question2();

function question3() {
    while (true) {
        let currentSituation = prompt("Are you employed? (yes/no)");
        if (currentSituation == "yes") {
            answers.push('Employee');
            break;
        } else if (currentSituation == "no") {
            answers.push('Student');
            break;
        } else {
            alert ("invalid :(");
        }
    }
}
question3();

for (let i=0; i<=answers.length-1; i++) {
    console.log(answers[i]);
}

let welcomeMessage = confirm("do you want to see welcoming message?");

if (welcomeMessage == true) {
    if (gender === "male") {
        alert("welcome to todo List Mr." + person);
    } else if (gender === "female") {
        alert("welcome to todo List Ms." + person);
    } else {
        alert("welcome to todo List " + person);
    }
}