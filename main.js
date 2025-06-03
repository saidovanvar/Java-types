let list = document.querySelector("#list");

let fetchCountries = async (url) => {
    let res = await fetch(url);
    let json = await res.json();

    WriteCountries(json);
};

fetchCountries("https://restcountries.com/v3.1/all");

function WriteCountries(data) {
    data.forEach((country) => {
        let li = document.createElement("li");

        li.innerHTML = `
      <div class="bg-gray-300 rounded-md p-2 cursor-pointer">
        <h3 class="text-center font-bold text-[20px]">${country.name.common}</h3>
        <img class="w-[200px] h-[100px] mx-auto" src="${country.flags.png}" alt="${country.flags.alt}">
        
        <div class="dropdown hidden mt-2 bg-white rounded-md p-2 shadow">
          <p><strong>Name:</strong> ${country.name.common}</p>
          <p><strong>Region:</strong> ${country.region}</p>
          <p><strong>Area:</strong> ${country.area}</p>
          <img class="w-[200px] h-[100px] mx-auto mt-2" src="${country.flags.png}" alt="${country.flags.alt}">
        </div>
      </div>
    `;

        let card = li.querySelector("div");
        let dropdown = li.querySelector(".dropdown");

        card.addEventListener("click", () => {
            dropdown.classList.toggle("hidden");
        });

        list.appendChild(li);
    });
}

