document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("country-code");

  if (!select) return;

  const countryCodes = [
    { name: "India", code: "+91" },
    { name: "United States", code: "+1" },
    { name: "United Kingdom", code: "+44" },
    { name: "Canada", code: "+1" },
    { name: "Australia", code: "+61" },
    { name: "Germany", code: "+49" },
    { name: "France", code: "+33" },
    { name: "Singapore", code: "+65" },
    { name: "UAE", code: "+971" },
    { name: "Nepal", code: "+977" },
    { name: "Bangladesh", code: "+880" },
    { name: "Pakistan", code: "+92" },
    { name: "Sri Lanka", code: "+94" },
    { name: "Japan", code: "+81" },
    { name: "China", code: "+86" },
    { name: "New Zealand", code: "+64" },
    { name: "South Africa", code: "+27" },
    { name: "Russia", code: "+7" },
    { name: "Brazil", code: "+55" },
    { name: "Italy", code: "+39" },
    { name: "Spain", code: "+34" }
  ];

  select.innerHTML = "";

  countryCodes.forEach(country => {
    const option = document.createElement("option");

    option.value = country.code;
    option.textContent = `${country.name} (${country.code})`;

    if (country.code === "+91") {
      option.selected = true;
    }

    select.appendChild(option);
  });
});