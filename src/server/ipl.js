/* eslint-disable operator-assignment */
function matchesPlayedPerYear(matches) {
        const obj = {};
        for (const match of matches) {
                const { season } = match;
                // eslint-disable-next-line no-prototype-builtins
                if (obj.hasOwnProperty(season)) {
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
                        // output[season][winner] = 1;
                }
                // console.log(output[season]);
        }
        return output;
}


function extraRunsByEachTeam(matches, deliveries) {
        const res = {};
        const team = {};

        for (const match of matches) {
                const { id, team1, team2 } = match;
                // eslint-disable-next-line eqeqeq
                if (match.season == 2016) {
                        team[id] = { team1, team2 };
                }
        }

        for (const delivery of deliveries) {
                const matchId= delivery.match_id;
                const bowlingTeam= delivery.bowling_team
                const extraRun = parseInt(delivery.extra_runs);
                if (matchId in team) {
                        if (res[bowlingTeam]) {
                                res[bowlingTeam] = res[bowlingTeam] + extraRun;
                        } else {
                                res[bowlingTeam] = extraRun;
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
                const matchId= delivery.match_id;
                const totalRuns = parseInt(delivery.total_runs);
                const extraRuns = parseInt(delivery.extra_runs);
                const bowler = delivery.bowler;
                if (matchID.includes(matchId)) {
                        if (object[bowler]) {
                                object[bowler].runs = object[bowler].runs + totalRuns;
                                object[bowler].balls += 1;
                        } else {
                                object[bowler] = {};
                                object[bowler].runs = totalRuns;
                                object[bowler].balls = 1;
                        }
                        if (extraRuns) {
                                object[bowler].balls = object[bowler].balls - 1;
                        }
                }
        }

        let keys = Object.keys(object).reduce(function (result, current) {
                const runs = object[current].runs;
                const overs = object[current].balls/6;
                result[current] = (runs / overs).toFixed(2);
                return result;
            }, {})
             let economicalBowlers = Object.entries(keys).sort(function (t1, t2) {
                return t1[1] - t2[1];

            }).slice(0, 10);

            return economicalBowlers;

}

module.exports = { matchesPlayedPerYear, matchesWonByEachTeam, extraRunsByEachTeam, topEconomicalBowlers };
