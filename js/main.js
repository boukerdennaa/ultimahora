let menu = document.querySelector(".desplegable");
let menubtn = document.querySelector(".menu-btn");
let menuOpen = false;
menubtn.addEventListener("click", () => {
  if (!menuOpen) {
    menu.classList.add("open");
    menuOpen = true;
  } else {
    menu.classList.remove("open");
    menuOpen = false;
  }
});
