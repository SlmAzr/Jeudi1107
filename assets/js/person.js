const inputSearch = document.getElementById("input-search");
const select = document.getElementById("selector");
const count = document.querySelector(".count");
let infoSearch = "";

document.addEventListener("DOMContentLoaded", () => {
  inputSearch.addEventListener("keyup", (e) => {
    infoSearch = e.target.value.toLowerCase();
    displayingSearch();
  });

  select.addEventListener("change", displayingSearch);
});

const getPeople = async () => {
  let url = apiUrl + "people/";
  let hehe = [];
  while (url) {
    const data = await fetchData(url);
    hehe.push(...data.results);
    url = data.next;
  }
  return hehe;
};
const dataFetched = getPeople();

const displayInfo = (element) => {
  if (element) {
    document.querySelector(".global-info").style.display = "block";
    document.querySelector(".no-global").style.display = "none";
    document.getElementById("length").textContent = element.height + "cm";
    document.getElementById("eyeColor").textContent = element.eye_color;
    document.getElementById("genre").textContent = element.gender;
    document.getElementById("birth").textContent = element.birth_year;
    // document.getElementById("population").textContent = element.passengers;
    document.getElementById("global-name").textContent = element.name;
  }
};

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
  return planets.filter((planet) =>
    planet.name.toLowerCase().includes(infoSearch)
  );
};
