export const setCookie = (c_name, value, hour) => {
    var exdate = new Date();
    exdate.setDate(exdate.getTime() + hour * 3600 * 1000);
    document.cookie = c_name + "=" + escape(value) + ((hour == null) ? "" : ";expires=" + exdate.toGMTString());
};

export const getCookie = (objName) => { //获取指定名称的cookie的值
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
        var temp = arrStr[i].split("=");
        if (temp[0] == objName)
            return unescape(temp[1]);
    }
}

export const delCookie = function (name) { //为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间
    var date = new Date();
    date.setTime(date.getTime() - 10000);
    document.cookie = name + "=a; expires=" + date.toGMTString();
}

export const allCookie = function () { //读取所有保存的cookie字符串
    var str = document.cookie;
    if (str == "") {
        str = "没有保存任何cookie";
    }
    alert(str);
}
