const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const players = fileContent.toString().trim().split(' ').map(value => Number(value));
const result = createFootballTeam(players);
fs.writeFileSync('output.txt', result.toString(), 'utf8');

function createFootballTeam(players) {
    let currentScore = 0;
    let bestScore = 0;
    let last = 0;

    for (let i = 0; i < players.length; i++) {
        while (last < players.length && (last === i || players[i] + players[i + 1] >= players[last])) {
            currentScore += players[last];
            last++;
        }
        bestScore = Math.max(bestScore, currentScore);
        currentScore -= players[i];
    }
    return bestScore;
}
