console.log('works');
// Starting up local server with the following Python command:
// python -m SimpleHTTPServer 8000

// Use fetch() method to load data, only accessible with the server.
// Async function to acces data outside the fetch function.
async function fetchMoviesJSON(allUsers) {
  let res = await fetch('../data/userData.json');
  let allUsers = await res.json();
  return allUsers;
}

fetchMoviesJSON().then((allUsers) => {
  console.log(allUsers[0].mensenAangesprokenMetU);
});
