// 8) Напишите две функции для преобразования приведенного массива в указанный объект и для преобразования полученного объекта в исходный массив.
// Интерфейс объекта в массиве следующий: { name: string, value: number }.

// [
//   { name: "width", value: 100 },
//   { name: "height", value: 50 },
// ]

// { width: 100, height: 50 }

function toArray(obj) {
  const arr = [];
  for (const key in obj) {
    arr.push({
      name: key,
      value: obj[key]
    });
  }
  return arr;
}

function toObject(arr) {
  const obj = {};
  for (const item of arr) {
    
    if (!item.hasOwnProperty("value") || !item.hasOwnProperty("name")) continue;
    obj[item.name] = item.value;
  }
  return obj;
}

const arr = [
  { name: "width", value: 100 },
  { name: "height", value: 50 },
];

const obj = { prikol: "danil", num: 999 };

console.log(toArray(obj));
console.log(toObject(arr));




