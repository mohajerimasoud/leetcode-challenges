const decodingMap = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  " ": " ",
};

const rot13 = (str) => {
  const newStr = str
    .split("")
    .map((item) => {
      if (item in decodingMap) {
        return decodingMap[item];
      } else {
        return item;
      }
    })
    .join("");

  return newStr;
};

rot13("SERR PBQR PNZC");
