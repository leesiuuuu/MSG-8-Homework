function signUpAndRedirect() {
    // 비밀번호와 비밀번호 확인이 일치하는지 확인
    var newPassword = document.getElementById("new-password").value;
    var newPasswordRe = document.getElementById("new-password-re").value;

    if (newPassword !== newPasswordRe) {
        // 비밀번호와 비밀번호 확인이 일치하지 않으면 이미지 변경
        document.getElementById("img").src = "img/passwordwrong.png";
        return;
    }

    // 비밀번호와 비밀번호 확인이 일치하면 이미지 변경
    document.getElementById("img").src = "img/newvisitor.png";

    // 비밀번호와 아이디 업데이트
    document.getElementById("password").value = newPassword;
    document.getElementById("user-id").value = document.getElementById("new-user-id").value;


    // 3초 후에 index.html로 이동
    setTimeout(function() {
        window.location.href = 'index1.html';
    }, 3000); 
}