
const displayingSearchPlanets = async () => {
    const data = await bara;
    console.log(data);
    let filteredData = filterData(data);
    let sortedData = sortData(filteredData);
    count.textContent = sortedData.length;

    const table = document.querySelector("#table");
    table.textContent = ""; 
  
    sortedData.map((element) => {
      const row = document.createElement("tr");
      const headerPlus =  element.terrain || element.vehicle_class ;
  
      const headerName = document.createElement("th");
      headerName.innerHTML = element.name;
  
      const headerTerrain = document.createElement("th");
      headerTerrain.innerHTML = headerPlus;
  
      row.appendChild(headerName);
      row.appendChild(headerTerrain);
  
      row.addEventListener("click", () => {
        displayInfo(element);
      });
  
      table.appendChild(row);
    });
  };
  
  displayingSearchPlanets();
  
