const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const [K1, M, K2, P2, N2] = fileContent.toString().trim().split(" ").map(v => Number(v));
const result = calculateAddress(K1, M, K2, P2, N2);
fs.writeFileSync("output.txt", result.toString());


function calculateAddress(K1, M, K2, P2, N2) {
  let appsPerFloor = (K2 - 1) / ((P2 - 1) * M + (N2 - 1));
  let P1, N1;
  // Особый случай: P2=1, N2=1 (деление на ноль)
  // if (P2 === 1 && N2 === 1) {
  //   if (K1 <= K2) {
  //     P1 = 1;
  //     N1 = 1;
  //   } else if (M === 1) {
  //     P1 = 0;
  //     N1 = 1;
  //   } else if (K1 <= K2 * M) {
  //     P1 = 1;
  //     N1 = 0;
  //   } else {
  //     P1 = 0;
  //     N1 = 0;
  //   }
  //   return `${P1} ${N1}`;
  // }


  if ((P2 - 1) * M + (N2 - 1) === 0) {
    P1 = 0;
    N1 = 0;
    if (M === 1) {
      N1 = 1;
    }
  } else if (appsPerFloor !== Math.floor(appsPerFloor)) {
    P1 = -1;
    N1 = -1;
  } else if (appsPerFloor <= 0) {
    P1 = -1;
    N1 = -1;
  } else {
    let appOnFloor = K2 - (appsPerFloor * (M * (P2 - 1) + (N2 - 1)));

    if (appOnFloor < 1 || appOnFloor > appsPerFloor) {
      P1 = -1;
      N1 = -1;
    } else {
      P1 = Math.floor((K1 - 1) / (M * appsPerFloor)) + 1;
      N1 = Math.floor((K1 - (P1 - 1) * M * appsPerFloor - 1) / appsPerFloor) + 1;
    }
  }

  console.log(Math.floor(88/80))
  return `${P1} ${N1}`;

}