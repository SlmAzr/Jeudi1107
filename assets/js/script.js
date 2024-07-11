const displayAll = async (value1, value2, value3) => {
  document.getElementById("life-value").innerHTML = value1;
  document.getElementById("vehicle-value").innerHTML = value2;
  document.getElementById("planets-value").innerHTML = value3;
  document.getElementById("mission-value").innerHTML = "10 juin 2077";
};

const onInit = async () => {
const persons = await getPeople();
const vehicles = await getVehicles2();
const planets = await getPlanets();


  displayAll(persons.count, vehicles.length, planets.count);
};
onInit();

