const email = document.getElementById('email');
email.value = localStorage.getItem("email");

const button = document.getElementById('button');
console.log(button);

button.addEventListener('click', login);

function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    console.log(password);
    console.log(email);

    let savedPassword = localStorage.getItem("password");

    if (password == savedPassword) {
        window.location.replace("/rmp_project/views/payments.html")
    }
}