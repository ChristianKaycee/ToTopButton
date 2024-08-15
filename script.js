let up = document.querySelector(".up");
let btn = document.querySelector(".btn");
function scrollVisible() {
    if (window.scrollY > 30){
        btn.classList.add("show");
        up.classList.add("show");
    }
    else{
        btn.classList.remove("show");
        up.classList.remove("show");
    }
}
function circleLoad() {
    let screenHeight = window.scrollY;
    console.log("screen", screenHeight);
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    console.log("scrollheight",document.documentElement.scrollHeight);
    console.log("docheight",docHeight);
    console.log("windowInner",window.innerHeight);
    let currentHeight = screenHeight / docHeight;
    console.log("current",currentHeight);
    let loadHeight = currentHeight * 360;
    console.log("load",loadHeight);
    btn.style.background = `conic-gradient(rgb(19, 177, 239) ${loadHeight}deg, transparent ${loadHeight}deg)`;
}

window.addEventListener("scroll", circleLoad);
circleLoad();
window.addEventListener("scroll", scrollVisible);
scrollVisible();
up.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Optional, for smooth scrolling effect
    });
});
