import buttonFn from ".";
import loadMenu from "./menu";

function loadAbout() {
  const chefImg = document.createElement("img");
  chefImg.id = "img-chef";
  chefImg.src = "../dist/assets/GRA_Gordon_launch_reception-090121_4_uinath.jpeg";

  const contentAboutText = document.createElement("div");
  contentAboutText.id = "content-about-text";
  const h2 = document.createElement("h2");
  h2.innerText = "AMER'S FOOD FRANCHISE";
  const p1 = document.createElement("p");
  p1.innerText =
    "Welcome to our food franchise! We are proud to say that we have some of the top chefs in the country working tirelessly to bring you the best food experience possible With our passion for cooking and dedication to quality, we have become the number one food franchise in the region. We offer a diverse range of food options, from traditional favorites to innovative new dishes, all made with the freshest ingredients and a focus on flavor.";
  const p2 = document.createElement("p");
  p2.innerText =
    "Come join us for a meal and taste the difference that our top chefs and commitment to excellence can make!";
  const button = document.createElement("button");
  button.classList.add("contentAbout-menu-button");
  button.innerText = "OUR MENU";

  button.addEventListener("click", () => {
    buttonFn(loadMenu, button, "content-menu");
  });

  contentAboutText.append(h2, p1, p2, button);
  return [chefImg, contentAboutText];
}

export default loadAbout;
