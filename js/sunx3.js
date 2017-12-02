function modify() {
    //个人信息使用了class="fildtext"进行分类
    //使用getElementByName取得所有相同类名的标记，返回一个数组
    var fildtext = document.getElementsByClassName("fildtext");

    //遍历数组，获得每个标记
    for (var i = 0; i < fildtext.length; i++) {

        //去掉标记的属性
        fildtext[i].removeAttribute("disabled");
        fildtext[i].removeAttribute("readonly");

        //给可修改项添加边框
        fildtext[i].className += " add-border";
    }
}

function shengshi() {
    //通过value获取当前的选项值
    var sheng = document.getElementById("province").value;

    if (sheng == "辽宁省") {
        var s = ["沈阳市", "大连市", "鞍山市"]

        //获得市的select标记，通过改变innerHTML属性增加可选择的市
        var shi = document.getElementById("city");

        //清空之前的选项
        shi.innerHTML="";

        for (var i = 0; i < s.length; i++) {
            shi.innerHTML += "<option value='" + s[i] + "'>" + s[i] + "</option>";
        }
    }

    if (sheng == "吉林省") {
        var s = ["长春市", "四平市"]

        //获得市的select标记，通过改变innerHTML属性增加可选择的市
        var shi = document.getElementById("city");

        //清空之前的选项
        shi.innerHTML="";

        for (var i = 0; i < s.length; i++) {
            shi.innerHTML += "<option value='" + s[i] + "'>" + s[i] + "</option>";
        }
    }

}