const inputSearch = document.getElementById("input-search");
const select = document.getElementById("selector");
const count = document.querySelector(".count");

let infoSearch = "";

const getVehicles = async () => {
    let url = apiUrl + "vehicles/";
    let results = []
    while (url) {
      const data = await fetchData(url);
      results.push(...data.results);
      url = data.next;
    }
     return results
  }
  const dataFetched = getVehicles();  

inputSearch.addEventListener("keyup", (e) => {
  infoSearch = e.target.value.toLowerCase();
  displayingSearch();
});




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

const sortData = (planets) => {
  switch (select.value) {
    case "price":
      return planets.sort((a, b) => parseInt(a.cost_in_credits) - parseInt(b.cost_in_credits));
    case "zeroToHk":
      return planets.filter((planet) => parseInt(planet.population) < 15000);
    case "hkToHundredM":
      return planets.filter((planet) => {
        const population = parseInt(planet.population);
        return population >= 15000 && population < 20000;
      }); 
    case "moreHundredM":
      return planets.filter((planet) => parseInt(planet.population) > 20000);
    default:
      return planets;
  }
};


const filterData = (planets) => {
  return planets.filter((planet) => planet.name.toLowerCase().includes(infoSearch));
};


