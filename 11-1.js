function countEvenNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] % 2 === 0 && arr[i] !== 0) {
      count++;
    }
  }
  return count;
}

function countOddNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] % 2 !== 0 && arr[i] !== 0
       && (arr[i] - Math.trunc(arr[i])) == 0) {
      count++;
    }
  }
  return count;
}

function countZeroes(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] === 0) {
      count++;
    }
  }
  return count;
}

function countFractions(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] !== 0
       && (arr[i] - Math.trunc(arr[i])) !== 0) {
      count++;
    }
  }
  return count;
}

function countOthertype(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      count++;
    }
  }
  return count;
}


let arr = [2, 0, 5, 0, null, "o", 10, 111, 3, 1.2, 10000];
let evenCounter = countEvenNumbers(arr);
let oddCounter = countOddNumbers(arr);
let zeroCounter = countZeroes(arr);
let fractionCounter = countFractions(arr);
let othertypeCounter = countOthertype(arr);


console.log(`Even: ${evenCounter}, Odd: ${oddCounter}, 
Zeroes: ${zeroCounter}, Fractions: ${fractionCounter},
Other type items: ${othertypeCounter}`)