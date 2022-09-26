// 轮播图渐变色
window.addEventListener("load", function(){
    Grade(document.querySelectorAll('.lb-bgc'))
})

// 登陆注册面板的切换
function login_register() {
    let currentIndex = 0;

    let tabs = document.querySelectorAll(".lr-pane .tabs li");
    let panes = document.querySelectorAll(".lr-pane .panes li");


    for (let i = 0, len = tabs.length; i < len; i++) {
        let tab = tabs[i];
        tab.onclick = function () {
            tabs[currentIndex].className = "";
            tab.className = "current";

            panes[currentIndex].className = "";
            panes[i].className = "current";

            currentIndex = i;
        }
    }

}

// 登录注册面板的隐藏与显现
function hideMask() {
    let lr_mask = document.getElementsByClassName("lr-mask")[0];
    lr_mask.className = "lr-mask"
}
function showMask() {
    let lr_mask = document.getElementsByClassName("lr-mask")[0];
    lr_mask.className = "lr-mask show"
}

// 轮播图切换联动效果
function lunbotu() {
    let currentIndex = 0;

    let titles = document.querySelectorAll(".like-lb>.titles>li");
    let images = document.querySelectorAll(".like-lb>.images>li")

    titles.forEach((title, index)=>{
        title.onmouseover = function () {
            titles[currentIndex].className = ""
            images[currentIndex].className = ""

            title.className = "current"
            images[index].className = "current"

            currentIndex = index
        }
    })
}

lunbotu()
login_register()