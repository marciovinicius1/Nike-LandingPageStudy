/* Function menu */
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

/* Function hide menu */
const links = document.querySelectorAll("nav ul li a");
for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}

/* Function shadow/border header */
const header = document.querySelector("header");
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
  if (window.scrollY > navHeight - 2) {
    header.classList.add("scroll");
    header.classList.add("border");
  } else {
    header.classList.remove("scroll");
    header.classList.remove("border");
  }
};

/* Testmonials slider swiper */

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

/* Back to top button */
const backTopButton = document.querySelector(".back-to-top");

function backToTop () {
  if (this.window.scrollY >= 560) {
    backTopButton.classList.add("show");
  } else {
    backTopButton.classList.remove("show");
  }
};

/* Scroll reaveal */
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `
    #home h1, #home img, #home a,
    #about img, #about .text,
    #about .card, #testmonials header,
    #testmonials .testmonials, #productlist .image, #productlist a,
    #boximg, #contact h2, #contact p, #contact a, #contact .links,
    #footer img, #textfooter
  `,
  { interval: 80 }
);

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4 - 1

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When scroll */
window.addEventListener("scroll", function(){
  backToTop()
  changeHeaderWhenScroll()
  activateMenuAtCurrentSection()
})