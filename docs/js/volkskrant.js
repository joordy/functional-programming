console.log('RDW script is loaded');
// Starting up local server with the following Python command:
// python -m SimpleHTTPServer 8000

// // Dataset from https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GPS-CO-RDINATEN-PARKEERLOCATIE/k3dr-ge3w
// let endpoint = 'https://opendata.rdw.nl/resource/k3dr-ge3w.json';

// Dataset from https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34
// let endpoint = 'https://opendata.rdw.nl/resource/t5pc-eb34.json';
// let endpoint = 'https://opendata.rdw.nl/resource/f6v7-gjpa.json';
let endpoint = ' https://opendata.rdw.nl/resource/nsk3-v9n7.json ';
let selectedColumn = null;

getData(endpoint)
  .then((data) => {
    console.log('hello, data is loaded');
    console.log(data);
    // selectedColumn = 'areamanagerid';
    // const areaManagerID = getAreaManager(data, selectedColumn);
    // return areaManagerID;
  })
  // .then((areaManagerID) => {
  //   processData(areaManagerID);
  // })
  .catch(() => {
    throw err;
  });

async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch {
    console.log(err);
  }
}

// // Place all Area Manager ID's inside an new array
// function getAreaManager(dataArray, key) {
//   return dataArray.map((item) => parseInt(item[key]));
// }

// const getAreaManager = (dataArray, key) => {
//   let areaManagers = dataArray.map((item) => parseInt(item[key]));

//   let areaManagers = dataArray.map((item) => item[key]);
//   return areaManagers;
// };

// Process the data we will use
// const processData = (areaManagerID) => {
//   console.log('Area Managers :', areaManagerID);
// };
