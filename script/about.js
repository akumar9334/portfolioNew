

document.addEventListener("DOMContentLoaded", () => {
  const aboutTabs = document.querySelectorAll("#about .tab");
  const aboutContents = document.querySelectorAll("#about .tab-content");

  /* ======================
     DATA
  ====================== */

const experienceData = [
{
  id: 1,
 date: "Jul 2025 - Dec 2025",
  position: "Software Developer",
  company: "Safedot E-Solutions Pvt. Ltd.",
  details:
    "Worked on CCTNS and PRISMA projects, developing backend services, REST APIs, database operations, and application features using Java, Spring Boot, MySQL, and Angular."
},

{
  id: 2,
  date: "CCTNS | Jan 2025 - Present",
  position: "Crime and Criminal Tracking Network & Systems",
  company: "Safedot E-Solutions Pvt. Ltd.",
  details:
    "Developed backend APIs and modules for FIR, GD, Arrest, Seizure, Investigation, IIF, reports, integrations, and case management."
},

{
  id: 3,
  date: "PRISMA |Jan 2025 - Present",
  position: "Punjab Real-Time Information System for Monitoring and Analysis",
  company: "Safedot E-Solutions Pvt. Ltd.",
  details:
    "Developed Spring Boot APIs and database services for crime dashboards, reports, investigation pendency, analytics, Angular integration, and performance optimization."
},
  {
    id: 4,
    date: "2023 - 2024",
    position: "Full Stack Developer Intern",
    company: "Skilldezire Pvt. Ltd.",
    details:
      "Worked on full-stack web applications, developing frontend and backend features, integrating REST APIs, managing databases, and using Git for version control.",
  },

  {
    id: 5,
    date: "2023",
    position: "Machine Learning Certification",
    company: "Talent Shine",
    details:
      "Completed Machine Learning with Python certification with hands-on exposure to data analysis, model building, and fundamental machine learning algorithms.",
  },
];

  const educationData = [
    {
      id: 1,
      date: "2020 - 2024",
      degree: "Bachelor of Technology (B.Tech)",
      institution: "S.V.C.E.T, Etcherla, Srikakulam (AP), India",
      details:
        "Completed Bachelor of Technology with a focus on computer science and software development.",
    },
    {
      id: 2,
      date: "2017 - 2019",
      degree: "Higher Secondary Education",
      institution: "Government Inter College, Bihar, India",
      details:
        "Completed higher secondary education with a focus on science fundamentals.",
    },
    {
      id: 3,
      date: "2016 - 2017",
      degree: "Secondary School (10th)",
      institution: "Government High School, Bihar, India",
      details:
        "Completed Secondary School education with a strong academic foundation.",
    },
  ];

const skillsData = [

  // ===== Languages =====
  {
    id: 1,
    name: "Java",
    icon: "assets/skills/java.png",
  },
  {
    id: 2,
    name: "Python",
    icon: "assets/skills/python.png",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: "assets/skills/js.png",
  },

  {
    id: 5,
    name: "HTML",
    icon: "assets/skills/html.png",
  },
  {
    id: 6,
    name: "CSS",
    icon: "assets/skills/css.png",
  },
  {
    id: 7,
    name: "JSP",
    icon: "assets/skills/jsp.svg",
  },

  // ===== Backend =====
  {
    id: 8,
    name: "Spring Boot",
    icon: "assets/skills/springboot.png",
  },
  {
    id: 9,
    name: "Spring MVC",
    icon: "assets/skills/springmvc.png",
  },
  {
    id: 10,
    name: "Spring Security",
    icon: "assets/skills/springsecurity.png",
  },
  {
    id: 11,
    name: "REST APIs",
    icon: "assets/skills/restapi.png",
  },
  {
    id: 12,
    name: "Microservices",
    icon: "assets/skills/microservice.png",
  },
  {
    id: 13,
    name: "Hibernate",
    icon: "assets/skills/hibernate.png",
  },
  {
    id: 14,
    name: "JPA",
    icon: "assets/skills/jpa.png",
  },
  {
    id: 15,
    name: "JDBC",
    icon: "assets/skills/jdbc.png",
  },
  {
    id: 16,
    name: "Node.js",
    icon: "assets/skills/node.png",
  },

  // ===== Frontend =====
  {
    id: 17,
    name: "Angular",
    icon: "assets/skills/angular.svg",
  },

  // ===== Databases =====
  {
    id: 18,
    name: "MySQL",
    icon: "assets/skills/mysql.png",
  },
  {
    id: 19,
    name: "PostgreSQL",
    icon: "assets/skills/postgresql.png",
  },
  {
    id: 20,
    name: "MongoDB",
    icon: "assets/skills/mongodb.png",
  },
  {
    id: 21,
    name: "Redis",
    icon: "assets/skills/redis.png",
  },

  // ===== Messaging =====
  {
    id: 22,
    name: "Apache Kafka",
    icon: "assets/skills/kafka.png",
  },
  {
    id: 23,
    name: "RabbitMQ",
    icon: "assets/skills/rabbitmq.png",
  },

  // ===== AI =====
  {
    id: 24,
    name: "OpenAI API",
    icon: "assets/skills/openai.png",
  },
  {
    id: 25,
    name: "Ollama",
    icon: "assets/skills/ollama.png",
  },


  // ===== DevOps & Tools =====
  {
    id: 27,
    name: "Git",
    icon: "assets/skills/git.png",
  },
  {
    id: 28,
    name: "Docker",
    icon: "assets/skills/docker.png",
  },
  {
    id: 29,
    name: "Jenkins",
    icon: "assets/skills/jenkins.png",
  },
  {
    id: 30,
    name: "Maven",
    icon: "assets/skills/maven.png",
  },
  {
    id: 31,
    name: "Tomcat",
    icon: "assets/skills/tomcat.png",
  },
  {
    id: 32,
    name: "CI/CD",
    icon: "assets/skills/cicd.svg",
  },

  // ===== Concepts =====
  {
    id: 33,
    name: "OOPS",
    icon: "assets/skills/oops.png",
  },
  {
    id: 34,
    name: "MVC Architecture",
    icon: "assets/skills/mvc.png",
  },
  {
    id: 35,
    name: "Data Structures & Algorithms",
    icon: "assets/skills/dsa.png",
  },

  {
    id: 37,
    name: "Database Optimization",
    icon: "assets/skills/database-optimization.png",
  },
  {
    id: 38,
    name: "Dist.Systems",
    icon: "assets/skills/distsystem.png",
  }

];

  const aboutData = [
    { label: "Name", value: "Ajay Kumar" },
    { label: "Country", value: "India" },
    { label: "Industry", value: "Software & IT" },
    { label: "Experience", value: "2+ years" },
    { label: "Address", value: "Chandigarh" },
  ];

  /* ======================
     TAB CLICK
  ====================== */

  aboutTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      aboutTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      aboutContents.forEach((c) => c.classList.remove("active"));
      const targetId = tab.dataset.section;
      const target = document.getElementById(targetId);
      if (!target) return;

      target.classList.add("active");

      if (targetId === "exprience") renderExperience();
      if (targetId === "education") renderEducation();
      if (targetId === "skills") renderSkills();
      if (targetId === "about-me") renderAbout();
    });
  });

  /* ======================
     RENDER FUNCTIONS
  ====================== */

  function renderExperience() {
    const list = document.querySelector(".exprience-list");
    if (!list) return;

    list.innerHTML = experienceData
      .map(
        (item) => `
        <div class="exprience-box">
          <h4>${item.date}</h4>
          <h3>${item.position}</h3>
          <div class="company-name">
            <span class="dot"></span>
            <p>${item.company}</p>
          </div>
          <p>${item.details}</p>
        </div>
      `,
      )
      .join("");
  }

  function renderEducation() {
    const list = document.querySelector(".education-list");
    if (!list) return;

    list.innerHTML = educationData
      .map(
        (item) => `
        <div class="exprience-box">
          <h4>${item.date}</h4>
          <h3>${item.degree}</h3>
          <div class="company-name">
            <span class="dot"></span>
            <p>${item.institution}</p>
          </div>
          <p>${item.details}</p>
        </div>
      `,
      )
      .join("");
  }
  function renderSkills() {
    const list = document.querySelector(".skills-list");
    if (!list) return;

    list.innerHTML = skillsData
      .map(
        (skill) => `
      <div class="skill-box">
        <img src="${skill.icon}" alt="${skill.name}"'>
        <p>${skill.name}</p>
       
      </div>
    `,
      )
      .join("");
  }

  function renderAbout() {
    const container = document.querySelector(".about-info");
    if (!container) return;

    container.innerHTML = `
    <div class="about-grid">
      ${aboutData
        .map(
          (item) => `
            <div class="about-item ${item.label === "Address" ? "full" : ""}">
              <h4>${item.label} :</h4>
              <p>${item.value}</p>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
  }

  // auto load first tab
  aboutTabs[0]?.click();
});
