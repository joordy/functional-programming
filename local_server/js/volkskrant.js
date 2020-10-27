console.log('De Volkskrant file loaded');

// Starting up local server with the following Python command:
// python -m SimpleHTTPServer 8000

// Use fetch() method to load data, only accessible with the server.
// Async function to acces data outside the fetch function.
async function fetchUserData() {
  try {
    const res = await fetch('https://opendata.rdw.nl/resource/k3dr-ge3w.json');
    const data = await res.json();
    return data;
  } catch {
    console.log(error);
  }
}

fetchUserData().then((data) => {
  console.log(data);
});
