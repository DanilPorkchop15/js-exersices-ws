// Создайте декоратор spy(func), который должен возвращать обёртку, 
// которая сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.call(this, ...args);
  }
  wrapper.calls = [];
  return wrapper;
}