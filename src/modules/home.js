function resetMainContent(main) {
  main.innerHTML = "";
}

function createMainContent(main) {
  main.classList.add("home");

  const div = document.createElement("div");
  div.classList.add("restuarant-information-contaier");

  const h1 = document.createElement("h1");
  h1.classList.add("restaurant-name");
  h1.textContent = "Capricioson";

  const h2 = document.createElement("h2");
  h2.classList.add("restaurant-type");
  h2.textContent = "PIZZERIA";

  const hr = document.createElement("hr");

  const p = document.createElement("p");
  p.textContent = "The best place to eat good food!";

  const button = document.createElement("button");
  button.classList.add("restaurant-menu-btn");
  button.textContent = "CHECK THE MENU";

  div.appendChild(h1);
  div.appendChild(h2);

  main.appendChild(div);
  main.appendChild(hr);
  main.appendChild(p);
  main.appendChild(button);

  return main;
}

function loadHome() {
  const main = document.querySelector("main");

  resetMainContent(main);
  createMainContent(main);
}

export default loadHome;
