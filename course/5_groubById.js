// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве 
// ключа и элементами массива в качестве значений.

function groupById(arr) {
  return arr.reduce ((res, el) => {
  res [el.id] = el;
  return res;
  }, {});
}