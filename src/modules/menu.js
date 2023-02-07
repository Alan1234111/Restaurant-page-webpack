function resetMainContent(main) {
  main.innerHTML = "";
  main.classList = "";
}

function createDish(dishName, dishInformation, dishCost) {
  const dish = document.createElement("div");
  dish.classList.add("dish");

  const name = document.createElement("p");
  name.classList.add("dish-name");
  name.textContent = dishName;

  const information = document.createElement("p");
  information.classList.add("dish-information");
  information.textContent = dishInformation;

  const cost = document.createElement("p");
  cost.classList.add("dish-cost");
  cost.textContent = dishCost;

  const hr = document.createElement("hr");

  dish.appendChild(name);
  dish.appendChild(information);
  dish.appendChild(cost);
  dish.appendChild(hr);

  return dish;
}

function createMainContent(main) {
  main.classList.add("menu");

  const div = document.createElement("div");
  div.classList.add("restuarant-information-contaier");

  const h1 = document.createElement("h1");
  h1.classList.add("restaurant-name");
  h1.textContent = "Capricioson";

  const h2 = document.createElement("h2");
  h2.classList.add("restaurant-menu");
  h2.textContent = "Menu";

  //   const p = document.createElement("p");
  //   p.textContent = "The best place to eat good food!";

  const capriciosa = createDish("Capriciosa", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, maiores.", "15$");
  const margharita = createDish("Margharita", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, maiores.", "15$");
  const hawaiian = createDish("Hawaiian", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, maiores.", "15$");

  div.appendChild(h1);
  div.appendChild(h2);
  main.appendChild(div);
  main.appendChild(capriciosa);
  main.appendChild(margharita);
  main.appendChild(hawaiian);

  return main;
}

function loadMenu() {
  const main = document.querySelector("main");

  resetMainContent(main);
  createMainContent(main);
}

export default loadMenu;
