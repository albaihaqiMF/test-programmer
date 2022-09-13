let elRoman = document.getElementById("roman");

let romanNumeric = [];

function generate() {
  let roman = elRoman.value;
  document.getElementById("arabic").value =
    romanToDecimal(roman) <= 3999 ? romanToDecimal(roman) : "error";
}

function value(r) {
  if (r == "I") return 1;
  if (r == "V") return 5;
  if (r == "X") return 10;
  if (r == "L") return 50;
  if (r == "C") return 100;
  if (r == "D") return 500;
  if (r == "M") return 1000;
  return 0;
}

function romanToDecimal(roman) {
  let str = roman.toUpperCase();
  var res = 0;

  for (i = 0; i < str.length; i++) {
    var s1 = value(str.charAt(i));

    if (i + 1 < str.length) {
      var s2 = value(str.charAt(i + 1));
      if (s1 >= s2) {
        res = res + s1;
      } else {
        res = res + s2 - s1;
        i++;
      }
    } else {
      res = res + s1;
    }
  }

  return res;
}
