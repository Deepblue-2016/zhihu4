//

function usernameOnblur() {
    var v = document.getElementById("username").value;

    if (v != "" && v != "abc") {
        document.getElementById("usernametips").innerHTML = "请输入8位字母或数字!";
    }
}

function passwdOnblue() {
    var v = document.getElementById("password").value;

    if (v != "" && v != '123') {
        document.getElementById("passwordtips").innerHTML = "请输入8位数字!";
    }
}

function yzmwdOnblue() {
    var v = document.getElementById("captcha").value;

    if (v != "" && v != "nk6p") {
        document.getElementById("yzmtips").innerHTML = "验证码错误!";
    }
}

function usernameOnfocus() {
    document.getElementById("usernametips").innerHTML = "";
}

function passwdOnfocus() {
    document.getElementById("passwordtips").innerHTML = "";
}

function yzmOnfocus() {
    document.getElementById("yzmtips").innerHTML = "";
}

function login() {
    var n = document.getElementById("usernametips").innerHTML;
    var p = document.getElementById("passwordtips").innerHTML;
    var y = document.getElementById("yzmtips").innerHTML

    console.log(n, p, y);
    if (n == "" && p == "" && y == "") {
        return true;
    }

    return false;

    //其他常用提交方法
    // document.forms[0].submit();
    // window.location.href = "topicdynamics.html";
}
