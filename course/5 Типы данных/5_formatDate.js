// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

function formatDate(date) {
  const oneSecond = 1000;
  const oneMinute = oneSecond * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;

  const diff = new Date() - date;
  if (diff < oneSecond) {
    return "прямо сейчас";
  }
  if (diff < oneMinute) {
    return `${Math.round(diff / oneSecond)} сек. назад`;
  }
  if (diff < oneHour) {
    return `${Math.floor(diff / oneMinute)} мин. назад`;
  }
  if (diff < oneDay) {
    return `${Math.floor(diff / oneHour)} ч. назад`;
  }
  return date.getDate().toString().padStart(2, '0') + '.' 
    + (date.getMonth() + 1).toString().padStart(2, '0') + '.' 
    + date.getFullYear().toString().substr(2, 4) + ' ' 
    + date.getHours().toString().padStart(2, '0') + ':' 
    + date.getMinutes().toString().padStart(2, '0');
}
