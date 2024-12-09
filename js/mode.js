const body = document.querySelector("body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");

const toggleModeBtn = () => {
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
  body.classList.toggle("dark-mode");
};

darkBtn.addEventListener("click", toggleModeBtn);
lightBtn.addEventListener("click", toggleModeBtn);
