{
  /* <div class="project-info">
    <h3>01</h3>
    <h4>Fullstack Threads</h4>
    <p>project discrption </p>
    <div class="tech-stack">
      <span>MongoDb</span>
       <span>MongoDb</span>
        <span>MongoDb</span>
         <span>MongoDb</span>
          <span>MongoDb</span>
    </div>
    <hr>
    <div class="links">
      <a href="">
        <i class="ph ph-arrow-right"></i>
      </a>
      <a href=""><i class="ph ph-github-logo"></i></a>
    </div>
  </div> */
}

//   const projectList=[
//     {
//         id:1,
//         number:"01",
//         title:"FullStack Thread Clone",
//         description:"Lorem ipSum dolor sit amet consectur,adipisicing elit.Nihil",
//         techStack:["MongoDB","Express","React","Node"],
//         image: "assets/projects/project1.webp",
//         liveLink:"#",
//         githubLink:"#",
//     },
//     {
//         id:2,
//         number:"02",
//         title:"FullStack Thread Clone",
//         description:"Lorem ipSum dolor sit amet consectur,adipisicing elit.Nihil",
//         techStack:["MongoDB","Express","React","Node"],
//         image: "assets/projects/project1.webp",
//         liveLink:"#",
//         githubLink:"#",
//     },
//    {
//         id:3,
//         number:"03",
//         title:"FullStack Thread Clone",
//         description:"Lorem ipSum dolor sit amet consectur,adipisicing elit.Nihil",
//         techStack:["MongoDB","Express","React","Node"],
//         image: "assets/projects/project1.webp",
//         liveLink:"#",
//         githubLink:"#",
//     },
//     {
//         id:4,
//         number:"04",
//         title:"FullStack Thread Clone",
//         description:"Lorem ipSum dolor sit amet consectur,adipisicing elit.Nihil",
//         techStack:["MongoDB","Express","React","Node"],
//         image: "assets/projects/project1.webp",
//         liveLink:"#",
//         githubLink:"#",
//     }
//   ]

//   const projects = document.querySelector(".projects");
//   let currentIndex=0;

//   const renderProject=(index)=>{
// const projectContent = projectList[index]
// const previousDisabled= currentIndex===0;
// const nextDisabled= currentIndex===projectList.length -1;
// projects.innerHTML=

// `
// <div class="project-info">
//     <h3>${projectContent?.number}</h3>
//     <h4>${projectContent?.title}</h4>
//     <p>${projectContent?.description}</p>
//     <div class="tech-stack">
//       ${projectContent?.techStack?.map((tech,i)=>{
//         return
//         `
//         <span key ${i}>${tech}</span>
//         `
//       }).join(",")}
//     </div>
//     <hr>
//     <div class="links">
//       <a href="${projectContent?.liveLink}">
//         <i class="ph ph-arrow-right"></i>
//       </a>
//       <a href="${projectContent?.githubLink}"><i class="ph ph-github-logo"></i></a>
//     </div>
//   </div>
//   <div class="carousel">
//     <img src="${projectContent?.image}" alt="${projectContent?.title}">

//   <div class="arrows">
//     <a href="#" id ="previous class = ${previousDisabled?"disabled-btn":""}>
//       <i class="ph ph-caret-left"></i>
//     </a>
//     <a href="#" id ="next" class = ${nextDisabled?"disabled-btn":""}>
//       <i class="ph ph-caret-right"></i>
//     </a>
//   </div>
// </div>
// `;
// document.getElementById('previous').addEventListener("click",()=>{
//     e.preventDefault();

//     if(currentIndex> 0){
//         currentIndex --;
//         renderProject(currentIndex)
//     }
// })
// document.getElementById('previous').addEventListener("click",()=>{
//     e.nextDisabled();

//     if(currentIndex < projectList.length -1 ){
//         currentIndex ++;
//         renderProject(currentIndex)
//     };
//     renderProject(currentIndex);
// })
//   }

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
    "Docker"
  ],
  image: "assets/projects/ecommerce.png",
  liveLink: "#",
  githubLink: "https://github.com/akumar9334/e-commerce-site.git",
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
