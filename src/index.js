module.exports = function solveEquation(equation) {
  var arr = [];
  var arrOfTemp = equation.split(' ');

  var a = +arrOfTemp[0];
  var b = +(arrOfTemp[3] + +arrOfTemp[4]);
  var c = +(arrOfTemp[7] + +arrOfTemp[8]);

  var discr = b * b - 4 * a * c;
  x = Math.round(-1 * b + Math.sqrt(discr)) / (2 * a);
  y = Math.round(-1 * b - Math.sqrt(discr)) / (2 * a);

  arr.push(x);
  arr.push(y);
  arr.sort(function(a, b) {
    return a - b;
  });

  return arr;
}
