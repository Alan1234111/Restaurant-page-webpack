import loadPage from "./modules/loadPage";
import loadHome from "./modules/home";
import loadMenu from "./modules/menu";
import loadAbout from "./modules/about";

init();

function addNavEvents() {
  const homeBtn = document.getElementById("home");
  const menuBtn = document.getElementById("menu");
  const aboutBtn = document.getElementById("about");
  const checkMenuBtn = document.querySelector(".restaurant-menu-btn");

  homeBtn.addEventListener("click", loadHome);
  menuBtn.addEventListener("click", loadMenu);
  aboutBtn.addEventListener("click", loadAbout);
  checkMenuBtn.addEventListener("click", loadMenu);
}

function init() {
  loadPage();
  loadHome();
  addNavEvents();
}
