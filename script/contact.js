// const media = document.querySelector(".contact-media");
// const contactList=[
//     {
//         id:1,
//         icon:"ph ph-phone-cell",
//         name:"phone",
//         value:"+91 9334048759",
//         href:"tel:+9334048759",
//     },
//     {
//         id:2,
//         icon:"ph ph-envelope",
//         name:"E-Mail",
//         value:"coding.tiger.mail@gmail.com",
//         href:"mailto:coding.tiger.mail@gmail.com",
//     },
//     {
//         id:3,
//         icon:"ph ph-map-pin-area",
//         name:"Country",
//         value:"India",
//         href:"#"
//     },
// ];
// const contactContent = contactList.map((ele)=>{
//     return `
//     <div class="media" key =${ele.id}>
//               <span>
//                 <i class="${ele?.icon}"></i>
//               </span>
//               <div class="contact-value">
//                 <p>${ele?.name}</p>
//                 <a href="${ele?.href}">${ele?.value}</a>
//               </div>
//             </div>
//     `
// }).join("");
// if(media)media.innerHTML=contactContent;

const media = document.querySelector(".contact-media");

const contactList = [
  {
    id: 1,
    icon: "ph ph-phone",
    name: "Phone",
    value: "+91 9334048759",
    href: "https://wa.me/919334048759"
  },
  {
    id: 2,
    icon: "ph ph-envelope",
    name: "E-Mail",
    value: "kumarajayyadav686@gmail.com",
    href: "mailto:kumarajayyadav686@gmail.com",
  },
  {
    id: 3,
    icon: "ph ph-map-pin-area",
    name: "Country",
    value: "India",
    href: "https://www.google.com/maps/place/Chandigarh,+India",
  },
];

if (media) {
  media.innerHTML = contactList
    .map(
      (ele) => `
        <div class="media">
          <span>
            <i class="${ele.icon}"></i>
          </span>
          <div class="contact-value">
            <p>${ele.name}</p>
            <a href="${ele.href}">${ele.value}</a>
          </div>
        </div>
      `,
    )
    .join("");
}

const sendBtn = document.querySelector("#send-msg");
const originalText = sendBtn.innerHTML;
const originalStyle = {
  backgroundColor: sendBtn.style.backgroundColor,
  color: sendBtn.style.color,
  border: sendBtn.style.border,
  boxShadow: sendBtn.style.boxShadow,
};

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const countryCode = document.getElementById("country-code").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // 🔴 Validation
    if (!name || !email || !countryCode || !phone || !message) {
      Toastify({
        text: "All Fields are Mandatory!",
        duration: 3000,
        gravity: "top",
        position: "center",
        close: true,
        stopOnFocus: true,
        style: { background: "rgb(206,16,16)" },
      }).showToast();
      return;
    }

    // 🔄 Button loading state
    sendBtn.innerHTML = "Sending...";
    sendBtn.style.backgroundColor = "gray";
    sendBtn.style.color = "white";
    sendBtn.style.border = "none";
    sendBtn.style.boxShadow = "none";
    sendBtn.disabled = true;

    emailjs
      .send("service_gksk8yb", "template_3ae372u", {
        title: "Portfolio Contact",
        name,
        email,
        phone,
        message,
        time: new Date().toLocaleString(),
      })
      .then(() => {
        Toastify({
          text: "Message Sent!",
          duration: 3000,
          gravity: "top",
          position: "center",
          close: true,
          stopOnFocus: true,
          style: { background: "rgb(9,222,38)" },
        }).showToast();

        document.getElementById("contact-form").reset();
        document.getElementById("country-code").value = "+91";
      })
      .catch((error) => {
        Toastify({
          text: "Message Failed!",
          duration: 3000,
          gravity: "top",
          position: "center",
          close: true,
          stopOnFocus: true,
          style: { background: "rgb(206,16,16)" },
        }).showToast();

        console.error("FAILED...", error);
      })
      .finally(() => {
        setTimeout(() => {
          sendBtn.innerHTML = originalText;
          Object.assign(sendBtn.style, originalStyle);
          sendBtn.disabled = false;
        }, 2000);
      });
  });
