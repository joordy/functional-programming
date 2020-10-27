// Starting up local server with the following Python command:
// python -m SimpleHTTPServer 8000
console.log('De Volkskrant file loaded');

// RDW Dataset which return information about the parking places in The Netherlands
const endpoint = 'https://opendata.rdw.nl/resource/t5pc-eb34.json'; // Api link
const columnSelected = 'areaid';

getData(endpoint)
  .then((rdwData) => {
    const getAreaIdArray = filterData(rdwData, columnSelected);
    const getUsageIdArray = filterData(rdwData, 'usageid');
    const uniqueUsageValue = listUnique(getAreaIdArray);
    console.log(getAreaIdArray);
    console.log(getUsageIdArray);
    console.log('unique', uniqueUsageValue);

    const emptyStringsInAreas = countValuesInArray(getAreaIdArray, '');
    console.log('empty strings in area', emptyStringsInAreas);
    return getUsageIdArray;
  })
  .then((getUsageIdArray) => {
    processData(getUsageIdArray);
  });

// Use fetch() method to load data, only accessible with the server.
// Async function to acces data outside the fetch function.
async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch {
    console.log(err);
  }
}

// Filter data on one specific key
function filterData(dataArray, key) {
  return dataArray.map((item) => item[key]);
}

//
function listUnique(dataArray) {
  let uniqueArray = [];
  dataArray.map((item) => {
    if (uniqueArray.indexOf(item) == -1) {
      uniqueArray.push(item);
    }
  });
  // return [];
  return uniqueArray;
}

// Returns the number of times a value is present in an array
function countValuesInArray(valueArray, specificValue) {
  let count = 0;
  valueArray.forEach((item) => {
    if (item == specificValue) {
      count++;
    }
  });
  return count;
}

// // Compares two arrays and returns the values that ARe present in array1 but not in array2
// function compareArray(array1, array2) {
//   return valuesOnlyPresentInArray1;
// }

// // Returns the number of times a value is present in an array
// function countValuesInArray(valueArray, specificValue) {
//   return count;
// }

function processData(rdwData) {
  console.log('hello!');
}
