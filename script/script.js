// =====================
// Mobile Menu Scroll Lock
// =====================
const toggle = document.getElementById('menu-toggle');

if (toggle) {
  toggle.addEventListener('change', () => {
    document.body.classList.toggle('noscroll', toggle.checked);
  });
}

// =====================
// Typing Effect
// =====================
const words = ["Frontend Developer", "Backend Developer", "Full Stack Developer"];
const typingText = document.getElementById('typing-span');

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

let typingSpeed = 100;
let deletingSpeed = 60;
let newWordDelay = 1000;

function typeEffect() {
  if (!typingText) return;

  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      setTimeout(() => isDeleting = true, newWordDelay);
    }

  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

// =====================
// SPA Navigation
// =====================

document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // Start Typing Effect
  // =========================
  typeEffect();

  const navlinks = document.querySelectorAll(".navlink");
  const sections = document.querySelectorAll(".content");
  const toggle = document.getElementById("menu-toggle");

  let currentIndex = 0;
  let isScrolling = false;

  // =========================
  // SHOW SECTION
  // =========================
  function showSection(index) {

    if (index < 0 || index >= sections.length) {
      return;
    }

    sections.forEach(section => {
      section.classList.remove("active");
    });

    sections[index].classList.add("active");

    currentIndex = index;

    // Update navbar
    const sectionId = sections[index].id;

    navlinks.forEach(link => {
      link.classList.toggle(
        "active",
        link.dataset.tab === sectionId
      );
    });

    // Update URL
    history.replaceState(
      null,
      "",
      `#${sectionId}`
    );
  }


  // =========================
  // ACTIVATE SECTION
  // =========================
  function activateTab(tabId) {

    const index = Array.from(sections).findIndex(
      section => section.id === tabId
    );

    if (index === -1) {
      return;
    }

    showSection(index);
  }


  // =========================
  // NAVBAR CLICK
  // =========================
  navlinks.forEach(link => {

    link.addEventListener("click", event => {

      event.preventDefault();

      const tabId = link.dataset.tab;

      activateTab(tabId);

      // Close mobile menu
      if (toggle) {
        toggle.checked = false;
      }

      document.body.classList.remove("noscroll");
    });

  });


  // =========================
  // MOUSE WHEEL
  // =========================
 window.addEventListener(
  "wheel",
  event => {

    /*
     * About ke internal scroll areas mein
     * normal scrolling allow karo.
     */
    const internalScroller = event.target.closest(
      ".exprience-list, .education-list, .skills-list, .about-info"
    );

    if (internalScroller) {
      return;
    }

    /*
     * Mobile menu open hai to section change mat karo
     */
    if (toggle && toggle.checked) {
      return;
    }

    /*
     * Already changing section
     */
    if (isScrolling) {
      return;
    }

    const activeSection = sections[currentIndex];

    if (!activeSection) {
      return;
    }


    /* =========================================
       SCROLL DOWN
    ========================================= */

    if (event.deltaY > 0) {

      /*
       * Check whether current section/page
       * is completely scrolled to bottom.
       */
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;


      /*
       * Content abhi pura scroll nahi hua hai.
       * Normal browser scrolling hone do.
       */
      if (!isAtBottom) {
        return;
      }


      /*
       * Current section complete ho gaya.
       * Now move to next section.
       */
      if (currentIndex < sections.length - 1) {

        isScrolling = true;

        showSection(currentIndex + 1);

        /*
         * New section ke top par le jao
         */
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

        setTimeout(() => {
          isScrolling = false;
        }, 700);
      }

      return;
    }


    /* =========================================
       SCROLL UP
    ========================================= */

    if (event.deltaY < 0) {

      /*
       * Check whether page is completely
       * scrolled to top.
       */
      const isAtTop = window.scrollY <= 5;


      /*
       * Abhi page top par nahi hai.
       * Normal upward scrolling hone do.
       */
      if (!isAtTop) {
        return;
      }


      /*
       * Current section ke top par aa gaye.
       * Now previous section open karo.
       */
      if (currentIndex > 0) {

        isScrolling = true;

        showSection(currentIndex - 1);

        /*
         * Previous section ke top par rakho
         */
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

        setTimeout(() => {
          isScrolling = false;
        }, 700);
      }

    }

  },
  { passive: true }
);


  // =========================
  // ON PAGE LOAD
  // =========================
  const hash =
    location.hash.replace("#", "") || "home";

  activateTab(hash);


  // =========================
  // BACK / FORWARD
  // =========================
  window.addEventListener("popstate", () => {

    const hash =
      location.hash.replace("#", "") || "home";

    activateTab(hash);

  });

});
// =====================
// Services Section Data
// =====================
const serviceList = [
{
    id: 1,
    title: "Full Stack Development",
    icon: "fas fa-layer-group",
    para: "End-to-end application development using Angular for frontend and Java Spring Boot for backend."
  },
  {
    id: 2,
    title: "UX/UI Design",
    icon: "fas fa-paint-brush",
    para: "Designing clean, user-friendly interfaces with excellent user experience."
  },
  {
  id: 3,
  title: "Performance Optimization",
  icon: "fas fa-gauge-high",
  para: "Optimizing application performance through efficient code, faster database queries, API optimization, and improved response times."
},
  {
    id: 4,
    title: "Database Management",
    icon: "fas fa-database",
    para: "Designing and managing relational databases using MySQL with optimized queries."
  },
{
  id: 5,
  title: "System Architecture",
  icon: "fas fa-sitemap",
  para: "Designing scalable system architectures with microservices, REST APIs, database integration, and reliable service communication."
},
{
  id: 6,
  title: "Security & SDLC",
  icon: "fas fa-shield-halved",
  para: "Implementing secure coding, authentication, authorization, API security, and structured SDLC practices for reliable application development."
}
];




// =====================
// Render Services
// =====================
// =====================
// Render Services
// =====================
const serviceContainer = document.querySelector(".service-list");

if (serviceContainer) {
  serviceContainer.innerHTML = serviceList
    .map(service => `
      <div class="box">

        <div class="head-icons">
          <i class="${service.icon}"></i>

          <span>
            <i class="ph ph-arrow-down-right"></i>
          </span>
        </div>

        <h3>${service.title}</h3>

        <div class="spacer"></div>

        <div class="service-description">
          <p>${service.para}</p>

          <span
            class="more-info"
            tabindex="0"
            data-full-text="${service.para}"
          >...</span>
        </div>

      </div>
    `)
    .join("");
}