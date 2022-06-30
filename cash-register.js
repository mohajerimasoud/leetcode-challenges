const valuesMap = [
  {
    key: "ONE HUNDRED",
    value: 100,
  },
  {
    key: "TWENTY",
    value: 20,
  },
  {
    key: "TEN",
    value: 10,
  },
  {
    key: "FIVE",
    value: 5,
  },
  {
    key: "ONE",
    value: 1,
  },
  {
    key: "QUARTER",
    value: 0.25,
  },
  {
    key: "DIME",
    value: 0.1,
  },
  {
    key: "NICKEL",
    value: 0.05,
  },
  {
    key: "PENNY",
    value: 0.01,
  },
];

const calcCidTotal = (cid) => {
  return cid.reduce((total, currency) => {
    return total + currency[1];
  }, 0);
};

function checkCashRegister(price, cash, cid) {
  const output = {
    status: null,
    change: [],
  };

  let theChange = cash - price; // the + or - should be considered
  let giveChange;

  const cidTotal = calcCidTotal(cid);

  if (cidTotal > theChange) {
    output.status = "OPEN";
    cid = cid.reverse();

    output.change = valuesMap.reduce((result, currency, index) => {
      giveChange = 0;

      while (cid[index][1] > 0 && theChange >= currency.value) {
        theChange -= currency.value;
        cid[index][1] -= currency.value;
        giveChange += currency.value;
        theChange = Math.round(theChange * 100) / 100;
      }

      if (giveChange > 0) {
        result.push([currency.key, giveChange]);
      }
      return result;
    }, []);

    if (theChange > 0) {
      output.status = "INSUFFICIENT_FUNDS";
      output.change = [];
    }
    return output;
  }
  if (cidTotal < theChange) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  } else {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }
}
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
