// toglle style

const styleswitchetoglle = document.querySelector(".style-swither-toggler");
styleswitchetoglle.addEventListener("click", () => {
  document.querySelector(".style-swicher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
  if (document.querySelector(".style-swicher").classList.contains("open")) {
    document.querySelector(".style-swicher").classList.remove("open");
  }
});

const altrenatestyles = document.querySelectorAll(".alterenate-style");

function setActiveStyle(color) {
  altrenatestyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
const daynight = document.querySelector(".day-night");
const i = document.querySelector(".fa-solid");
const html = document.querySelector("html");
daynight.addEventListener("click", () => {
  html.classList.toggle("shadow");
  if (html.classList.contains("shadow")) {
    i.classList.remove("fa-moon");
    i.classList.add("fa-sun");
  } else {
    i.classList.add("fa-moon");
    i.classList.remove("fa-sun");
  }
  if (html.classList.contains("shadow")) {
    localStorage.setItem("mood", "shadow");
  } else {
    localStorage.setItem("mood", "light");
  }
});
window.addEventListener("load", function () {
  html.classList.toggle(localStorage.getItem("mood"));
  document.body.classList.remove("hidden");
  if (html.classList.contains("shadow")) {
    i.classList.remove("fa-moon");
    i.classList.add("fa-sun");
  } else {
    i.classList.add("fa-moon");
    i.classList.remove("fa-sun");
  }
});
