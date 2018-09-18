const enter = document.getElementById('enter');

enter.addEventListener('click', output);

function output() {
    let text = document.getElementById('text').value;
    console.log(text);

    let str = "Hello, " + text + ", How are you today?";

    document.getElementById('output').innerHTML = str;

}