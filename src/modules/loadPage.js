function createLi(text, id) {
  const li = document.createElement("li");
  li.classList.add;
  const a = document.createElement("a");
  li.appendChild(a);

  a.id = id;
  a.src = "#";
  a.textContent = text;

  return li;
}

function createNav() {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  nav.appendChild(ul);

  const home = createLi("HOME", "home");
  const menu = createLi("MENU", "menu");
  const about = createLi("ABOUT", "about");

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
  link.href = "https://github.com/Alan1234111/Restaurant-page-webpack";
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

  console.log(footer);

  content.appendChild(nav);
  content.appendChild(main);
  content.appendChild(footer);
}

export default loadPage;
