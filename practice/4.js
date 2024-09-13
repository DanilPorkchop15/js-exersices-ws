// 4) Реализуйте, на выбор, один из методов массива: map, sort, filter. Пример работы:

// [].myMap((item, index, arr) => {});
// [].myFilter((item, index, arr) => {});
// [].mySort((a, b) => {});
// [].mySort();

Array.prototype.myMap = function (callback) {
  for (let i = 0; i < this.length; i++) {
    this[i] = callback(this[i], i, this);
  }
  return this;
};

Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.mySort = function (callback) {
  if (!callback) callback = (a, b) => a - b;
  const result = [];
  let arr = this.slice();
  const len = this.length;
  let min = this[0];
  let minIndex = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (callback(arr[j], min) < min){ 
        min = arr[j];
        minIndex = j;
      }
    }
    arr.splice(minIndex, 1);
    result.push(min);
    min = arr[0];
    minIndex = 0;
  }
  return result;
}

console.log([21, 12, 144, 5, 3, 2, 1, 0, -1].mySort((a, b) => a - b));
console.log([21, 12, 144, 5, 3, 2, 1, 0, -1].mySort());