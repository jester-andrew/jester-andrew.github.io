//create gloabal variables
let output = document.querySelector("#output");
let str;
let btn3 = document.querySelector("#btn3");
let btn2 = document.querySelector('#btn2');

/************************************************************* 
    function called by the html event listener
**************************************************************/
function doSomething() {
    str = "You are using the html inline event listener";
    output.innerHTML = str;
}

/************************************************************* 
    js onclick with anonomous function
**************************************************************/
// btn2.onclick = function() {
//     str = "You are using js onclick method with anonomous function";
//     output.innerHTML = str;
// }

/************************************************************* 
    js add event listener with anonomous function
**************************************************************/
// btn3.addEventListener("click", function() {
//     str = "You are using js addEventListener() method";
//     output.innerHTML = str;
// });

/************************************************************* 
    js onclick with reference to a function
**************************************************************/
btn2.onclick = somethingTwo;

/************************************************************* 
    js addEventListener() with reference to a function
**************************************************************/
btn3.addEventListener("click", somethingThree);

/************************************************************* 
    reference function two
    add remove old click event and add two new events to the third button
**************************************************************/
function somethingTwo() {
    str = "You are using js onclick method with a reference function";
    output.innerHTML = str;

    btn3.removeEventListener("click", somethingThree);
    btn3.addEventListener("mouseover", somethingFour);
    btn3.addEventListener("click", somethingFive);
}

/************************************************************* 
    reference function three
**************************************************************/
function somethingThree() {
    str = "You are using js addEventListener() method with a reference function";
    output.innerHTML = str;
}

/************************************************************* 
    refeerence function four
**************************************************************/
function somethingFour() {
    str = "mouseover event detected";
    output.innerHTML = str;
}

/************************************************************* 
    reference function five
**************************************************************/
function somethingFive() {
    str = "new click event detected";
    output.innerHTML = str;
}