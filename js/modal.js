const closeRules = document.querySelector(".close");
const aside = document.querySelector(".back");
const rulesBtn = document.querySelector(".rules");

closeRules.addEventListener("click", () => {
  aside.style.visibility = "hidden";
});
rulesBtn.addEventListener("click", () => {
  aside.style.visibility = "visible";
});
