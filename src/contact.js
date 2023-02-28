function loadContact() {
  const email = makeContact("EMAIL:", "aff@wearerich.com");
  const phone = makeContact("PHONE:", "01238123");
  const booking = makeContact("BOOK A TABLE", "EVERTHING IS ALREADY FULL!");
  const footer = loadFooter();
  return [email, phone, booking, footer];
}

function makeContact(titleP, textP) {
  const div = document.createElement("div");
  div.classList.add("contact");
  const spanTitle = document.createElement("span");
  const spanText = document.createElement("span");
  spanTitle.classList.add("contact-title");
  spanTitle.innerText = titleP;
  spanText.classList.add("contact-text");
  spanText.innerText = textP;
  div.append(spanTitle, spanText);
  return div;
}

function loadFooter() {
  const footer = document.createElement("footer");

  const pMadeBy = document.createElement("p");
  pMadeBy.innerText = "MADE BY: github @Amer-Alic.";

  const githubContact = document.createElement("div");
  githubContact.id = "github-contact";

  const pVisitLink = document.createElement("p");
  pVisitLink.innerText = "Click here to visit:  ";

  const a = document.createElement("a");
  a.href = "https://github.com/Amer-Alic";
  const githubImg = document.createElement("img");
  githubImg.id = "github-img";
  githubImg.src = "../dist/assets/github-circle-svgrepo-com.svg";
  a.append(githubImg);

  githubContact.append(pVisitLink, a);
  footer.append(pMadeBy, githubContact);
  return footer;
}

export default loadContact;
