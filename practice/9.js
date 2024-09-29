// 9) Написать функцию asyncTimeout. Функция должна принимать значения timeout, по завершении которого возвращает зарезолвленный промис. Пример работы:

// setTimeout(() => console.log(3), 2000);

// console.log(1);

// asyncTimeout(1000).then(() => console.log(2));

function asyncTimeout(timeout = 0) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}


setTimeout(() => console.log(2), 1111);

asyncTimeout(2222).then(() => console.log(3));

console.log(1);
