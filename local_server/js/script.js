console.log('works');
// Starting up local server with the following Python command:
// python -m SimpleHTTPServer 8000

// Use fetch() method to load data, only accessible with the server.
// Async function to acces data outside the fetch function.
async function fetchUserData(allUsers) {
  let res = await fetch('../data/userData.json');
  allUsers = await res.json();
  // console.log(allUsers);
  return allUsers;
}

fetchUserData().then((allUsers) => {
  // Parse the number of cijfergezondheid to integers
  // Reset of the variables to reuse them again
  let columnName = 'cijferGezondheid';
  let answerList = [];

  let healthArray = allUsers.map((answer) => {
    return (answerlist = parseInt(answer[columnName], 10));
  });

  console.log(healthArray);

  columnName = 'schoenmaat';
  answerList = [];

  // print all the shoe sizes items, converted to integers
  const shoeArray = allUsers.map((answer) => {
    answerList = parseInt(answer[columnName], 10);
    // answerList.push(answer[columnName]);
    // Push elements into HTML with individual List items.
    let node = document.createElement('li');
    let textNode = document.createTextNode(answer[columnName]);
    node.appendChild(textNode);
    document.body.appendChild(node);
    return answerList;
  });

  console.log(shoeArray);

  // // Filter the Eyes category.
  // let editedEyes = allUsers.filter(() => {});
  // console.log(editedEyes);
});

// .map .filter
// Leuke uitdaging: Probeer te detecteren of waardes in een kolom kunnen worden omgezet naar bijv een number en zo ja doe dat dan.
// Chaining
// Splice
