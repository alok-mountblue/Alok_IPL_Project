const { matchesPlayedPerYear, matchesWonByEachTeam, extraRunsByEachTeam, topEconomicalBowlers } = require('./ipl');

const fs = require('fs');
const csv = require('csvtojson');

const matchesPath = '../data/matches.csv';
const deliveriesPath= '../data/deliveries.csv';

const JsonOutputFilePathFirst = '../public/output/matchesPerYear.json';
const JsonOutputFilePathSecond = '../public/output/matchesWonEachTeam.json';
const JsonOutputFilePathThird = '../public/output/extraRunsConcededByEachTeam.json';
const JsonOutputFilePathFourth = '../public/output/economicalBowlers.json';

function main() {
        csv()
                .fromFile(matchesPath)
                .then((matches) => {
                        csv()
                                .fromFile(deliveriesPath)
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
        
        fs.writeFile(JsonOutputFilePathFirst, JSON.stringify(matchesPlayed), 'utf8', (err) => { 
                if (err) {
                        console.log(err);
                }});
        fs.writeFile(JsonOutputFilePathSecond, JSON.stringify(matcheWonPerYear), 'utf8', (err) => {
                if (err) {
                        console.log(err);
                }});
        fs.writeFile(JsonOutputFilePathThird, JSON.stringify(extraRunConceded), 'utf8', (err) => { 
                if (err) {
                        console.log(err);
                }});
        fs.writeFile(JsonOutputFilePathFourth, JSON.stringify(resultEcoBowl), 'utf8', (err) => { 
                if (err) {
                          console.log(err);
                }});
}

