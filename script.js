const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const profilePhoto = document.getElementById("profile-photo");
const lightbox = document.getElementById("lightbox");
const closeLightbox = document.getElementById("close-lightbox");

profilePhoto.addEventListener("click", () => {
  lightbox.style.display = "flex";
  setTimeout(() => {
    lightbox.classList.add("show");
  }, 10);
});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");
  setTimeout(() => {
    lightbox.style.display = "none";
  }, 300);
});

