const getPeople = async () => {
  const response = await fetch("https://swapi.dev/api/people");
  const data = await response.json();
  return data.count;
};
const getVehicle = async () => {
  const response = await fetch("https://swapi.dev/api/vehicles");
  const data = await response.json();
  return data.count;
};

const getPlanet = async () => {
  const response = await fetch("https://swapi.dev/api/planets");
  const data = await response.json();
  console.log(data);
  return data;
};

const getMission = async () => {
  const response = await fetch("https://swapi.dev/api/vehicles");
  const data = await response.json();
  return data.count;
};

const displayAll = async (value1, value2, value3) => {
  document.getElementById("life-value").innerHTML = value1;
  document.getElementById("vehicle-value").innerHTML = value2;
  document.getElementById("planets-value").innerHTML = value3;
  document.getElementById("mission-value").innerHTML = "10 juin 2077";
};

const onInit = async () => {
  const count = await getPeople();
  const countVehicle = await getVehicle();
  const countPlanets = await getPlanet();
  const countMisison = await getMission();
  displayAll(count, countVehicle, countPlanets.count, countMisison);
};
onInit();

