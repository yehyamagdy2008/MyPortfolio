const nav = document.querySelector(".nav"),
  navlist = nav.querySelectorAll("li"),
  totalNavlist = navlist.length,
  allsection = document.querySelectorAll(".section"),
  totalsection = allsection.length;
for (let i = 0; i < totalNavlist; i++) {
  const a = navlist[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let i = 0; i < totalsection; i++) {
      allsection[i].classList.remove("backsection");
    }
    removeBakesction();
    this.classList.add("active");
    showsection(this);
    if (window.innerWidth < 1200) {
      asidesectiontogglerBtn();
    }
  });
}
function removeBakesction() {
  for (let j = 0; j < totalNavlist; j++) {
    if (navlist[j].querySelector("a").classList.contains("active")) {
      addbacksection(j);
    }
    navlist[j].querySelector("a").classList.remove("active");
  }
}
function showsection(el) {
  for (let i = 0; i < totalsection; i++) {
    allsection[i].classList.remove("active");
  }
  const target = el.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function updateNav(el) {
  for (let i = 0; i < totalNavlist; i++) {
    navlist[i].querySelector("a").classList.remove("active");
    const target = el.getAttribute("href").split("#")[1];
    if (
      target ===
      navlist[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navlist[i].querySelector("a").classList.add("active");
    }
  }
}
function addbacksection(num) {
  allsection[num].classList.add("backsection");
}
document.querySelector(".hire-me").addEventListener("click", function () {
  showsection(this);
  updateNav(this);
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const navtogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navtogglerBtn.addEventListener("click", () => {
  asidesectiontogglerBtn();
});

function asidesectiontogglerBtn() {
  aside.classList.toggle("open");
  navtogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalsection; i++) {
    allsection[i].classList.toggle("open");
  }
}
