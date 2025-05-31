const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');
const players = fileContent.toString().trim().split(' ').map(value => Number(value));
const result = createFootballTeam(players);
fs.writeFileSync('output.txt', result.toString(), 'utf8');

//Найти максимальный суммарный профессионализм сплоченной команды
function createFootballTeam(players) {
    let currentScore = 0;
    let bestScore = 0;
    let left = 0;

    for (let right = 0; right < players.length; right++) {
        while (left < players.length && (left === right || players[right] + players[right + 1] >= players[left])) {
            currentScore += players[left];
            left++;
        }
        bestScore = Math.max(bestScore, currentScore);
        currentScore -= players[right];
    }
    return bestScore;
}
