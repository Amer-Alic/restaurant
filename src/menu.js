function loadMenu() {
  const h2 = document.createElement("h2");
  h2.innerText = "OUR MENU:";
  const menuItem1 = createMenuItem("LUXURY BREAKFAST", "We make perfect breakfast by your wishes");
  const menuItem2 = createMenuItem("LUXURY DINNER", "We make perfect dinner by your wishes");
  const menuItem3 = createMenuItem("LUXURY LUNCH", "We make perfect lunch by your wishes");
  const menuItem4 = createMenuItem(
    "SPECIAL GOLDEN HAMBURGER",
    "hamburger topped with edible 24 karat gold. 5 best chefs together make this work."
  );
  const menuItem5 = createMenuItem(
    "MEAL FOR THE POOR",
    "Meal for the poor comes with only 5 special dishes (no gold included)"
  );
  const menuItem6 = createMenuItem("MEAL FOR REALLY POOR", "Go to other restaurant please!!");
  return [h2, menuItem1, menuItem2, menuItem3, menuItem4, menuItem5, menuItem6];
}

function createMenuItem(h3Text, pText) {
  const div = document.createElement("div");
  div.classList.add("menu-item");
  const h3 = document.createElement("h3");
  h3.innerText = h3Text;
  const p = document.createElement("p");
  p.innerText = pText;
  div.append(h3, p);
  return div;
}

export default loadMenu;
