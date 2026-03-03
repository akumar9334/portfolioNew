document.addEventListener("DOMContentLoaded", function () {

  const select = document.getElementById("country-code");

  fetch("https://restcountries.com/v3.1/all?fields=name,idd")
    .then(response => response.json())
    .then(data => {

      select.innerHTML = "";

      data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );

      data.forEach(country => {
        if (country.idd && country.idd.root && country.idd.suffixes) {

          country.idd.suffixes.forEach(suffix => {

            const code = country.idd.root + suffix;
            const option = document.createElement("option");

            option.value = code;
            option.textContent = `${country.name.common} (${code})`;

            // ✅ Auto select India
            if (code === "+91") {
              option.selected = true;
            }

            select.appendChild(option);
          });
        }
      });

    })
    .catch(error => {
      select.innerHTML = "<option>Error loading codes</option>";
      console.error("Error:", error);
    });

});