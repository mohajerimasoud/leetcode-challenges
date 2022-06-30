const arr = [
  {
    key: "M",
    value: 1000,
  },
  {
    key: "CM",
    value: 900,
  },
  {
    key: "D",
    value: 500,
  },
  {
    key: "CD",
    value: 400,
  },
  {
    key: "C",
    value: 100,
  },
  {
    key: "XC",
    value: 90,
  },
  {
    key: "L",
    value: 50,
  },
  {
    key: "XL",
    value: 40,
  },
  {
    key: "X",
    value: 10,
  },
  {
    key: "IX",
    value: 9,
  },
  {
    key: "V",
    value: 5,
  },
  {
    key: "IV",
    value: 4,
  },
  {
    key: "I",
    value: 1,
  },
];

function convertToRoman(num) {
  let numberHolder = num;
  let result = [];

  for (let arrItem of arr) {
    while (numberHolder >= arrItem.value) {
      result.push(arrItem.key);

      numberHolder = numberHolder - arrItem.value;
    }
  }
  return result.join("");
}

console.log("2", convertToRoman(2));
