# functional-programming

## Research Case

**How well developed are the parking garages devided around the Randstad, the Netherlands busiest region. [Location API](https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34) and [Specs API](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s)**

For my project for De Volkskrant _[debrief](https://github.com/joordy/functional-programming/wiki/Debrief)_ I will take a look to the theme of parking the car inside the Randstad. The Randstad is the highest population density with in total 8.2 million residents. With the research case I will take a look about how the parking garages look like, how they are divided, and if they are prepared for future, with maximum drive-through height, EV charging, etc. For a more detailed look, you can have a look inside my wiki: [Concept](https://github.com/joordy/functional-programming/wiki/Concept).

<!-- Wat doet je project (description) -->

## Features

Inside this repository i've cleaned our dataset from the University of Amsterdam. In this dataset the students gave a lot of information. In the survey it was possible to provide textual answers. With this textual answers there are a lot of different options, which means the same. By using some functional patterns I cleaned the dataset, and transfer for example all the colors to HEX, and changed all the textual numbers to integers.

<!-- Welke features zijn er (features) -->

## Dataset

We are currently using the Information Design survey of the Communication and Multimedia Design students from the University of Amsterdam. This is an private survey which is not allowed to be published on the internet. To have an working repository, and you're from the University of Amsterdam, please feel free to contact me to receive the dataset.

The invalid data I cleaned up with functional patterns. For example filtering on the the salary that students want to earn, or change string numbers to valid integers, and rewriting the eye-colors.

<!-- Interesting pattern -->

## Interesting functional pattern

My most interesting functional pattern is my parseEyeColor() function.

https://github.com/joordy/functional-programming/blob/3c00ced7f2d830f0234845faeb8b8c5f8e3ca3e4/functional_patterns/js/survey.js#L52

<!-- Installment -->

## Install

#### Clone the GitHub repository

```bash
git clone https://github.com/joordy/functional-programming.git
```

#### Starting up local server with the following Python command

```bash
python -m SimpleHTTPServer 8000
```

#### Visit project

```bash
localhost:8000
```

<!-- Hoe draai ik je project (install) -->

<!-- ### Deploy -->

<!-- Live link van je project (deploy) -->

<!-- Sources -->

## Sources

#### Data sources:

- RDW. (2020, 29 oktober). GEO Parkeer Garages | Open Data | RDW. Recieved on october 22 2020, from https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34
- RDW. (2020, 29 oktober). Open Data Parkeren: SPECIFICATIES PARKEERGEBIED | Open Data | RDW. Recieved on october 23 2020, van https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s

#### Code Sources:

- MDN. (2020b, 30 juli). Fetch API. Recieved on october 20 2020, from https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- MDN. (2020d, 19 oktober). Using Fetch. Recieved on october 20 2020, from https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- MDN. (2020, 8 oktober). Array.prototype.map(). Recieved on october 21 2020, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
- MDN. (2020, 8 oktober). Array.prototype.filter(). Recieved on october 22 2020, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- MDN. (2020a, 16 juli). String.prototype.replace(). Recieved on october 23 2020, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
- Down, T. (2011, 11 april). RGB to hex and hex to RGB. Recieved on october 23 2020, from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

<!-- License -->

## License

This is a repository which is licensed as MIT. Jordy Fronik ©️ 2020.

<!-- - Web Dev Simplified. (2019, 29 oktober). Learn Regular Expressions In 20 Minutes. Geraadpleegd op 23 oktober 2020, van https://www.youtube.com/watch?v=rhzKDrUiJVk
- RegExr. (z.d.). RegExr: Learn, Build, & Test RegEx. Geraadpleegd op 23 oktober 2020, van https://regexr.com/
- Green, D. M. (2014, 30 juni). Using Regular Expressions to Check String Length - SitePoint. Geraadpleegd op 23 oktober 2020, van https://www.sitepoint.com/using-regular-expressions-to-check-string-length/ -->

<!-- - [Array.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) -->

<!-- ## TO have in wiki -->
<!-- concept (schertsen, interface, iteraties)
Research (programmeer principes)
Data vrzamelen (query's, endpoints)
Data pschonen (filter, clean)
Logboek (standup, 1 op 1 gesprekken) -->
