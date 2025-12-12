const contactsForm = document.querySelector(".contacts-form");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const contactsButton = document.querySelector(".contacts-button");

contactsForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  modal.style.display = "block";
  contactsForm.reset();
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
