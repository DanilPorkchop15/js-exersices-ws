// 3) Напишите функцию, которая будет устанавливать значение в объекте, по переданному пути. 
// Сигнатура функции должна быть следующей function ([“user”, “name”], “Sam”, obj). 
// После вызова функции, для поля obj.user.name должно быть установлено значение “Sam”.

function setField (keys, value, obj) {
  if (!obj) obj = {};

  let current = obj;

  for (let key = 0; key < keys.length - 1; key++) {
    current[keys[key]] = {}
    current = current[keys[key]];
  }

  current[keys[keys.length - 1]] = value;

  return obj;
}


console.log(setField(['a', 'b', 'c'], 'd', {}));