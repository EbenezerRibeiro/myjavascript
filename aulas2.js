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

function logArgs