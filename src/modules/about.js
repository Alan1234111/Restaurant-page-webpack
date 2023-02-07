function resetMainContent(main) {
  main.innerHTML = "";
}

function createMainContent(main) {
  main.classList.add("about");

  const div = document.createElement("div");
  div.classList.add("restuarant-information-contaier");

  const h1 = document.createElement("h1");
  h1.classList.add("restaurant-name");
  h1.textContent = "Capricioson";

  const h2 = document.createElement("h2");
  h2.classList.add("restaurant-about-us");
  h2.textContent = "About US";

  const p = document.createElement("p");
  p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, laboriosam? Optio, qui ea. Delectus necessitatibus asperiores, quas blanditiis excepturi qui autem consectetur maxime similique harum quod ipsum magnam velit sed et deleniti quidem dignissimos porro optio ea voluptate inventore. Nisi dolorum eum accusantium. Voluptas, amet magni sunt dolor reiciendis tempore.";
  p.classList.add("about-us");

  div.appendChild(h1);
  div.appendChild(h2);

  main.appendChild(div);
  main.appendChild(p);

  return main;
}

function loadAbout() {
  const main = document.querySelector("main");

  resetMainContent(main);
  createMainContent(main);
}

export default loadAbout;
