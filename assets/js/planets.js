const inputSearch = document.getElementById("input-search");
const select = document.getElementById("selector");
const count = document.querySelector(".count");

let infoSearch = "";


const getPlanets = async () => {
  let url = apiUrl + "planets/";
  let results = []
  while (url) {
    const data = await fetchData(url);
    results.push(...data.results);
    url = data.next;
  }
   return results
}
const dataFetched = getPlanets();  



inputSearch.addEventListener("keyup", (e) => {
  infoSearch = e.target.value.toLowerCase();
  displayingSearch();
});



const displayInfo = (element) => {
  if (element) {
    document.querySelector(".global-info").style.display = "block";
    document.querySelector(".no-global").style.display = "none";
    document.getElementById("diameter").textContent = element.diameter;
    document.getElementById("climate").textContent = element.climate;
    document.getElementById("gravity").textContent = element.gravity;
    document.getElementById("terrain").textContent = element.terrain;
    document.getElementById("population").textContent = element.population;
    document.getElementById("global-name").textContent = element.name;
  }
};

select.addEventListener("change", () => {
  displayingSearch();
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


