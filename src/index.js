const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let array = [];
  let currstr = "";
  for (var i = 0; i < expr.length; ++i) {
    currstr += expr[i];

    if (currstr.length == 10) {
      array.push(currstr);

      currstr = "";
    }
  }

  let arr = [];

  array.map((a) => {
    let res = a.match(/.{1,2}/g);

    arr.push(res);
  });

  let finalArray = [];

  arr.map((el) => {
    el.map((el2) => {
      if (el2 == 11) {
        finalArray.push("-");
      }
      if (el2 == "10") {
        finalArray.push(".");
      }
      if (el2 == "**") {
        let str = "".slice(0, 1);
        console.log(str);
        finalArray.push(str);
      }
    });
    finalArray.push(" ");
  });

  // convert symbols to text
  const str = finalArray.join("");

  return str
    .split("   ")
    .map((a) => a.split(" ").map((b) => MORSE_TABLE[b]))
    .join(" ")
    .split(",,")
    .join(" ")
    .replace(/,/g, "");
}

module.exports = {
  decode,
};
