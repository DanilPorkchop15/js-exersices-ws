// Результат декоратора debounce(f, ms) – это обёртка, которая откладывает вызовы f, пока не пройдёт ms миллисекунд 
// бездействия (без вызовов, «cooldown period»), а затем вызывает f один раз с последними аргументами.
// Другими словами, debounce – это так называемый секретарь, который принимает «телефонные звонки», и ждёт, 
// пока не пройдет ms миллисекунд тишины. И только после этого передает «начальнику» информацию о последнем звонке (вызывает непосредственно f).
// Например, у нас была функция f и мы заменили её на f = debounce(f, 1000).
// Затем, если обёрнутая функция вызывается в 0, 200 и 500 мс, а потом вызовов нет, то фактическая f будет
//  вызвана только один раз, в 1500 мс. То есть: по истечению 1000 мс от последнего вызова.
// реализуйте декоратор debounce

function debounce (func, ms) {
  let timer
  function wrapper () {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, arguments), ms);
  }
  return wrapper
}