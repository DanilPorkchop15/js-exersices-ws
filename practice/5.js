// 5) Реализуйте функцию pipe. Она должна принимать неопределенное количество функций-обработчиков и возвращать функцию, 
// которая будет прогонять принимаемый параметр через все обработчики, а на выходе вернет результат работы. 
// Функции-обработчики должны вызываться справа налево.

// const fillUser = pipe (
//   (user) => ({ ...user, lastName: "Pass" }),
//   (user) => ({ ...user, age: 29 }),
//   (user) => ({ ...user, city: "Boston" }),
// );

function pipe () {
  const funcs = [...arguments];
  return function (payload) {
    return funcs.reduce((acc, func) => acc = func(acc), payload ? payload : {})
  }
}

const fillUser = pipe (
  (user) => ({ ...user, lastName: "Pass" }),
  (user) => ({ ...user, age: 29 }),
  (user) => ({ ...user, city: "Boston" }),
);

console.log(fillUser({a : 123}))
console.log(fillUser())