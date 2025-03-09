const vtxnavNav = document.querySelector(".nav-menu");
document.querySelector(".nav").onclick = () => {
  vtxnavNav.classList.toggle("active");
};
const menu = document.querySelector(".nav");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !vtxnavNav.contains(e.target)) {
    vtxnavNav.classList.remove("active");
  }
});
var num = 20;
var txt = document.getElementById("timer");
var timer = setInterval(function () {
  num--;
  txt.innerHTML = num + " secomd";
  if (num === 0) {
    clearInterval(timer);
    window.location.href = "https://varun.epizy.com";
    document.getElementById("text").innerHTML = "";
  }
}, 1000);