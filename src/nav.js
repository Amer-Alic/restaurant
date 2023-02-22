function createNav() {
  const nav = document.createElement("nav");
  const h1 = document.createElement("h1");
  h1.innerText = "AFF";
  const navButtons = document.createElement("div");
  navButtons.id = "nav-buttons";
  const aboutButton = createButton("ABOUT", "button-about");
  const menuButton = createButton("MENU", "button-menu");
  const contactButton = createButton("CONTACT", "button-contact");
  const hamburger = document.createElement("div");
  hamburger.classList.add("hamburger");
  // add three lines
  for (let i = 0; i < 3; i++) {
    createLine(hamburger);
  }
  hamburger.addEventListener("click", () => {
    navButtons.classList.toggle("active");
  });
  document.querySelector("body").addEventListener("click", () => {
    navButtons.classList.remove("active");
  });
  nav.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  navButtons.append(aboutButton, menuButton, contactButton);
  nav.append(h1, navButtons, hamburger);
  return nav;
}

function createButton(innerText, buttonId) {
  let button = document.createElement("button");
  button.id = buttonId;
  button.innerText = innerText;
  button.classList.add("nav-button");
  return button;
}

function createLine(appendingTo) {
  let line = document.createElement("div");
  line.classList.add("line");
  appendingTo.append(line);
}

export default createNav;
