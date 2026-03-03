// const aboutTabs=document.querySelectorAll(".tab");
// const aboutContent=document.querySelectorAll(".tab-content");

// // document.addEventListener("DOMContentLoaded",()=>{
// //     if(aboutTabs){
// //         aboutTabs[0].click();
// //     }
// // });

// aboutTabs.forEach((tab)=>{
//     tab.addEventListener("click",(e)=>{
//         e.preventDefault();
//         aboutTabs.forEach((a)=>a.classList.remove("active"));

//     tab.classList.add("active");
// aboutContent.forEach((C)=>{
//     C.classList.remove("active");
// });
// const activeTab=tab.dataset.section;
// document.getElementById(activeTab).classList.add("active")
// if(activeTab ==="experience"){
//     const experiences=document.querySelector(".exprience-list");
//     const experienceList=[{
//         id:1,
//         date:"2020-2022",
//         position:"Frontend Developer",
//         company:"Tech Company",
//         details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     }];
//     const experienceContent=experienceList.map((ele)=>{
//         return
//          `
//         `
//     }
// }
// });
// });

document.addEventListener("DOMContentLoaded", () => {
  const aboutTabs = document.querySelectorAll("#about .tab");
  const aboutContents = document.querySelectorAll("#about .tab-content");

  /* ======================
     DATA
  ====================== */

  const experienceData = [
    {
      id: 1,
      date: "2024 - Present",
      position: "Full Stack Developer",
      company: "Safedot E solutions Pvt Ltd",
      details:
        "Worked as a Full Stack Developer on the CCTNS national project, developing backend modules such as FIR, GD, Arrest, Seizure, and Investigation Reports. Built REST APIs, implemented business logic, managed databases, and supported integrations with state police systems.",
    },
    {
      id: 2,
      date: "2023 - 2024",
      position: "Full Stack Developer Intern",
      company: "Skilldezire  Pvt Ltd",
      details:
        "Worked on real-world full stack projects, developing front-end and back-end applications, managing databases, and integrating APIs using version control.",
    },

    {
      id: 3,
      date: "2023",
      position: "Machine Learning Certification",
      company: "Talent Shine",
      details:
        "Completed certification in Machine Learning with Python, gaining hands-on experience in data analysis, model building, and basic machine learning algorithms.",
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
    name: "HTML",
    icon: "assets/skills/html.png",
  },
  {
    id: 3,
    name: "CSS",
    icon: "assets/skills/css.png",
  },
  {
    id: 4,
    name: "JavaScript",
    icon: "assets/skills/js.png",
  },
  {
    id: 5,
    name: "JSP",
    icon: "assets/skills/jsp.svg",
  },

  // ===== Frameworks & Libraries =====
  {
    id: 6,
    name: "Angular",
    icon: "assets/skills/angular.svg",
  },
  {
    id: 7,
    name: "Spring Boot",
    icon: "assets/skills/springboot.png",
  },
  {
    id: 8,
    name: "Node.js",
    icon: "assets/skills/node.png",
  },

  // ===== Databases =====
  {
    id: 9,
    name: "MySQL",
    icon: "assets/skills/mysql.png",
  },
  {
    id: 10,
    name: "JPA",
    icon: "assets/skills/jpa.png",
  },
 

  // ===== DevOps & Tools =====
  {
    id: 11,
    name: "Git",
    icon: "assets/skills/git.png",
  },
  {
    id: 12,
    name: "Docker",
    icon: "assets/skills/docker.png",
  },
  {
    id: 13,
    name: "CI/CD",
    icon: "assets/skills/cicd.svg",
  },

  // ===== Concepts =====
  {
    id: 14,
    name: "MVC Architecture",
    icon: "assets/skills/mvc.png",
  },
  {
    id: 15,
    name: "Data Structures & Algorithms",
    icon: "assets/skills/dsa.png",
  },
  {
    id: 16,
    name: "Microservices",
    icon: "assets/skills/microservice.png",
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
