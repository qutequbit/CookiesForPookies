const loginbtn = document.getElementById('login-btn');
const username = document.getElementById('username');
const password = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');

function home() {
    if (username.value === "admin" && password.value === "admin") {
        window.location.href = "home.html";
    } else {
        errorMessage.style.visibility = 'visible';
    }

}

loginbtn.addEventListener("click", home);


