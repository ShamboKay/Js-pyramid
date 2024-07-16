const character = "#";
const count = 8;
const rows = [];
let inverted = true;

// The simple maths stumps me being surrounded by this language // 
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// I don't get how arguments work to then start here and not before but I get it//
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = ""
// I don't know what "row" is exactly, is it trying to be a 1? Who and where does it get this value? // 
for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
// brings up a sick backwards triangle, I am a software egineer with wheels at the moment//

// TODO: Do not enter Tutorial Hell. //