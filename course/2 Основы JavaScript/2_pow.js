// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

const x = prompt("x?", '');
const n = prompt("n?", '');

function powRecursive(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * powRecursive(x, n - 1);
  }
}

function powReduce(x, n) {
  return Array(n).fill(x).reduce((acc, value) => acc * value);  
}
