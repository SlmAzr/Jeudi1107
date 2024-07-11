const inputSearch = document.getElementById("input-search");
const select = document.getElementById("selector");
const count = document.querySelector(".count");

let infoSearch = "";

inputSearch.addEventListener("keyup", (e) => {
  infoSearch = e.target.value.toLowerCase();
  displayingSearch()
});

const getPeople = async () => {
  const response = await fetch("https://swapi.dev/api/people");
  const data = await response.json();
  console.log(data);
  return data.results;
};


const dataFetched = getPeople();  

const displayInfo = (element) => {
  if (element) {
    document.querySelector(".global-info").style.display = "block";
    document.querySelector(".no-global").style.display = "none";
    document.getElementById("length").textContent = element.length;
    document.getElementById("crew").textContent = element.crew;
    document.getElementById("speed").textContent = element.max_atmosphering_speed;
    document.getElementById("consumables").textContent = element.consumables;
    document.getElementById("population").textContent = element.passengers;
    document.getElementById("global-name").textContent = element.name;
  }
};

select.addEventListener("change", () => {
    displayingSearch();
});

const sortData = (kin) => {
  switch (select.value) {
    case "female":
      return kin.filter((planet) => planet.gender === "female");
    case "male":
      return kin.filter((planet) => planet.gender === "male");
    default:
      return kin;
  }
};


const filterData = (planets) => {
  return planets.filter((planet) => planet.name.toLowerCase().includes(infoSearch));
};


