const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    
    const username = document.getElementById("user-id").value;
    const password = document.getElementById("password").value;

    if (username === "llssww0119" && password === "ll3537878*") {
        document.getElementById("img").src = "Loginsucceed.png";
    } else {
        document.getElementById("img").src = "whoareyou.png";
    }
});
