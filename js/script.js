let a, b, c; //объявление переменных

function setParametrs() {
alert("Задача на решение квадратного уравнения!");
a = prompt("Введите коэфициент a:", "-4");
a = checkParametr(a);

if (a) {
b = prompt("Введите коэфициент b:", "3");
b = checkParametr(b);

if (b) {
c = prompt("Введите коэфициент c:", "-2");
c = checkParametr(c);

if (!c) {
printErrorMessage();
}
} else {
printErrorMessage();
}
} else {
printErrorMessage();
}
}

function checkParametr(param) {
if (isNaN(+param) || typeof param == "object") {
return false;
}
return +param;
}

function printErrorMessage() {
alert("Вы отменили или ввели не число!");
}

setParametrs();
if (typeof a == "number" && typeof b == "number" && typeof c == "number") {
calcSolution(a, b, c);
} else {
alert("Решение не возможно!");
}

function calcSolution(a, b, c) {
console.log(a);
console.log(b);
console.log(c);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
}
// function printResult() {}
