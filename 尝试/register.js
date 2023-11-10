document.getElementById('subnit').onclick = function (e) {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let errorInfo = document.getElementById('errorInfo');

    if (username.length < 6 || username.length > 8) {
        errorInfo.innerText = " 账号长度应当在6~8之间"; errorInfo.style.display = "block";
    }
    else if (password.length < 6 || password.length > 8) {
        errorInfo.innerText = "密码长度应当6~8之间";
        errorInfo.style.display = "block";
    }
    else {
        errorInfo.innerText = "注册成功";
    }
}