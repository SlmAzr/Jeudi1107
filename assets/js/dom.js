const rowCreation = (headerName, headerDetail, row, element) => {
  row.appendChild(headerName);
  row.appendChild(headerDetail);
  row.addEventListener("click", () => displayInfo(element));
};

const createTable = (elements) => {
  elements.forEach((element) => {
    const row = document.createElement("tr");
    const headerName = document.createElement("th");
    const headerDetail = document.createElement("th");

    const detail = element.terrain || element.vehicle_class || element.gender;

    headerName.textContent = element.name;
    headerDetail.textContent = detail;
    rowCreation(headerName, headerDetail, row , element);
   
    table.appendChild(row);
  });
};

const displayingSearch = async () => {
  const data = await dataFetched;
  let filteredData = filterData(data);
  let sortedData = sortData(filteredData);
  count.textContent = sortedData.length;

  const table = document.querySelector("#table");
  table.textContent = "";
  createTable(sortedData);
};

displayingSearch();
