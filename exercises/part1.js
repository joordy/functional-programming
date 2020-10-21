// console.log('32K'.indexOf('k'));
// console.log('32K'.replace('K', '000'));

let data = require('./userData.json');

let showGeboortedatum = (data) => {
  console.log(data.geboortedatum);
};

data.forEach(showGeboortedatum);
