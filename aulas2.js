//aplicando conceitos Rest, spread operator e destructuring
function sum(a, b){
    var value = 0;
    for (var i=0; i < arguments.length; i++){
        value += arguments[i];
    }
    return value;
}
//console.log(sum(5, 5, 5, 2, 3));

//rest operator ...
function sum(...args){
    return args.reduce((acc,value) ==> acc + value = 0);
}
console.log(sum(5, 5, 5, 2, 3));
// const multipy = (...args) => args.reduce((acc, value) => acc * value, 1);

// strings, arrays, literal objects e objetos ileraveis
const str = 'Digital innovation one';
//const arr = [1, 2, 3, 4];
function logArgs(...args) {
    console.log(args); // console.log(arguments);
}

logArgs(...str);

//outro exemplo
const srt = 'Digital innovation one';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}
const arrClone = [...arr];
const obj = {
    test:123
};
const obj2 = {
    ...obj,t
    test2: 'Hello'
};
console.log(obj2);

//PARTE 2 DA AULA (como usar destrucring em ReactJS)

var arr = ['Apple', 'Banana', 'Orange'];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

//Destructuring Assignment

var [apple2, banana2, orange2, [tomat2]] = ['Apple', 'Banana', 'Orange', [tomato2]];

console.log(apple, apple2);