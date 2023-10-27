const nav = document.querySelector("nav");

const mobileMenuDisplay = function (e, className) {
  e.target.closest(".nav").lastElementChild.classList.toggle(className);
};

const logoColorChange = function (e, className) {
  e.target
    .closest(".menu__btn")
    .previousElementSibling.firstElementChild.classList.toggle(className);
};

export const mobileNavFunctionalities = function (e) {
  if (e.target.closest(".hamburger-box")) {
    e.target.closest(".hamburger").classList.toggle("is-active");
    mobileMenuDisplay(e, "w-0");
    mobileMenuDisplay(e, "w-screen");
    mobileMenuDisplay(e, "overflow-hidden");
    logoColorChange(e, "text-darkModeBodyColor");
    logoColorChange(e, "text-white");
  }
};

export { nav };
