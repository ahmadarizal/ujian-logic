var n = 9;
var $ = "";

for (x = 1; x <= n; x++) {
  for (y = 1; y <= n; y++) {
    if (x <= 5 && x + y > 5 && x - y > -1 + -4) {
      $ += " * " + "&nbsp";
    } else if (x > 5 && x - y < 5 && y - 9 + x <= 5) {
      $ += " * " + "&nbsp";
    } else {
      $ += " - " + "&nbsp";
    }
  }
  $ += "<br>";
}
document.write($);
