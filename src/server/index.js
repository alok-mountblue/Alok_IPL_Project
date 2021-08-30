const { matchesPlayedPerYear, matchesWonByEachTeam, extraRunsByEachTeam, topEconomicalBowlers } = require('./ipl');

const fs = require('fs');
const csv = require('csvtojson');

const MATCHES_FILE_PATH = '../data/matches.csv';
const DELIVERIES_FILE_PATH = '../data/deliveries.csv';

const JSON_OUTPUT_FILE_PATH_FIRST = '../public/output/matchesPerYear.json';
const JSON_OUTPUT_FILE_PATH_SECOND = '../public/output/matchesWonEachTeam.json';
const JSON_OUTPUT_FILE_PATH_THIRD = '../public/output/extraRunsConcededByEachTeam.json';
const JSON_OUTPUT_FILE_PATH_FOURTH = '../public/output/economicalBowlers.json';

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

                                        savePlayersData(matchesPlayed, matcheWonPerYear, extraRunConceded, resultEcoBowl);
                                });
                });
}
main();

function savePlayersData(matchesPlayed, matcheWonPerYear,extraRunConceded, resultEcoBowl) {
        
        fs.writeFile(JSON_OUTPUT_FILE_PATH_FIRST, JSON.stringify(matchesPlayed), 'utf8', (err) => { 
                if (err) {
                        console.log(err);
                }});
        fs.writeFile(JSON_OUTPUT_FILE_PATH_SECOND, JSON.stringify(matcheWonPerYear), 'utf8', (err) => {
                if (err) {
                        console.log(err);
                }});
        fs.writeFile(JSON_OUTPUT_FILE_PATH_THIRD, JSON.stringify(extraRunConceded), 'utf8', (err) => { 
                if (err) {
                        console.log(err);
                }});
        fs.writeFile(JSON_OUTPUT_FILE_PATH_FOURTH, JSON.stringify(resultEcoBowl), 'utf8', (err) => { 
                if (err) {
                          console.log(err);
                }});
}

