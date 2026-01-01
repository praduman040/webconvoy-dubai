const industryToggle = document.getElementById("industryMobileToggle");
const industryMenu = document.querySelector(".mobile-industry-menu");

industryToggle.addEventListener("click", (e) => {
  e.preventDefault();
  industryMenu.style.display =
    industryMenu.style.display === "block" ? "none" : "block";
});

