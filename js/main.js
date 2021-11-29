let menuBtn = document.querySelector(".menu-btn");
let menudes = document.querySelector(".desplegable");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menudes.classList.add("active");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menudes.classList.remove("active");
    menuOpen = false;
  }
});
