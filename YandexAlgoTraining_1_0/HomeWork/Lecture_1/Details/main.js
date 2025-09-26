const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const [N, K, M] = fileContent.toString().trim().split(" ").map(v => Number(v));
const result = makeDetails(N, K, M);
fs.writeFileSync("output.txt", result.toString());

function makeDetails(N, K, M) {

  let totalDetails = 0;
  let remainder = 0;

  for (let i = 0; i < Math.floor((N + remainder) / K); i++) {

    remainder += K >= M ? K % M : 0;
    totalDetails += Math.floor(K / M);
  }
  return totalDetails;

}

function makeDetails1(N, K, M) {
  let totalDetails = 0;
  while (N > 1) {
    let remainder = N >= K ? K % M : 0;
    N += remainder;
    totalDetails += remainder === 0 ? 0 : Math.floor(K / M);
    N -= K;
  }
  return totalDetails;
}

function makeDetails2(N, K, M) {
  let totalDetails = 0;

  while (N >= K) {
    let remainder = K >= M ? K % M : 0;
    N += remainder;
    totalDetails += Math.floor(K / M);
    N -= K;
  }
  return totalDetails;
}

//49ms, 5.41Mb
function makeDetails3(N, K, M) {
  let totalDetails = 0;
  let remainder = 0;
  let i = N;

  for (; i >= K; i += remainder, i -= K) {
    remainder = K >= M ? K % M : 0;
    totalDetails += Math.floor(K / M);
  }
  return totalDetails;
}

function makeDetails4(N, K, M) {
  let totalDetails = 0;
  let remainder = 0;

  for (let i = K; i <= N; N += remainder, N -= K) {
    remainder = K >= M ? K % M : 0;
    totalDetails += Math.floor(K / M);
  }
  return totalDetails;
}
//Сложные манипуляции с переменными и значениями

function makeDetails5(N, K, M) {
  let totalDetails = 0;
  if (M > K) return 0;

  while (N >= K) {
    let blanks = Math.floor(N / K);
    let detailsPerBlank = Math.floor(K / M);
    totalDetails += detailsPerBlank * blanks;

    let remainderFromMetal = N - (blanks * K);
    let remainderFromBlanks = (blanks * K) - (detailsPerBlank * M * blanks);
    N = remainderFromMetal + remainderFromBlanks;
  }

  return totalDetails;
}

console.log(makeDetails5(10, 3, 2));//4
console.log(makeDetails5(10, 3, 1));//9
console.log(makeDetails5(14, 5, 3));//4
console.log(makeDetails5(10, 5, 2));//4
console.log(makeDetails5(13, 5, 3));//3
console.log(makeDetails5(1, 1, 2));//0
console.log(makeDetails5(164, 5, 3));//54