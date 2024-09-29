// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbers(from, to) {
  for (let i = from; i <= to; i += 1) {
    setTimeout(() => {
      console.log(i);
    }, (1000 * (i - from)));
  }
}

function printNumbersInterval(from, to) {
  let i = from;
  let timerId = setInterval(() => {
    console.log(i);
    if (i === to) {
      clearInterval(timerId);
    }
    i += 1;
  }, 1000);
}