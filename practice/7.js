// 7) Напишите упрощенную версию для нативного типа данных Set, MySet.
// Ваша реализация должна предоставлять методы add, has, delete, clear и свойство size.
// При создании MySet принимает только массив, если передать другое значение, то необходимо выдавать ошибку,
// что переданное значение не поддерживается. Способы реализации методов произвольные. Пример работы MySet

// const mySet = new MySet([ 0, 1, 2, 3]);

// console.log(mySet); // { 0, 1, 2, 3, size: 4 }
// console.log(mySet.size); // 4
// console.log(mySet.has(6)); // false

// mySet.add(4);
// console.log(mySet); // { 0, 1, 2, 3, 4, size: 5 }

// mySet.delete(2);
// console.log(mySet); // { 0, 1, 2: 3, 3: 4, size: 4 }

// mySet.clear();
// console.log(mySet); // { size: 0 }

class MySet {
  #set = [];
  constructor(arr) {
    if (Array.isArray(arr)) {
      this.#set = arr.filter(
        (value, index, array) => array.indexOf(value) === index
      );
      this.size = this.#set.length;
    } else throw new TypeError("Constructor must accept an array!");
  }
  add(el) {
    if (!this.#set.includes(el)) {
      this.#set.push(el);
      this.size++;
    }
  }
  delete(el) {
    if (this.#set.includes(el)) {
      this.#set.splice(this.#set.indexOf(el), 1);
      this.size--;
    }
  }
  toString() {
    return `{${[...this.#set].join(", ")} size: ${this.size}}`;
  }
  clear() {
    this.#set = [];
    this.size = 0;
  }
}
const set = new MySet([1, 2, 3, 2]);

console.log(set.toString());
console.log(`${set}`);

set.add(5);
console.log(`${set}`);

set.add(1);
console.log(`${set}`);

set.delete(2);
console.log(`${set}`);

set.clear();
console.log(`${set}`);

// const wrongSet = new MySet(1231);


function MySet2(arr) {
  let set = [];

  if (Array.isArray(arr)) {
    set = arr.filter((value, index, array) => array.indexOf(value) === index);
    this.size = set.length;
  } else {
    throw new TypeError("Constructor must accept an array!");
  }

  this.add = function(el) {
    if (!set.includes(el)) {
      set.push(el);
      this.size++;
    }
  };

  this.delete = function(el) {
    const index = set.indexOf(el);
    if (index !== -1) {
      set.splice(index, 1);
      this.size--;
    }
  };

  this.toString = function() {
    return `{${set.join(", ")} size: ${this.size}}`;
  };

  this.clear = function() {
    set = [];
    this.size = 0;
  };
}

const mySet = new MySet2([0, 1, 2, 3, 4]);
console.log(`${mySet}`); 

mySet.add(5);
console.log(mySet.toString()); 

mySet.delete(2);
console.log(mySet.toString()); 

mySet.clear();
console.log(mySet.toString()); 




