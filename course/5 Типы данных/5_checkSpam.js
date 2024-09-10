// Напишите функцию checkSpam(str), возвращающую true, 
// если str содержит 'viagra' или 'XXX', а иначе false.
function checkSpam(str) {
  return ["xxx", "viagra"].some((el) => str.toLowerCase().includes(el));
}
