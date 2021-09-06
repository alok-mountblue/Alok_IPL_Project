
const fs = require('fs');
const csv = require('csvtojson');

const MATCHES_FILE_PATH = '../data/matche.csv';
const DELIVERIES_FILE_PATH = '../data/deliveries.csv';

const JSON_OUTPUT_FILE_PATH_FIRST = '../public/output/matchesPerYear.json';
const JSON_OUTPUT_FILE_PATH_SECOND = '../public/output/matchesWonEachTeam.json';
const JSON_OUTPUT_FILE_PATH_THIRD = '../public/output/extraRunsConcededByEachTeam.json';
const JSON_OUTPUT_FILE_PATH_FOURTH = '../public/output/economicalBowlers.json';

const { matchesPlayedPerYear, matchesWonByEachTeam, extraRunsByEachTeam, topEconomicalBowlers } = require('./ipl');

function main() {
        csv()
                .fromFile(MATCHES_FILE_PATH)
                .then((matches) => {
                        csv()
                                .fromFile(DELIVERIES_FILE_PATH)
                                .then((deliveries) => {
                                        const matchesPlayed = matchesPlayedPerYear(matches);
                                        const matcheWonPerYear = matchesWonByEachTeam(matches);
                                        const extraRunConceded = extraRunsByEachTeam(matches, deliveries);
                                        const resultEcoBowl = topEconomicalBowlers(matches, deliveries);

                                         savePlayerData(matchesPlayed, JSON_OUTPUT_FILE_PATH_FIRST)
                                         savePlayerData(matcheWonPerYear, JSON_OUTPUT_FILE_PATH_SECOND)
                                         savePlayerData(extraRunConceded, JSON_OUTPUT_FILE_PATH_THIRD)
                                         savePlayerData(resultEcoBowl, JSON_OUTPUT_FILE_PATH_FOURTH);
                                })
                                .catch(e => console.error(e.message)); 
                })
                .catch(e => console.error(e.message));
}
main();

function savePlayerData(data, location) {
        
        fs.writeFile(location, JSON.stringify(data), 'utf8', (err) => { 
                if (err) {
                        console.log(err);
                }});
}

