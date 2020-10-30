console.log('Surey script is loaded');
// Starting up local server with the following Python command:
// python -m SimpleHTTPServer 8000

let endpoint = '../data/userData.json';
let selectedColumn = null;

getData(endpoint).then((userData) => {
  console.log('hello, data is loaded');

  // Print all the health numbers, converted to integers
  selectedColumn = 'cijferGezondheid';
  const convertGezondheid = parseIntegers(userData, selectedColumn);

  // Print all the shoe sizes, converted to integers
  selectedColumn = 'schoenmaat';
  const convertShoesize = parseIntegers(userData, selectedColumn);

  // Filter the Eyes category.
  // Replaced name colors, empty  spaces and everything is lowerCase
  selectedColumn = 'oogKleur';
  const convertEyecolor = parseEyeColor(userData, selectedColumn);

  // Filter all the students who wants to earn above  Jan Modaal:
  selectedColumn = 'hoeveelPerMaandWillenVerdienen';
  const convertSalary = parseSalary(userData, selectedColumn);

  console.log('cijferGezondheid :', convertGezondheid);
  console.log('Shoesize :', convertShoesize);
  console.log('Eyecolor :', convertEyecolor);
  console.log(convertSalary.length, 'people wants to earn more than Jan, see:', convertSalary);
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

// Function to transform stringed numbers to integers
function parseIntegers(dataArray, key) {
  return dataArray.map((item) => parseInt(item[key]));
}

// Function to transfer colors to hex
// Source used from: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
// Change values by using shift (source: https://developer.mozilla.org/en-US/search?q=bit+shift, first  two results)
function parseEyeColor(dataArray, key) {
  let allColors = dataArray.map((item) => item[key]);
  const rgbCode = '(139,69,19)'; // RGB code to  replacee
  const redRGB = 139; // individual integers, to  give as parameter
  const greenRGB = 69;
  const blueRGB = 19;
  const ChangeRGBtoHEX = (redRGB, greenRGB, blueRGB) => {
    return ((1 << 24) + (redRGB << 16) + (greenRGB << 8) + blueRGB).toString(16).slice(1);
  };
  allColors = allColors.map((color) => {
    return color
      .toUpperCase()
      .replace(' ', '') // Removes spaces
      .replace('#', '') // Removes all hashtags
      .replace('LICHTBLAUW', '0DA5D4') // Transforms color code
      .replace('BLAUW', '1645BE')
      .replace('BRUIN', '8D6955')
      .replace('GROEN', '30CD16')
      .replace('RGB', '') // Removes RGB
      .replace('.', ',') // transform dot to comma
      .replace(rgbCode, ChangeRGBtoHEX(redRGB, greenRGB, blueRGB)) // change static rgb code, starts function ChangeRGBtoHEX
      .replace('', '#'); // place # for every hex-colorcode for correct markup
  });
  return allColors;
}

function parseSalary(dataArray, key) {
  const salary = dataArray.map((item) => parseInt(item[key]));
  return salary.filter((money) => money > 3050);
}
// --------------------------------
// Leuke uitdaging: Probeer te detecteren of waardes in een kolom kunnen worden omgezet naar bijv een number en zo ja doe dat dan.
// Chaining
// Splice

// I need:
// /rgb/ =
// \w{6} = 6 numbers
// \#\w{6} = hashtag en tekst
// ^#\w{6} = starting with #

// .map .filter
// Leuke uitdaging: Probeer te detecteren of waardes in een kolom kunnen worden omgezet naar bijv een number en zo ja doe dat dan.
// Chaining
// Splice

// Feedback = () => {
//    Flow of Control
//    fetch user data bovenaa
//    wat doet allUsers?
//    Logica opdelen in verschillende functies => functies doen 1 ding
//    allUsers.map( allfunctions (); )
//    allUsers.map((answer) => changeToInt(answer))

//    HTML function createElement ( wat  is het? )
//  filter gebruiken voro hoeveel studenten wat doet?
// }
