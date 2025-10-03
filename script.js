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

  const modal = document.getElementById("videoModal");
  const openLink = document.getElementById("openModalLink");
  const closeButton = document.getElementsByClassName("close-button")[0];
  const youtubePlayer = document.getElementById("youtubePlayer");

  const videoId = "14tEVSMoCco"; 
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`; 

  openLink.onclick = function(event) {
    event.preventDefault(); 
    youtubePlayer.src = embedUrl; 
    modal.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
    youtubePlayer.src = ""; 
  }

  closeButton.onclick = function() {
    closeModal();
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal();
    }
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && modal.style.display === "block") {
      closeModal();
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.cv-dropdown-btn');
    const dropdownContent = document.querySelector('.cv-dropdown-content');

    dropdownBtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.cv-dropdown-btn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});