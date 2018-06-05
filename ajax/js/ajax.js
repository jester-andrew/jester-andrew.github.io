const link = document.getElementById('output');
const back = document.getElementById('back');
window.addEventListener("load", getMountain);
link.addEventListener("click", getMountainStats);




let mountainObject;

function getMountain() {
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        // if (request.readyState == 1) {
        //     alert("1.Server Connection has been established!");
        // } else if (request.readyState == 2) {
        //     alert("2.Your request was received by the server!");
        // } else if (request.readyState == 3) {
        //     alert("3.Request is being processed by the server");
        // } else 
        if (request.readyState == 4 && request.status == 200) {
            //alert("4.Responce has been sent and is ready to process");
            let mountains = JSON.parse(request.responseText);
            console.log(mountains);
            mountainObject = mountains;
            displayInOrder(mountains);
        } //else {
        //     alert("Error: the request was not successful");
        // }
    };

    request.open("GET", "/teaching_examples/js/14er.json", true);
    request.send();
}

function displayInOrder(mountains) {

    const OUTPUT = document.getElementById("output");

    let str = '<ol>';

    for (let i = 0; i < mountains.all.length; i++) {

        str += '<li><a href="#" data-number="' + i + '">' + mountains.all[i].name + '</a></li>';

    }

    str += '</ol>';

    OUTPUT.innerHTML = str;


}

function getMountainStats() {
    let i = event.target.getAttribute("data-number");
    console.log(mountainObject.all[i].url);
    let str = '<div id="background"><ul>' +
        '<li class="name">' + mountainObject.all[i].name + '</li>' +
        '<li class="info"> Elevation: ' + mountainObject.all[i].elevation + ' feet</li>' +
        '<li class="info"> Mountain Range: ' + mountainObject.all[i].range + '</li>' +
        '<li class="info"> Difficulty Level: ' + mountainObject.all[i].difficultyClass + '</li>' +
        '<li class="info"> Round Trip: ' + mountainObject.all[i].roundTripMiles + ' miles</li>' +
        '<li class="info"> More info @ 14ers.com: <a href="' + mountainObject.all[i].url + '">' + mountainObject.all[i].name + '</a></li><li id="back">&larr; Back to List</li></div>';


    document.getElementById('output').innerHTML = str;

    document.querySelector('#back').addEventListener('click', reload);

}

function reload() {
    location.reload(true);
}