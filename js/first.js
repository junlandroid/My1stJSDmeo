// alert("JS代码");
// document.write("引用JS文件!")
// var temp = "使用JS代码输出HTML标签";
// var temp1 = "换行标签，是这样吗？";
// document.write(temp + "<br>" + temp1);
//
// alert("警告对话框");
// alert("点击取消");

/**
 * 警告对话框
 */
function btn() {
    var string = "HTML中调用外部的function函数";
    alert(string);
}

/**
 * 确定 or 取消对话框
 */
function confirm_test() {
    var tip = confirm("取消 or 确定");
    if (tip == true) {
        document.write("点击了确定");
    } else {
        document.write("点击了取消");
        alert("哈哈");
    }
}

/**
 * JavaScript-提问（prompt 消息对话框）
 * 语法：prompt(str1, str2); str1: 要显示在消息对话框中的文本，不可修改  str2：文本框中的内容，可以修改
 *
 * return:
 * 1. 点击确定按钮，文本框中的内容将作为函数返回值
 * 2. 点击取消按钮，将返回null
 */

function prompt_test() {
    var score = prompt("剪刀石头布，任选一");
    if (score == "剪刀") {
        alert("666，剪刀赢了")
    } else if(score == "石头") {
        alert("666，石头赢了")
    } else if(score == "布") {
        alert("666，布赢了")
    } else {
        if (score != null) {
            alert("哈哈，逗逼了吧");
        }
        alert("点击了取消")
    }
}

/**
 * JavaScript-打开新窗口（window.open） open() 方法可以查找一个已经存在或者新建的浏览器窗口。
 * 语法：window.open([URL], [窗口名称], [参数字符串])
 * URL：可选参数，在窗口中要显示网页的网址或路径。如果省略这个参数，或者它的值是空字符串，那么窗口就不显示任何文档。
 * 窗口名称：可选参数，被打开窗口的名称。
     1.该名称由字母、数字和下划线字符组成。
     2."_top"、"_blank"、"_self"具有特殊意义的名称。
     _blank：在新窗口显示目标网页
     _self：在当前窗口显示目标网页
     _top：框架网页中在上部窗口中显示目标网页
     3.相同 name 的窗口只能创建一个，要想创建多个窗口则 name 不能相同。
     4.name 不能包含有空格。
 * 参数字符串：可选参数，设置窗口参数，各参数用逗号隔开。
 *
 * @link http://www.imooc.com/code/412
 */

function wiopen() {
    window.open("http://www.baidu.com","_blank","width=500,height=500,menubar=no,toolbar=no, status=no,scrollbars=yes");
    // window.open('http://www.imooc.com','_blank','width=500,height=500,menubar=no,toolbar=no, status=no,scrollbars=yes')
}

/**
 * JavaScript-关闭窗口（window.close）
 * window.close();   //关闭本窗口
 * <窗口对象>.close();   //关闭指定的窗口
 */

function Wclose() {
    var baidu = "http://www.baidu.com";
    baidu.close();
}

function newWind() {
    var tip = confirm("确认打开新网页？");
    if (tip) {
        window.open(" http://www.imooc.com/","_blank","width = 500,height = 400,toolbar = no, menubar =no");
    }
}

/**
 * 通过ID获取元素
 *  document.getElementById(“id”)
 */

/**
 * innerHTML 属性
 * innerHTML 属性用于获取或替换 HTML 元素的内容。
 */

function innerTest() {
    var element = document.getElementById("h2");
    document.write("旧"+element.innerHTML+"<br>");
    element.innerHTML = "new title";
    document.write("新"+element.innerHTML);
}

/**
 * 改变 HTML 样式
 * HTML DOM 允许 JavaScript 改变 HTML 元素的样式。如何改变 HTML 元素的样式呢？
 */

function changes() {
    var element = document.getElementById("pChange");

    element.style.color = "#990000";

}

/**
 * 显示和隐藏（display属性）
 * 语法：Object.style.display = value  value值：none 改值会被隐藏  block:块级元素，被显示
 */
function showBody() {
    var element = document.getElementById("pp");
    element.style.display = "block";
}
function hideBody() {
    var element = document.getElementById("pp");
    element.style.display = "none";
}

/**
 * 控制类名（className 属性）
 * className 属性设置或返回元素的class 属性。
 */

function add2P1() {
    var element = document.getElementById("p1");
    element.className = "one";
}
function modify() {
    var element = document.getElementById("p2");
    element.className = "two";
}

/*练习 */
function changeColor() {
    var element = document.getElementById("txt");
    element.style.color = "#555";
}

function changeWHeight() {
    var element = document.getElementById("txt");
    element.style.width = "500px";//引号 大小 单位
    element.style.height = "500px";
}








