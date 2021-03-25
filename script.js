function calc(a) {
  return {
    add: (b) => (a = b + a),
    sub: (b) => (a = a - b),
    div: (b) => (a = a / b),
    mult: (b) => (a = b * a),
    getResult: () => a,
  };
}
const first = calc(4);
first.add(33);
first.sub(12);
first.div(2);
first.mult(4);
first.getResult();
const result = first.getResult();
console.log(result);
