/* ================= NAVBAR SCROLL EFFECT ================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});


/* ================= MOBILE MENU TOGGLE ================= */

const toggleBtn = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }

    /* Close mobile menu after click */
    navMenu.classList.remove("show");
  });
});


/* ================= ACTIVE LINK HIGHLIGHT ================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

});


/* ================= FADE-IN ANIMATION ================= */

const revealElements = document.querySelectorAll(".section, .card");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

/* Initial hidden state */
revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.7s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
/* REGISTER MODAL */

const registerBtn = document.getElementById("registerBtn");
const modal = document.getElementById("registerModal");
const closeBtn = document.getElementById("closeModal");

registerBtn.addEventListener("click", ()=>{
  modal.style.display="flex";
});

closeBtn.addEventListener("click", ()=>{
  modal.style.display="none";
});

window.addEventListener("click",(e)=>{
  if(e.target===modal){
    modal.style.display="none";
  }
});