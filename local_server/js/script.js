console.log('works');
// Starting up local server with the following Python command:
// python -m SimpleHTTPServer 8000

// Use fetch() method to load data, only accessible with the server.
// Async function to acces data outside the fetch function.
async function fetchUserData(allUsers) {
  let res = await fetch('../data/userData.json');
  allUsers = await res.json();
  return allUsers;
}

fetchUserData().then((allUsers) => {
  // Parse the number of cijfergezondheid to integers
  // Reset of the variables to reuse them again
  let answerList = [];

  let healthArray = allUsers.map((answer) => {
    return (answerlist = parseInt(answer.cijferGezondheid, 10));
  });
  console.log(healthArray);

  // print all the shoe sizes items, converted to integers
  answerList = [];

  const shoeArray = allUsers.map((answer) => {
    answerList = parseInt(answer.schoenmaat, 10);
    // Push elements into HTML with individual List items.
    let node = document.createElement('li');
    let textNode = document.createTextNode(answer.schoenmaat);
    node.appendChild(textNode);
    document.body.appendChild(node);
    return answerList;
  });
  console.log(shoeArray);

  // Filter the Eyes category.
  answerList = [];

  let editedEyes = allUsers.map((answer) => {
    // let brownHex = '8c713b';
    // let blueHex = '';
    // let lightBlueHex = '';
    // let regEx = /{6}/;
    answerList = answer.oogKleur
      .toLowerCase()
      .replace(' ', '')
      .replace('lichtblauw', '#0DA5D4')
      .replace('blauw', '#1645BE')
      .replace('bruin', '#8D6955')
      .replace('groen', '#30CD16')
      .replace();
    // .push(regEx, '#');
    // .replace(regEx, )
    // console.log(regEx);
    return answerList;
  });

  console.log(editedEyes);
});

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
