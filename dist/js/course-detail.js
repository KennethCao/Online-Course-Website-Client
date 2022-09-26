// 容器组件选项卡切换
// 0. 通过变量，记录当前选中的索引值
let currentIndex = 0;
// 1. 获取所有选项卡和面板元素
let tabs = document.querySelectorAll(".tabs>li");
let panes = document.querySelectorAll(".panes>li");
// 2. 每一个选项卡监听对应的鼠标单击事件
for (let i = 0, len = tabs.length; i < len; i++){
    let tab = tabs[i];
    tab.onclick = function (){
        // 2.1 切换选项卡的选中状态
        tabs[currentIndex].className = "";
        tabs[i].className = "current";
        // 2.2 切换面板的显示（联动）
        panes[currentIndex].className = "";
        panes[i].className = "current";
        currentIndex = i;
    };
}


let score = 0;
// 1. 星星评分效果
let star = document.querySelector(".comment-pane .star");
let y_star = document.querySelector(".comment-pane .y_star");

star.onclick = function (event) {
    // 鼠标点击的位置：通过offsetX
    // 一颗星星一颗星星地加
    score = Math.ceil(event.offsetX / star.offsetWidth * 5) / 5 * 100;
    y_star.style.width = score + "%";
}


// 2. 点击评论按钮之后，获取用户的评论信息（分数、评论内容）
let submit = document.getElementsByClassName("submit")[0];
let comment = document.getElementsByClassName("comment-content")[0];
star.onclick = function (event) {
    // 获取分数和评论的内容
    let content_v = comment.value;
    // 借助网络请求调用对应的接口，将分数和评论信息传递给服务器（预留位置）

}