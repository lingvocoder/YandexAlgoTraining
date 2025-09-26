const fs = require('fs');
const fileContent = fs.readFileSync("input.txt", "utf8");
const nums = fileContent.toString().trim().split("\n").map(v => parseInt(v, 10));
const result = sequenceType(nums);
fs.writeFileSync("output.txt", result.toString());

/*
Последовательность {Xn} элементов множества X называется неубывающей, если каждый элемент этой последовательности не превосходит следующего за ним.
{Xn} — неубывающая ⇔ ∀n ∈ N:Xn <= Xn+1

Последовательность {Xn} элементов множества X называется невозрастающей, если каждый следующий элемент этой последовательности не превосходит предыдущего.
{Xn} — невозрастающая ⇔ ∀n ∈ N:Xn >= Xn+1

Последовательность {Xn} элементов множества X называется возрастающей, если каждый следующий элемент этой последовательности превышает предыдущий.
{Xn} — возрастающая ⇔ ∀n ∈ N:Xn < Xn+1

Последовательность {Xn} элементов множества X называется убывающей, если каждый элемент этой последовательности превышает следующий за ним.
{Xn} — убывающая ⇔ ∀n ∈ N:Xn > Xn+1


* */

function sequenceType(nums) {
  let type;
  const END_SEQ_NUM = -2e9;

  const isConstantSeq = seq => {
    let isConstant = true;
    for (let i = 1; i < seq.length; i++) {
      if (seq[i] === END_SEQ_NUM) break;
      if (seq[i] !== seq[i - 1]) {//если текущий элемент не равен предыдущему, то это посл-ть случайных чисел
        isConstant = false;
      }
    }
    return isConstant;
  };

  const isWeaklyDescendingSeq = seq => {
    let isWeaklyDescending = true;
    for (let i = 1; i < seq.length; i++) {
      if (seq[i] === END_SEQ_NUM) break;
      if (seq[i] > seq[i - 1]) {// если текущий элемент меньше или равен предыдущему, то посл-ть является нестрого убывающей
        isWeaklyDescending = false;
      }
    }
    return isWeaklyDescending;
  };

  const isDescendingSeq = seq => {
    let isDescending = true;
    for (let i = 1; i < seq.length; i++) {
      if (seq[i] === END_SEQ_NUM) break;
      if (seq[i] >= seq[i - 1]) {// если текущий элемент меньше предыдущего, то посл-ть является строго убывающей
        isDescending = false;
      }
    }
    return isDescending;
  };

  const isWeaklyAscendingSeq = seq => {
    let isWeaklyAscending = true;
    for (let i = 1; i < seq.length; i++) {
      if (seq[i] === END_SEQ_NUM) break;
      if (seq[i] < seq[i - 1]) {// если текущий элемент больше или равен предыдущему, то посл-ть является нестрого возрастающей
        isWeaklyAscending = false;
      }
    }
    return isWeaklyAscending;
  };

  const isAscendingSeq = seq => {
    let isAscending = true;
    for (let i = 1; i < seq.length; i++) {
      if (seq[i] === END_SEQ_NUM) break;
      if (seq[i] <= seq[i - 1]) {// если текущий элемент больше предыдущего, то посл-ть является строго возрастающей
        isAscending = false;
      }
    }
    return isAscending;
  };

  if (isConstantSeq(nums)) {
    type = 'CONSTANT';
  } else if (isAscendingSeq(nums)) {
    type = 'ASCENDING';
  } else if (isWeaklyAscendingSeq(nums)) {
    type = 'WEAKLY ASCENDING';
  } else if (isDescendingSeq(nums)) {
    type = 'DESCENDING';
  } else if (isWeaklyDescendingSeq(nums)) {
    type = 'WEAKLY DESCENDING';
  } else {
    type = 'RANDOM';
  }
  return type;
}

function sequenceType1(nums) {
  const END_SEQ_NUM = -2e9;
  let type = '';

  const isTypeConstant = seq => {
    let isConstant = true;
    let prev = seq[0];

    for (let i = 1; i < seq.length; i++) {
      if (seq[i] === END_SEQ_NUM) break;

      if (!(seq[i] === prev && isConstant)) {
        isConstant = false;
      }
      prev = seq[i];
    }
    return isConstant;
  }

  const isTypeWeaklyDescending = seq => {
    let isWeaklyDescending = true;
    let prev = seq[0];

    for (let i = 1; i < seq.length; i++) {
      if (seq[i] === END_SEQ_NUM) break;

      if (!(seq[i] <= prev && isWeaklyDescending)) {
        isWeaklyDescending = false;
      }
      prev = seq[i];
    }
    return isWeaklyDescending;
  }

  const isTypeWeaklyAscending = seq => {
    let isWeaklyAscending = true;
    let prev = seq[0];

    for (let i = 1; i < seq.length; i++) {
      if (seq[i] === END_SEQ_NUM) break;

      if (!(seq[i] >= prev && isWeaklyAscending)) {
        isWeaklyAscending = false;
      }
      prev = seq[i];
    }
    return isWeaklyAscending;
  }

  const isTypeDescending = seq => {
    let isDescending = true;
    let prev = seq[0];

    for (let i = 1; i < seq.length; i++) {
      if (seq[i] === END_SEQ_NUM) break;

      if (!(seq[i] < prev && isDescending)) {
        isDescending = false;
      }
      prev = seq[i];
    }
    return isDescending;
  }

  const isTypeAscending = seq => {
    let isAscending = true;
    let prev = seq[0];

    for (let i = 1; i < seq.length; i++) {
      if (seq[i] === END_SEQ_NUM) break;

      if (!(seq[i] > prev && isAscending)) {
        isAscending = false;
      }
      prev = seq[i];
    }
    return isAscending;
  }

  if (isTypeConstant(nums)) {
    type = 'CONSTANT';
  } else if (isTypeAscending(nums)) {
    type = 'ASCENDING';
  } else if (isTypeWeaklyAscending(nums)) {
    type = 'WEAKLY ASCENDING';
  } else if (isTypeDescending(nums)) {
    type = 'DESCENDING';
  } else if (isTypeWeaklyDescending(nums)) {
    type = 'WEAKLY DESCENDING';
  } else {
    type = 'RANDOM';
  }
  return type;
}

//49ms, 5.41Mb
function sequenceType2(nums) {
  const END_SEQ_NUM = -2e9;

  let isDescending = false;
  let isAscending = false;
  let isConstant = false;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === END_SEQ_NUM) break;

    if (nums[i] > nums[i - 1]) isAscending = true;
    else if (nums[i] < nums[i - 1]) isDescending = true;
    else isConstant = true;
  }
  if (isAscending && isDescending) {
    return 'RANDOM';
  } else if (isDescending && isConstant) {
    return 'WEAKLY DESCENDING';
  } else if (isAscending && isConstant) {
    return 'WEAKLY ASCENDING';
  } else if (isAscending) {
    return 'ASCENDING';
  } else if (isDescending) {
    return 'DESCENDING';
  } else {
    return 'CONSTANT';
  }
}