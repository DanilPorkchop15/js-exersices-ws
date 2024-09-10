// Рекурскивная функция факториала

function factorial(n) {
  let res = 1;
  return n > 1 ? (res = n * factorial(n - 1)) : res;
}
