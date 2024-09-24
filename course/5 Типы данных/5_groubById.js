// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве 
// ключа и элементами массива в качестве значений.

function groupById(arr) {
  return arr.reduce ((res, {id, ...rest}) => {
  res [id] = rest;
  return res
  }, {});
}

function groupById2(arr) {
  let result = {};
  for (let {id, ...rest} of arr) result[id] = rest;
  return result;
}

console.log(
  groupById([
    {id: '1', name: "John Smith", age: 20},
    {id: '2', name: "Ann Smith", age: 24},
    {id: '3', name: "Pete Peterson", age: 31},
  ])
)

console.log(
  groupById2([
    {id: '1', name: "John Smith", age: 20},
    {id: '2', name: "Ann Smith", age: 24},
    {id: '3', name: "Pete Peterson", age: 31},
  ])
)