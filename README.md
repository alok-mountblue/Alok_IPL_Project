# IPL Data Project

IPL is an abbreviation of Indian Premier League.
IPL is a professional cricket league played in India.
Dataset can be available from (<https://www.kaggle.com/manasgarg/ipl>)
The dataset will provide analysis on various cricket factors like the batsman, bowlers, number of matches, number of wins, etc.
DataSets:
(i) matches.csv
(ii) deliveries.csv

**1: Install Node**

<https://nodejs.org/en/download/>

**2: Install git**

Linux: <https://git-scm.com/downloads>

Windows: <https://gitforwindows.org/>

**3: Install VSCode**

<https://code.visualstudio.com/download>

**4: Clone this repository**

```sh
git clone https://github.com/alok-mountblue/Alok_IPL_Project.git
```

**5: Install npm convert-csv-to-json package**

```sh
 npm install convert-csv-to-json --save
```

**6: Prepare data**

```
node index.js
```

# Project Structure

**`data`**: This directory contains the dataset: `matches.csv` and `deliveries.csv`.

**`ipl .js`**: This file contains all your JavaScript business logic.

**`public`**: This directory is contains the output directory and this directory contains all json data and also the HTML and JavaScript code required to visualize the results.

**`eslintrc`**: ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

**`node_modules`**: This directory is used by node and npm to store third party packages like `csvtojson`.

**`index.js`**: This file contains the code which: 1. Reads the csv data 2. Calls the JavaScript business logic functions. 3. Saves the results in `public/output/.json`

**`csvtojson`**: In order to do the CSV to JSON conversion, we'll be using the csvtojson package from NPM. This package is a comprehensive Node.js CSV parser to convert CSV to JSON or column arrays.
