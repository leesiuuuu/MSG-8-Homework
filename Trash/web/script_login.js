const signinButton = document.getElementById("sign-up-button");
const loginErrorMsg = document.getElementById("login-error-msg");
const imgElement = document.getElementById("img");

signinButton.addEventListener("click", (event) => {
    event.preventDefault();

    var newid = document.getElementById("new-user-id").value;
    var newpwd = document.getElementById("new-password").value;
    var newpwdre = document.getElementById("new-password-re").value;
    
    if (newpwd != newpwdre) {
        imgElement.src = "img/passwordwrong.png";
    }
});

