const fs = require('fs');
const csv = require('csvtojson');

const MATCHES_FILE_PATH = '../data/matches.csv';
const DELIVERIES_FILE_PATH = '../data/deliveries.csv';

const { matchesPlayedPerYear, matchesWonByEachTeam, extraRunsByEachTeam, topEconomicalBowlers } = require('./ipl');

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
                                        saveMatchesPlayedPerYear(matchesPlayed);

                                        const matcheWonPerYear = matchesWonByEachTeam(matches);
                                        saveMatchesWonEachTeamPerYear(matcheWonPerYear);

                                        const extraRunConceded = extraRunsByEachTeam(matches, deliveries);
                                        saveExtraRunsConcededByEach(extraRunConceded);

                                        const resultEcoBowl = topEconomicalBowlers(matches, deliveries);
                                        saveTopEconomicalBowlers(resultEcoBowl);
                                });
                });
}
main();

function saveMatchesPlayedPerYear(result) {
        const jsonString = JSON.stringify(result);
        fs.writeFile(JSON_OUTPUT_FILE_PATH_FIRST, jsonString, 'utf8', (err) => {
                if (err) {
                        console.error(err);
                }
        });
}

function saveMatchesWonEachTeamPerYear(matcheWonPerY) {
        const jsonString = JSON.stringify(matcheWonPerY);
        fs.writeFile(JSON_OUTPUT_FILE_PATH_SECOND, jsonString, 'utf8', (err) => {
                if (err) {
                        console.error(err);
                }
        });
}

function saveExtraRunsConcededByEach(resultExRun) {
        const jsonString = JSON.stringify(resultExRun);
        fs.writeFile(JSON_OUTPUT_FILE_PATH_THIRD, jsonString, 'utf8', (err) => {
                if (err) {
                        console.error(err);
                }
        });
}

function saveTopEconomicalBowlers(ecobowler) {
        const jsonString = JSON.stringify(ecobowler);
        fs.writeFile(JSON_OUTPUT_FILE_PATH_FOURTH, jsonString, 'utf8', (err) => {
                if (err) {
                        console.error(err);
                }
        });
}
