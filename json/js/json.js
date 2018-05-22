let btn = document.getElementById('ctbtn');
let btnAdd = document.getElementById('add');
let btnView = document.getElementById('view');

if (localStorage.getItem('contacts')) {
    displayContacts();
}

btn.addEventListener("click", processForm);
btnAdd.addEventListener("click", setUpOne);
btnView.addEventListener("click", setUpTwo);


function processForm() {
    let contacts = [];

    let firstName = document.getElementById('fName').value;
    let lastName = document.getElementById('lName').value;
    let phoneNumber = document.getElementById('phone').value;
    let email = document.getElementById('email').value;


    if (firstName === '' || lastName === '' || phoneNumber === '' || email === '') {
        alert('all fields are required')
    } else {

        if (localStorage.getItem('contacts') === null) {
            let str = '{ "contacts" : [';

            let person = { 'first': firstName, 'last': lastName, 'phone': phoneNumber, 'email': email };

            str += JSON.stringify(person);

            writeFile(str);
        } else {
            let str = localStorage.getItem('contacts');

            let person = { 'first': firstName, 'last': lastName, 'phone': phoneNumber, 'email': email };

            str += ", " + JSON.stringify(person);

            writeFile(str);

        }

    }
}

function writeFile(str) {

    localStorage.setItem('contacts', str);
}

function displayContacts() {
    contactList = localStorage.getItem('contacts');
    console.log(contactList);
    let out = document.getElementById('out');
    let value = '<div>';

    contactList += ']}';

    let output = JSON.parse(contactList);

    console.log(output);

    for (let i = 0; i < output.contacts.length; i++) {

        value += '<ul>';
        value += '<li>' + output.contacts[i].last + ", " + output.contacts[i].first + '</li>';
        value += '<li>Phone: ' + output.contacts[i].phone + '</li>';
        value += '<li>Email: ' + output.contacts[i].email + '</li>';
        value += '</ul>';
    }
    value += "</div>";

    out.innerHTML = value;


}

function setUpOne() {
    document.getElementById('start').setAttribute("class", "hide");
    document.getElementById('enter').setAttribute("class", "view");
    document.getElementById('contactList').setAttribute("class", "hide");

}

function setUpTwo() {
    document.getElementById('start').setAttribute("class", "hide");
    document.getElementById('enter').setAttribute("class", "hide");
    document.getElementById('contactList').setAttribute("class", "view");

}