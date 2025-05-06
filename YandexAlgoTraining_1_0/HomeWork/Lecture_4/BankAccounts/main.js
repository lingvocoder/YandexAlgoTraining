const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const entries = fileContent.toString().trim().split(/\r?\n/);

const result = processOperation(entries);
fs.writeFileSync("output.txt", result.toString());

//170ms, 17.31Mb
function processOperation(entries) {

    const clients = {};
    let ans = [];

    for (let i = 0; i < entries.length; i++) {
        const op = entries[i].split(' ')[0];

        if (op === 'BALANCE') {
            let [, client] = entries[i].split(' ');
            if (!clients.hasOwnProperty(client)) {
                ans.push('ERROR');
            } else {
                ans.push(clients[client]);
            }
        } else if (op === 'DEPOSIT') {
            let [, client, sum] = entries[i].split(' ');
            if (!clients.hasOwnProperty(client)) {
                clients[client] = 0;
            }
            clients[client] += Number(sum);

        } else if (op === 'INCOME') {
            let [, rate] = entries[i].split(' ');

            for (const client in clients) {
                if (clients[client] > 0) {
                    clients[client] += Math.floor((Number(rate) / 100) * clients[client]);
                }
            }
        } else if (op === 'WITHDRAW') {
            let [, client, sum] = entries[i].split(' ');
            if (!clients.hasOwnProperty(client)) {
                clients[client] = 0;
            }
            clients[client] -= Number(sum);
        } else if (op === 'TRANSFER') {
            let [, client1, client2, sum] = entries[i].split(' ');
            if (!clients.hasOwnProperty(client2)) {
                clients[client2] = 0;
            }
            if (!clients.hasOwnProperty(client1)) {
                clients[client1] = 0;
            }
            clients[client1] -= Number(sum);
            clients[client2] += Number(sum);
        }
    }

    return ans.join('\n');

}

