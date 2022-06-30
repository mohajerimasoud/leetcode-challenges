const filterItems = (item) => {
  if (
    item === "_" ||
    item === "-" ||
    item === " " ||
    item === "," ||
    item === "." ||
    item === "/" ||
    item === `\\` ||
    item === `)` ||
    item === `(`
  ) {
    return "";
  } else {
    return item;
  }
};

function palindrome(str) {
  const otherSide = str
    .split("")
    .filter(filterItems)
    .reverse()
    .join("")
    .toUpperCase();
  const betterStr = str.split("").filter(filterItems).join("").toUpperCase();
  console.log("otherSide , betterStr: ", otherSide, betterStr);
  if (otherSide === betterStr) {
    return true;
  } else {
    return false;
  }
}

console.log("test case : 0_0 (: /- :) 0-0", palindrome("0_0 (: /- :) 0-0"));
