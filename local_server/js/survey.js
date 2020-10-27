console.log('Survey file loaded');
// Starting up local server with the following Python command:
// python -m SimpleHTTPServer 8000

// Use fetch() method to load data, only accessible with the server.
// Async function to acces data outside the fetch function.
async function fetchUserData() {
  try {
    const res = await fetch('../data/userData.json');
    const allUsers = await res.json();
    return allUsers;
  } catch {
    console.log(error);
  }
}

fetchUserData().then((allUsers) => {
  console.log('data is loaded');
  // Parse the number of cijfergezondheid to integers
  // Reset of the variables to reuse them again
  let health = allUsers.map((answer) => {
    answerList = [];
    return (answerlist = parseInt(answer.cijferGezondheid));
  });
  console.log(health);

  // Print all the shoe sizes items, converted to integers
  // New array of shoe sizes
  const shoeArray = allUsers.map((answer) => {
    answerList = [];
    answerList = parseInt(answer.schoenmaat);
    // Push elements into HTML with individual List items.
    let node = document.createElement('li');
    let textNode = document.createTextNode(answer.schoenmaat);
    node.appendChild(textNode);
    document.body.appendChild(node);
    return answerList;
  });
  console.log(shoeArray);

  // Filter the Eyes category.
  // Replaced name colors, empty  spaces and everything is lowerCase
  // answerList = [];
  let editedEyes = allUsers.map((answer) => {
    answerList = [];
    // Source used from: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
    const rgbCode = '(139,69,19)'; // RGB code to  replacee
    let redRGB = 139; // individual integers, to  give as parameter
    let greenRGB = 69;
    let blueRGB = 19;
    let ChangeRGBtoHEX = (redRGB, greenRGB, blueRGB) => {
      // Change values by using shift (source: https://developer.mozilla.org/en-US/search?q=bit+shift, first  two results)
      return ((1 << 24) + (redRGB << 16) + (greenRGB << 8) + blueRGB).toString(16).slice(1);
    };
    const removeItems = (answer) => {
      answerList = answer.oogKleur
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
      return answerList;
    };
    removeItems();
  });
  console.log(editedEyes);
});

// console.log('Data is loaded', allUsers);
// test;
// const checkHealth = (allUsers) => {
//   answerList = [];
//   allUsers.map((answer, answerList) => {
//     return (answerlist = parseInt(answer.cijferGezondheid));
//   });
//   return answerList;
// };

// --------------------------------

// const checkHealth = (arr) => {
//   answerList = [];
//   arr.map((answer, answerList) => {
//     return (answerlist = parseInt(answer.cijferGezondheid));
//   });
//   return answerList;
// };
// console.log(checkHealth());

// // Reusable integerConverter function
// // let integerConverter = (answer, str) => {
// //   return (answerList = parseInt(answer.category));
// // };
// let answerList = [];

// let integerConverter = (answer, str) => {
//   return parseInt(answer.str);
// };
// //
// answerList = [];

// let numbersArray = allUsers.map((answer, schoenmaat) => {
//   return (answerlist = integerConverter(answer, schoenmaat));
// });

// console.log(numbersArray);
// // let numbersArray = allUsers.map((answer) => {});
// // console.log(numbersArray);

// --------------------------------

// .map .filter
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
