const inputSearch = document.getElementById("input-search");
const select = document.getElementById("selector");
const count = document.querySelector(".count");

let infoSearch = "";

inputSearch.addEventListener("keyup", (e) => {
  infoSearch = e.target.value.toLowerCase();
  displayingSearchVehicle();
});

const getVehicle = async () => {
  const response = await fetch("https://swapi.dev/api/vehicles");
  const data = await response.json();
  return data.results;
};

let bara = getVehicle();

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
  displayingSearchPlanets();
});

const sortData = (planets) => {
  switch (select.value) {
    case "population":
      return planets.sort((a, b) => parseInt(b.population) - parseInt(a.population));
    case "zeroToHk":
      return planets.filter((planet) => parseInt(planet.population) < 100000);
    case "hkToHundredM":
      return planets.filter((planet) => {
        const population = parseInt(planet.population);
        return population >= 100000 && population < 100000000;
      });
    case "moreHundredM":
      return planets.filter((planet) => parseInt(planet.population) > 100000000);
    default:
      return planets;
  }
};


const filterData = (planets) => {
  return planets.filter((planet) => planet.name.toLowerCase().includes(infoSearch));
};


