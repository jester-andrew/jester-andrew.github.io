const firstname = localStorage.getItem("firstname");
const email = localStorage.getItem('email');
const password = localStorage.getItem('password');
console.log(firstname);

if (firstname !== null && email !== null && password !== null) {
    window.location.replace("/rmp_project/views/login.html")
}

const button = document.getElementById('register');

console.log(button);

button.addEventListener('click', collectData);


function collectData() {
    let myfirstname = document.getElementById('firstname').value;
    console.log(firstname);

    let myemail = document.getElementById('email').value;
    console.log(email);

    let mypassword = document.getElementById('password').value;
    console.log(password);

    localStorage.setItem("firstname", myfirstname);
    localStorage.setItem("email", myemail);
    localStorage.setItem("password", mypassword);
    localStorage.setItem("card", '{"cards":[]}');
    localStorage.setItem("account", '{"accounts":[]}');
    window.location.replace("/rmp_project/views/login.html");
}