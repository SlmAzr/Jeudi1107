  const apiUrl = "https://swapi.dev/api/";

  const fetchData = async (url) => {
 try {
   const response = await fetch(url);
   return await response.json();
 } catch (error) {
   console.log(error);
 }
  };