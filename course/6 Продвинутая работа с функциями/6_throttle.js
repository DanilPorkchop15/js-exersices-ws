// Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку.
// При многократном вызове он передает вызов f не чаще одного раза в ms миллисекунд.
// По сравнению с декоратором debounce поведение совершенно другое:
// debounce запускает функцию один раз после периода «бездействия». Подходит для обработки конечного результата.
// throttle запускает функцию не чаще, чем указанное время ms. Подходит для регулярных обновлений, 
// которые не должны быть слишком частыми.
// Другими словами, throttle похож на секретаря, который принимает телефонные звонки,
// но при этом беспокоит начальника (вызывает непосредственно f) не чаще, чем один раз в ms миллисекунд.
// Давайте рассмотрим реальное применение, чтобы лучше понять это требование и выяснить, откуда оно взято.


function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;
  return function () {
    if (!isThrottled) {
      func.apply(this, arguments);
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
        if (savedArgs) {
          func.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    } else {
      savedArgs = arguments;
      savedThis = this;
    }
  };
}
