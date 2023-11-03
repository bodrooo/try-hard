const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("blur", () => menu.classList.remove("show"));
burger.addEventListener("click", () => menu.classList.toggle("show"));
