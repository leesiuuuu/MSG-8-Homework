const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const imgElement = document.getElementById("img");
var input = document.getElementById("user-id");
var input1 = document.getElementById("password");
var newid = document.getElementById("new-user-id");
var newpwd = document.getElementById("new-password");

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    
    const username = document.getElementById("user-id").value;
    const password = document.getElementById("password").value;

    if (username === "user-id" && password === "password") {
        imgElement.src = "Loginsucceed.png";
        input.value = null;
        input1.value = null;
        setTimeout(function() {
            imgElement.src = "Test_image.png";
        }, 3000);
    } else {
        imgElement.src = "whoareyou.png";
        input1.value = null;
        input.value = null;
        setTimeout(function() {
            imgElement.src = "Test_image.png";
        }, 3000);
    }
});

