/* eslint-disable eqeqeq */
/* eslint-disable no-prototype-builtins */
/* eslint-disable operator-assignment */
function matchesPlayedPerYear(matches) {
        const result = matches.reduce(function (obj, cur) {
                (obj[cur.season]) ? obj[cur.season] += 1 : obj[cur.season] = 1;
                return obj;
        }, {});
        return result;
}

function matchesWonByEachTeam(matches) {
        const matchesWon = matches.reduce(function (obj, cur) {
                if (obj.hasOwnProperty(cur.season)) {
                        obj[cur.season].hasOwnProperty(cur.winner) ? obj[cur.season][cur.winner] += 1 : obj[cur.season][cur.winner] = 1;
                } else {
                        obj[cur.season] = {};
                        obj[cur.season][cur.winner] = 1;
                }
                return obj;
        }, {});
        return matchesWon;
}

/* eslint-disable camelcase */
function extraRunsByEachTeam(matches, deliveries) {
        // const matchesId = matches.filter(match => match.season == 2016).map(element => element.id);
        const matchesId = matches
                .filter(function (match) {
                        return match.season == 2016;
                })
                .map(function (element) {
                        return element.id;
                });
        const extraRunPerTeams = deliveries.reduce(function (output, current) {
                if (matchesId.includes(current.match_id)) {
                        const extra = parseInt(current.extra_runs);

                        if (output.hasOwnProperty(current.bowling_team)) {
                                output[current.bowling_team] += extra;
                        } else {
                                output[current.bowling_team] = extra;
                        }
                }
                return output;
        }, {});
        return extraRunPerTeams;
}

/* eslint-disable camelcase */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
function topEconomicalBowlers(matches, deliveries) {
        const economicBowlers = [];

        const matchID = matches.filter((match) => match.season == 2015).map((element) => element.id);

        const output = deliveries.reduce((acc, cur) => {
                const total_runs = parseInt(cur.total_runs);
                const extra_runs = parseInt(cur.extra_runs);
                if (matchID.includes(cur.match_id)) {
                        if (acc.hasOwnProperty(cur.bowler)) {
                                acc[cur.bowler].runs += total_runs;
                                acc[cur.bowler].balls += 1;
                        } else {
                                acc[cur.bowler] = {
                                        runs: total_runs,
                                        balls: 1,
                                };
                        }
                        if (extra_runs) acc[cur.bowler].balls -= 1;
                }
                return acc;
        }, {});
        // console.log(output);

        // calculating the economy for each bowler
        for (const bowler in output) {
                const { runs } = output[bowler];
                const overs = output[bowler].balls / 6;
                const economy = (runs / overs).toFixed(2);
                economicBowlers.push({ bowler, economy });
        }

        // returning only the top 10 economical bowlers
        return economicBowlers.sort((a, b) => parseFloat(a.economy) - parseFloat(b.economy)).slice(0, 10);
}
module.exports = { matchesPlayedPerYear, matchesWonByEachTeam, extraRunsByEachTeam, topEconomicalBowlers };
