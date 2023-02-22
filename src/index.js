import createNav from "./nav";
import loadAbout from "./about";
import loadMenu from "./menu";
import loadContact from "./contact";

// append navigation and about page as defauls
const content = document.querySelector("#content");
document.querySelector("body").prepend(createNav());
content.append(...loadAbout());

const navButtons = document.querySelectorAll(".nav-button");
const aboutButton = document.querySelector("#button-about");
const menuButton = document.querySelector("#button-menu");
const contactButton = document.querySelector("#button-contact");
const contentAboutMenuButton = document.querySelector(".contentAbout-menu-button");

function buttonFn(fn, button, addClass) {
  if (button.classList.contains("active") || (content.classList.contains("content-about") && button === aboutButton))
    return;
  content.innerHTML = "";
  content.append(...fn());
  // adding opacity for transition
  content.style.opacity = "100%";
  content.classList = "";
  content.classList.add(addClass);
  navButtons.forEach((button) => {
    button.classList.remove("active");
  });
  button.classList.add("active");
}

aboutButton.addEventListener("click", () => {
  buttonFn(loadAbout, aboutButton, "content-about");
});

menuButton.addEventListener("click", () => {
  buttonFn(loadMenu, menuButton, "content-menu");
});

contactButton.addEventListener("click", () => {
  buttonFn(loadContact, contactButton, "content-contact");
});

export default buttonFn;
