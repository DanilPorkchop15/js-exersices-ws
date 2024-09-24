// Напишите функцию checkSpam(str), возвращающую true, 
// если str содержит 'viagra' или 'XXX', а иначе false.

const spamList = ["viagra", "XXX"];

const checkSpam = (str) => spamList.some((el) => str.toLowerCase().includes(el));
