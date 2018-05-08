var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("output").innerHTML =
            this.responseText;
    }
};
xhttp.open("GET", "/teaching_examples/js/14er.json", true);
xhttp.send();