modules("header.html", "page-header");
modules("footer.html", "page-footer");


function modules(data, area) {
    console.log("data: " + data);
    console.log("area: " + area);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(area).innerHTML = this.responseText;

        }
    };
    xhttp.open("GET", "/teaching_examples/modularization/modules/" + data, true);
    xhttp.send();

}