import { nav, mobileNavFunctionalities } from "./nav.js";
import { togglingTheme } from "./themetoggle.js";
import { getGitProfle } from "./fetchingData.js";

// nav.addEventListener("click", (e) => {
//   mobileNavFunctionalities(e);
// });

const btnSearch = document.querySelector(".btn__search");
const inputUsername = document.querySelector(".input__username");
const themeSection = document.querySelector(".theme__section");
const mainGitSearch = document.querySelector(".main__gitSearch");

btnSearch.addEventListener("click", (e) => {
  e.preventDefault();

  // if input field is empty guard clause it
  if (!inputUsername.value) return;

  // for every time search btn is cleared clear the existing data
  mainGitSearch.innerHTML = "";

  // displaying data
  getGitProfle(inputUsername.value);

  // for loading data blur background
  mainGitSearch.classList.add("blur-sm");
  // remove blur after 3 seconds
  setTimeout(() => mainGitSearch.classList.remove("blur-sm"), 2000);
});

// light dark toggle
themeSection.addEventListener("click", togglingTheme);
