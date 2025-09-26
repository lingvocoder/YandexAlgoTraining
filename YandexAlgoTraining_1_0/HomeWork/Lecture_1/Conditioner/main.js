const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const [nums, mode] = fileContent.toString().split("\n");
const readArray = (seq, separator) => seq.trim().split(separator).map(value => Number(value));

const result = setConditioner5(nums, mode);
fs.writeFileSync("output.txt", result.toString());

//74 ms, 5.95 Mb Functional JS way
function setConditioner(nums, mode) {
  const [tRoom, tCond] = readArray(nums, ' ');

  let tr = tRoom >= -50 && tRoom <= 50 ? tRoom : 0;
  let tc = tCond >= -50 && tCond <= 50 ? tCond : 0;

  function heat() {
    return tc >= tr ? tc : tr;
  }

  function freeze() {
    return tc <= tr ? tc : tr;
  }

  function fan() {
    return tr;
  }

  function auto() {
    return freeze() || heat() || fan();
  }

  function setMode() {
    if (mode === 'freeze') {
      return freeze();
    } else if (mode === 'heat') {
      return heat();
    } else if (mode === 'fan') {
      return fan();
    } else if (mode === 'auto') {
      return auto();
    }
  }

  return setMode();
}

//69 ms, 5.71 Mb
function setConditioner1(nums, mode) {
  const [tRoom, tCond] = readArray(nums, ' ');

  let tR = -50 <= tRoom && tRoom <= 50 ? tRoom : 0;
  let tC = -50 <= tCond && tCond <= 50 ? tCond : 0;

  checkCurrTemp(mode);

  function checkCurrTemp(mode) {
    switch (mode) {
      case 'freeze':
        tR = tR >= tC ? tC : tR;
        break;
      case 'heat':
        tR = tR <= tC ? tC : tR;
        break;
      case 'auto':
        tR = tR <= tC ? tC : tR;
        tR = tR >= tC ? tC : tR;
        break;
      default :
        return tR;
    }
  }

  return tR;
}

//45 ms, 5.13 Mb
function setConditioner2(nums, mode) {
  const [tRoom, tCond] = readArray(nums, ' ');

  let tr = -50 <= tRoom <= 50 ? tRoom : 0;
  let tc = -50 <= tCond <= 50 ? tCond : 0;

  if (mode === 'heat' && tr <= tc) {
    return tc;
  }

  if (mode === 'freeze' && tr >= tc) {
    return tc;
  }

  if (mode === 'auto') {
    if (tr <= tc || tr >= tc) {
      return tc;
    }
  }

  if (mode === 'fan') {
    return tr;
  } else {
    return tr;
  }
}

//45 ms, 5.03 Mb Страхуемся при проверке условия и сразу выходим
function setConditioner3(nums, mode) {
  const [tRoom, tCond] = readArray(nums, ' ');

  let tr = -50 <= tRoom <= 50 ? tRoom : 0;
  let tc = -50 <= tCond <= 50 ? tCond : 0;

  if (mode === 'freeze') {
    return tr <= tc ? tr : tc;
  }
  if (mode === 'heat') {
    return tr >= tc ? tr : tc;
  }
  if (mode === 'auto') {
    if (tr <= tc || tr >= tc) {
      return tc;
    }
  }
  if (mode === 'fan') {
    return tr;
  }
  return tr;
}

//49 ms, 5.41Mb Ничего лишнего
function setConditioner4(nums, mode) {
  const [tRoom, tCond] = readArray(nums, ' ');
  let tr = -50 <= tRoom <= 50 ? tRoom : 0;
  let tc = -50 <= tCond <= 50 ? tCond : 0;

  if (mode === 'freeze') {
    return tr <= tc ? tr : tc;
  }
  if (mode === 'heat') {
    return tr >= tc ? tr : tc;
  }
  if (mode === 'auto') {
    return tc;
  }
  if (mode === 'fan') {
    return tr;
  }

}

function setConditioner5(nums, mode) {
  const [tRoom, tCond] = readArray(nums, ' ');
  let tr = -50 <= tRoom <= 50 ? tRoom : 0;
  let tc = -50 <= tCond <= 50 ? tCond : 0;

  if (mode === 'freeze' && tr <= tc) {
    return tr;
  }
  if (mode === 'heat' && tr >= tc) {
    return tr;
  }
  if (mode === 'auto') {
    if (tr <= tc || tr >= tc) {
      return tc;
    }
  }
  if (mode === 'fan') {
    return tr;
  }
  return tc;
}