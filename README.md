# functional-programming

### Research Case

**How well developed are the parking garages devided around the Randstad, the Netherlands busiest region. [Location API](https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34) and [Specs API](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s)**

For my project I will take a look to the theme of parking the car inside the Randstad. The Randstad is the highest population density with in total 8.2 million residents. With the research case I will take a look about how the parking garages look like, how they are devided, and if they are prepared for future, with maximum drive-throught height, EV charging, etc.

For a more detailled look, you can have a look inside my wiki: [Concept](https://github.com/joordy/functional-programming/wiki/Concept).

<!-- Wat doet je project (description) -->

### Features

Inside this repository i've cleaned our dataset from the University of Amsterdam. In this dataset the students gave a lot of information. In the survey it was possible to provide textual answers. With this textual answers there are a lot of different options, which means the same. By using some functional patterns I cleaned the dataset, and transfered for example all the colors to HEX, and changed all the textual numbers to integers.

<!-- Welke features zijn er (features) -->

### Dataset

We are currently using the Information Design survey of the Communication and Multimedia Design students from the University of Amsterdam. This is an private survey which is not allowed to be published on the internet. To have an working repository, and you're from the University of Amsterdam, please feel free to contact me to recieve the dataset.

<!-- Welke data gebruik je (dataset) -->

### Install

##### Clone the GitHub repository

```bash
git clone https://github.com/joordy/functional-programming.git
```

##### Starting up local server with the following Python command

```bash
python -m SimpleHTTPServer 8000
```

##### Visit project

```bash
localhost:8000
```

<!-- Hoe draai ik je project (install) -->

<!-- ### Deploy -->

<!-- Live link van je project (deploy) -->

### Bronnen

<!-- credits en license (bronnen) -->

#### Data sources:

[Geo Parkeer garages API](https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34)
[Open Data parkeren SPECIFICATIES PARKEERGEBIED API](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s)

#### Code Sources:

- [Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [String.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [Learn Regex](https://www.youtube.com/watch?v=rhzKDrUiJVk)
- [RegExr](https://regexr.com/)
- [Regexp length check](https://www.sitepoint.com/using-regular-expressions-to-check-string-length/)
- [RGB to HEX and vice versa](https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb)
<!-- - [Array.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) -->

<!-- ## TO have in wiki -->
<!-- concept (schertsen, interface, iteraties)
Research (programmeer principes)
Data vrzamelen (query's, endpoints)
Data pschonen (filter, clean)
Logboek (standup, 1 op 1 gesprekken) -->
