/* eslint-disable operator-assignment */
function matchesPlayedPerYear(matches) {
        const obj = {};
        for (const match of matches) {
                const { season } = match;
                if (obj[season]) {
                        obj[season] = obj[season] + 1;
                } else {
                        obj[season] = 1;
                }
        }
        return obj;
}

function matchesWonByEachTeam(matches) {
        const output = {};
        for (const match of matches) {
                const { season } = match;
                const { winner } = match;

                if (output[season]) {
                        if (output[season][winner]) {
                                output[season][winner] = output[season][winner] + 1;
                        } else {
                                output[season][winner] = 1;
                        }
                } else {
                        output[season] = {};
                        output[season][winner] = 1;
                }
                // console.log(output[season]);
        }
        return output;
}

/* eslint-disable camelcase */
function extraRunsByEachTeam(matches, deliveries) {
        const res = {};
        const team = {};

        for (const match of matches) {
                const { id } = match;
                const { team1 } = match;
                const { team2 } = match;
                // eslint-disable-next-line eqeqeq
                if (match.season == 2016) {
                        team[id] = { team1, team2 };
                }
        }

        for (const delivery of deliveries) {
                const { match_id } = delivery;
                const extra_run = parseInt(delivery.extra_runs);
                const { bowling_team } = delivery;
                if (match_id in team) {
                        if (res[bowling_team]) {
                                res[bowling_team] = res[bowling_team] + extra_run;
                        } else {
                                res[bowling_team] = extra_run;
                        }
                }
        }

        return res;
}

/* eslint-disable camelcase */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
function topEconomicalBowlers(matches, deliveries) {
        const object = {};

        const matchID = [];

        const economicBowlers = [];

        // Getting the match ids played in year 2015
        for (const match of matches) {
                const { id } = match;
                // eslint-disable-next-line eqeqeq
                if (match.season == 2015) {
                        matchID.push(id);
                }
        }

        // getting the balls and runs by each bowler
        for (const delivery of deliveries) {
                const { match_id } = delivery;
                const total_runs = parseInt(delivery.total_runs);
                const extra_runs = parseInt(delivery.extra_runs);
                const { bowler } = delivery;
                if (matchID.includes(match_id)) {
                        if (object[bowler]) {
                                object[bowler].runs = object[bowler].runs + total_runs;
                                object[bowler].balls += 1;
                        } else {
                                object[bowler] = {};
                                object[bowler].runs = total_runs;
                                object[bowler].balls = 1;
                        }
                        if (extra_runs) {
                                object[bowler].balls = object[bowler].balls - 1;
                        }
                }
        }

        // calculating the economy for each bowler
        for (const bowler in object) {
                const { runs } = object[bowler];
                const overs = object[bowler].balls;
                const economy = (runs / (overs / 6)).toFixed(2);
                economicBowlers.push({ bowler, economy });
        }

        // returning only the top 10 economical bowlers
        return economicBowlers.sort((a, b) => parseFloat(a.economy) - parseFloat(b.economy)).slice(0, 10);
}

module.exports = { matchesPlayedPerYear, matchesWonByEachTeam, extraRunsByEachTeam, topEconomicalBowlers };
