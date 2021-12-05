Array.prototype.newSort = function (callback) {
  for (m = 0; m <= this.length; m++) {
    for (n = 0; n <= this.length; n++) {
      if (callback(this[m], this[n]) < 0) {
        let temp = this[m];
        this[m] = this[n];
        this[n] = temp;
      }
    }
  }
  return this;
};

let arr = [1, 2, 4, 5, 6];
const res = arr.newSort((a, b) => b - a);
console.log(res);
