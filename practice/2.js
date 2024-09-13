// 2) Напишите функцию для поверхностного сравнения двух объектов. Поверхностное сравнение объектов - 
// это процесс сравнения ключей объекта и их значений, без учета уровня вложенности. 
// То есть значение с типом object, никогда не будет равен точно такому же значению с типом object, т.к. ссылки на эти значения будут отличаться.
// Пример работы функции сравнения:

// shallowEquals({ a: 1, b: "2" }, { a: 1, b: "2" }); // true
// shallowEquals({ a: 0 }, { a: undefined }); // false
// shallowEquals({ a: {} }, { a: {} }); // false
// shallowEquals({ a: [] }, { a: [] }); // false
// shallowEquals({ a: () => {} }, { a: () => {} }); // false

function shallowEquals(obj1, obj2) {
  if (obj2.length > obj1.length) return false;
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

console.log(shallowEquals({ a: 1, b: "2"}, { a: 1, b: "2" })); 
console.log(shallowEquals({ a: 0 }, { a: undefined }));
console.log(shallowEquals({ a: {} }, { a: {} }));
console.log(shallowEquals({ a: [] }, { a: [] }));
console.log(shallowEquals({ a: () => {} }, { a: () => {} }));
