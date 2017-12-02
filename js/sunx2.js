var x = 10;

function usernameOnblur() {
    console.log(x);
    var name = document.getElementById("username").value;

    if (name != "" && name != 'abc') {
        // alert("abc");
        document.getElementById("tips").innerHTML = "用户名错误";
    }
}

function usernameOnfocus() {
    document.getElementById("tips").innerHTML = "";
}


function login() {
    console.log(x);
    x++;

    var name = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var captcha = document.getElementById("captcha").value;

    console.log(name, password, captcha);

    if (name == "") {
        alert("请输入用户名");
        return;
    }
    if (password == "") {
        alert("请输入密码");
        return;
    }
    if (captcha == "") {
        alert("请输入验证码");
        return;
    }
    // document.forms[0].submit();
    // window.location.href = "topicdynamics.html";
}

function usernameOnblur() {
    console.log(x);
    var name = document.getElementById("username").value;

    if (name != "" && name != 'abc') {
        // alert("abc");
        document.getElementById("tips").innerHTML = "用户名错误";
    }
}
