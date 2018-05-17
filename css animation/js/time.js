let date = new Date();

let hours = date.getHours();
let mins = date.getMinutes();
let part;
if (mins < 10) {
    mins = "0" + mins;
}


let clock = document.getElementById('clock');
if (hours < 12) {
    part = 'am';
} else {
    part = "pm";
}

if (hours === 0) {
    hours = 12;
} else if (hours === 13) {
    hours = 1;
} else if (hours === 14) {
    hours = 2;
} else if (hours === 15) {
    hours = 3;
} else if (hours === 16) {
    hours = 4;
} else if (hours === 17) {
    hours = 5;
} else if (hours === 18) {
    hours = 6;
} else if (hours === 19) {
    hours = 7;
} else if (hours === 20) {
    hours = 8;
} else if (hours === 21) {
    hours = 9;
} else if (hours === 22) {
    hours = 10;
} else if (hours === 23) {
    hours = 11;
}

switch (hours) {
    case 1:
        clock.setAttribute("class", "one")
        break;
    case 2:
        clock.setAttribute("class", "two")
        break;
    case 3:
        clock.setAttribute("class", "three")
        break;
    case 4:
        clock.setAttribute("class", "four")
        break;
    case 5:
        clock.setAttribute("class", "five")
        break;
    case 6:
        clock.setAttribute("class", "six")
        break;
    case 7:
        clock.setAttribute("class", "seven")
        break;
    case 8:
        clock.setAttribute("class", "eight")
        break;
    case 9:
        clock.setAttribute("class", "nine")
        break;
    case 10:
        clock.setAttribute("class", "ten")
        break;
    case 11:
        clock.setAttribute("class", "eleven")
        break;
    case 12:
        clock.setAttribute("class", "twelve")
        break;
}

document.getElementById('time').innerHTML = hours + ":" + mins + " " + part;