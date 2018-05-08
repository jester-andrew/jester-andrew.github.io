//set defuault seetings
document.getElementById('begin').style.display = 'block';
document.getElementById('problem').style.display = 'none';
document.getElementById('end').style.display = 'none';
//set global variables
let queue = [];
let queue2 = [];
let answers = [];
let missed = 0;
let correct = 0;

let output;

function setGame() {



    //get start values
    let lnumber = document.getElementById("lnumber").value;
    console.log(lnumber);
    let nquestions = document.getElementById("nquestions").value;
    console.log(nquestions);

    if (lnumber == 0) {
        alert('please specify the largest number you want in your problems.');
    } else if (nquestions == 0) {
        alert('Please specify the number of questions you want.')
    } else {

        getRandomLeft(lnumber, nquestions);
        getRandomRight(lnumber, nquestions);

        // for (let i = 0; i < nquestions; i++) {

        //     console.log("left: " + queue[i]);
        //     console.log("Right: " + queue2[i]);
        // }

        playGame(nquestions);
    }

}

function getRandomLeft(size, questions) {

    for (i = 0; i < questions; i++) {
        l = Math.floor((Math.random() * size) + 1);
        queue.push(l);
    }
}

function getRandomRight(size, questions) {

    for (i = 0; i < questions; i++) {
        r = Math.floor((Math.random() * size) + 1);
        queue2.push(r);
    }
}

function playGame(games) {
    let output = "<form>";

    for (let i = 0; i < games; i++) {

        let answer = queue[i] * queue2[i];
        answers.push(answer);

        output += "<h3>Qestion " + (i + 1) + "</h3>";
        output += "<p id='equation'>" + queue[i] + " * " + queue2[i] + " =</p>";
        output += "</p><input type='text' placeholder='Your Answer' class='code'><input type='button' value='Check Answer' onclick='checkAnswer(";
        output += i;
        output += ")'>";
        output += "<p class='message'></p><p class='error'></p>";

    }

    output += "</form>";
    document.getElementById("output").innerHTML = output;

    document.getElementById('begin').style.display = 'none';
    document.getElementById('problem').style.display = 'block';
    document.getElementById('end').style.display = 'none';

}

function checkAnswer(q) {
    let x = document.getElementsByClassName('code');
    let y = document.getElementsByClassName('message');
    let z = document.getElementsByClassName('error')

    if (x[q].value == 0) {
        alert('Please fill in an answer.');
    } else if (answers[q] == x[q].value) {
        correct++
        y[q].innerHTML = "<strong>Correct</strong>";
    } else {
        missed++
        z[q].innerHTML = "<strong>Wrong the answer is " + (queue[q] * queue2[q]) + "</strong>";
    }
}

function results() {
    let results = document.getElementById('results');

    let total = correct + missed;
    let grade = Math.round(correct / total * 100);
    let lgrade;

    if (grade >= 97) {
        lgrade = 'A+';
    } else if (grade >= 93) {
        lgrade = "A";
    } else if (grade >= 90) {
        lgrade = "A-";
    } else if (grade >= 87) {
        lgrade = "B+";
    } else if (grade >= 83) {
        lgrade = "B";
    } else if (grade >= 80) {
        lgrade = "B-";
    } else if (grade >= 77) {
        lgrade = "C+";
    } else if (grade >= 73) {
        lgrade = "C";
    } else if (grade >= 70) {
        lgrade = "C-";
    } else if (grade >= 67) {
        lgrade = "D+";
    } else if (grade >= 63) {
        lgrade = "D";
    } else if (grade >= 60) {
        lgrade = "D-";
    } else {
        lgrade = "F";
    }

    results.innerHTML = "<p>You got " + correct + " correct and " + missed + " wrong</p><p>Your percentage is " + grade + "%</p><p>Your letter garde is " + lgrade + "</p>";
    document.getElementById('begin').style.display = 'none';
    document.getElementById('problem').style.display = 'none';
    document.getElementById('end').style.display = 'block';

}