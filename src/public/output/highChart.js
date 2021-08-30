/* eslint-disable no-prototype-builtins */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
function fetchAndVisualizeData() {
        fetch('./output/matchesPerYear.json')
                .then((ele) => ele.json())
                .then((data) => {
                        visualizeData(data);
                });
}
fetchAndVisualizeData();
function visualizeData(data) {
        const year = Object.keys(data);
        // console.log(season);
        const matchess = Object.values(data);

        // console.log(seriesData);

        // eslint-disable-next-line no-undef
        Highcharts.chart('matches-played-per-year', {
                chart: {
                        type: 'column',
                },
                title: {
                        text: '1. Matches Played Per Year',
                },
                subtitle: {
                        text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>',
                },
                xAxis: {
                        categories: year,
                },
                yAxis: {
                        min: 0,
                        title: {
                                text: 'Matches',
                        },
                },
                series: [
                        {
                                name: 'Years',
                                data: matchess,
                        },
                ],
        });
}
function fetchAndVisualizeDataThird() {
        fetch('./output/extraRunsConcededByEachTeam.json')
                .then((ele) => ele.json())
                .then((data) => {
                        visualizeExtraRunsData(data);
                });
}

fetchAndVisualizeDataThird();
function visualizeExtraRunsData(data) {
        const season = Object.keys(data);
        // console.log(season);
        const matches = Object.values(data);
        // eslint-disable-next-line no-undef
        Highcharts.chart('extra-runs-conceded-by-each-2016', {
                chart: {
                        type: 'column',
                },
                title: {
                        text: '3. Extra Runs Conceded by Each Team in 2016',
                },
                subtitle: {
                        text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>',
                },
                xAxis: {
                        categories: season,
                        labels: {
                                rotation: -45,
                                style: {
                                        fontSize: '13px',
                                        fontFamily: 'Verdana, sans-serif',
                                },
                        },
                },
                yAxis: {
                        min: 0,
                        title: {
                                text: 'Extra Runs',
                        },
                },
                series: [
                        {
                                name: 'Extra Run',
                                data: matches,
                                dataLabels: {
                                        enabled: true,
                                        rotation: -90,
                                        color: '#FFFFFF',
                                        align: 'right',
                                        y: 10, // 10 pixels down from the top
                                        style: {
                                                fontSize: '13px',
                                                fontFamily: 'Verdana, sans-serif',
                                        },
                                },
                        },
                ],
        });
}
function fetchMatchesWonByEachTeam() {
        fetch('./output/matchesWonEachTeam.json')
                .then((ele) => ele.json())
                .then((data) => {
                        visualizeMatchesWonByEachTeam(data);
                });
}
fetchMatchesWonByEachTeam();

function visualizeMatchesWonByEachTeam(matchesWonByTeams) {
        const year = [];
        for (const y in matchesWonByTeams) {
                year.push(y);
        }
        const teams = [];
        // console.log(Object.keys(matchesWonByTeams[0])[0]);
        for (const y in matchesWonByTeams) {
                for (let j = 0; j < Object.keys(matchesWonByTeams[y]).length; j++) {
                        if (!teams.includes(Object.keys(matchesWonByTeams[y])[j]))
                                teams.push(Object.keys(matchesWonByTeams[y])[j]);
                }
        }
        const seriesData = [];
        for (const teamName of teams) {
                const data = [];
                for (const y in matchesWonByTeams) {
                        if (matchesWonByTeams[y].hasOwnProperty(teamName)) {
                                data.push(matchesWonByTeams[y][teamName]);
                        } else {
                                data.push(0);
                        }
                }
                seriesData.push({ name: teamName, data });
        }
        // console.log(seriesData[0].data[0]);

        Highcharts.chart('Matches-Won-By-Teams', {
                chart: {
                        type: 'column',
                },
                title: {
                        text: '2. Matches Won By Teams Over All The Years',
                },
                subtitle: {
                        text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>',
                },
                xAxis: {
                        categories: year,
                        crosshair: true,
                },
                yAxis: {
                        min: 0,
                        title: {
                                text: 'Matches Won',
                        },
                },
                tooltip: {
                        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                        pointFormat:
                                '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                        footerFormat: '</table>',
                        shared: true,
                        useHTML: true,
                },
                plotOptions: {
                        column: {
                                pointPadding: 0.2,
                                borderWidth: 0,
                        },
                },
                series: seriesData,
        });
}

function fetchAndVisualizeDataFourth() {
        fetch('./output/economicalBowlers.json')
                .then((ele) => ele.json())
                .then((data) => {
                        visualizeTopBowler(data);
                });
}
fetchAndVisualizeDataFourth();

function visualizeTopBowler(topEconomicalBowlers) {
        const seriesData = [];
        const bowlerName = [];
        for(let i=0;i<topEconomicalBowlers.length;i++){
                seriesData.push(parseFloat(topEconomicalBowlers[i][1]));
                bowlerName.push(topEconomicalBowlers[i][0]);
        }

        Highcharts.chart('topBowlers', {
                chart: {
                        type: 'column',
                },
                title: {
                        text: '4. Top Economical Bowlers in 2015 season:',
                },
                subtitle: {
                        text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>',
                },
                xAxis: {
                        categories : bowlerName,
                        labels: {
                                rotation: -45,
                                style: {
                                        fontSize: '13px',
                                        fontFamily: 'Verdana, sans-serif',
                                },
                        },
                },
                yAxis: {
                        min: 0,
                        title: {
                                text: 'Economy',
                        },
                },
                legend: {
                        enabled: false,
                },
                tooltip: {
                        pointFormat: 'Economy: <b>{point.y:.2f}</b>',
                },
                series: [
                        {
                                name: 'Population',
                                data: seriesData,
                                dataLabels: {
                                        enabled: true,
                                        rotation: -90,
                                        color: '#FFFFFF',
                                        align: 'right',
                                        format: '{point.y:.2f}', // one decimal
                                        y: 10, // 10 pixels down from the top
                                        style: {
                                                fontSize: '13px',
                                                fontFamily: 'Verdana, sans-serif',
                                        },
                                },
                        },
                ],
        });
}