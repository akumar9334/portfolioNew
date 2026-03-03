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

  // Start typing
  typeEffect();

  const navlinks = document.querySelectorAll('.navlink');
  const tabs = document.querySelectorAll('.content');

  function activateTab(tabId) {
    navlinks.forEach(link => {
      link.classList.toggle('active', link.dataset.tab === tabId);
    });

    tabs.forEach(tab => {
      tab.classList.toggle('active', tab.id === tabId);
    });
  }

  // Click navigation
  navlinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const tab = link.dataset.tab;

      history.pushState(null, "", `#${tab}`);
      activateTab(tab);

      // Close mobile menu after click
      if (toggle) toggle.checked = false;
      document.body.classList.remove('noscroll');
    });
  });

  // On load
  const hash = location.hash.replace("#", "") || "home";
  activateTab(hash);

  // Back/forward browser support
  window.addEventListener("popstate", () => {
    const hash = location.hash.replace("#", "") || "home";
    activateTab(hash);
  });
});
// =====================
// Services Section Data
// =====================
const serviceList = [
  {
    id: 1,
    title: "Website Development",
    icon: "fas fa-code",
    para: "I build responsive and modern websites using HTML, CSS, JavaScript, React, and more."
  },
  {
    id: 2,
    title: "UX/UI Design",
    icon: "fas fa-paint-brush",
    para: "Designing clean, user-friendly interfaces with excellent user experience."
  },
  {
    id: 3,
    title: "SEO Optimization",
    icon: "fas fa-chart-line",
    para: "Improving website visibility with SEO-friendly structure and performance optimization."
  },
  {
    id: 4,
    title: "Database Management",
    icon: "fas fa-database",
    para: "Designing and managing relational databases using MySQL with optimized queries."
  },
  {
    id: 5,
    title: "Code Optimization & Maintenance",
    icon: "fas fa-tools",
    para: "Improving application performance, fixing bugs, and maintaining clean, efficient code."
  },
  {
    id: 6,
    title: "Full Stack Development",
    icon: "fas fa-layer-group",
    para: "End-to-end application development using Angular for frontend and Java Spring Boot for backend."
  }
];

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
          <span><i class="ph ph-arrow-down-right"></i></span>
        </div>

        <h3>${service.title}</h3>
        <div class="spacer"></div>
        <p>${service.para}</p>
      </div>
    `)
    .join("");
}
