function createLi(text) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  li.appendChild(a);

  a.src = "#";
  a.textContent = text;

  return li;
}

function createNav() {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  nav.appendChild(ul);

  const home = createLi("HOME");
  const menu = createLi("MENU");
  const about = createLi("ABOUT");

  ul.appendChild(home);
  ul.appendChild(menu);
  ul.appendChild(about);

  return nav;
}

function createFooter() {
  const footer = document.createElement("footer");

  const p = document.createElement("p");
  p.classList.add("author");
  p.textContent = "Developed with ♥ by ";

  const link = document.createElement("a");
  link.src = "https://github.com/Alan1234111/Restaurant-page-webpack";
  link.textContent = "Alan Pason";

  footer.appendChild(p);
  p.appendChild(link);

  return footer;
}

function createMain() {
  const main = document.createElement("main");
  return main;
}

function loadPage() {
  const content = document.getElementById("content");

  const nav = createNav();
  const main = createMain();
  const footer = createFooter();

  content.appendChild(nav);
  content.appendChild(main);
  content.appendChild(footer);
}

//     <nav>
//     <ul>
//       <li><a href="#">HOME</a></li>
//       <li><a href="#">MENU</a></li>
//       <li><a href="#">ABOUT</a></li>
//     </ul>
//   </nav>
/* <main class="home">
<div class="restuarant-information-contaier">
  <h1 class="restaurant-name">Capricioson</h1>
  <h2 class="restaurant-type">PIZZERIA</h2>
</div>
<hr />
<p class="restaurant-slogan">The best place to eat good food!</p>
<button class="restaurant-menu-btn">CHECK THE MENU</button>
</main> */

export default loadPage;
