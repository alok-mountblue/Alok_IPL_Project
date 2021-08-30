# IPL Data Project

IPL is an abbreviation of Indian Premier League.
IPL is a professional cricket league played in India.
Dataset can be available from (<https://www.kaggle.com/manasgarg/ipl>)
The dataset will provide analysis on various cricket factors like the batsman, bowlers, number of matches, number of wins , etc.
DataSets:
(i) matches.csv
(ii) deliveries.csv

## 1: Install Node

<https://nodejs.org/en/download/>

## 2: Install git\*\*

Linux: <https://git-scm.com/downloads>

Windows: <https://gitforwindows.org/>

## 3: Install VSCode (Optional)\*\*

vsCode: <https://code.visualstudio.com/download>

## 4: Clone this repository\*\*

```javascript
git clone https://github.com/alok-mountblue/Alok_IPL_Project.git
```

## 5: Install npm convert-csv-to-json package\*\*

```javascript
 npm install csvtojson --save
```

## 6: Prepare data\*\*

```javascript
cd src/server
node index.js

```

## 7: Visualize results on your browser\*\*

```javascript
cd src/public.
python3 -m http.server.

Open http://localhost:8000
```

---

# Problems

1. Number of matches played per year for all the years in IPL.
2. Number of matches won per team per year in IPL.
3. Extra runs conceded per team in the year 2016
4. Top 10 economical bowlers in the year 2015

---

# Project Structure

**`data`**: This directory contains the dataset: `matches.csv` and `deliveries.csv`.

**`ipl.js`**: This file contains all your JavaScript business logic.

**`public`**: This directory is contains the output directory and output directory contains all json data and also the HTML and JavaScript code required to visualize the results.

**`server`**: In this directory two .js files available index.js and ipl.js. index.js is the entry point of this project and in ipl.js all JavaScript business logic available.

**`eslintrc`**: ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

**`node_modules`**: This directory is used by node and npm to store third party packages like `csvtojson`.

**`index.js`**: This file contains the code which Reads the csv data, calls the JavaScript business logic functions and saves the results in `public/output/.json`

**`csvtojson`**: In order to do the CSV to JSON conversion, we'll be using the csvtojson package from NPM. This package is a comprehensive Node.js CSV parser to convert CSV to JSON or column arrays.
