const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const imgElement = document.getElementById("img");
var input = document.getElementById("user-id");
var input1 = document.getElementById("password");
var wrongtime = 0;
var wrongtime1 = 0;

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    
    var username = document.getElementById("user-id").value;
    var password = document.getElementById("password").value;

    if (username === "user-id" && password === "password") {
        imgElement.src = "img/Loginsucceed.png";
        input.value = null;
        input1.value = null;
        setTimeout(function() {
            imgElement.src = "img/Test_image.png";
        }, 3000);
    } else {
        
        if(wrongtime >= 5 && wrongtime1 == 0)
        {
            imgElement.src = "img/wtf.png";
            input.value = null;
            input1.value = null;
            wrongtime1++;
        }

        else if(wrongtime >= 10 && wrongtime1 == 1)
        {
            imgElement.src = "img/wwttff.png";
            input.value = null;
            input1.value = null;
            wrongtime = 0;
            wrongtime1 = 0;
        }
        else
        {
            imgElement.src = "img/whoareyou.png";
            input1.value = null;
            input.value = null;
            wrongtime++;
        }
            setTimeout(function() {
            imgElement.src = "img/Test_image.png";
            }, 3000);
        
    }
});





