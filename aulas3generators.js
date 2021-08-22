//Symbols e iterators

const uniqueId = Symbol('Hello');

//Well known symbols

Symbol.iterator // são funçoes com pausas e retornan valores atras de values e done
Symbol.split
Symbol.toStringTag

const arr = [1, 2, 3, 4];
const str = 'Digital innovation one';
const it = arr[Symbol.iterator]();

for (let value of arr){
    console.log(value);
}

//Generators

function* hello() {
    console.log('Hello');
    yield;
    console.log('From');
    yield; //const value = yield 2;
    console.log('Function!');
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next('outside!'));

//////

function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}