const htmlClass = document.querySelector(".html__class");
const themeSection = document.querySelector(".theme__section");
export const togglingTheme = function () {
  // if html tag contains 'dark' class, remove if not, add 'dark' class
  htmlClass.classList.toggle("dark");

  // to check if html tag contains 'dark' class
  const htmlContainsDark = htmlClass.classList.contains("dark");

  // if html tag contains 'dark' class, change the textContent to light else dark
  const isDarkText = htmlContainsDark ? "Light" : "Dark";
  themeSection.firstElementChild.textContent = isDarkText;

  //  if html tag contains 'dark' class, change the icon to 'sun-icon' else to 'moon icon'
  const isDarkIcon = htmlContainsDark ? "sun" : "moon";
  themeSection.lastElementChild.firstElementChild.src = `./assets/icon-${isDarkIcon}.svg`;

  // this is used to toggle the theme 'text' color
  themeSection.firstElementChild.classList.toggle("text-white");
  themeSection.firstElementChild.classList.toggle("text-lightModeTextColor");
};
