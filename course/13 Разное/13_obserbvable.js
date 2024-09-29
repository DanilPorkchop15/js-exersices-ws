// Создайте функцию makeObservable(target), которая делает объект «наблюдаемым», возвращая прокси.
// Другими словами, возвращаемый makeObservable объект аналогичен исходному, 
// но также имеет метод observe(handler), который позволяет запускать handler при любом изменении свойств.
// При изменении любого свойства вызывается handler(key, value) с именем и значением свойства.
// P.S. В этой задаче ограничьтесь, пожалуйста, только записью свойства. 
// Остальные операции могут быть реализованы похожим образом.

function makeObservable (target) {
  target.handlers = [];
  target.observe = function (handler) {
    this['handlers'].push(handler);
  };
  return new Proxy(target, {
    set (target, key, value) {
      Reflect.set(target, key, value);
      target.handlers.forEach(handler => handler(key, value));
      return true;
    }
  });
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  console.log(`set ${key} to ${value}`);
});
user.name = 'John'
console.log(user.name);