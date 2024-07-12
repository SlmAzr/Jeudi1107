const displayAll = async (value1, value2, value3) => {
  document.getElementById("life-value").innerHTML = value1;
  document.getElementById("vehicle-value").innerHTML = value2;
  document.getElementById("planets-value").innerHTML = value3;
  document.getElementById("mission-value").innerHTML = "10 juin 2077";
};

const fetchDataFromEndpoint = async (endpoint) => {
  let url = apiUrl + endpoint;
  const data = await fetchData(url);
  return data.count;
};

const getPeople = async () => {
  return fetchDataFromEndpoint("people/");
};

const getVehicles2 = async () => {
  return fetchDataFromEndpoint("vehicles/");
};

const getPlanets = async () => {
  return fetchDataFromEndpoint("planets/");
};

const onInit = async () => {
  const persons = await getPeople();
  const vehicles = await getVehicles2();
  const planets = await getPlanets();

  displayAll(persons, vehicles, planets);
};
onInit();
