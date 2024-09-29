// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

function multiplyNumeric(obj) {
  let maxSalary = 0;
  let maxName = null;
  for (const [name, salary] of Object.entries(obj)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      maxName = name;
    }
  }
  return maxName;
}

const topSalary = (salaries) => Object.entries(salaries).reduce((maxName, [name, salary]) => salary > maxName[1] ? [name, salary] : maxName, [null, 0])[0]

const salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary(salaries));