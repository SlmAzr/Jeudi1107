const getMissions = async () => {
  const response = await fetch("https://swapi.dev/api/vehicles");
  const data = await response.json();
  return data;
};



const getVehicles = async () => {
    let url = "https://swapi.dev/api/vehicles";
    let allResults = [];
    
    while (url) {
      const response = await fetch(url);
      const data = await response.json();
      allResults = allResults.concat(data.results);
      url = data.next;
    }
  

    return allResults;
  };
  
const getPlanets = async () => {
    let url = "https://swapi.dev/api/planets"
    let allResults = [];
    
    while (url) {
      const response = await fetch(url);
      const data = await response.json();
      allResults = allResults.push(data.results);
      url = data.next;
    }
  

    return allResults;
  };
  
// const getPeople = async () => {
//     let url = "https://swapi.dev/api/people"
//     let allResults = [];
    
//     while (url) {
//       const response = await fetch(url);
//       const data = await response.json();
//       allResults = allResults.concat(data.results);
//       url = data.next;
//     }
  

//     return allResults;
//   };
  
//   const getPeople = async () => {
//     const response = await fetch("https://swapi.dev/api/people");
//     const data = await response.json();
//     console.log(data);
//     return data.results;
//   };
  
  