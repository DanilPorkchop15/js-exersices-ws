// Получите данные о пользователях GitHub
// Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.

// Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.

// В песочнице есть тестовый пример.

// Важные детали:

// На каждого пользователя должен приходиться один запрос fetch.
// Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
// Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет, то функция должна возвращать null в массиве результатов.

async function getUsers(names) {
  const baseURL = "https://api.github.com/users/";
  const result = [];
  try {
    for (const name in names) {
      const response = fetch(baseURL + name);
      result.push(await response.json());
    }
  } catch {
    result.push(null);
  }
  return result;
}

let users = await getUsers(["iliakan", "remy", "no.such.users"]);

async function getUsers2(names) {
  const baseURL = "https://api.github.com/users/";
  const promises = names.map((name) => fetch(baseURL + name));
  const responses = await Promise.all(promises);
  return responses.map((res) => (res.ok ? res.json() : null));
}

let users2 = await getUsers2(["iliakan", "remy", "no.such.users"]);
