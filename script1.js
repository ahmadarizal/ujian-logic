var n = 9;

for (x = 1; x <= n; x++) {
  for (y = 1; y <= n; y++) {
    if (x + y) {
      document.write(" * ");
    } else {
      document.write(" - ");
    }
  }
  document.write("<br>");
}
