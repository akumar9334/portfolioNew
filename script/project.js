
const projectList = [
  {
    id: 1,
    number: "01",
    title: "Digital Music Store Data Analysis",
    description:
      "Analyzed music store data using advanced SQL queires to identify gaps and increase the business growth.",
    techStack: ["MySQL", "SQL", "Excel"],
    image: "assets/projects/mysql.png",
    liveLink: "#",
    githubLink: "https://github.com/akumar9334/SQL_Music_Store_Analysis.git",
  },
  {
    id: 2,
    number: "02",
    title: "hospital Management systems",
    description:
      "Key purpose to streamline healthcare operations like patient records, appointments, and billing, enhancing efficiency and improving patient care through centralized automation.",
    techStack: [
      "HTML",
      "CSS",
      "Jsp",
      "Servlet, Java, JDBC",
      "MySQL",
      "spring boot",
    ],
    image: "assets/projects/Hospital.png",
    liveLink: "#",
    githubLink: "https://github.com/akumar9334/Hospital_Manegment_System.git",
  },
  {
    id: 3,
    number: "03",
    title: "Freelance Marketplace Platform ",
    description:
      "The primary goal of this is to provide a seamless environment where freelancers can find job opportunities and companies can find skilled professionals to hire for their projects. The platform supports two main user modules: freelancers and companies .",
    techStack: [
      "HTML",
      "CSS",
      "Jsp",
      "Java",
      "Mvc",
      "JDBC",
      "MySQL",
      "spring boot",
    ],
    image: "assets/projects/site.png",
    liveLink: "#",
    githubLink: "https://github.com/akumar9334/Freelance_Marketplace.git",
  },
  {
    id: 4,
    number: "04",
    title: "Weather Application",
    description:
      "Key purpose of a Weather Application is to provide real-time weather updates, forecasts, and alerts, keeping users informed about temperature, humidity, wind, and other conditions based on their location.",
    techStack: ["HTML", "CSS", "Jsp", "Java", "Mvc", "Api", "spring boot"],
    image: "assets/projects/weather.png",
    liveLink: "#",
    githubLink: "https://github.com/akumar9334/myWeatherApplication.git",
  },
  {
    id: 5,
    number: "05",
    title: "E-Commerce Site",
    description:
      "The key purpose of this E-Commerce platform is to provide a complete online shopping experience where users can browse products, search and filter items, add products to cart, securely place orders, and track their purchases. The system includes user authentication, product management, order processing, payment integration, and an admin dashboard for managing inventory, customers, and sales analytics.",
    techStack: [
      "HTML",
      "CSS",
      "Angular",
      "Java",
      "MVC",
      "Microservices",
      "REST API",
      "Spring Boot",
      "MySQL",
      "Docker",
    ],
    image: "assets/projects/ecommerce.png",
    liveLink: "#",
    githubLink: "https://github.com/akumar9334/e-commerce-site.git",
  },
  {
    id: 6,
    number: "06",
    title: "Job Portal",
    description:
      "A full-stack job portal designed to connect job seekers with employers. Users can create profiles, search and apply for jobs, while companies can post jobs, manage applications, and review candidates through a secure and user-friendly platform.",

    techStack: [
      "HTML",
      "CSS",
      "Angular",
      "Java",
      "Spring Boot",
      "Microservices",
      "REST API",
      "Spring Security",
      "MySQL",
      "OpenAI API",
      "AI Integration",
      "Ollama",
      "Docker",
    ],
    

    image: "assets/projects/jobportal.png",

    liveLink: "#",

    githubLink: "#",
  },
  {
  id: 7,
  number: "07",
  title: "Food Distribution Portal",
  description:
    "A full-stack food distribution platform designed to manage food orders, distribution, and delivery operations. Users can browse available food items and place orders, while administrators can manage products, orders, users, inventory, and delivery activities through a centralized dashboard.",

  techStack: [
    "HTML",
    "CSS",
    "Angular",
    "Java",
    "Spring Boot",
    "REST API",
    "Spring Security",
    "MySQL",
    "Docker",
    "OpenAI API",
  ],

  image: "assets/projects/food-distribution.png",

  liveLink: "#",

  githubLink: "#"
},

{
  id: 8,
  number: "08",
  title: "Offline AI Chatbot",
  description:
    "An offline AI chatbot built with Ollama and Code Llama, allowing users to interact with an AI model locally without relying on external cloud APIs. The system provides conversational responses, secure local processing, and an easy-to-use chat interface.",

  techStack: [
    "HTML",
    "CSS",
    "Angular",
    "Java",
    "Spring Boot",
    "REST API",
    "Ollama",
    "Code Llama",
    "AI Integration",
    "Docker"
  ],

  image: "assets/projects/ai-chatbot.png",

  liveLink: "#",

  githubLink: "#"
}
];

const projects = document.querySelector(".projects");
let currentIndex = 0;

function renderProject(index) {
  const project = projectList[index];

  const previousDisabled = index === 0 ? "disabled-btn" : "";
  const nextDisabled = index === projectList.length - 1 ? "disabled-btn" : "";

  projects.innerHTML = `
    <div class="project-info">
      <h3>${project.number}</h3>
      <h4>${project.title}</h4>
      <p>${project.description}</p>

      <div class="tech-stack">
        ${project.techStack.map((tech) => `<span>${tech}</span>`).join(" , ")}
      </div>

      <hr>

      <div class="links">
        <a href="${project.liveLink}" target="_blank">
          <i class="ph ph-arrow-right"></i>
        </a>
        <a href="${project.githubLink}" target="_blank">
          <i class="ph ph-github-logo"></i>
        </a>
      </div>
    </div>

    <div class="carousel">
      <img src="${project.image}" alt="${project.title}" />

      <div class="arrows">
        <a href="#" id="previous" class="${previousDisabled}">
          <i class="ph ph-caret-left"></i>
        </a>

        <a href="#" id="next" class="${nextDisabled}">
          <i class="ph ph-caret-right"></i>
        </a>
      </div>
    </div>
  `;

  // Previous
  document.getElementById("previous").addEventListener("click", (e) => {
    e.preventDefault();
    if (currentIndex > 0) {
      currentIndex--;
      renderProject(currentIndex);
    }
  });

  // Next
  document.getElementById("next").addEventListener("click", (e) => {
    e.preventDefault();
    if (currentIndex < projectList.length - 1) {
      currentIndex++;
      renderProject(currentIndex);
    }
  });
}

renderProject(currentIndex);
