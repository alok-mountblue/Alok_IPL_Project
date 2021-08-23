function matchesPlayedPerYear(matches) {
        const result = {};
        for (const match of matches) {
                const { season } = match;
                if (result[season]) {
                        result[season] += 1;
                } else {
                        result[season] = 1;
                }
        }
        return result;
}

function matchesWonByEachTeam(matches) {
        const result = {};
        for (const match of matches) {
                const { season } = match;
                const { winner } = match;

                if (result[season]) {
                        if (result[season][winner]) {
                                result[season][winner] += 1;
                        } else {
                                result[season][winner] = 1;
                        }
                } else {
                        result[season] = {};
                        result[season][winner] = 1;
                }
        }
        return result;
}

/* eslint-disable camelcase */
function extraRunsByEachTeam(matches, deliveries) {
        const result = {};
        const teams = {};

        for (const match of matches) {
                const { id } = match;
                const { team1 } = match;
                const { team2 } = match;
                // eslint-disable-next-line eqeqeq
                if (match.season == 2016) {
                        teams[id] = { team1, team2 };
                }
        }

        for (const delivery of deliveries) {
                const { match_id } = delivery;
                const extra_run = parseInt(delivery.extra_runs);
                const { bowling_team } = delivery;
                if (match_id in teams) {
                        if (result[bowling_team]) {
                                result[bowling_team] += extra_run;
                        } else {
                                result[bowling_team] = extra_run;
                        }
                }
        }

        return result;
}

/* eslint-disable camelcase */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
function topEconomicalBowlers(matches, deliveries) {
        const result = {};

        const totalMatchesPlayedIn2015 = [];

        const economicBowlers = [];

        // Getting the match ids played in year 2015
        for (const match of matches) {
                const { id } = match;
                // eslint-disable-next-line eqeqeq
                if (match.season == 2015) {
                        totalMatchesPlayedIn2015.push(id);
                }
        }

        // getting the balls and runs by each bowler
        for (const delivery of deliveries) {
                const { match_id } = delivery;
                const total_runs = parseInt(delivery.total_runs);
                const extra_runs = parseInt(delivery.extra_runs);
                const { bowler } = delivery;
                if (totalMatchesPlayedIn2015.includes(match_id)) {
                        if (result[bowler]) {
                                result[bowler].runs += total_runs;
                                result[bowler].balls += 1;
                                if (extra_runs) result[bowler].balls -= 1; // taking account for the extra balls
                        } else {
                                result[bowler] = {};
                                result[bowler].runs = total_runs;
                                result[bowler].balls = 1;
                                if (extra_runs) result[bowler].balls -= 1; // taking account for the extra balls
                        }
                }
        }

        // calculating the economy for each bowler
        for (const bowler in result) {
                const { runs } = result[bowler];
                const overs = result[bowler].balls / 6;
                const economy = (runs / overs).toFixed(2);
                economicBowlers.push({ bowler, economy });
        }

        // returning only the top 10 economical bowlers
        return economicBowlers.sort((a, b) => parseFloat(a.economy) - parseFloat(b.economy)).slice(0, 10);
}

module.exports = { matchesPlayedPerYear, matchesWonByEachTeam, extraRunsByEachTeam, topEconomicalBowlers };
